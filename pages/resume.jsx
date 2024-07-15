import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Muhammad Moiz | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h1 className="text-center">Resume</h1>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Muhammad Moiz</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/muhammad-moiz-15b086212/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/moiz67932"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-2xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Web Development <span className="px-1">| Modern Approach </span>{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p className="text-xl">
          Analytical, Innovative, and Motivated Web Development Professional
          with Great customer service, Team Leadership, and organizational
          effectiveness in fast-paced and challenging environments. Adept at
          developing strategies and driving streamlined operations. Diverse
          analytical skills, team collaboration, and relationship building.
          Consummate professional, and motivated leader, with solid
          interpersonal abilities and complex problem-solving skills. Effective
          at critical thinking, idea generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <p className="text-center underline text-2xl font-bold py-2">
            Skills
          </p>
          <p className="py-2 text-lg">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React JS
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind CSS
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> FASTAPI
            <span className="px-2">|</span> Framer Motion
            <span className="px-2">|</span> Stripe
            <span className="px-2">|</span> Sanity CMS
          </p>
        </div>

        <p className="text-center font-bold underline text-2xl py-4">
          PROJECTS
        </p>
        {/* Experience */}
        <div className="py-6">
          <ul className="list-disc font-bold text-xl list-outside px-7 py-1 leading-relaxed">
            <li>Metaversus Madness ( Metaverse Website )</li>
            <li>E-Commerce Store ( Next Js, Framer Motion, Stripe)</li>
            <li>Premium Business Website</li>
            <li>Messenger Clone</li>
            <li>Real Estate Web App</li>
            <li>Fitness, Gym Exercise App</li>
            <li>Best Dashboard by React Js</li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">Soft Skills</h5>

        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          <li>
            Great Communication Skills and Teamwork
          </li>
          <li>Problem-solving , Time management and Adaptability</li>
          <li>Critical thinking and Decision-making</li>
          <li>
            Stress and Conflict management along with Openness to criticism
          </li>
          <li>Creativity and Resourcefulness</li>
        </ul>
      </div>
    </>
  );
};

export default resume;
