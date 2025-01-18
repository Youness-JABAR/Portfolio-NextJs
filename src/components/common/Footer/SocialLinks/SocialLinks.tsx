"use client";
import React from "react";
import { socialLinks } from "@/data/socialLinks";
import { SocialLink } from "./SocialLink";

interface SocialLinksProps {}

const SocialLinks: React.FC<SocialLinksProps> = () => {
  return (
    <ul className="flex justify-center space-x-6 my-5">
      {socialLinks.map((sLink, i) => (
        <li key={i}>
          <SocialLink
            href={sLink.destination}
            target="_blank"
            rel="noreferrer"
            title={sLink.title}
            className="hover:scale-110 transform transition-transform duration-300"
          >
            {sLink.icon}
          </SocialLink>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
