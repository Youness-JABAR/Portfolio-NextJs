"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

import Envelope from "@/assets/icons/envelope.svg";
import Github from "@/assets/icons/social-media/Github.svg";
import LinkedIn from "@/assets/icons/social-media/Linkedin.svg";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div
      id="hero"
      className="w-full h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex items-center justify-center"
    >
      <div className="max-w-[1140px] mx-auto text-center flex flex-col items-center">
        {/* Smooth Animated Heading */}
        <motion.h1
          className="font-bold text-5xl sm:text-6xl mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          I'm{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-[#4cc9f0]"
          >
            Youness JABAR
          </motion.span>
        </motion.h1>

        {/* Subtitle with Animation */}
        <motion.p
          className="text-lg sm:text-xl mt-4 font-medium tracking-wide bg-black bg-opacity-50 px-4 py-2 rounded-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Full Stack Developer | AI Specialist
        </motion.p>

        {/* Social Links */}
        <motion.ul
          className="flex mt-8 space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <li>
            <Link href="https://github.com/Youness-JABAR" target="_blank">
              <Github className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform" />
            </Link>
          </li>
          <li>
            <Link href="mailto:youness.jabar.pro@gmail.com" target="_blank">
              <Envelope className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/youness-jabar-b224841a3/"
              target="_blank"
            >
              <LinkedIn className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform" />
            </Link>
          </li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Hero;
