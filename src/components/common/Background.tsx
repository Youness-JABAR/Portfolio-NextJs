import Image from 'next/image';

const Background = () => {
  return (
    <div className="absolute h-[100vh] w-full -z-10">
      <Image
        src="/Youness_bg.png"
        alt="BackGround Image"
        fill={true}
        className='w-fit'
        style={{
          width: '100%',
          objectFit:'cover'
        }}
        priority // Add priority to preload the image
      />
    </div>
  );
};

export default Background;
