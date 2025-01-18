import React from "react";
import Image from "next/image";

interface SkillCardProps {
  src: string;
  alt: string;
  title: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ src, alt, title }) => {
  return (
    <div
      className="col-span-1 mx-2 transform hover:shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
      aria-label={`Skill card for ${title}`}
    >
      <div className="relative flex flex-col items-center justify-center bg-white bg-clip-border border rounded-lg border-gray-200 p-4 text-center">
        {/* Image */}
        <div className="flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            width={100}
            height={100}
            className="h-16 w-auto"
          />
        </div>
        {/* Title */}
        <div className="my-4">
          <h5 className="m-2 align-middle text-gray-700 text-lg font-medium">
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
