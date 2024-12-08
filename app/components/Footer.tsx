import React from "react";
import { Poppins } from "next/font/google";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className="bg-black max-sm:mt-56 mt-20 h-[331px] max-sm:h-auto mt-">
      <div className="max-sm:flex max-sm:flex-col max-sm:justify-center items-center  max-w-screen-xl mx-auto h-[331px] p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="mt-10 ">
            <ul>
              <li className={`${poppins.className} font-normal text-[10px]`}>
                Find A Store
              </li>
              <li
                className={`${poppins.className} font-normal text-[10px] mt-5`}
              >
                Become A Member
              </li>
              <li
                className={`${poppins.className} font-normal text-[10px] mt-5`}
              >
                Sign Up for Email
              </li>
              <li
                className={`${poppins.className} font-normal text-[10px] mt-5`}
              >
                Send Us Feedback
              </li>
              <li
                className={`${poppins.className} font-normal text-[9px] mt-5`}
              >
                Student Discounts
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <ul>
              <li className={`${poppins.className} font-normal text-[10px]`}>
                Get Help
              </li>
              <li
                className={`${poppins.className} font-normal text-[11px] mt-4 text-[#7E7E7E]`}
              >
                Order Status
              </li>
              <li
                className={`${poppins.className} font-normal text-[12px] mt-4 text-[#7E7E7E]`}
              >
                Delivery
              </li>
              <li
                className={`${poppins.className} font-normal text-[12px] mt-4 text-[#7E7E7E]`}
              >
                Returns
              </li>
              <li
                className={`${poppins.className} font-normal text-[11px] mt-4 text-[#7E7E7E]`}
              >
                Payment Options
              </li>
              <li
                className={`${poppins.className} font-normal text-[12px] mt-4 text-[#7E7E7E]`}
              >
                Contact Us On Nike.com Inquiries
              </li>
              <li
                className={`${poppins.className} font-normal text-[11px] mt-4 text-[#7E7E7E]`}
              >
                Contact Us On All Other Inquiries
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <ul>
              <li className={`${poppins.className} font-normal text-[10px]`}>
                About Nike
              </li>
              <li
                className={`${poppins.className} font-normal text-[12px] mt-4 text-[#7E7E7E]`}
              >
                News
              </li>
              <li
                className={`${poppins.className} font-normal text-[12px] mt-4 text-[#7E7E7E]`}
              >
                Careers
              </li>
              <li
                className={`${poppins.className} font-normal text-[11px] mt-4 text-[#7E7E7E]`}
              >
                Investors
              </li>
              <li
                className={`${poppins.className} font-normal text-[11px] mt-4 text-[#7E7E7E]`}
              >
                Sustainability
              </li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full  bg-[#7E7E7E]">
              <FaTwitter className="text-black" />
            </div>
            <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#7E7E7E]">
              <FaFacebookF className="text-black" />
            </div>
            <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#7E7E7E]">
              <TiSocialYoutubeCircular className="text-black" />
            </div>
            <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#7E7E7E]">
              <FaInstagram className="text-black" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[#7E7E7E]">
          <div className="flex items-center gap-2">
            <IoLocationOutline />
            <p className={`${poppins.className} font-normal text-[12px]`}>
              India
            </p>
            <p
              className={`${poppins.className} font-normal text-[11px] mt-4 md:mt-0`}
            >
              © 2023 Nike, Inc. All Rights Reserved
            </p>
          </div>

          <div className="flex gap-4  font-normal mt-4 md:mt-0">
            <p className={`${poppins.className} text-[11px]`}>Guides</p>
            <p className={`${poppins.className} text-[11px]`}>Terms of Sale</p>
            <p className={`${poppins.className} text-[11px] `}>Terms of Use</p>
            <p className={`${poppins.className} text-xs`}>
              Nike Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
