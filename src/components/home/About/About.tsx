import React from 'react';
import { Playfair_Display } from 'next/font/google';
const playfair_Display =Playfair_Display({
    subsets: ['latin']
})

const About: React.FC = () => {
  return (
    <section id="about" className="w-full h-auto bg-gray-100 pt-24 pb-24">
      <div className=" xl:max-w-[1140px]  lg:max-w-[960px]  md:max-w-[720px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
        <div className="mb-16 text-center">
          <h2 className='text-2xl font-semibold uppercase'>About Me</h2>
        </div>
      </div>
      <div className=" xl:max-w-[1140px]  lg:max-w-[960px]  md:max-w-[720px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
        <div className="grid grid-cols-3 gap-24">
          <div className="lg:col-span-1 col-span-3  ">
            <div className="lg:pb-8 p-0 border-solid border-[20px] border-primary">
              <div className="about-img">
                <img
                  src="/me.jpg"
                  className="w-full lg:-mt-16 lg:ml-10 h-[400px] md:h-[600px] lg:h-[400px] object-cover drop-shadow-2xl"
                  alt="me"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 col-span-3">
            <div className="about-descr">
              <p className={`text-xl text-left my-6  ${playfair_Display.className}`}>
                I am a software engineer with a Bac +5 degree from ENSA-K in Morocco. During my
                studies, I had the opportunity to participate in an enriching exchange program at
                UCO - University of Cordoba, Spain. My passion for web and mobile application
                development, as well as my interest in AI, has driven me throughout my academic
                journey.
              </p>

              <p className={`text-xl text-left my-6  ${playfair_Display.className}`}>
                I have gained valuable experience during my time at BEWIZYU, where I spent a year
                and a half working on diverse projects. My responsibilities included creating and
                maintaining projects using technologies such as Laravel, Angular, React, and
                Next.js.
              </p>
              <p className=" max-w-[80%] text-left my-6 text-[#736f6f] text-[15px]  leading-5 tracking-[0.02em]">
                Ambitious, curious and passionate about new technologies and SEO, able to learn
                quickly, with creative problem-solving and critical analysis skills.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
