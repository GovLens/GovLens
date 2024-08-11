"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Link } from "react-scroll";


export function Text() {
  const words = [
    {
      text: "GovLens:",
      className: "text-orange-500 dark:text-blue-500",

    },
    {
      text: "Unite",
    },
    {
      text: "Your",
    },
    {
      text: "DAO",
    },
    {
      text: "Community",
    },
    {
      text: "With",
    }, {
      text: "Data",
    },
  ];

  const line = `Empower informed decision-making  through actionable insights
`;
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
    <div className="h-[250px] bg-opacity-70 bg-white backdrop-blur-[3px]      w-[1217px] flex flex-col items-center justify-center px-10 pt-10 pb-16 rounded-2xl shadow-lg  ">
      <TypewriterEffectSmooth words={words} />
     
      <TextGenerateEffect words={line} />
      <div className="mt-8">
          <Link
            to="explore-dao"
            smooth={true}
            duration={500}
            offset={-160}
            className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-[50px] shadow-md hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            Explore DAOs
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
    </div>
  </div>
  
  );
}
