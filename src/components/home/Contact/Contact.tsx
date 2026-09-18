"use client";

import React from "react";
import { ContactForm } from "./ContactForm";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { contact } = t;

  return (
    <section
      id="contact"
      className="w-full section-padding scroll-mt-[var(--nav-height)]"
    >
      <div className="section-container text-center">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white mb-4">
          {contact.title}
        </h2>
        <p className="text-base sm:text-lg text-white mb-8 md:mb-12">
          {contact.subtitle}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-left">
          <ul className="space-y-5 sm:space-y-6">
            <li className="flex items-start sm:items-center text-base sm:text-lg text-white">
              <FaMapMarkerAlt className="text-blue-600 mr-3 mt-1 sm:mt-0 shrink-0" />
              {contact.location}
            </li>
            <li className="flex items-center text-base sm:text-lg text-white">
              <FaPhoneAlt className="text-blue-600 mr-3 shrink-0" />
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="hover:underline break-all sm:break-normal"
              >
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start sm:items-center text-base sm:text-lg text-white">
              <FaEnvelope className="text-blue-600 mr-3 mt-1 sm:mt-0 shrink-0" />
              <a
                href="mailto:youness.jabar.pro@gmail.com"
                className="hover:underline break-all sm:break-normal"
              >
                youness.jabar.pro@gmail.com
              </a>
            </li>
          </ul>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
