import React from "react";
import Image from "next/image";

// Define the types for the props
interface VisionMissionCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default function VisionMissionCard({
  title,
  subtitle,
  imageUrl,
}: VisionMissionCardProps) {
  return (
    <div className="cursor-pointer h-104 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl duration-300 ease-in-out md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-104 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={imageUrl}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal h-104">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
