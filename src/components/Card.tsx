import React from "react";
import { Meteors } from "../components/ui/meteors";

export function Card({ title, subtitle,url }: { title: string; subtitle: string; url:string}) {
  return (
    <div className="">
      <div className="relative w-[300px] h-[180px] cursor-pointer">
        <div className="absolute  inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-400 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="h-10 w-10 rounded-full  flex items-center justify-center  border-gray-500">
              <img 
              src={url}
              alt="" />
          </div>
 
          <h1 className="font-bold text-xl text-black  relative z-50">
            {title}
          </h1>

          <p className="font-bold text-base text-white mt-5 relative z-50">
              {subtitle}
          </p>

        
          {/* Meaty part - Meteor effect */}
          <Meteors number={50} />
        </div>
      </div>
    </div>
  );
}
