"use client"; // Add this directive at the top
import React from 'react';
import { FaChartBar, FaClipboardList } from 'react-icons/fa'; // Import icons for buttons
import {
    FaGlobe,
    FaBalanceScale,
    FaComments,
    FaArchway,
    FaFileAlt,
    FaEye,
    FaGithub,
    FaDiscord,
    FaSearch,
    FaTwitter,
} from 'react-icons/fa';
import Link from 'next/link';

const links = [
    { name: "Website", icon: <FaGlobe className="text-blue-500" />, href: "https://www.optimism.io/" },
    { name: "Governance", icon: <FaBalanceScale className="text-green-500" />, href: "https://app.optimism.io/governance" },
    { name: "Forum", icon: <FaComments className="text-yellow-500" />, href: "https://gov.optimism.io/" },
    { name: "Bridge", icon: <FaArchway className="text-purple-500" />, href: "https://app.optimism.io/bridge" },
    { name: "Docs", icon: <FaFileAlt className="text-teal-500" />, href: "https://community.optimism.io/" },
    { name: "Mirror", icon: <FaEye className="text-indigo-500" />, href: "https://optimism.mirror.xyz/" },
    { name: "GitHub", icon: <FaGithub className="text-gray-800" />, href: "https://github.com/ethereum-optimism" },
    { name: "Discord", icon: <FaDiscord className="text-blue-600" />, href: "https://discord.com/invite/optimism" },
    { name: "Blockscout Explorer", icon: <FaSearch className="text-red-500" />, href: "https://optimism.blockscout.com/" },
    { name: "Twitter", icon: <FaTwitter className="text-blue-400" />, href: "https://x.com/Optimism?mx=2" },
    { name: "Gov Twitter", icon: <FaTwitter className="text-blue-400" />, href: "https://x.com/OptimismGov" },
];

export default function LinkContainer({ view, setView }:any) {
    return (
        <div className="w-full bg-[#E2E6E5] p-4 h-27 items-center justify-center">
            <p className="text-2xl font-bold text-blue-600 mb-6 mt-2">Useful Resources 🔗</p>

            {/* Resource Links */}
            <div className="flex flex-wrap justify-between mb-4">
                {links.map((link) => (
                    <Link key={link.name} href={link.href} legacyBehavior>
                        <a
                            className="flex flex-col items-center space-y-2 hover:text-blue-500 transition-colors duration-300"
                            title={link.name}
                            target="_blank"
                        >
                            <span className="text-3xl">{link.icon}</span>
                            <span className="text-xs">{link.name}</span>
                        </a>
                    </Link>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex  mb-4 " style={{justifyContent:"center" , paddingTop:"25px" ,paddingBottom:"20px"}}>
            <button
                onClick={() => setView("analysis")}
                className={`flex items-center space-x-1 p-2  transition-colors duration-300 
                ${view === "analysis" ? "bg-black text-white" : "bg-white text-black"} 
                ${view === "analysis" ? "shadow-lg" : "shadow-sm"}`}
                style={{borderRadius:"50px 0 0 50px" ,paddingLeft:"10px" } }
            >
                <FaChartBar className="text-2xl" /> {/* Reduced icon size */}
                <span className="text-sm font-medium">Analysis</span> {/* Adjusted text size */}
            </button>
            
            <button
                onClick={() => setView("proposals")}
                className={`flex items-center space-x-1 p-2  transition-colors duration-300 
                ${view === "proposals" ? "bg-black text-white" : "bg-white text-black"} 
                ${view === "proposals" ? "shadow-lg" : "shadow-sm"}`}
                style={{borderRadius:"0 50px 50px 0",paddingRight:"10px"  }}

            >
                <FaClipboardList className="text-2xl" /> {/* Reduced icon size */}
                <span className="text-sm font-medium">Proposals</span> {/* Adjusted text size */}
            </button>
        </div>
        </div>
    );
}
