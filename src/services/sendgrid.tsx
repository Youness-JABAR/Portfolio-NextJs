import type { ContactMessage } from '@/components/home/Contact/ContactForm';
import sgMail, { MailDataRequired } from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
export async function sendSendGridMessage(body: ContactMessage) {
    

	const { email, name, message, subject } = body;
    console.log(email);
	const msg: MailDataRequired = {
		to: 'youness.jabar.pro@gmail.com',
		from: {
			email: 'youness.jabar.pro@gmail.com',
			name: name,
		},
		subject: subject,
		html: `<strong>From: ${email}</strong><p>${message}</p>`,
	};
    console.log(msg);

	await sgMail.send(msg);
}
