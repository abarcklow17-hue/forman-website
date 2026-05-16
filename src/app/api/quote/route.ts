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
  if (!webhookUrl) {
    console.log('[Discord] No DISCORD_WEBHOOK_URL set, skipping.');
    return { sent: false, reason: 'not configured' };
  }

  const embed = {
    title: '🚛 New Quote Request',
    color: 0xb71212,
    fields: [
      { name: '👤 Name', value: data.name || 'N/A', inline: true },
      { name: '📞 Phone', value: data.phone || 'N/A', inline: true },
      { name: '📍 Location', value: data.location || 'N/A', inline: true },
      { name: '📋 Project Details', value: (data.project || 'N/A').slice(0, 1024) },
      { name: '📸 Photos', value: `${data.photoCount} attached to email`, inline: true },
    ],
    timestamp: new Date().toISOString(),
    footer: { text: 'Forman Haulage • Quote Form' },
  };

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'Forman Haulage',
      embeds: [embed],
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Discord webhook failed (${res.status}): ${text}`);
  }

  console.log('[Discord] Notification sent successfully.');
  return { sent: true };
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

  if (!pass) {
    console.log('[Email] No EMAIL_APP_PASSWORD set, skipping.');
    return { sent: false, reason: 'not configured' };
  }

  // Dynamic import to avoid bundling issues
  let nodemailer;
  try {
    nodemailer = (await import('nodemailer')).default;
  } catch (importErr) {
    console.error('[Email] Failed to import nodemailer:', importErr);
    throw new Error('Failed to load email module');
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
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

  console.log('[Email] Sent successfully.');
  return { sent: true };
}

// ── API Handler ──────────────────────────────────────────────────────
export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, phone, location, project, photos = [] } = formData;

    console.log(`[Quote] Received from ${name} (${phone}) in ${location}. Photos: ${photos.length}`);

    // Fire both in parallel
    const [emailResult, discordResult] = await Promise.allSettled([
      sendEmail({ name, phone, location, project, photos }),
      sendDiscordNotification({ name, phone, location, project, photoCount: photos.length }),
    ]);

    const emailOk = emailResult.status === 'fulfilled';
    const discordOk = discordResult.status === 'fulfilled';

    if (!emailOk) console.error('[Quote] Email failed:', (emailResult as PromiseRejectedResult).reason);
    if (!discordOk) console.error('[Quote] Discord failed:', (discordResult as PromiseRejectedResult).reason);

    // Succeed if EITHER channel delivered, or if neither was configured
    const emailConfigured = !!process.env.EMAIL_APP_PASSWORD;
    const discordConfigured = !!process.env.DISCORD_WEBHOOK_URL;
    const anyDelivered = emailOk || discordOk;
    const noneConfigured = !emailConfigured && !discordConfigured;

    if (anyDelivered || noneConfigured) {
      return NextResponse.json({
        success: true,
        channels: {
          email: emailOk ? 'sent' : emailConfigured ? 'failed' : 'not configured',
          discord: discordOk ? 'sent' : discordConfigured ? 'failed' : 'not configured',
        },
      });
    }

    // Both configured channels failed
    const errors = [];
    if (!emailOk) errors.push(`Email: ${(emailResult as PromiseRejectedResult).reason?.message}`);
    if (!discordOk) errors.push(`Discord: ${(discordResult as PromiseRejectedResult).reason?.message}`);

    return NextResponse.json(
      { success: false, error: errors.join('; ') },
      { status: 500 }
    );
  } catch (error: any) {
    console.error('[Quote] Unexpected error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Unexpected server error' },
      { status: 500 }
    );
  }
}
