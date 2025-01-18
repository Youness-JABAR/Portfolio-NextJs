import type { ContactMessage } from "@/components/home/Contact/ContactForm";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendSendGridMessage(body: ContactMessage) {
  const { email, name, message, subject } = body;

  // Construct the email message
  const msg: MailDataRequired = {
    to: "youness.jabar.pro@gmail.com", // Replace with your email address
    from: {
      email: "youness.jabar.pro@gmail.com", // Replace with your verified sender email
      name: name || "No Name Provided", // Fallback for name
    },
    subject: subject || "No Subject Provided", // Fallback for subject
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name || "N/A"}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided."}</p>
      </div>
    `,
  };

  try {
    console.log("Sending email:", msg); // Log the email details
    await sgMail.send(msg);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Failed to send email:", error);

    // Extract error details for debugging
    if (error) {
      console.error("SendGrid Response Error:", error);
    }

    throw new Error("Failed to send email. Please try again later.");
  }
}
