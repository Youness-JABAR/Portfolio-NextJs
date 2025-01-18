import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const playfair_Display = Playfair_Display({
  subsets: ["latin"],
});

const About: React.FC = () => {
  return (
    <section id="about" className="w-full h-auto bg-gray-100 pt-24 pb-24">
      <div className=" xl:max-w-[1140px]  lg:max-w-[960px]  md:max-w-[720px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold uppercase text-gray-800 tracking-wide">
            About Me
          </h2>{" "}
        </div>
      </div>
      <div className=" xl:max-w-[1140px]  lg:max-w-[960px]  md:max-w-[720px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
        <div className="grid grid-cols-3 gap-24">
          <div className="lg:col-span-1 col-span-3  ">
            <div className="lg:pb-8 p-0 border-solid border-[20px] border-blue">
              <div className="about-img">
                <Image
                  height={2000}
                  width={1500}
                  src="/youness2025.jpeg"
                  className="w-full lg:-mt-16 lg:ml-10 h-[400px] md:h-[600px] lg:h-[400px] object-cover drop-shadow-2xl"
                  alt="me"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 p-4 col-span-3">
            <div className="about-descr space-y-6 text-left">
              <p
                className={`text-lg text-gray-800 leading-relaxed ${playfair_Display.className}`}
              >
                Hi, I’m Youness Jabar, a software engineer with over 2.5 years
                of experience building web applications. My journey started at
                ENSA-K in Morocco, followed by an enriching exchange program at
                the University of Cordoba, Spain.
              </p>

              <p
                className={`text-lg text-gray-800 leading-relaxed ${playfair_Display.className}`}
              >
                At BEWIZYU, I worked on diverse projects using Angular, React,
                Laravel, and Next.js, focusing on delivering scalable,
                user-centric applications. Collaboration and problem-solving are
                at the heart of my approach.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed">
                I’m passionate about AI, digital marketing, and creating
                seamless user experiences. Whether it’s optimizing frontend
                performance or solving complex backend challenges, I’m always up
                for the next big idea.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                <a
                  href="#contact"
                  className="text-blue-600 font-semibold underline hover:no-underline hover:text-blue-800 transition-colors duration-300"
                >
                  Get in touch
                </a>
                <span className="ml-2 text-gray-600">
                  to discuss <strong>projects</strong> or{" "}
                  <strong>opportunities</strong>.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
