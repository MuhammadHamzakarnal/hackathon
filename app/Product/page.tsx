import React from "react";
import { Poppins } from "next/font/google";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const page = () => {
  const images = Array.from(
    { length: 30 },
    (_, index) => `/Product/Rectangle (${index + 1}).svg`
  );

  return (
    <div className={`${poppins.className} md:mt-10`}>
      <div className="w-full h-auto mt-4 flex items-center justify-between px-4 ">
        <h5 className="text-2xl font-medium max-sm:text-base">New (500)</h5>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <h5 className="text-base font-normal max-sm:text-xs">
              Hide Filters
            </h5>
            <HiAdjustmentsHorizontal className="ml-2" />
          </div>
          <div className="flex items-center max-sm:text-xs">
            <h5 className="text-base font-normal">Sort By</h5>
            <SlArrowDown className="ml-2" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:mt-10">
        <div className="w-full md:w-[260px] h-auto px-4 md:ml-12 max-sm:mt-8">
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

        <div className="hidden md:block w-[7px] h-[359px] bg-gray-200"></div>

        <div>
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
                  <p className="font-medium mt-1">Nike Air Force 1 Mid 07</p>
                  <p className="text-[#757575] font-normal">Men s Shoes</p>
                  <p className="text-[#757575] font-normal">1 Color</p>
                  <h6 className="font-medium mt-2">MRP ₹ 10 795</h6>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full max-w-full h-auto  mt-28 border-t border-[#E5E5E5] px-4">
            <div>
              <h3 className="text-[19px] font-medium text-[#111111] mt-10">
                Related Categories
              </h3>
            </div>

            <div className="mt-6 w-full h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
              {[
                "Best Selling Products",
                "Best Shoes",
                "New Basketball Shoes",
                "New Football Shoes",
                "New Men's Shoes",
                "New Running Shoes",
                "Best Men's Shoes",
                "New Jordan Shoes",
                "Best Women's Shoes",
                "Best Training & Gym",
              ].map((category, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-full h-[34px] px-4 py-2 rounded-[20px] border border-[#CCCCCC]"
                >
                  <h5 className="font-normal text-xs text-center">
                    {category}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
