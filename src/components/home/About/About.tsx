"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const About: React.FC = () => {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section
      id="about"
      className="w-full bg-gray-100 section-padding scroll-mt-[var(--nav-height)]"
    >
      <div className="section-container text-center mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-800 tracking-wide">
          {about.title}
        </h2>
      </div>

      <div className="section-container grid lg:grid-cols-3 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-1">
          <div className="border-solid border-[10px] sm:border-[20px] border-blue lg:pb-8">
            <div className="about-img">
              <Image
                height={2000}
                width={1500}
                src="/youness2025.jpeg"
                className="w-full lg:-mt-16 lg:ml-10 h-[320px] sm:h-[400px] md:h-[500px] lg:h-[400px] object-cover drop-shadow-2xl"
                alt="Youness Jabar"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 text-left">
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8">
            {about.profile}
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            {about.educationTitle}
          </h3>
          <ul className="space-y-4 mb-8">
            {about.education.map((item) => (
              <li
                key={`${item.school}-${item.period}`}
                className="border-l-4 border-blue-600 pl-4"
              >
                <p className="font-semibold text-gray-800">{item.school}</p>
                <p className="text-gray-700">{item.degree}</p>
                <p className="text-sm text-gray-500">
                  {item.period} · {item.location}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            {about.certificationsTitle}
          </h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 mb-8">
            {about.certifications.map((cert) => (
              <li key={cert} className="text-sm">
                {cert}
              </li>
            ))}
          </ul>

          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            {about.languagesTitle}
          </h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-gray-700 mb-8">
            {about.languages.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>

          <p className="text-base sm:text-lg text-gray-700">
            <a
              href="#contact"
              className="text-blue-600 font-semibold underline hover:no-underline hover:text-blue-800 transition-colors duration-300"
            >
              {about.cta}
            </a>
            <span className="text-gray-600">
              {" "}
              {about.ctaSuffix}
              <strong>{about.ctaHighlight}</strong>
              {about.ctaSuffixEnd}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
