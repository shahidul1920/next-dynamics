import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, scope, budget, message, company, timeline, projectType, brief } = body;

    // Required fields check
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined in environment variables.");
      return NextResponse.json(
        { error: "Email transmission service is temporarily unconfigured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "shahidulshakil@proton.me";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Next Dynamics <onboarding@resend.dev>";

    const effectiveScope = scope || projectType || "Creative Web Experience & Engineering";
    const effectiveBudget = budget || "To be scoped during discovery";
    const effectiveMessage = message || brief || "No additional notes provided.";

    const subject = `[Next Dynamics Inquiry] ${effectiveScope} - ${name}`;

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${subject}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #050508;
      color: #f0f0f5;
      margin: 0;
      padding: 32px 16px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #0c0d14;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,0.6);
    }
    .header {
      padding: 32px 32px 24px;
      background: linear-gradient(180deg, #121422 0%, #0c0d14 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      font-size: 11px;
      font-family: ui-monospace, Menlo, Monaco, Consolas, monospace;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #00f0ff;
      background: rgba(0, 240, 255, 0.1);
      border: 1px solid rgba(0, 240, 255, 0.25);
      border-radius: 9999px;
      margin-bottom: 14px;
    }
    .title {
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: #ffffff;
      margin: 0 0 6px;
    }
    .subtitle {
      font-size: 13px;
      color: #8e90a6;
      margin: 0;
      line-height: 1.5;
    }
    .body {
      padding: 32px;
    }
    .field-grid {
      display: table;
      width: 100%;
      margin-bottom: 24px;
      border-collapse: separate;
      border-spacing: 0 10px;
    }
    .field-row {
      display: table-row;
    }
    .field-label {
      display: table-cell;
      font-size: 11px;
      font-family: ui-monospace, Menlo, Monaco, Consolas, monospace;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #6b6d82;
      width: 140px;
      vertical-align: top;
      padding: 6px 0;
    }
    .field-value {
      display: table-cell;
      font-size: 14px;
      color: #ffffff;
      font-weight: 500;
      vertical-align: top;
      padding: 6px 0;
    }
    .message-box {
      margin-top: 20px;
      padding: 20px;
      background: #07070b;
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-left: 3px solid #00f0ff;
      border-radius: 8px;
    }
    .message-title {
      font-size: 11px;
      font-family: ui-monospace, Menlo, Monaco, Consolas, monospace;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #8e90a6;
      margin-bottom: 8px;
    }
    .message-text {
      font-size: 14px;
      line-height: 1.6;
      color: #d8d9e6;
      white-space: pre-wrap;
      margin: 0;
    }
    .action-wrap {
      margin-top: 32px;
      text-align: center;
    }
    .btn {
      display: inline-block;
      padding: 14px 28px;
      background-color: #ffffff;
      color: #050508 !important;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      border-radius: 10px;
      letter-spacing: 0.02em;
    }
    .footer {
      padding: 20px 32px;
      background-color: #07070a;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      text-align: center;
      font-size: 11px;
      color: #55576a;
      font-family: ui-monospace, Menlo, Monaco, Consolas, monospace;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">Next Dynamics &bull; Transmission</div>
      <h1 class="title">New Architecture Inquiry</h1>
      <p class="subtitle">Direct intake from Next Dynamics portfolio inquiry portal</p>
    </div>

    <div class="body">
      <table class="field-grid">
        <tr class="field-row">
          <td class="field-label">Sender</td>
          <td class="field-value">${name}</td>
        </tr>
        <tr class="field-row">
          <td class="field-label">Email</td>
          <td class="field-value"><a href="mailto:${email}" style="color: #00f0ff; text-decoration: none;">${email}</a></td>
        </tr>
        ${company ? `
        <tr class="field-row">
          <td class="field-label">Organization</td>
          <td class="field-value">${company}</td>
        </tr>` : ""}
        <tr class="field-row">
          <td class="field-label">Platform Scope</td>
          <td class="field-value">${effectiveScope}</td>
        </tr>
        <tr class="field-row">
          <td class="field-label">Target Budget</td>
          <td class="field-value">${effectiveBudget}</td>
        </tr>
        ${timeline ? `
        <tr class="field-row">
          <td class="field-label">Target Timeline</td>
          <td class="field-value">${timeline}</td>
        </tr>` : ""}
      </table>

      <div class="message-box">
        <div class="message-title">Project Vision & Requirements</div>
        <p class="message-text">${effectiveMessage}</p>
      </div>

      <div class="action-wrap">
        <a class="btn" href="mailto:${email}?subject=Re:%20Next%20Dynamics%20Architectural%20Discovery">Reply directly to ${name}</a>
      </div>
    </div>

    <div class="footer">
      NEXT DYNAMICS STUDIO &bull; TRANSMITTED ${new Date().toUTCString()}
    </div>
  </div>
</body>
</html>
    `;

    const textContent = `
NEXT DYNAMICS - NEW ARCHITECTURE INQUIRY
=========================================

Sender: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ""}Platform Scope: ${effectiveScope}
Budget: ${effectiveBudget}
${timeline ? `Timeline: ${timeline}\n` : ""}

PROJECT VISION & REQUIREMENTS:
${effectiveMessage}

-----------------------------------------
Transmitted: ${new Date().toISOString()}
    `.trim();

    const fallbackEmail = process.env.RESEND_FALLBACK_EMAIL || "shahidul1920shakil@gmail.com";

    let sendResult = await resend.emails.send({
      from: fromEmail,
      to: [receiverEmail],
      reply_to: email,
      subject: subject,
      html: htmlContent,
      text: textContent,
    });

    // If Resend onboarding domain restricts recipient to account owner (403), fallback to account email
    if (sendResult.error && (sendResult.error.statusCode === 403 || sendResult.error.message?.includes("testing emails"))) {
      console.warn(`Resend restricted delivery to ${receiverEmail} due to unverified domain. Falling back to account email: ${fallbackEmail}`);
      
      const fallbackNoticeHtml = `
        <div style="background: #2a1b05; border: 1px solid #d97706; padding: 12px 16px; border-radius: 8px; margin-bottom: 20px; font-size: 12px; color: #fde68a;">
          <strong>Notice:</strong> This inquiry was routed to your verified Resend account email (<strong>${fallbackEmail}</strong>) because <strong>${receiverEmail}</strong> requires a verified custom domain on Resend. To receive directly at <strong>${receiverEmail}</strong>, verify your domain at <a href="https://resend.com/domains" style="color: #67e8f9;">resend.com/domains</a>.
        </div>
      `;

      sendResult = await resend.emails.send({
        from: fromEmail,
        to: [fallbackEmail],
        reply_to: email,
        subject: `[FORWARDED to ${receiverEmail}] ${subject}`,
        html: htmlContent.replace('<div class="body">', `<div class="body">${fallbackNoticeHtml}`),
        text: `[NOTE: Routed to fallback ${fallbackEmail} pending domain verification for ${receiverEmail}]\n\n` + textContent,
      });
    }

    if (sendResult.error) {
      console.error("Resend API error:", sendResult.error);
      return NextResponse.json(
        { error: sendResult.error.message || "Failed to send email through Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: sendResult.data?.id,
      message: "Brief transmitted successfully.",
    });
  } catch (err) {
    console.error("Contact API route unexpected error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error occurred." },
      { status: 500 }
    );
  }
}
