import Image from "next/image";
import React from "react";
import { LuSearch } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className={`${poppins.className} w-full overflow-x-hidden`}>
      <div className="w-full h-[36px] bg-[#F5F5F5] flex justify-between items-center px-4 sm:px-12">
        <Image
          src="/Images/NavbarImg/Frame.svg"
          alt="men logo"
          width={24}
          height={24}
          className="mt-[8px]"
        />
        <div className="flex items-center space-x-4 text-[11px]">
          <h2>Find a Store</h2>
          <div className="w-[2px] h-[14px] bg-black"></div>
          <h2>Help</h2>
          <div className="w-[2px] h-[14px] bg-black"></div>
          <h2>Join Us</h2>
          <div className="w-[2px] h-[14px] bg-black"></div>
          <h2>Sign In</h2>
        </div>
      </div>

      <div className="w-full h-[60px] flex items-center px-4 sm:px-12">
        <Image
          src="/Images/NavbarImg/logo.svg"
          alt="nike"
          width={78.47}
          height={78.47}
        />

        <ul className="hidden sm:flex flex-1 justify-center items-center space-x-6 text-[15px] font-medium">
          <li>New & Featured</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
          <li>SNKRS</li>
        </ul>

        <div className="flex items-center space-x-4 ml-auto">
          <div className="hidden sm:flex items-center bg-[#F5F5F5] rounded-full px-4 py-2">
            <LuSearch className="text-[20px]" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 text-[15px] bg-transparent placeholder-[#CCCCCC] outline-none"
            />
          </div>
          <LuHeart className="text-[24px]" />
          <IoBagOutline className="text-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
