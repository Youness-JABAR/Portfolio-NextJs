"use client"

import React from 'react';
import Image from 'next/image';

import SkillCard from './SkillCard'; 

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full h-auto bg-White pt-24 pb-24">
      <div className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto text-center flex items-center justify-center">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-semibold uppercase">Skills</h2>
        </div>
      </div>
      <div className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto text-center flex items-center justify-center">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-1 w-full">
        <SkillCard src='images/skills/ts.svg' alt="TypeScript" title="TypeScript" />
        <SkillCard src='images/skills/js.svg' alt="JavaScript" title="JavaScript" />
        <SkillCard src='images/skills/react.svg' alt="Reactjs" title="React" />
        <SkillCard src='images/skills/nextjs.svg' alt="Nextjs" title="NextJs" />
        <SkillCard src='images/skills/angular.svg' alt="Angular" title="Angular" />
        <SkillCard src='images/skills/vuejs.svg' alt="Vuejs" title="Vuejs" />
        <SkillCard src='images/skills/getbootstrap.svg' alt="Bootstrap" title="Bootstrap" />
        <SkillCard src='images/skills/Tailwind.svg' alt="TailwindCss" title="TailwindCss" />
        <SkillCard src='images/skills/nodejs.svg' alt="Node.js" title="Node.js" />
        <SkillCard src='images/skills/django.svg' alt="Django" title="Django" />
        <SkillCard src='images/skills/laravel.svg' alt="Laravel" title="Laravel" />
        <SkillCard src='images/skills/git.svg' alt="Git" title="Git" />
        <SkillCard src='images/skills/Vercel.svg' alt="Vercel" title="Vercel" />
        <SkillCard src='images/skills/graphql.svg' alt="Graphql" title="GraphQL" />
        <SkillCard src='images/skills/firebase.svg' alt="Firebase" title="Firebase" />
        <SkillCard src='images/skills/opencv.svg' alt="Opencv" title="OpenCV" />
        <SkillCard src='images/skills/Tensorflow.svg' alt="Tensorflow" title="Tensorflow" />
                

        </div>
      </div>
    </section>
  );
};

export default Skills;
