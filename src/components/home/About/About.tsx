import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair_Display = Playfair_Display({
  subsets: ["latin"],
});

const About: React.FC = () => {
  return (
    <section id="about" className="w-full h-auto bg-gray-100 py-24">
      <div className="max-w-[1140px] mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold uppercase text-gray-800 tracking-wide mb-8">
          About Me
        </h2>
      </div>

      <div className="max-w-[1140px] mx-auto grid lg:grid-cols-3 gap-16 items-center">
        {/* Profile Image */}
        <div className="lg:col-span-1">
          <div className="border-[10px] border-blue-600 rounded-lg overflow-hidden shadow-lg">
            <Image
              height={400}
              width={400}
              src="/youness2025.jpeg"
              className="object-cover"
              alt="Youness Jabar"
            />
          </div>
        </div>

        {/* About Text */}
        <div className="lg:col-span-2 space-y-6 text-left">
          <p
            className={`text-lg text-gray-800 leading-relaxed ${playfair_Display.className}`}
          >
            Hi, I’m Youness Jabar, a software engineer with over 2.5 years of
            experience building web applications. I hold a Bac +5 degree from{" "}
            <strong className="text-blue-600">
              ENSAK (National School of Applied Sciences in Kenitra)
            </strong>, one of Morocco’s premier engineering schools. During my
            studies, I participated in an enriching exchange program at the
            University of Cordoba, Spain, gaining a global perspective on
            technology and collaboration.
          </p>

          <p
            className={`text-lg text-gray-800 leading-relaxed ${playfair_Display.className}`}
          >
            Currently, I’m working with{" "}
            <strong className="text-blue-600">BEWIZYU</strong>, where I lead and
            contribute to diverse projects using modern technologies like{" "}
            <strong>Angular, React, Next.js, Laravel, and Node.js</strong>. My work
            focuses on delivering scalable, user-centric applications while
            ensuring seamless collaboration and problem-solving within the team.
          </p>

          <p
            className={`text-lg text-gray-800 leading-relaxed ${playfair_Display.className}`}
          >
            I am deeply passionate about AI, 
            digital marketing, and crafting seamless user
            experiences. Whether it’s optimizing frontend performance or
            tackling complex backend challenges, I am always ready to explore
            new ideas and deliver impactful results.
          </p>

          {/* Call to Action */}
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
    </section>
  );
};

export default About;
