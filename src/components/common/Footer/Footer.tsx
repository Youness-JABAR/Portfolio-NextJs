"use client";

import Link from "next/link";
import React from "react";

import HeartColored from "@/assets/icons/heart-colored.svg";
import SocialLinks from "./SocialLinks/SocialLinks";
import { useLanguage } from "@/context/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { footer } = t;

  return (
    <div id="Footer" className="w-full bg-gray-100">
      <div className="section-container py-16 md:py-28 text-center">
        <p className="text-base sm:text-lg mb-6 px-2">{footer.connect}</p>
        <SocialLinks />
        <div className="my-6 md:my-8 border-t border-gray-700 w-full"></div>
        <p className="flex flex-wrap items-center justify-center text-sm xs:text-base text-gray-400 gap-1 px-2">
          <span className="font-bold">@{new Date().getFullYear()}</span>
          <span>- {footer.madeWith}</span>
          <HeartColored className="w-5 h-5 text-red-500" />
          <span>{footer.by}</span>
          <Link
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary hover:underline"
            href="https://github.com/Youness-JABAR"
          >
            Youness JABAR
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
