"use client";

import React from "react";
import SkillCard from "./SkillCard";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full h-auto bg-dark pt-24 pb-24">
      <div className="max-w-[1140px] mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold uppercase text-white tracking-wide mb-12">
          Skills
        </h2>

        {/* Frontend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Frontend</h3>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
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
              src="images/skills/Tailwind.svg"
              alt="TailwindCSS"
              title="TailwindCSS"
            />
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Backend</h3>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
            <SkillCard
              src="images/skills/nodejs.svg"
              alt="Node.js"
              title="Node.js"
            />
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
              src="images/skills/strapi.svg"
              alt="Strapi"
              title="Strapi"
            />
          </div>
        </div>

        {/* State Management */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">
            State Management
          </h3>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
            <SkillCard
              src="images/skills/redux.svg"
              alt="Redux"
              title="Redux"
            />
            <SkillCard src="images/skills/ngrx.svg" alt="NgRx" title="NgRx" />
            <SkillCard
              src="images/skills/zustand.svg"
              alt="Zustand"
              title="Zustand"
            />
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">DevOps</h3>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
            <SkillCard src="images/skills/git.svg" alt="Git" title="Git" />
            <SkillCard
              src="images/skills/github.svg"
              alt="Github"
              title="Github"
            />
            <SkillCard
              src="images/skills/gitlab.svg"
              alt="Gitlab"
              title="Gitlab"
            />
            <SkillCard src="images/skills/gcp.svg" alt="GCP" title="GCP" />
            <SkillCard
              src="images/skills/Vercel.svg"
              alt="Vercel"
              title="Vercel"
            />
            <SkillCard
              src="images/skills/netlify.svg"
              alt="netlify"
              title="Netlify"
            />
            {/* <SkillCard
              src="images/skills/clevercloud.svg"
              alt="clever cloud"
              title="Clever Cloud"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
