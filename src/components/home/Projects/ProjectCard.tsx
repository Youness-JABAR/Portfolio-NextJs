import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowUpRight from '@/assets/icons/link.svg'

interface ProjectCardProps {
    imageUrl: string;
    link?: string;
    title: string;
    description: string;
    technologies: string;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, link, title, description, technologies }) => {
   return (
    <div className="col-span-1 mx-2">
      <div className="relative">
        <Image src={imageUrl} width={355} height={166} className="w-full" alt="img" />
        <div className="relative px-0 py-[25px] text-left">
          {link ? (
            <Link href={link} target="_blank" className="inline-flex items-center">
                <h4 className="font-semibold">
                  {title} <ArrowUpRight className="w-4 h-4 mr-2 inline" />
                </h4>
            </Link>
          ) : (
            <h4 className="font-semibold">{title}</h4>
          )}
          <p className="text-sm leading-6">{description}</p>

          <hr className="border-[1px] my-6" />
          <p className="text-[#736f6f] text-[15px] leading-5 tracking-[0.02em]">{technologies}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
