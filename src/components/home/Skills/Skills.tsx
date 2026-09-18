"use client";

import React from "react";
import SkillCard from "./SkillCard";
import { useLanguage } from "@/context/LanguageContext";

const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="w-full bg-dark section-padding scroll-mt-[var(--nav-height)]"
    >
      <div className="section-container text-center">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white tracking-wide mb-8 md:mb-12">
          {t.skills.title}
        </h2>

        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
            {t.skills.frontend}
          </h3>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
            <SkillCard src="images/skills/react.svg" alt="React" title="React" />
            <SkillCard src="images/skills/nextjs.svg" alt="Next.js" title="Next.js" />
            <SkillCard src="images/skills/angular.svg" alt="Angular" title="Angular" />
            <SkillCard src="images/skills/ts.svg" alt="TypeScript" title="TypeScript" />
            <SkillCard src="images/skills/js.svg" alt="JavaScript" title="JavaScript" />
            <SkillCard src="images/skills/Tailwind.svg" alt="Tailwind CSS" title="Tailwind CSS" />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
            {t.skills.backend}
          </h3>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
            <SkillCard alt="Java" title="Java" />
            <SkillCard alt="Spring Boot" title="Spring Boot" />
            <SkillCard src="images/skills/nodejs.svg" alt="Node.js" title="Node.js" />
            <SkillCard alt="REST APIs" title="REST APIs" />
            <SkillCard src="images/skills/laravel.svg" alt="Laravel" title="Laravel" />
            <SkillCard src="images/skills/strapi.svg" alt="Strapi" title="Strapi" />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
            {t.skills.database}
          </h3>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
            <SkillCard alt="PostgreSQL" title="PostgreSQL" />
            <SkillCard src="images/skills/mysql.svg" alt="MySQL" title="MySQL" />
            <SkillCard alt="SQLite" title="SQLite" />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
            {t.skills.devops}
          </h3>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
            <SkillCard alt="Docker" title="Docker" />
            <SkillCard src="images/skills/gitlab.svg" alt="GitLab CI/CD" title="GitLab CI/CD" />
            <SkillCard alt="Azure DevOps" title="Azure DevOps" />
            <SkillCard src="images/skills/gcp.svg" alt="Google Cloud" title="Google Cloud" />
            <SkillCard alt="Linux" title="Linux" />
            <SkillCard alt="Grafana" title="Grafana" />
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
            {t.skills.testing}
          </h3>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
            <SkillCard alt="Jest" title="Jest" />
            <SkillCard alt="Selenium" title="Selenium" />
            <SkillCard src="images/skills/git.svg" alt="Git" title="Git" />
            <SkillCard alt="Jira" title="Jira" />
            <SkillCard alt="Confluence" title="Confluence" />
            <SkillCard alt="Swagger" title="Swagger" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
