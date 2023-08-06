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
  <div className="relative flex flex-col items-center justify-center bg-white bg-clip-border border rounded border-solid border-[rgba(0,0,0,0.125)] p-4 text-center">
    <div className="flex items-center justify-center  ">
      <Image src={src} alt={alt} width={100} height={100} className="h-14 w-full" />
    </div>
    <div className="my-4">
      <h5 className="m-2 align-middle text-gray-400 text-xl font-semibold">{title}</h5>
    </div>
  </div>
</div>

  );
};

export default SkillCard;
