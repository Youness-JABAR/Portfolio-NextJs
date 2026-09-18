import type { ContactMessage } from "@/components/home/Contact/ContactForm";
import { buildContactEmailContent } from "./templates";

export async function sendBrevoEmail(body: ContactMessage) {
  const apiKey = process.env.BREVO_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    throw new Error("Brevo configuration is incomplete.");
  }

  const content = buildContactEmailContent(body);

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Portfolio Contact", email: from },
      to: [{ email: to }],
      replyTo: { email: body.email, name: body.name },
      subject: content.subject,
      textContent: content.text,
      htmlContent: content.html,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Brevo API error:", errorBody);
    throw new Error("Failed to send email via Brevo.");
  }
}
