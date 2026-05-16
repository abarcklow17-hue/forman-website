import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 30;

// ── Discord Webhook ──────────────────────────────────────────────────
async function sendDiscordNotification(data: {
  name: string;
  phone: string;
  location: string;
  project: string;
  photoCount: number;
}) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return;

  const embed = {
    title: '🚛 New Quote Request',
    color: 0xb71212, // brand red
    fields: [
      { name: '👤 Name', value: data.name, inline: true },
      { name: '📞 Phone', value: data.phone, inline: true },
      { name: '📍 Location', value: data.location, inline: true },
      { name: '📋 Project Details', value: data.project.slice(0, 1024) },
      { name: '📸 Photos', value: `${data.photoCount} attached to email`, inline: true },
    ],
    timestamp: new Date().toISOString(),
    footer: { text: 'Forman Haulage • Quote Form' },
  };

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'Forman Haulage',
      embeds: [embed],
    }),
  });
}

// ── Email via Nodemailer ─────────────────────────────────────────────
async function sendEmail(data: {
  name: string;
  phone: string;
  location: string;
  project: string;
  photos: string[];
}) {
  const user = process.env.EMAIL_USER || 'formanandco@gmail.com';
  const pass = process.env.EMAIL_APP_PASSWORD;
  if (!pass) return;

  const nodemailer = (await import('nodemailer')).default;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #b71212; border-bottom: 2px solid #b71212; padding-bottom: 10px;">🚛 New Quote Request</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; font-weight: bold; color: #333;">Name:</td><td style="padding: 8px;">${data.name}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #333;">Phone:</td><td style="padding: 8px;">${data.phone}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #333;">Location:</td><td style="padding: 8px;">${data.location}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #333;">Photos:</td><td style="padding: 8px;">${data.photos.length} attached</td></tr>
      </table>
      <h3 style="color: #333; margin-top: 20px;">Project Details:</h3>
      <p style="background: #f5f5f5; padding: 15px; border-left: 4px solid #b71212;">${data.project.replace(/\n/g, '<br/>')}</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
      <p style="color: #999; font-size: 12px;">Sent from formanandco.com quote form</p>
    </div>
  `;

  const attachments = data.photos
    .map((photo: string, index: number) => {
      const matches = photo.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (!matches || matches.length !== 3) return null;
      const mimeType = matches[1];
      const base64Data = matches[2];
      const ext = mimeType.includes('png') ? 'png' : mimeType.includes('gif') ? 'gif' : 'jpg';
      return {
        filename: `photo-${index + 1}.${ext}`,
        content: Buffer.from(base64Data, 'base64'),
        contentType: mimeType,
      };
    })
    .filter(Boolean);

  await transporter.sendMail({
    from: user,
    to: 'formanandco@gmail.com',
    subject: `🚛 New Lead: ${data.name} in ${data.location}`,
    html: htmlContent,
    attachments,
  });
}

// ── API Handler ──────────────────────────────────────────────────────
export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, phone, location, project, photos = [] } = formData;

    // Fire both in parallel — if one fails the other still goes through
    const results = await Promise.allSettled([
      sendEmail({ name, phone, location, project, photos }),
      sendDiscordNotification({ name, phone, location, project, photoCount: photos.length }),
    ]);

    // Log any individual failures but don't fail the whole request
    results.forEach((result, i) => {
      if (result.status === 'rejected') {
        console.error(`Notification channel ${i} failed:`, result.reason);
      }
    });

    // Only fail if BOTH channels failed AND at least one was configured
    const hasEmail = !!process.env.EMAIL_APP_PASSWORD;
    const hasDiscord = !!process.env.DISCORD_WEBHOOK_URL;
    const allFailed = results.every(r => r.status === 'rejected');

    if (allFailed && (hasEmail || hasDiscord)) {
      throw new Error('All notification channels failed');
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error processing quote request:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to send quote request' },
      { status: 500 }
    );
  }
}
