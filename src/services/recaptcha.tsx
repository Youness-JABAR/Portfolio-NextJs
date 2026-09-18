import axios from "axios";

export async function validateCaptcha(token: string) {
  const secretKey = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    throw new Error("reCAPTCHA is not configured.");
  }

  const { data } = await axios.post<{ success: boolean }>(
    "https://www.google.com/recaptcha/api/siteverify",
    null,
    {
      params: {
        secret: secretKey,
        response: token,
      },
    }
  );

  if (!data.success) {
    throw new Error("Verifying captcha failed");
  }
}

export function isCaptchaEnabled() {
  return Boolean(process.env.GOOGLE_RECAPTCHA_SECRET_KEY);
}
