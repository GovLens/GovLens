"use client";
import React from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import {motion} from "framer-motion"
import { ConnectKitButton } from "connectkit";



export function ConnectBtn() {
    return (
      <>
      
      <ConnectKitButton />
      </>

      );
}

const WalletIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="h-5 w-5 text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 9V7a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h9a3 3 0 003-3v-2m0 0l4-4m-4 4l4-4m-4 4h3"
      />
    </svg>
  );
};
