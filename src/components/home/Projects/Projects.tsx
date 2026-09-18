"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { useTranslations } from "next-intl";

const Projects: React.FC = () => {
  const t = useTranslations("projects");

  return (
    <section
      id="projects"
      className="w-full bg-gray-50 section-padding scroll-mt-[var(--nav-height)]"
    >
      <div className="section-container text-center">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-800 mb-4">
          {t("title")}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-12">
          {t("subtitle")}
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
          <ProjectCard
            imageUrl="/favicon.png"
            link="https://youness-jabar.vercel.app/"
            title={t("portfolio.title")}
            description={t("portfolio.description")}
            technologies="Next.js, React, Tailwind CSS, Vercel"
          />

          <ProjectCard
            imageUrl="/images/projects/aigermanTutor.svg"
            link="https://ai-deutsch-git-develop-younessjabars-projects.vercel.app/"
            title={t("aiGermanTutor.title")}
            description={t("aiGermanTutor.description")}
            technologies="AI, TypeScript, Next.js"
          />

          <ProjectCard
            imageUrl="/images/projects/checkpoint.png"
            link="https://chromewebstore.google.com/detail/checkpoint/lhdidcpjpibmchlibdgmgmeijldgcjac"
            title={t("checkpoint.title")}
            description={t("checkpoint.description")}
            technologies="Chrome Extension, OpenAI API, Make.com"
          />

          <ProjectCard
            imageUrl="/images/projects/fitness.png"
            link="https://www.FitnessCalcAdvisor.com"
            title={t("fitness.title")}
            description={t("fitness.description")}
            technologies="Next.js, Tailwind CSS, SEO"
          />

          <ProjectCard
            imageUrl="/images/projects/maboursev2.png"
            title={t("mabourse.title")}
            description={t("mabourse.description")}
            technologies="HTML, CSS, Bootstrap, Django"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
