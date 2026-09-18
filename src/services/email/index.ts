import type { ContactMessage } from "@/components/home/Contact/ContactForm";
import { sendBrevoEmail } from "./brevo";
import { sendSendGridEmail } from "./sendgrid";

export async function sendContactEmail(body: ContactMessage) {
  const provider = process.env.EMAIL_PROVIDER?.toLowerCase() || "sendgrid";

  if (provider === "brevo") {
    return sendBrevoEmail(body);
  }

  if (provider === "sendgrid") {
    return sendSendGridEmail(body);
  }

  throw new Error(`Unsupported email provider: ${provider}`);
}
