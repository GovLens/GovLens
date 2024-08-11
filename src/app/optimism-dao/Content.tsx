"use client";
import React from "react";
import LinkContainer from "./Linkcontainer";
import StatsBar from "./StatsBar";
import DescriptionSection from "./Description";
import Proposals from "./Proposals";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Content({ view, setView }:any) {
  const router = useRouter();
  console.log(router);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 bg-[#E2E6E5]" style={{paddingBottom:"0"}}>
      {/* Main Logo and Name */}
      <div className="flex items-center justify-between p-4 my-2">
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12">
            <Image
              src="/img/optimism.png"
              alt="Optimism Logo"
              layout="fixed"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Optimism DAO</h1>
        </div>






        <div className="relative inline-flex items-center justify-center w-24 h-8 bg-gray-100 rounded-[50px] shadow-md group" style={{ marginLeft: "960px" }}>
  <div className="flex items-center space-x-2">
    <img src="./icon/heart-1.gif" alt="Heart Icon" className="w-8 h-8" />
    <span className="text-2xl font-bold text-gray-800">85</span>
  </div>

  {/* Tooltip */}
  <div className="absolute top-full mt-2 w-80 p-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-gray-300 rounded-lg shadow-xl text-sm text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h4 className="font-semibold text-lg text-blue-700 mb-2">Governance Health Scores: <span className="text-red-500">85</span></h4>
    <h5 className="font-semibold">Calculated using:</h5>

    <ul className="list-disc pl-4 space-y-1 text-green-700">
      <li>Voter turnout</li>
      <li>Proposal success rate</li>
      <li>Decision-making speed</li>
      <li>Token distribution concentration</li>
      <li>Community engagement</li>
      <li>Additional metrics will be added.</li>
    </ul>
  </div>
</div>



        <div className="shadow-md flex items-center bg-gray-100 rounded-full px-3 py-1 space-x-2">
          <div className="relative w-6 h-6">
            <Image
              src="https://govlens.vercel.app/img/leyar2.jpg"
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
      <LinkContainer view={view} setView={setView} />
    </div>
  );
}
