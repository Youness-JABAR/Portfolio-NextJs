// components/SkillCard.tsx
import React from 'react';
import Image from 'next/image';

interface SkillCardProps {
  src: string;
  alt: string;
  title: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ src, alt, title }) => {
  return (
    <div className="col-span-1 mx-2 hover:shadow-[2px_2px_2px_1px_rgba(133,130,130,0.2)] hover:scale-110 mt-8 ">
      <div className="relative flex flex-col  bg-white bg-clip-border border rounded border-solid border-[rgba(0,0,0,0.125)] p-4 text-center">
        <Image src={src} alt={alt} width={100} height={100} className="block h-[4.5em] mt-[10%] mx-auto" />
        <div className="my-4">
          <h5 className="m-2 align-middle text-[#898989] text-xl font-semibold">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
