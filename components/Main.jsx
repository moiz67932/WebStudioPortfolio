import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className=' w-full h-screen text-center mt-6'>
      <div className='max-w-[1100px] bg-slate-300 w-full h-[80%] mx-auto p-2 flex justify-center items-center shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in-out duration-500'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Welcome To <span className='text-[#5651e5]'> WebStudio</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Bring Your Idea into Existense</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            We’re focused on Building Responsive Full-Stack Web Applications
            that Enable You to get an Edge over your competitors
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/muhammad-moiz-15b086212/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/moiz67932'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
