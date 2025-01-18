"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import Envelope from "@/assets/icons/envelope.svg";
import Github from "@/assets/icons/social-media/Github.svg";
import LinkedIn from "@/assets/icons/social-media/Linkedin.svg";
import ArrowUpRight from "@/assets/icons/link.svg";
import ProjectCard from "./ProjectCard";

interface HeroProps {}

const AiProjects: React.FC<HeroProps> = () => {
  return (
    <section id="aiprojects" className="w-full h-auto bg-gray-100 pt-24 pb-24">
      <div className=" xl:max-w-[1140px]  lg:max-w-[960px]  md:max-w-[720px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold uppercase text-gray-800 mb-4">
            AI Projects
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            A collection of AI-driven projects showcasing innovation in media
            processing and computer vision.
          </p>
        </div>
      </div>
      <div className=" xl:max-w-[550px]  lg:max-w-[550px]  md:max-w-[550px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
        <div className="h-full w-full">
          <div>
            <div className="h-[350px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/mNBbranvQEw"
                title="Projects for media processing"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>

            <div className="relative px-0 py-[25px] text-left">
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">
                  Projects for Media Processing
                </h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>
                    <strong>Control the Volume with Your Fingers</strong>
                  </li>
                  <li>
                    <strong>Virtual Painter</strong>
                  </li>
                  <li>
                    <strong>Virtual Mouse</strong>
                  </li>
                  <li>
                    <strong>Testing a Virtual Ring</strong>
                  </li>
                  <li>
                    <strong>Personal Trainer</strong>
                  </li>
                  <li>
                    <strong>Fingers Counter</strong>
                  </li>
                  <li>
                    <strong>Face Detection</strong>
                  </li>
                  <li>
                    <strong>Facemesh</strong>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 italic">
                  <span className="font-bold">Technologies:</span> MediaPipe
                  Python framework, OpenCV
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiProjects;
