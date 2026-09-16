"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const About: React.FC = () => {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="about" className="w-full h-auto bg-gray-100 py-24">
      <div className="max-w-[1140px] mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase text-gray-800 tracking-wide mb-8">
          {about.title}
        </h2>
      </div>

      <div className="max-w-[1140px] mx-auto grid lg:grid-cols-3 gap-16 items-center">
        <div className="lg:col-span-1">
          <div className="lg:col-span-1 col-span-3">
            <div className="lg:pb-8 p-0 border-solid border-[20px] border-blue">
              <div className="about-img">
                <Image
                  height={2000}
                  width={1500}
                  src="/youness2025.jpeg"
                  className="w-full lg:-mt-16 lg:ml-10 h-[400px] md:h-[600px] lg:h-[400px] object-cover drop-shadow-2xl"
                  alt="Youness Jabar"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 text-left pl-8">
          <ul className="space-y-4 text-lg text-gray-800 leading-relaxed">
            <li>
              {about.educationBefore}
              <strong className="text-blue-600">{about.ensak}</strong>
              {about.educationAfter}
            </li>
            <li>
              {about.exchangeBefore}
              <strong className="text-blue-600">{about.cordoba}</strong>
              {about.exchangeAfter}
            </li>
            <li>
              {about.workBefore}
              <strong className="text-blue-600">{about.bewizyu}</strong>
              {about.workMiddle}
              <strong>{about.stack}</strong>
              {about.workAfter}
            </li>
            <li>
              {about.passionBefore}
              <strong>{about.ai}</strong>
              {about.passionMiddle}
              <strong>{about.marketing}</strong>
              {about.passionAfter}
            </li>
          </ul>

          <p className="mt-8 text-lg text-gray-700">
            <a
              href="#contact"
              className="text-blue-600 font-semibold underline hover:no-underline hover:text-blue-800 transition-colors duration-300"
            >
              {about.cta}
            </a>
            <span className="ml-2 text-gray-600">
              {about.ctaSuffixBefore}
              <strong>{about.projects}</strong>
              {about.ctaSuffixMiddle}
              <strong>{about.opportunities}</strong>
              {about.ctaSuffixAfter}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
