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
        <div className="lg:col-span-1 col-span-3">
            <div className="lg:pb-8 p-0 border-solid border-[20px] border-blue">
              <div className="about-img">
                <Image
                  height={2000}
                  width={1500}
                  src="/youness2025.jpeg"
                  className="w-full lg:-mt-16 lg:ml-10 h-[400px] md:h-[600px] lg:h-[400px] object-cover drop-shadow-2xl"
                  alt="Youness Jabar"
                />
              </div>
            </div>
          </div>
          {/* <div className="border-[10px] border-blue-600 rounded-lg overflow-hidden shadow-lg">
            <Image
              height={400}
              width={400}
              src="/youness2025.jpeg"
              className="object-cover"
              alt="Youness Jabar"
            />
          </div> */}
        </div>

        {/* About Details */}
        <div className="lg:col-span-2 text-left pl-8">
          <ul className="space-y-4 text-lg text-gray-800 leading-relaxed">
            <li>
              🎓 I hold a Bac +5 degree from{" "}
              <strong className="text-blue-600">
                ENSAK (National School of Applied Sciences in Kenitra)
              </strong>, one of Morocco’s premier engineering schools.
            </li>
            <li>
              🌍 During my studies, I participated in an exchange program at the{" "}
              <strong className="text-blue-600">University of Cordoba, Spain</strong>, gaining a global perspective on technology and collaboration.
            </li>
            <li>
              💻 Currently, I’m working with{" "}
              <strong className="text-blue-600">BEWIZYU</strong>, contributing to diverse projects using{" "}
              <strong>Angular, React, Next.js, Laravel, and Node.js</strong>. My focus is on delivering scalable, user-centric applications and fostering seamless teamwork.
            </li>
            <li>
              🤖 Passionate about <strong>AI</strong> and <strong>digital marketing</strong>, I strive to create seamless user experiences by optimizing frontend performance and solving complex backend challenges.
            </li>
          </ul>

          {/* Call to Action */}
          <p className="mt-8 text-lg text-gray-700">
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
