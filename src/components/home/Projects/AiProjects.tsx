"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const AiProjects: React.FC = () => {
  const { t } = useLanguage();
  const { aiProjects } = t;

  return (
    <section
      id="aiprojects"
      className="w-full bg-gray-100 section-padding scroll-mt-[var(--nav-height)]"
    >
      <div className="section-container">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-800 mb-4">
            {aiProjects.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            {aiProjects.subtitle}
          </p>
        </div>

        <div className="max-w-[550px] mx-auto w-full">
          <div className="aspect-video w-full min-h-[200px] sm:min-h-[300px]">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/mNBbranvQEw"
              title={aiProjects.videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>

          <div className="py-6 sm:py-8 text-left">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
              {aiProjects.mediaTitle}
            </h4>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-2 mb-6 text-sm sm:text-base">
              {aiProjects.items.map((item) => (
                <li key={item}>
                  <strong>{item}</strong>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 italic">
              <span className="font-bold">{aiProjects.technologies}</span>{" "}
              {aiProjects.techStack}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiProjects;
