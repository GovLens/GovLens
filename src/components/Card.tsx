import React from "react";
import { Meteors } from "../components/ui/meteors";

// Define the types for the props
interface CardProps {
  title: string;
  subtitle: string;
  url: string;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, url }) => {
  return (
    <div className="relative w-[300px] h-[160px] cursor-pointer group transition-transform duration-300 transform hover:scale-105">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-400 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end">
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full flex items-center justify-center border-gray-500 mr-4">
            <img src={url} alt={title} className="h-full w-full rounded-full" />
          </div>
          <h1 className="font-bold text-[18px] text-black relative z-50">
            {title}
          </h1>
        </div>

        <p className="font-bold text-base text-white relative z-50">
          {subtitle}
        </p>

        {/* Meteor effect */}
        <Meteors number={0} />
      </div>
    </div>
  );
};
