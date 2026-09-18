"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

import Envelope from "@/assets/icons/envelope.svg";
import Github from "@/assets/icons/social-media/Github.svg";
import LinkedIn from "@/assets/icons/social-media/Linkedin.svg";
import { scrollIntoView } from "@/helpers/ScrollIntoView";
import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
  const t = useTranslations("hero");

  return (
    <div
      id="hero"
      className="w-full min-h-screen pt-[var(--nav-height)] pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex items-center justify-center scroll-mt-0"
    >
      <div className="w-full max-w-[1140px] mx-auto text-center flex flex-col items-center">
        <motion.h1
          className="font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-4 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {t("greeting")}{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-[#4cc9f0] block xs:inline"
          >
            Youness JABAR
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg md:text-xl mt-4 font-medium tracking-wide bg-black bg-opacity-50 px-4 py-2 rounded-md max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {t("subtitle")}
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg mt-3 text-blue-100 max-w-xl px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {t("tagline")}
        </motion.p>

        <motion.span
          className="inline-block mt-4 text-xs sm:text-sm md:text-base font-semibold bg-[#4cc9f0] text-blue-900 px-4 py-2 rounded-full text-center max-w-xs sm:max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {t("availability")}
        </motion.span>

        <motion.ul
          className="flex mt-6 sm:mt-8 space-x-5 sm:space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <li>
            <Link href="https://github.com/Youness-JABAR" target="_blank">
              <Github className="w-9 h-9 sm:w-12 sm:h-12 hover:scale-110 transition-transform" />
            </Link>
          </li>
          <li>
            <Link href="mailto:youness.jabar.pro@gmail.com" target="_blank">
              <Envelope className="w-9 h-9 sm:w-12 sm:h-12 hover:scale-110 transition-transform" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/youness-jabar-b224841a3/"
              target="_blank"
            >
              <LinkedIn className="w-9 h-9 sm:w-12 sm:h-12 hover:scale-110 transition-transform" />
            </Link>
          </li>
        </motion.ul>

        <motion.div
          className="mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <button
            onClick={() => scrollIntoView("contact")}
            className="bg-[#4cc9f0] text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-[#4361ee] hover:text-white transition-colors duration-300"
          >
            {t("contact")}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
