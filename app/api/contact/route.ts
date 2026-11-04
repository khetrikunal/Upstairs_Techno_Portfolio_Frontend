import { NextResponse } from "next/server";

const enquiryTypes = new Set([
  "Software Development", "IT Consulting", "AI & Automation", "Digital Marketing",
  "Internship & Career Opportunities", "Training & Education", "Business Partnership",
  "General Enquiry", "Other",
]);

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid enquiry form." }, { status: 400 });
  }

  // Quietly accept honeypot submissions without forwarding spam.
  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const fullName = clean(payload.fullName);
  const email = clean(payload.email);
  const phone = clean(payload.phone).replace(/[\s().-]/g, "");
  const company = clean(payload.company);
  const enquiryType = clean(payload.enquiryType);
  const subject = clean(payload.subject);
  const message = clean(payload.message);

  if (fullName.length < 2 || fullName.length > 120) return invalid("Enter your full name.");
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return invalid("Enter a valid email address.");
  if (!/^\+[1-9]\d{7,14}$/.test(phone)) return invalid("Include a valid country code with your phone number, for example +91 98765 43210.");
  if (company.length > 160) return invalid("Company name must be 160 characters or fewer.");
  if (!enquiryTypes.has(enquiryType)) return invalid("Choose an enquiry type from the list.");
  if (subject.length < 2 || subject.length > 180) return invalid("Enter a subject of 2 to 180 characters.");
  if (message.length < 10 || message.length > 5000) return invalid("Your message must be between 10 and 5,000 characters.");
  if (payload.privacyConsent !== true) return invalid("Please agree to the Privacy Policy before sending your enquiry.");

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json({ error: "Online message delivery is not configured yet. Please email contact@upstairstechno.com directly." }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: ["contact@upstairstechno.com"],
        reply_to: email,
        subject: `[Website enquiry] ${subject}`,
        text: [
          `Name: ${fullName}`, `Email: ${email}`, `Phone: ${phone}`,
          `Company: ${company || "Not provided"}`, `Enquiry type: ${enquiryType}`,
          `Subject: ${subject}`, "", message,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      console.error("Contact email provider rejected a message", response.status);
      return NextResponse.json({ error: "We couldn’t send your message right now. Please email contact@upstairstechno.com directly." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email provider request failed", error);
    return NextResponse.json({ error: "We couldn’t send your message right now. Please email contact@upstairstechno.com directly." }, { status: 502 });
  }
}

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function invalid(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}
