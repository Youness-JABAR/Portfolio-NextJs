"use client";

import React from "react";
import SkillCard from "./SkillCard";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full h-auto  pt-24 pb-24">
      <div className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase text-white tracking-wide mb-12">
          Skills
        </h2>

        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
          {/* Core Skills */}
          <SkillCard
            src="images/skills/ts.svg"
            alt="TypeScript"
            title="TypeScript"
          />
          <SkillCard
            src="images/skills/js.svg"
            alt="JavaScript"
            title="JavaScript"
          />
          <SkillCard
            src="images/skills/react.svg"
            alt="React.js"
            title="React.js"
          />
          <SkillCard
            src="images/skills/nextjs.svg"
            alt="Next.js"
            title="Next.js"
          />
          <SkillCard
            src="images/skills/angular.svg"
            alt="Angular"
            title="Angular"
          />
          <SkillCard
            src="images/skills/nodejs.svg"
            alt="Node.js"
            title="Node.js"
          />

          {/* Frameworks & Libraries */}
          <SkillCard
            src="images/skills/django.svg"
            alt="Django"
            title="Django"
          />
          <SkillCard
            src="images/skills/laravel.svg"
            alt="Laravel"
            title="Laravel"
          />
          <SkillCard
            src="images/skills/getbootstrap.svg"
            alt="Bootstrap"
            title="Bootstrap"
          />
          <SkillCard
            src="images/skills/Tailwind.svg"
            alt="Tailwind CSS"
            title="TailwindCSS"
          />

          <SkillCard
            src="images/skills/strapi.svg"
            alt="Strapi"
            title="Strapi"
          />

          {/* State Management */}
          <SkillCard src="images/skills/redux.svg" alt="Redux" title="Redux" />
          <SkillCard src="images/skills/ngrx.svg" alt="NgRx" title="NgRx" />
          <SkillCard
            src="images/skills/zustand.svg"
            alt="Zustand"
            title="Zustand"
          />
          <SkillCard src="images/skills/git.svg" alt="Git" title="Git" />
          <SkillCard src="images/skills/gcp.svg" alt="GCP" title="GCP" />

          {/* Tools */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
