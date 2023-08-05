import Image from 'next/image';

const Background = () => {
  return (
    <div className="absolute h-full w-full -z-10">
      <Image
        src="/Youness_bg.png"
        alt="BackGround Image"
        layout="fill" // Set layout to "fill" for full-width and full-height image
        objectFit="cover" // Set objectFit to "cover" to maintain aspect ratio and cover the entire container
        priority // Add priority to preload the image
      />
    </div>
  );
};

export default Background;
