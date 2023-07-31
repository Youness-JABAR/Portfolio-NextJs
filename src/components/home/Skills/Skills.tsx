import React from 'react';
import Image from 'next/image';
import TypeScript from '@/assets/icons/skills/ts.svg?url';
import JavaScript from '@/assets/icons/skills/js.svg?url';
import Reactjs from '@/assets/icons/skills/react.svg?url';
import Nextjs from '@/assets/icons/skills/nextjs.svg?url';
import Angular from '@/assets/icons/skills/angular.svg?url';
import Vuejs from '@/assets/icons/skills/vuejs.svg?url';
import Bootstrap from '@/assets/icons/skills/getbootstrap.svg?url';
import TailwindCss from '@/assets/icons/skills/tailwind.svg?url';
import Nodejs from '@/assets/icons/skills/nodejs.svg?url';
import Laravel from '@/assets/icons/skills/django.svg?url';
import Git from '@/assets/icons/skills/git.svg?url';
import Vercel from '@/assets/icons/skills/vercel.svg?url';
import Graphql from '@/assets/icons/skills/graphql.svg?url';
import Firebase from '@/assets/icons/skills/firebase.svg?url';
import Opencv from '@/assets/icons/skills/opencv.svg?url';
import Tensorflow from '@/assets/icons/skills/Tensorflow.svg?url';
import SkillCard from './SkillCard'; 

const Skills: React.FC = () => {
  return (
    <section id="about" className="w-full h-auto bg-White pt-24 pb-24">
      <div className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto text-center flex items-center justify-center">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-semibold uppercase">Skills</h2>
        </div>
      </div>
      <div className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto text-center flex items-center justify-center">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-1 w-full">
        <SkillCard src={TypeScript} alt="TypeScript" title="TypeScript" />
        <SkillCard src={JavaScript} alt="JavaScript" title="JavaScript" />
        <SkillCard src={Reactjs} alt="Reactjs" title="React" />
        <SkillCard src={Nextjs} alt="Nextjs" title="NextJs" />
        <SkillCard src={Angular} alt="Angular" title="Angular" />
        <SkillCard src={Vuejs} alt="Vuejs" title="Vuejs" />
        <SkillCard src={Bootstrap} alt="Bootstrap" title="Bootstrap" />
        <SkillCard src={TailwindCss} alt="TailwindCss" title="TailwindCss" />
        <SkillCard src={Nodejs} alt="Node.js" title="Node.js" />
        <SkillCard src={Laravel} alt="Laravel" title="Laravel" />
        <SkillCard src={Git} alt="Git" title="Git" />
        <SkillCard src={Vercel} alt="Vercel" title="Vercel" />
        <SkillCard src={Graphql} alt="Graphql" title="GraphQL" />
        <SkillCard src={Firebase} alt="Firebase" title="Firebase" />
        <SkillCard src={Opencv} alt="Opencv" title="OpenCV" />
        <SkillCard src={Tensorflow} alt="Tensorflow" title="Tensorflow" />

        </div>
      </div>
    </section>
  );
};

export default Skills;
