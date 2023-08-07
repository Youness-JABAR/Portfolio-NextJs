"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';


import Envelope from '@/assets/icons/envelope.svg';
import Github from '@/assets/icons/social-media/Github.svg';
import LinkedIn from '@/assets/icons/social-media/Linkedin.svg';
import ArrowUpRight from '@/assets/icons/link.svg'
import ProjectCard from './ProjectCard';

interface HeroProps {}

const Projects: React.FC<HeroProps> = () => {


  return (
    <section id="projects" className="w-full h-auto bg-gray-100 pt-24 pb-24">

        <div className=" xl:max-w-[1140px]  lg:max-w-[960px]  md:max-w-[720px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
          <div className="mb-16 text-center">
            <h2 className='text-2xl font-semibold uppercase'>Projects</h2>
          </div>
        </div>
        <div className=" xl:max-w-[1140px]  lg:max-w-[960px]  md:max-w-[720px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full">
                <ProjectCard
                    imageUrl="/images/projects/morartist.png"
                    link="https://www.morartist.com"
                    title="Morartist.com"
                    description="Realization of a Website for selling portraits (two versions Angular/NextJs)."
                    technologies="Technologies: Angular, Bootstrap / NextJs, Tailwindcss, Vercel."
                />
                
                <ProjectCard
                    imageUrl="/images/projects/fitness.png"
                    link="https://www.FitnessCalcAdvisor.com"
                    title="FitnessCalcAdvisor.com"
                    description="Realization of a website SEO Optimized for fitness calculations and advices."
                    technologies="Technologies: NextJs, Tailwindcss, Vercel."
                />

                <ProjectCard
                    imageUrl="/images/projects/maboursev2.png"
                    title="MABOURSE"
                    description="Design and production of the second version of the MABOURSE website."
                    technologies="Technologies: Html, Css, Boostrap, JS, Django."
                />
                <ProjectCard
                    imageUrl="/images/projects/ecommerce.png"
                    title="Tal-3andak"
                    description="Realization of an E-commerce website for online purchase from the supermarkets available in Kenitra."
                    technologies="Technologies: UML, MySQL, JS, HTML, Bootstrap, php."
                />
                <ProjectCard
                    imageUrl="/images/projects/FEE.png"
                    title="FEE7"
                    description="Realization of a mobile application: forum ENSAK Enterprise."
                    technologies="Technologies: UML, AdobeXD, Java, Android Studio, Firebase, Git."
                />
            </div>
        </div>
    </section>
  );
};

export default Projects;


