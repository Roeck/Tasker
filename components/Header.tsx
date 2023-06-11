"use client";

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-indigo-500/10 rounded-b-2xl">
        {/* invisible div - will act like a gradient */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-800 to-[#061a6b] rounded-md filter blur-3xl opacity-50 -z-50" />

        <Image
          src="/public/logo.png"
          alt="Tasker Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        {/* Search Box */}

        {/* Avatar */}
      </div>
    </header>
  );
}

export default Header;
