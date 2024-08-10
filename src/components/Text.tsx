"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";


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

  const line = `Empower informed decision-making through actionable through actionable insights
`;
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
    <div className="h-[250px] bg-opacity-32 backdrop-blur-[3px]      w-[1217px] flex flex-col items-center justify-center px-10 pt-10 pb-16 rounded-2xl shadow-lg  ">
      <TypewriterEffectSmooth words={words} />
      <TextGenerateEffect words={line} />
    </div>
  </div>
  
  );
}
