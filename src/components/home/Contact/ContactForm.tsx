"use client";
import { Button } from "@/components/common/Buttons/Button";
import { FormGroup } from "@/components/common/Form/FormGroup";
import { FormLabel } from "@/components/common/Form/FormLabel";
import { Input } from "@/components/common/Form/Input";
import { Textarea } from "@/components/common/Form/Textarea";
import { Form, Formik, FormikHelpers } from "formik";
import { ZodError, z } from "zod";
import axios from "axios";
import { useState } from "react";
import { SuccessMessage } from "./SuccessMessage";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
export type ContactMessage = typeof initialValues;

const Schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "The message should be at least 10 characters"),
});

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    try {
      setFormSubmitted(false);
      await axios.post("/api/contact", values); // Sending data to the API endpoint
      setFormSubmitted(true);
      actions.resetForm();
    } catch (err) {
      actions.setStatus("Failed to send your message. Please try again later.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        try {
          Schema.parse(values);
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
            <FormLabel htmlFor="name">Your name</FormLabel>
            <Input
              id="name"
              name="name"
              placeholder="What should I call you?"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={touched.name ? errors.name : ""}
            />
          </FormGroup>
          <FormGroup className="w-full mb-4 sm:pl-2 sm:w-1/2">
            <FormLabel htmlFor="email">Your email</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Where can I reach you?"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email ? errors.email : ""}
            />
          </FormGroup>
          <FormGroup className="w-full mb-4">
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <Input
              id="subject"
              name="subject"
              placeholder="What is the subject of your message?"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
              error={touched.subject ? errors.subject : ""}
            />
          </FormGroup>
          <FormGroup className="w-full mb-4">
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              name="message"
              placeholder="What is your message?"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              error={touched.message ? errors.message : ""}
            />
          </FormGroup>
          {formSubmitted && (
            <SuccessMessage>
              Your message has been sent successfully.
            </SuccessMessage>
          )}
          <Button
            isLoading={isSubmitting}
            className="mt-8 mx-auto"
            type="submit"
          >
            Send message
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { ContactForm };
