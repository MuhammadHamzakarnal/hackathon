import React from "react";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";

import { FaMobileAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { MdEditLocation, MdForwardToInbox } from "react-icons/md";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className={`${poppins.className}`}>
      <div className="h-[132px] w-full flex flex-col justify-center items-center">
        <h1 className="text-[32px] font-medium">GET HELP</h1>
        <input
          type="text"
          placeholder="What can we help you with?"
          className="border-[#757575] border text-[#757575] w-[350px] h-[56px] mt-6 rounded"
        />
      </div>
      <div className="container h-auto w-full ml-20 mt-20 ">
        <div className="w-[100%]">
          <h4 className="font-medium text-[28px]">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h4>
          <p className="font-normal text-[15px] text-[#111111] mt-4">
            We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options
          </p>
          <p className="font-normal text-base mt-7 ml-4 text-[#111111]">
            Visa Mastercard Diners Club Discover, American Express Visa Electron
            Maestro
          </p>
          <p className="font-normal text-base mt-7 ml-4 text-[#111111]">
            If you enter your PAN information at checkout you ill be able to pay
            for your order with PayTM or a local credit or debit card.
          </p>
          <p className="font-normal text-base mt-7 ml-4 text-[#111111]">
            Apple Pay
          </p>
          <div className="w-[993px] h-[115px] font-normal text-[15px] text-[#111111] mt-7">
            <p className="w-[893px]">
              Nike Members can store multiple debit or credit cards in their
              profile for faster checkout. If youre not already a Member join us
              today.
            </p>
            <div className="">
              <button className="text-white bg-black py-[7px] px-[21px] rounded-[30px] mt-4">
                JOIN US
              </button>
              <button className="text-white bg-black py-[7px] px-[21px] rounded-[30px] mt-4 ml-4">
                SHOP NIKE
              </button>
            </div>
            <div className="w-[923px] h-[168px]">
              <h5 className="text-[20px] font-medium text-[#111111] mt-6">
                FAQs
              </h5>
              <p className="text-base font-bold mt-3 text-[#111111]">
                Does my card need international purchases enabled?
              </p>
              <p className="w-[950px] text-base font-normal text-[#111111] mt-3">
                Yes, we recommend asking your bank to enable international
                purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p>
              <p className="text-[#111111] text-[15px] font-normal mt-7">
                Please note some banks may charge{" "}
                <span className="font-medium underline">
                  a small transaction fee
                </span>{" "}
                for international orders.
              </p>
            </div>
            <div className="mt-12">
              <p className="font-bold text-[15px]">
                Can I pay for my order with multiple methods?
              </p>
              <p className="font-normal text-[15px]">
                No payment for Nike orders cant be split between multiple
                payment methods.
              </p>
              <p className="font-bold text-[15px] mt-12">
                What payment method is accepted for SNKRS orders?
              </p>
              <p className="font-normal text-[15px]">
                You can use any accepted credit card to pay for your SNKRS
                order.
              </p>
            </div>
            <div>
              <p className="font-bold text-base mt-7">
                Why dont I see Apple Pay as an option?
              </p>
              <p className="w-[1000px] font-normal text-base">
                To see Apple Pay as an option in the Nike App or on Nike.com,
                you ill need to use a compatible Apple device running the latest
                OS be signed in to your iCloud account and have a supported card
                in your Wallet. Additionally you ll need to use Safari to use
                Apple Pay on Nike.com.
              </p>
            </div>
            <div className="mt-9">
              <p className="text-[15px] font-normal ">
                Was this answer helpful?
              </p>
              <div className="flex gap-2 mt-2">
                <BiSolidLike className="w-[30px] h-[30px]" />
                <BiSolidDislike className="w-[30px] h-[30px]" />
              </div>
              <p className="text-base font-medium text-[#757575] mt-5">
                RELATED
              </p>
              <p className="text-[rgb(17,17,17)] text-base font-medium underline ml-[16px] mt-3">
                WHAT ARE NIKE S DELIVERY OPTIONS?
              </p>
              <p className="text-[#111111] text-base font-medium underline ml-[16px] mt-3">
                HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[800px]">
          <h1 className="text-[28px] font-normal mb-20">CONTACT US</h1>
        </div>
        <div className="lg:mb-28 w-full border-[#CCCCCC] border-l flex flex-wrap max-sm:flex-col justify-around py-8">
          <div className="w-[265px] h-[42px] mb-4">
            <FaMobileAlt className="w-[64px] h-[64px] mx-auto" />
            <div className="text-center mt-5">
              <p className="font-medium text-base">000 800 919 0566</p>
              <p className="font-normal text-sm">
                Products & Orders: 24 hours a day, 7 days a week
              </p>
              <p className="font-normal text-sm">
                Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
              </p>
            </div>
          </div>
          <div className="w-[265px] h-[42px] mb-4 max-sm:mt-36">
            <RiMessage2Fill className="w-[64px] h-[64px] mx-auto" />
            <div className="text-center mt-5">
              <p className="font-medium text-[15px]">24 hours a day</p>
              <p className="font-normal text-[15px]">7 days a week</p>
            </div>
          </div>
          <div className="w-[265px] h-[42px] mb-4 max-sm:mt-32">
            <MdForwardToInbox className="w-[64px] h-[64px] mx-auto" />
            <div className="text-center mt-5">
              <p className="font-medium text-[15px]">Well reply within</p>
              <p className="font-normal text-[15px]">five business days</p>
            </div>
          </div>
          <div className="w-[265px] h-[42px] max-sm:mt-32">
            <MdEditLocation className="w-[64px] h-[64px] mx-auto" />
            <div className="text-center mt-5">
              <p className="font-medium text-[15px]">STORE LOCATOR</p>
              <p className="font-normal text-[15px]">
                Find Nike retail stores near you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
