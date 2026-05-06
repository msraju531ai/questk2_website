import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  jobTitle?: string;
  source: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormData;

    const { name, email, phone, company, jobTitle, source, message } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !source || !message?.trim()) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "info@questk2.com";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const emailHtml = `
      <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <div style="background: #0b1f3a; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 22px;">Quest<span style="color: #60a5fa;">K2</span> — New Contact Form Submission</h1>
        </div>
        <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: 600; color: #1e293b; width: 140px;">Name</td><td style="padding: 8px 0; color: #334155;">${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">Email</td><td style="padding: 8px 0; color: #334155;"><a href="mailto:${email}" style="color: #1d4ed8;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">Phone</td><td style="padding: 8px 0; color: #334155;">${phone}</td></tr>
            ${company ? `<tr><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">Company</td><td style="padding: 8px 0; color: #334155;">${company}</td></tr>` : ""}
            ${jobTitle ? `<tr><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">Job Title</td><td style="padding: 8px 0; color: #334155;">${jobTitle}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">Source</td><td style="padding: 8px 0; color: #334155;">${source}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="font-weight: 600; color: #1e293b; margin: 0 0 8px;">Message</p>
            <p style="color: #334155; margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "QuestK2 Contact Form <noreply@questk2.com>",
      to: [toEmail],
      replyTo: email,
      subject: `New Contact: ${name} — ${company || "Individual"}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
