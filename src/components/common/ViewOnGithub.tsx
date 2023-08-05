"use client"

import React from 'react';
import Github from '@/assets/icons/social-media/Github.svg';

const ViewOnGithub = () => {
  return (
    <a
        target="_blank"
        rel="noreferrer"
        className=" mx-2 font-semibold  hover:text-primary fixed flex items-center p-4 bg-white shadow-lg bottom-5 left-5 group"
        href="https://github.com/Youness-JABAR/Portfolio-NextJs"
    >
        <Github className='w-10 h-10  sm:w-8 sm:h-8 mr-5'/>
        <span>View On Github</span>
    </a>

  );
};

export default ViewOnGithub;
