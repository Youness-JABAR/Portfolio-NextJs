import type { ContactMessage } from "@/components/home/Contact/ContactForm";
import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { buildContactEmailContent } from "./templates";

export async function sendSendGridEmail(body: ContactMessage) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    throw new Error("SendGrid configuration is incomplete.");
  }

  sgMail.setApiKey(apiKey);

  const content = buildContactEmailContent(body);

  const msg: MailDataRequired = {
    to,
    from: {
      email: from,
      name: "Portfolio Contact",
    },
    replyTo: {
      email: body.email,
      name: body.name,
    },
    subject: content.subject,
    text: content.text,
    html: content.html,
  };

  await sgMail.send(msg);
}
