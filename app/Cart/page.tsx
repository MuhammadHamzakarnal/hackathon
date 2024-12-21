import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div>
      <div
        className={`${poppins.className} w-[1100px] mt-[40px] ml-[156px] flex flex-col gap-8`}
      >
        {/* Bag and Summary Wrapper */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Bag Section */}
          <div className="w-full md:w-2/3">
            <div className="w-full bg-[#F7F7F7] p-4 gap-2">
              <h5 className="font-medium text-[13px]">Free Delivery</h5>
              <p className="text-[11px] font-normal text-[#111111]">
                Applies to orders of ₹ 14 000.00 or more.{" "}
                <span className="font-medium text-[11px] underline ml-3">
                  View details
                </span>
              </p>
            </div>
            <h1 className="text-[22px] font-medium mt-4">Bag</h1>
            <div className="w-full mt-4 space-y-6">
              {/* Product Item */}
              <div className="flex items-start gap-6">
                <Image
                  src="/Featured/Image (5).svg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <div className="flex-1 border-b border-[#E5E5E5] pb-5">
                  <h5 className="font-medium text-[15px] text-[#111111]">
                    Nike Dri FIT ADV TechKnit Ultra
                  </h5>
                  <p className="text-[15px] font-normal text-[#757575]">
                    Mens Short-Sleeve Running Top
                  </p>
                  <p className="text-[15px] font-normal text-[#757575]">
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <p className="text-[15px] font-normal text-[#757575]">
                    Size L{" "}
                    <span className="ml-10 text-[15px] font-normal text-[#757575]">
                      Quantity 1
                    </span>
                  </p>
                  <div className="flex gap-3 mt-6">
                    <CiHeart className="w-6 h-6" />
                    <RiDeleteBin6Line className="w-6 h-6" />
                  </div>
                </div>
                <p className="font-normal text-[15px]">MRP: ₹ 3 895.00</p>
              </div>
              {/* Repeat Product Item for another product */}
              <div className="flex items-start gap-6">
                <Image
                  src="/Featured/Image (7).svg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <div className="flex-1 border-b border-[#E5E5E5] pb-5">
                  <h5 className="font-medium text-[15px] text-[#111111]">
                    Nike Air Max 97 SE
                  </h5>
                  <p className="text-[15px] font-normal text-[#757575]">
                    Mens Shoes
                  </p>
                  <p className="text-[15px] font-normal text-[#757575]">
                    Flat Pewter/Light Bone/Black/White
                  </p>
                  <p className="text-[15px] font-normal text-[#757575]">
                    Size 8{" "}
                    <span className="ml-10 text-[15px] font-normal text-[#757575]">
                      Quantity 1
                    </span>
                  </p>
                  <div className="flex gap-3 mt-6">
                    <CiHeart className="w-6 h-6" />
                    <RiDeleteBin6Line className="w-6 h-6" />
                  </div>
                </div>
                <p className="font-normal text-[15px]">MRP: ₹ 16 995.00</p>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full md:w-1/3">
            <div className="bg-white p-6 border border-[#E5E5E5] rounded-lg">
              <h1 className="text-[21px] font-medium">Summary</h1>
              <div className="flex justify-between mt-4">
                <p className="text-[15px] font-normal">Subtotal</p>
                <p className="text-[15px] font-normal">₹ 20 890.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[15px] font-normal">
                  Estimated Delivery & Handling
                </p>
                <p className="text-[15px] font-normal">Free</p>
              </div>
              <div className="flex justify-between border-y border-[#E5E5E5] py-4">
                <p className="text-[15px] font-normal">Total</p>
                <p className="text-[15px] font-normal">₹ 20 890.00</p>
              </div>
              <button className="w-full h-[60px] rounded-[30px] bg-black text-white text-[15px] font-medium mt-4">
                Member Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
