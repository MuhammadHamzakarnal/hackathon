import React from "react";
import { Poppins } from "next/font/google";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allProduct } from "@/sanity/lib/queries";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

type Products = {
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  imageUrl: string;
  description: string;
};

const page = async () => {
  const products: Products[] = await sanityFetch({ query: allProduct });

  return (
    <div className={`${poppins.className} md:mt-10`}>
      <div className="w-full h-auto mt-4 flex items-center justify-between px-4">
        <h5 className="text-2xl font-medium max-sm:text-base">New (500)</h5>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <h5 className="text-base font-normal max-sm:text-xs">Hide Filters</h5>
            <HiAdjustmentsHorizontal className="ml-2" />
          </div>
          <div className="flex items-center max-sm:text-xs">
            <h5 className="text-base font-normal">Sort By</h5>
            <SlArrowDown className="ml-2" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:mt-10">
        {/* Sidebar */}
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

        {/* Divider for large screens */}
        <div className="hidden md:block w-[7px] h-[359px] bg-gray-200"></div>

        {/* Product Grid */}
        <div className="w-full md:w-[calc(100%-260px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-5 gap-8">
            {products.map((product, index) => (
              <div
                className="group bg-gradient-to-b from-gray-50 to-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                key={index}
              >
                {/* Product Image */}
                <div className="relative">
                  <Image
                    src={product.imageUrl} // Product image
                    alt={product.productName} // Product name
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Details */}
                <div className="p-4 flex-grow">
                  {/* Product Name */}
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-indigo-600 relative">
                    {product.productName}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                  </h2>

                  {/* Category */}
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Category:</strong> {product.category}
                  </p>

                  {/* Price */}
                  <p className="text-lg font-bold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full inline-block mb-2">
                    ${product.price}
                  </p>

                  {/* Inventory */}
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Inventory:</strong> {product.inventory} units
                  </p>

                  {/* Colors */}
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Colors:</strong> {product.colors.join(", ")}
                  </p>

                  {/* Status */}
                  <p className="text-gray-600 text-sm mb-4">
                    <strong>Status:</strong> {product.status}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {product.description}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Related Categories Section */}
          <div className="w-full max-w-full h-auto mt-28 border-t border-[#E5E5E5] px-4">
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
                  <h5 className="font-normal text-xs text-center">{category}</h5>
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
