import { NextResponse } from 'next/server';
import * as tls from 'tls';

function buildMimeEmail(options: {
  from: string;
  to: string;
  subject: string;
  html: string;
  photos: string[];
}): string {
  const { from, to, subject, html, photos } = options;
  const boundary = '----FormBoundary' + Date.now() + Math.random().toString(36).slice(2);

  const headers = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
  ];

  if (photos.length === 0) {
    headers.push(`Content-Type: text/html; charset=utf-8`);
    return [...headers, '', html].join('\r\n');
  }

  // Multipart mixed for attachments
  headers.push(`Content-Type: multipart/mixed; boundary="${boundary}"`);

  const parts: string[] = [];

  // HTML body part
  parts.push(`--${boundary}`);
  parts.push(`Content-Type: text/html; charset=utf-8`);
  parts.push(`Content-Transfer-Encoding: 7bit`);
  parts.push('');
  parts.push(html);

  // Photo attachments
  photos.forEach((photo, index) => {
    const matches = photo.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) return;

    const mimeType = matches[1];
    const base64Data = matches[2];
    const ext = mimeType.includes('png') ? 'png' : mimeType.includes('gif') ? 'gif' : 'jpg';

    parts.push(`--${boundary}`);
    parts.push(`Content-Type: ${mimeType}; name="photo-${index + 1}.${ext}"`);
    parts.push(`Content-Disposition: attachment; filename="photo-${index + 1}.${ext}"`);
    parts.push(`Content-Transfer-Encoding: base64`);
    parts.push('');
    // Split base64 into 76-char lines per MIME spec
    const lines = base64Data.match(/.{1,76}/g) || [];
    parts.push(lines.join('\r\n'));
  });

  parts.push(`--${boundary}--`);

  return [...headers, '', ...parts].join('\r\n');
}

function sendSmtpEmail(options: {
  user: string;
  pass: string;
  to: string;
  subject: string;
  html: string;
  photos: string[];
}): Promise<void> {
  return new Promise((resolve, reject) => {
    const { user, pass, to, subject, html, photos } = options;
    const timeout = 30000;

    const body = buildMimeEmail({ from: user, to, subject, html, photos });
    const authString = Buffer.from(`\x00${user}\x00${pass}`).toString('base64');

    const socket = tls.connect(465, 'smtp.gmail.com', { rejectUnauthorized: false }, () => {
      let step = 0;

      socket.on('data', (data: Buffer) => {
        const response = data.toString();

        if (step === 0 && response.startsWith('220')) {
          socket.write(`EHLO localhost\r\n`);
          step = 1;
        } else if (step === 1 && response.includes('250')) {
          socket.write(`AUTH PLAIN ${authString}\r\n`);
          step = 2;
        } else if (step === 2 && response.startsWith('235')) {
          socket.write(`MAIL FROM:<${user}>\r\n`);
          step = 3;
        } else if (step === 3 && response.startsWith('250')) {
          socket.write(`RCPT TO:<${to}>\r\n`);
          step = 4;
        } else if (step === 4 && response.startsWith('250')) {
          socket.write(`DATA\r\n`);
          step = 5;
        } else if (step === 5 && response.startsWith('354')) {
          socket.write(`${body}\r\n.\r\n`);
          step = 6;
        } else if (step === 6 && response.startsWith('250')) {
          socket.write(`QUIT\r\n`);
          step = 7;
          resolve();
        } else if (response.startsWith('5') || response.startsWith('4')) {
          reject(new Error(`SMTP error: ${response.trim()}`));
          socket.destroy();
        }
      });
    });

    socket.setTimeout(timeout, () => {
      reject(new Error('SMTP connection timed out'));
      socket.destroy();
    });

    socket.on('error', (err: Error) => {
      reject(err);
    });
  });
}

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, phone, location, project, photos = [] } = formData;

    const user = process.env.EMAIL_USER || 'formanandco@gmail.com';
    const pass = process.env.EMAIL_APP_PASSWORD;

    if (!pass) {
      console.warn("EMAIL_APP_PASSWORD is not set. Simulating email.");
      return NextResponse.json({ success: true });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #b71212; border-bottom: 2px solid #b71212; padding-bottom: 10px;">🚛 New Quote Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold; color: #333;">Name:</td><td style="padding: 8px;">${name}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #333;">Phone:</td><td style="padding: 8px;">${phone}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #333;">Location:</td><td style="padding: 8px;">${location}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #333;">Photos:</td><td style="padding: 8px;">${photos.length} attached</td></tr>
        </table>
        <h3 style="color: #333; margin-top: 20px;">Project Details:</h3>
        <p style="background: #f5f5f5; padding: 15px; border-left: 4px solid #b71212;">${project.replace(/\n/g, '<br/>')}</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <p style="color: #999; font-size: 12px;">Sent from formanandco.com quote form</p>
      </div>
    `;

    await sendSmtpEmail({
      user,
      pass,
      to: 'formanandco@gmail.com',
      subject: `🚛 New Lead: ${name} in ${location}`,
      html: htmlContent,
      photos,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to send quote request' },
      { status: 500 }
    );
  }
}
