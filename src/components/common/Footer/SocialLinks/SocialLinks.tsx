"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

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
