"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

import HeartColored from '@/assets/icons/heart-colored.svg';
import Github from '@/assets/icons/social-media/Github.svg';
import LinkedIn from '@/assets/icons/social-media/Linkedin.svg';
import SocialLinks from './SocialLinks/SocialLinks';

interface HeroProps {}

const Footer: React.FC<HeroProps> = () => {



  return (
    <div id="Footer" className="w-full bg-gray-100">
      <div className=" xl:max-w-[1140px]  lg:max-w-[960px]  md:max-w-[720px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
        <div className=" my-28 text-center w-full flex justify-center flex-col ">
          
          <div>Want to get connected? Follow me on the social channels below.</div>
          <SocialLinks/>
					<p className="flex items-center justify-center text-sm xs:text-base">
						<span className="mr-1 font-bold">@{new Date().getFullYear()}</span> - Made with 
            <HeartColored className='w-10 h-10 sm:w-8 sm:h-8 mx-2 ' />By
						<a
							target="_blank"
							rel="noreferrer"
							className=" mx-2 font-semibold text-[#346fbf] hover:underline"
							href="https://github.com/Youness-JABAR"
						>
							 <strong>Youness JABAR</strong>
						</a>
					</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
