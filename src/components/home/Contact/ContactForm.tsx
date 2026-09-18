"use client";

import { Button } from "@/components/common/Buttons/Button";
import { FormGroup } from "@/components/common/Form/FormGroup";
import { FormLabel } from "@/components/common/Form/FormLabel";
import { Input } from "@/components/common/Form/Input";
import { Textarea } from "@/components/common/Form/Textarea";
import { Form, Formik, FormikHelpers } from "formik";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useMemo, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ZodError, z } from "zod";
import { SuccessMessage } from "./SuccessMessage";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
export type ContactMessage = typeof initialValues;

const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;

const ContactForm = () => {
  const t = useTranslations("contact.form");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(1, t("validation.nameRequired")),
        email: z.string().email(t("validation.emailInvalid")),
        subject: z.string().min(1, t("validation.subjectRequired")),
        message: z.string().min(10, t("validation.messageMin")),
      }),
    [t]
  );

  const handleSubmit = async (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    try {
      setFormSubmitted(false);
      actions.setStatus(undefined);

      const captchaToken = siteKey ? recaptchaRef.current?.getValue() : undefined;

      if (siteKey && !captchaToken) {
        actions.setStatus(t("validation.captchaRequired"));
        return;
      }

      await axios.post("/api/contact", {
        ...values,
        captchaToken,
      });

      setFormSubmitted(true);
      actions.resetForm();
      recaptchaRef.current?.reset();
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        actions.setStatus(err.response.data.message as string);
        return;
      }
      actions.setStatus(t("error"));
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        try {
          schema.parse(values);
        } catch (errors) {
          return (errors as ZodError).formErrors.fieldErrors;
        }
      }}
      onSubmit={handleSubmit}
    >
      {({
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
        isSubmitting,
        status,
      }) => (
        <Form className="flex flex-wrap">
          {status && (
            <p className="w-full p-4 mb-6 text-white bg-red-500 rounded">
              {status}
            </p>
          )}
          <FormGroup className="w-full mb-4 sm:pr-2 sm:w-1/2">
            <FormLabel htmlFor="name">{t("name")}</FormLabel>
            <Input
              id="name"
              name="name"
              placeholder={t("namePlaceholder")}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={touched.name ? errors.name : ""}
            />
          </FormGroup>
          <FormGroup className="w-full mb-4 sm:pl-2 sm:w-1/2">
            <FormLabel htmlFor="email">{t("email")}</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t("emailPlaceholder")}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email ? errors.email : ""}
            />
          </FormGroup>
          <FormGroup className="w-full mb-4">
            <FormLabel htmlFor="subject">{t("subject")}</FormLabel>
            <Input
              id="subject"
              name="subject"
              placeholder={t("subjectPlaceholder")}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
              error={touched.subject ? errors.subject : ""}
            />
          </FormGroup>
          <FormGroup className="w-full mb-4">
            <FormLabel htmlFor="message">{t("message")}</FormLabel>
            <Textarea
              id="message"
              name="message"
              placeholder={t("messagePlaceholder")}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              error={touched.message ? errors.message : ""}
            />
          </FormGroup>

          {siteKey && (
            <FormGroup className="w-full mb-4 flex justify-center sm:justify-start overflow-hidden">
              <ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} />
            </FormGroup>
          )}

          {formSubmitted && <SuccessMessage>{t("success")}</SuccessMessage>}
          <Button
            isLoading={isSubmitting}
            className="mt-4 sm:mt-8 mx-auto sm:mx-0"
            type="submit"
          >
            {t("submit")}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { ContactForm };
