"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import HeartColored from "@/assets/icons/heart-colored.svg";
import Github from "@/assets/icons/social-media/Github.svg";
import LinkedIn from "@/assets/icons/social-media/Linkedin.svg";
import SocialLinks from "./SocialLinks/SocialLinks";

interface HeroProps {}

const Footer: React.FC<HeroProps> = () => {
  return (
    <div id="Footer" className="w-full bg-gray-100">
      <div className=" xl:max-w-[1140px]  lg:max-w-[960px]  md:max-w-[720px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
        <div className=" my-28 text-center w-full flex justify-center flex-col ">
          <p className="text-lg mb-6">
            Want to get connected? Follow me on the social channels below.
          </p>{" "}
          <SocialLinks />
          <div className="my-8 border-t border-gray-700 w-full"></div>
          <p className="flex flex-wrap items-center justify-center text-sm xs:text-base text-gray-400">
            <span className="mr-1 font-bold">@{new Date().getFullYear()}</span>
            - Made with
            <HeartColored className="w-5 h-5 mx-1 text-red-500" />
            by
            <Link
              target="_blank"
              rel="noreferrer"
              className="ml-1 font-semibold text-primary hover:underline"
              href="https://github.com/Youness-JABAR"
            >
              Youness JABAR
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
