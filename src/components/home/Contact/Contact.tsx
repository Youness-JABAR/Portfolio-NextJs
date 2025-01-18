import React from "react";
import { ContactForm } from "./ContactForm";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full h-auto  py-24">
      <div className="max-w-[1140px] mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold uppercase text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-white mb-12">
          Feel free to reach out to discuss projects, opportunities, or just to
          say hi!
        </p>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="text-left">
            <ul className="space-y-6">
              <li className="flex items-center text-lg text-white">
                <FaMapMarkerAlt className="text-blue-600 mr-3" />
                Rabat, Morocco
              </li>
              <li className="flex items-center text-lg text-white">
                <FaPhoneAlt className="text-blue-600 mr-3" />
                +212 628938972
              </li>
              <li className="flex items-center text-lg text-white">
                <FaEnvelope className="text-blue-600 mr-3" />
                <a
                  href="mailto:youness.jabar.pro@gmail.com"
                  className="hover:underline"
                >
                  youness.jabar.pro@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
