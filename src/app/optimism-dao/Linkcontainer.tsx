'use client'; // Add this directive at the top

import Link from 'next/link';
import { FaGlobe, FaBalanceScale, FaComments, FaArchway, FaFileAlt, FaEye, FaGithub, FaDiscord, FaSearch, FaTwitter } from 'react-icons/fa';

const links = [
      { name: 'Website', icon: <FaGlobe className="text-blue-500" />, href: 'https://www.optimism.io/' },
      { name: 'Governance', icon: <FaBalanceScale className="text-green-500" />, href: 'https://app.optimism.io/governance' },
      { name: 'Forum', icon: <FaComments className="text-yellow-500" />, href: 'https://gov.optimism.io/' },
      { name: 'Bridge', icon: <FaArchway className="text-purple-500" />, href: 'https://app.optimism.io/bridge' },
      { name: 'Docs', icon: <FaFileAlt className="text-teal-500" />, href: 'https://community.optimism.io/' },
      { name: 'Mirror', icon: <FaEye className="text-indigo-500" />, href: 'https://optimism.mirror.xyz/' },
      { name: 'GitHub', icon: <FaGithub className="text-gray-800" />, href: 'https://github.com/ethereum-optimism' },
      { name: 'Discord', icon: <FaDiscord className="text-blue-600" />, href: 'https://discord.com/invite/optimism' },
      { name: 'Block Explorer', icon: <FaSearch className="text-red-500" />, href: 'https://optimistic.etherscan.io/' },
      { name: 'Twitter', icon: <FaTwitter className="text-blue-400" />, href: 'https://x.com/Optimism?mx=2' },
      { name: 'Gov Twitter', icon: <FaTwitter className="text-blue-400" />, href: 'https://x.com/OptimismGov' },
    ];
    

export default function LinkContainer() {
  return (
    <div className="w-full bg-[#E2E6E5] p-4 h-27  items-center justify-center ">
        <p className="text-2xl font-bold text-blue-600 mb-6 mt-2">Useful Resources 🔗</p>
      <div className="flex justify-between"> {/* Distribute items evenly across the row */}
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
    </div>
  );
}
