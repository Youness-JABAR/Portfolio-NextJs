"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/context/LanguageContext";

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { projects } = t;

  return (
    <section id="projects" className="w-full h-auto bg-gray-50 py-24">
      <div className="max-w-[1140px] mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase text-gray-800 mb-4">
          {projects.title}
        </h2>
        <p className="text-lg text-gray-600 mb-12">{projects.subtitle}</p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          <ProjectCard
            imageUrl="/images/projects/morartist.png"
            link="https://morartist-frontend.vercel.app/"
            title={projects.morartist.title}
            description={projects.morartist.description}
            technologies="Next.js, TailwindCSS"
          />

          <ProjectCard
            imageUrl="/images/projects/fitness.png"
            link="https://www.FitnessCalcAdvisor.com"
            title={projects.fitness.title}
            description={projects.fitness.description}
            technologies="Next.js, TailwindCSS"
          />

          <ProjectCard
            imageUrl="/images/projects/maboursev2.png"
            title={projects.mabourse.title}
            description={projects.mabourse.description}
            technologies="HTML, CSS, Bootstrap, Django"
          />

          <ProjectCard
            imageUrl="/images/projects/ecommerce.png"
            title={projects.tal3andak.title}
            description={projects.tal3andak.description}
            technologies="PHP, MySQL, HTML, Bootstrap"
          />

          <ProjectCard
            imageUrl="/images/projects/FEE.png"
            title={projects.fee7.title}
            description={projects.fee7.description}
            technologies="Java, Android Studio, Firebase"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
