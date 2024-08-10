"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ConnectBtn } from './ConnectBtn';
import { motion } from 'framer-motion';
import { IoIosHome } from "react-icons/io";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-[#E2E6E5] px-8 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              className="rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200"
              src="/img/C2.png"
              alt="Logo"
              width={70}
              height={70}
            />
            <span className="ml-3 text-xl font-bold">GovLens</span>
          </div>

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
              className={`px-4 py-2 text-black transition-transform duration-300 ${isActive('/about') ? 'font-bold' : ''}`}
            >
              <Link href="/about">
                Optimi
              </Link>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.9, rotate: -10 }}
              className={`px-4 py-2 text-black transition-transform duration-300 ${isActive('/services') ? 'font-bold' : ''}`}
            >
              <Link href="/services">
                Explore DAOs
              </Link>
            </motion.div>
          </div>

          {/* Connect Button */}
          <div className="flex-shrink-0">
            <ConnectBtn />
          </div>
        </div>
      </div>
    </nav>
  );
}
