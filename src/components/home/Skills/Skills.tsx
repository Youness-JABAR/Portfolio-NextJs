"use client";

import React from "react";
import SkillCard from "./SkillCard";
import { useTranslations } from "next-intl";

const Skills: React.FC = () => {
  const t = useTranslations("skills");

  return (
    <section
      id="skills"
      className="w-full bg-dark section-padding scroll-mt-[var(--nav-height)]"
    >
      <div className="section-container text-center">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white tracking-wide mb-8 md:mb-12">
          {t("title")}
        </h2>

        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
            {t("frontend")}
          </h3>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
            <SkillCard src="images/skills/react.svg" alt="React" title="React" />
            <SkillCard src="images/skills/nextjs.svg" alt="Next.js" title="Next.js" />
            <SkillCard src="images/skills/angular.svg" alt="Angular" title="Angular" />
            <SkillCard src="images/skills/ts.svg" alt="TypeScript" title="TypeScript" />
            <SkillCard src="images/skills/js.svg" alt="JavaScript" title="JavaScript" />
            <SkillCard src="images/skills/Tailwind.svg" alt="Tailwind CSS" title="TailwindCSS" />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
            {t("backend")}
          </h3>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
            <SkillCard src="images/skills/nodejs.svg" alt="Node.js" title="Node.js" />
            <SkillCard src="images/skills/springboot.svg" alt="Spring Boot" title="Spring Boot" />
            <SkillCard src="images/skills/laravel.svg" alt="Laravel" title="Laravel" />
            <SkillCard src="images/skills/strapi.svg" alt="Strapi" title="Strapi" />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
            {t("database")}
          </h3>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
            <SkillCard src="images/skills/postgresql.svg" alt="PostgreSQL" title="PostgreSQL" />
            <SkillCard src="images/skills/mysql.svg" alt="MySQL" title="MySQL" />
            <SkillCard src="images/skills/sqlite.svg" alt="SQLite" title="SQLite" />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
            {t("devops")}
          </h3>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
            <SkillCard src="images/skills/linux.svg" alt="Linux" title="Linux" />
            <SkillCard src="images/skills/docker.svg" alt="Docker" title="Docker" />
            <SkillCard src="images/skills/github.svg" alt="GitHub" title="GitHub" />
            <SkillCard src="images/skills/gitlab.svg" alt="GitLab CI/CD" title="GitLab CI/CD" />
            <SkillCard src="images/skills/azure.svg" alt="Azure DevOps" title="Azure DevOps" />
            <SkillCard src="images/skills/gcp.svg" alt="Google Cloud" title="Google Cloud" />
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
            {t("testing")}
          </h3>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6">
            <SkillCard src="images/skills/jest.svg" alt="Jest" title="Jest" />
            <SkillCard src="images/skills/selenium.svg" alt="Selenium" title="Selenium" />
            <SkillCard src="images/skills/git.svg" alt="Git" title="Git" />
            <SkillCard src="images/skills/jira.svg" alt="Jira" title="Jira" />
            <SkillCard src="images/skills/confluence.svg" alt="Confluence" title="Confluence" />
            <SkillCard src="images/skills/swagger.svg" alt="Swagger" title="Swagger" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
