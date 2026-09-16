"use client";

import { Button } from "@/components/common/Buttons/Button";
import { FormGroup } from "@/components/common/Form/FormGroup";
import { FormLabel } from "@/components/common/Form/FormLabel";
import { Input } from "@/components/common/Form/Input";
import { Textarea } from "@/components/common/Form/Textarea";
import { useLanguage } from "@/context/LanguageContext";
import { Form, Formik, FormikHelpers } from "formik";
import { ZodError, z } from "zod";
import axios from "axios";
import { useMemo, useState } from "react";
import { SuccessMessage } from "./SuccessMessage";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
export type ContactMessage = typeof initialValues;

const ContactForm = () => {
  const { t } = useLanguage();
  const form = t.contact.form;
  const [formSubmitted, setFormSubmitted] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(1, form.validation.nameRequired),
        email: z.string().email(form.validation.emailInvalid),
        subject: z.string().min(1, form.validation.subjectRequired),
        message: z.string().min(10, form.validation.messageMin),
      }),
    [form]
  );

  const handleSubmit = async (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    try {
      setFormSubmitted(false);
      await axios.post("/api/contact", values);
      setFormSubmitted(true);
      actions.resetForm();
    } catch (err) {
      actions.setStatus(form.error);
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
            <FormLabel htmlFor="name">{form.name}</FormLabel>
            <Input
              id="name"
              name="name"
              placeholder={form.namePlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={touched.name ? errors.name : ""}
            />
          </FormGroup>
          <FormGroup className="w-full mb-4 sm:pl-2 sm:w-1/2">
            <FormLabel htmlFor="email">{form.email}</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={form.emailPlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email ? errors.email : ""}
            />
          </FormGroup>
          <FormGroup className="w-full mb-4">
            <FormLabel htmlFor="subject">{form.subject}</FormLabel>
            <Input
              id="subject"
              name="subject"
              placeholder={form.subjectPlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
              error={touched.subject ? errors.subject : ""}
            />
          </FormGroup>
          <FormGroup className="w-full mb-4">
            <FormLabel htmlFor="message">{form.message}</FormLabel>
            <Textarea
              id="message"
              name="message"
              placeholder={form.messagePlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              error={touched.message ? errors.message : ""}
            />
          </FormGroup>
          {formSubmitted && (
            <SuccessMessage>{form.success}</SuccessMessage>
          )}
          <Button
            isLoading={isSubmitting}
            className="mt-8 mx-auto"
            type="submit"
          >
            {form.submit}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { ContactForm };
