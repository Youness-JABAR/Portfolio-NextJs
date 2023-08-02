"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

import Envelope from '@/assets/icons/envelope.svg';
import Github from '@/assets/icons/social-media/Github.svg';
import LinkedIn from '@/assets/icons/social-media/Linkedin.svg';
import { socialLinks } from '@/data/socialLinks';
import { SocialLink } from './SocialLink';

interface SocialLinksProps {}

const SocialLinks: React.FC<SocialLinksProps> = () => {



  return (
    <ul className="flex justify-center my-5 ">
      {socialLinks.map((sLink,i)=>(
        <li className='float-left mr-5' key={i}>
        <SocialLink href={sLink.destination} target="_blank" rel="noreferrer" title={sLink.title}>
          {sLink.icon}
        </SocialLink>
      </li>
        
      ))}
            
        
    </ul>
  );
};

export default SocialLinks;
