"use client";

import React from "react";
import type { ExperienceItem } from "@/i18n/types";
import { useTranslations } from "next-intl";

const Experience: React.FC = () => {
  const t = useTranslations("experience");
  const items = t.raw("items") as ExperienceItem[];

  return (
    <section
      id="experience"
      className="w-full bg-white section-padding scroll-mt-[var(--nav-height)]"
    >
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-800 tracking-wide mb-8 md:mb-12 text-center">
          {t("title")}
        </h2>

        <div className="space-y-8 md:space-y-10">
          {items.map((item) => (
            <div
              key={`${item.company}-${item.period}`}
              className="border-l-4 border-blue-600 pl-4 sm:pl-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    {item.role}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">
                    {item.company} · {item.location}
                  </p>
                </div>
                <span className="text-sm text-gray-500 font-medium sm:text-right sm:whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
