import React from "react";
import LinkContainer from "./Linkcontainer";
import StatsBar from "./StatsBar";
import DescriptionSection from "./Description";
import Image from 'next/image';

export default function Content() {
  return (
    <>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 bg-[#E2E6E5]">
        {/* Main Logo and Name */}
        <div className="flex items-center justify-between  p-4  my-2">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12">
              <Image
                src="/img/optimism.png"
                alt="Optimism Logo"
                layout="fixed" // Fixed size
                width={48} // Width in pixels
                height={48} // Height in pixels
                className="rounded-full"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Optimism DAO</h1>
          </div>

          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 space-x-2">
            <div className="relative w-6 h-6">
              <Image
                src="/img/logo-etheriam.jpg"
                alt="Ethereum Logo"
                layout="fixed"
                width={24}
                height={24}
              />
            </div>
            <span className="text-sm font-medium text-gray-700">Layer2</span>
          </div>
        </div>

        <DescriptionSection /> 
        <LinkContainer /> 
        <StatsBar />
      
      </div>
    </>
  );
}
