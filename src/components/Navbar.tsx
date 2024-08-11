"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ConnectBtn } from './ConnectBtn';
import { motion } from 'framer-motion';
import { IoIosHome, IoIosSearch } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll';
import { ConnectKitProvider } from "connectkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, sepolia } from "wagmi/chains";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function Navbar() {
  const pathname = usePathname();
  const queryClient = new QueryClient();

  const isActive = (href: string) => pathname === href;
  const config = getDefaultConfig({
    appName: "GovLens",
    projectId: "d3bd738001606e3c83f17d042cedafae",
    chains: [optimism],
    ssr: true,
  });

  return (
    <nav className="bg-[#E2E6E5] px-8 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-24 ">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center rounded-full cursor-pointer">
              <Image
                className="rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200"
                src="/icon/logo.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </div>
          </Link>

          {/* Navigation Links Container */}
          <div className="flex items-center space-x-4 bg-white shadow-lg rounded-full p-2">
            <motion.div
              whileTap={{ scale: 0.9, rotate: -10 }}
              className={`px-4 py-2 text-black transition-transform duration-300 ${isActive('/') ? 'font-bold' : ''}`}
            >
              <Link href="/" className="flex gap-1 items-center justify-center">
                <IoIosHome />
                Home
              </Link>
            </motion.div>
          
            <motion.div
              whileTap={{ scale: 0.9, rotate: -10 }}
              className={`cursor-pointer px-4 py-2 text-black transition-transform duration-300 ${isActive('/services') ? 'font-bold' : ''}`}
            >
              <ScrollLink to="explore-dao" smooth={true} duration={900} offset={-160} className="flex gap-1 items-center justify-center">
                <IoIosSearch />
                Explore DAOs
              </ScrollLink>
            </motion.div>
          </div>

          {/* Connect Button */}
          <div className="flex-shrink-0">
            <WagmiProvider config={config}>
              <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                  <ConnectKitProvider>
                    <ConnectBtn />
                  </ConnectKitProvider>
                </RainbowKitProvider>
              </QueryClientProvider>
            </WagmiProvider>
          </div>
        </div>
      </div>
    </nav>
  );
}
