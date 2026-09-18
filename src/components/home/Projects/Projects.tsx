"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/context/LanguageContext";

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { projects } = t;

  return (
    <section
      id="projects"
      className="w-full bg-gray-50 section-padding scroll-mt-[var(--nav-height)]"
    >
      <div className="section-container text-center">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-800 mb-4">
          {projects.title}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-12">
          {projects.subtitle}
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
          <ProjectCard
            imageUrl="/favicon.png"
            link="https://youness-jabar.vercel.app/"
            title={projects.portfolio.title}
            description={projects.portfolio.description}
            technologies="Next.js, React, Tailwind CSS, Vercel"
          />

          <ProjectCard
            imageUrl="/logo.png"
            title={projects.aiGermanTutor.title}
            description={projects.aiGermanTutor.description}
            technologies="AI, TypeScript, Next.js"
          />

          <ProjectCard
            imageUrl="/favicon.png"
            title={projects.checkpoint.title}
            description={projects.checkpoint.description}
            technologies="Chrome Extension, OpenAI API, Make.com"
          />

          <ProjectCard
            imageUrl="/images/projects/fitness.png"
            link="https://www.FitnessCalcAdvisor.com"
            title={projects.fitness.title}
            description={projects.fitness.description}
            technologies="Next.js, Tailwind CSS, SEO"
          />

          <ProjectCard
            imageUrl="/images/projects/maboursev2.png"
            title={projects.mabourse.title}
            description={projects.mabourse.description}
            technologies="HTML, CSS, Bootstrap, Django"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
