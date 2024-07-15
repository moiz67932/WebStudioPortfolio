import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who We Are</h2>
          <p className='py-2 text-gray-600 text-lg'>
            We are a Top-notch Website and Mobile App Agency with a passion for building High-Quality, End-to-End Web Applications. We have worked on different kinds of projects like <b>Foreign Governement Projects, Startups, SaaS Applications, E-Commerce, Web3, and Personal Projects</b>.
          </p>
          <p className='py-2 text-gray-600 text-lg'>
            These projects have honed Our Skills to a high level enabling me to take on any Project. Since <b>Frontend + Backend + APIs + Logic Building</b>. That&apos;s all one need to Bring any Indea into Execution.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of Our latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
