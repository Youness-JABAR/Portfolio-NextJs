import React from 'react';
import { ContactForm } from './ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="about" className="w-full h-auto bg-white pt-24 pb-24">
      
      <div className=" xl:max-w-[1140px]  lg:max-w-[960px]  md:max-w-[720px] sm:max-w-[540px] w-full  mx-auto text-center flex items-center justify-center">
        <div className="grid grid-cols-2 gap-24">
          <div className="lg:col-span-1 col-span-2  ">
          <div className=" max-w-[80%] text-left my-6 text-[#736f6f] text-[15px]  leading-5 tracking-[0.02em]">

              
              <div>

                <h2 className="mb-3 text-black font-semibold text-2xl ">GET IN TOUCH</h2>

                <ul >
                  <li className='pb-3'><span>Rabat, Morocco</span></li>
                  <li className='pb-3'><span>+212 628938972</span></li>
                  <li className='pb-3'><a href="mailto:youness.jabar.pro@gmail.com" > <span>youness.jabar.pro@gmail.com</span></a> </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="lg:col-span-1 col-span-2">
            <div className="about-descr">
            <ContactForm />

              <p className=" max-w-[80%] text-left my-6 text-[#736f6f] text-[15px]  leading-5 tracking-[0.02em]">
                Ambitious, curious and passionate about new technologies and SEO, able to learn
                quickly, with creative problem-solving and critical analysis skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
