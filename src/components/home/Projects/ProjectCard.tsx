import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "@/assets/icons/link.svg";

interface ProjectCardProps {
  imageUrl: string;
  link?: string;
  title: string;
  description: string;
  technologies: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  link,
  title,
  description,
  technologies,
}) => {
  return (
    <div className="col-span-1 mx-2 hover:shadow-lg hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden bg-white">
      <div className="relative">
        {/* Project Image */}
        <Image
          src={imageUrl}
          width={355}
          height={166}
          className="w-full h-48 object-cover rounded-t-lg"
          alt={`Image of ${title}`}
        />

        {/* Project Details */}
        <div className="p-4 text-left">
          {/* Project Title */}
          {link ? (
            <Link
              href={link}
              target="_blank"
              className="inline-flex items-center"
            >
              <h4 className="font-semibold text-lg text-blue-600 hover:underline">
                {title} <ArrowUpRight className="w-4 h-4 ml-1 inline" />
              </h4>
            </Link>
          ) : (
            <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
          )}

          {/* Project Description */}
          <p className="text-sm text-gray-600 mt-2">{description}</p>

          {/* Divider */}
          <hr className="border-gray-300 my-4" />

          {/* Technologies */}
          <p className="text-sm text-gray-500 italic">{technologies}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
