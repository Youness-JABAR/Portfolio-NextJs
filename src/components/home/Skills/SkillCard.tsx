import React from "react";
import Image from "next/image";

interface SkillCardProps {
  src?: string;
  alt: string;
  title: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ src, alt, title }) => {
  return (
    <div
      className="col-span-1 mx-0 sm:mx-2 transform hover:shadow-lg hover:scale-105 transition-transform duration-300 mt-4 sm:mt-8"
      aria-label={`Skill card for ${title}`}
    >
      <div className="relative flex flex-col items-center justify-center bg-white bg-clip-border border rounded-lg border-gray-200 p-4 text-center">
        <div className="flex items-center justify-center h-16">
          {src ? (
            <Image
              src={src}
              alt={alt}
              width={100}
              height={100}
              className="h-16 w-auto"
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
              {title.charAt(0)}
            </div>
          )}
        </div>
        {/* Title */}
        <div className="my-4">
          <h5 className="m-2 align-middle text-gray-700 text-md font-medium">
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
