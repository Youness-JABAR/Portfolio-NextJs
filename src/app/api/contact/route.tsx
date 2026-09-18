import { NextResponse } from "next/server";
import type { ContactMessage } from "@/components/home/Contact/ContactForm";
import { sendContactEmail } from "@/services/email";
import { isCaptchaEnabled, validateCaptcha } from "@/services/recaptcha";

type ContactRequest = ContactMessage & {
  captchaToken?: string;
};

function validateBody(body: ContactMessage) {
  if (!body.name?.trim()) {
    return "Name is required.";
  }
  if (!body.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return "A valid email is required.";
  }
  if (!body.subject?.trim()) {
    return "Subject is required.";
  }
  if (!body.message?.trim() || body.message.trim().length < 10) {
    return "Message must be at least 10 characters.";
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;
    const { captchaToken, ...contact } = body;

    const validationError = validateBody(contact);
    if (validationError) {
      return NextResponse.json(
        { success: false, message: validationError },
        { status: 400 }
      );
    }

    if (isCaptchaEnabled()) {
      if (!captchaToken) {
        return NextResponse.json(
          { success: false, message: "Captcha verification is required." },
          { status: 400 }
        );
      }
      await validateCaptcha(captchaToken);
    }

    await sendContactEmail(contact);

    return NextResponse.json(
      { success: true, message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact form error:", err);

    const message =
      err instanceof Error && err.message === "Verifying captcha failed"
        ? "Captcha verification failed. Please try again."
        : "Failed to send your message. Please try again later.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
