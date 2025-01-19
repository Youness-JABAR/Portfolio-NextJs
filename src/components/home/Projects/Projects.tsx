"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full h-auto bg-gray-50 py-24">
      <div className="max-w-[1140px] mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold uppercase text-gray-800 mb-4">
          Projects
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          A showcase of some of the personal projects I've worked on, combining
          my skills in development and design.
        </p>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          <ProjectCard
            imageUrl="/images/projects/morartist.png"
            link="https://morartist-frontend.vercel.app/"
            title="Morartist.com"
            description="Selling portraits application"
            technologies="Next.js, TailwindCSS"
          />

          <ProjectCard
            imageUrl="/images/projects/fitness.png"
            link="https://www.FitnessCalcAdvisor.com"
            title="FitnessCalcAdvisor.com"
            description="Fitness calculation and advice website"
            technologies="Next.js, TailwindCSS"
          />

          <ProjectCard
            imageUrl="/images/projects/maboursev2.png"
            title="MABOURSE"
            description="Second version of MABOURSE website"
            technologies="HTML, CSS, Bootstrap, Django"
          />

          <ProjectCard
            imageUrl="/images/projects/ecommerce.png"
            title="Tal-3andak"
            description="E-commerce website for online purchases in Kenitra"
            technologies="PHP, MySQL, HTML, Bootstrap"
          />

          <ProjectCard
            imageUrl="/images/projects/FEE.png"
            title="FEE7"
            description="Mobile app for ENSAK Enterprise Forum"
            technologies="Java, Android Studio, Firebase"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
