"use client";
import React from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import {motion} from "framer-motion"



export function ConnectBtn() {
    return (
      


<motion.button classname=" px-6 py-3 rounded-full text-lg w-[25%] "
 style={
  {
    width: '140px', // Set width here
    borderRadius: '50px', // Border radius in px
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
     height:"50px",
     marginRight:"100px"
  }
 }
>
      Connect Wallet
    </motion.button>



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
