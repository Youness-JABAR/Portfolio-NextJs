"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';


import Envelope from '@/assets/icons/envelope.svg';
import Github from '@/assets/icons/social-media/Github.svg';
import LinkedIn from '@/assets/icons/social-media/Linkedin.svg';
import ArrowUpRight from '@/assets/icons/link.svg'
import ProjectCard from './ProjectCard';

interface HeroProps {}

const AiProjects: React.FC<HeroProps> = () => {


  return (
    <section id="aiprojects" className="w-full h-auto bg-gray-100 pt-24 pb-24">

        <div className=" xl:max-w-[1140px]  lg:max-w-[960px]  md:max-w-[720px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
          <div className="mb-16 text-center">
            <h2 className='text-2xl font-semibold uppercase'>AI Projects</h2>
          </div>
        </div>
        <div className=" xl:max-w-[550px]  lg:max-w-[550px]  md:max-w-[550px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
            <div className="h-full w-full">
                <div>
                    <div className='h-[350px]'>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/mNBbranvQEw"
                            title="Projects for media processing"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                    
                    <div className="relative px-0 py-[25px] text-left">
                        <div className="col-span-1 mx-2">
                            <h4 className='font-semibold mb-5'>Projects for media processing</h4>
                            <p className="text-[15px] text-black leading-7 mx-0 my-[25px] p-0">
                                1. Control the volume with your fingers<br />
                                2. Virtual Painter<br />
                                3. Virtual Mouse<br />
                                4. Testing a virtual ring<br />
                                5. Personal Trainer<br />
                                6. Fingers counter<br />
                                7. Face detection<br />
                                8. Facemesh
                                Technologies: MediaPipe python framework, OpenCV.
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


