"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const AiProjects: React.FC = () => {
  const { t } = useLanguage();
  const { aiProjects } = t;

  return (
    <section id="aiprojects" className="w-full h-auto bg-gray-100 pt-24 pb-24">
      <div className=" xl:max-w-[1140px]  lg:max-w-[960px]  md:max-w-[720px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold uppercase text-gray-800 mb-4">
            {aiProjects.title}
          </h2>
          <p className="text-lg text-gray-600 mb-12">{aiProjects.subtitle}</p>
        </div>
      </div>
      <div className=" xl:max-w-[550px]  lg:max-w-[550px]  md:max-w-[550px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
        <div className="h-full w-full">
          <div>
            <div className="h-[350px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/mNBbranvQEw"
                title={aiProjects.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>

            <div className="relative px-0 py-[25px] text-left">
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">
                  {aiProjects.mediaTitle}
                </h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
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
        </div>
      </div>
    </section>
  );
};

export default AiProjects;
