"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
// @ts-ignore
import Typed from 'typed.js';

import Envelope from '@/assets/icons/envelope.svg';
import Github from '@/assets/icons/social-media/Github.svg';
import LinkedIn from '@/assets/icons/social-media/Linkedin.svg';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const typedRef = useRef<HTMLSpanElement>(null); // Create a ref for the typed element

  useEffect(() => {
    const typedElement = typedRef.current;

    if (typedElement) {
      let typed_strings = typedElement.getAttribute('data-typed-items');
      if (typed_strings) {
        const stringsArray = typed_strings.split(',');
        new Typed(typedElement, {
          strings: stringsArray,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });
      }
    }
  }, []);

  return (
    <div id="hero" className="w-full h-fit">
      <div className=" xl:max-w-[1140px]  lg:max-w-[960px]  md:max-w-[720px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
        <div className="h-screen text-left w-full flex justify-center flex-col">
          <h1 className=" bg-white font-bold mb-3 uppercase  text-5xl w-fit">
            <span className='pr-2'> I'm</span>
              
             <span ref={typedRef} className="pl-1" data-typed-items=" Youness JABAR, A Full Stack Developer, A Software Engineer"></span>
          </h1>
          <p className=" tracking-[.1em] text-xl mt-0 mb-8 capitalize text-white bg-black font-medium w-fit"> Full Stack Developer, AI lover</p>

          <ul className="list-unstyled ">
            <li className='float-left mr-5'>
              <Link href="https://github.com/Youness-JABAR" target="_blank">
                <Github className="w-10 h-10 mr-2 sm:w-8 sm:h-8 text-white"  />
              </Link>
            </li>
            <li className='float-left mr-5'>
              <Link href="mailto:youness.jabar.pro@gmail.com" target="_blank">
                <Envelope className="w-10 h-10 mr-2 sm:w-8 sm:h-8 text-white text-3xl"  />
              </Link>
            </li>
            <li className='float-left mr-5'>
              <Link href="https://www.linkedin.com/in/youness-jabar-b224841a3/" target="_blank">
                <LinkedIn className="w-10 h-10 mr-2 sm:w-8 sm:h-8 text-white text-3xl"  />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
