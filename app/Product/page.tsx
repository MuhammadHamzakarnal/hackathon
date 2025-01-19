import React from "react";
import { Poppins } from "next/font/google";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const page = () => {
  const images = Array.from({ length: 30 }, (_, index) => `/Product/Rectangle (${index + 1}).svg`);

  return (
    <div className={`${poppins.className} md:mt-10`}>
      <div className="w-full h-auto mt-4 flex items-center justify-between px-4">
        <h5 className="text-2xl font-medium">New (500)</h5>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <h5 className="text-base font-normal">Hide Filters</h5>
            <HiAdjustmentsHorizontal className="ml-2" />
          </div>
          <div className="flex items-center">
            <h5 className="text-base font-normal">Sort By</h5>
            <SlArrowDown className="ml-2" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:mt-10">
        {/* Sidebar */}
        <div className="w-full md:w-[260px] h-auto px-4 md:ml-12">
          <ul className="hidden md:block space-y-6 text-[15px] font-medium">
            <li>Shoes</li>
            <li>Sports Bras</li>
            <li>Tops & T-Shirts</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Jackets</li>
            <li>Trousers & Tights</li>
            <li>Shorts</li>
            <li>Tracksuits</li>
            <li>Jumpsuits & Rompers</li>
            <li>Skirts & Dresses</li>
            <li>Socks</li>
            <li>Accessories & Equipment</li>
          </ul>
          <div className="block md:hidden space-y-3 text-[15px] font-medium">
            <li>Shoes</li>
            <li>Sports Bras</li>
            <li>Tops & T-Shirts</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Jackets</li>
            <li>Trousers & Tights</li>
            <li>Shorts</li>
            <li>Tracksuits</li>
            <li>Jumpsuits & Rompers</li>
            <li>Skirts & Dresses</li>
            <li>Socks</li>
            <li>Accessories & Equipment</li>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[7px] h-auto bg-gray-200"></div>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
          {images.map((image, index) => (
            <div key={index} className="w-full">
              <Image
                src={image}
                alt={`Product ${index + 1}`}
                width={348}
                height={348}
                className="w-full h-auto"
              />
              <div className="mt-3 text-[15px]">
                <h6 className="text-[#9E3500] font-medium">Just In</h6>
                <p className="font-medium mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-[#757575] font-normal">Men's Shoes</p>
                <p className="text-[#757575] font-normal">1 Color</p>
                <h6 className="font-medium mt-2">MRP: ₹ 10 795.00</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
