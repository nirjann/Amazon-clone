import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top */}
      <div className="flex bg-amazon_blue p-1 items-center py-2">
        {/* Logo */}
        <div className="flex flex-grow mt-3 sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            height={40}
            width={150}
            objectFit="contain"
            className="cursor-pointer"
            alt="amazon logo"
          />
        </div>

        {/* Search bar */}
        <div
          className="hidden sm:flex items-center rounded-md bg-yellow-200 h-10 flex-grow
        hover:bg-yellow-400
        cursor-pointer
        "
        >
          <input
            type="text"
            placeholder="search"
            className="p-2 px-2 h-full w-6 flex-grow rounded-l-md focus:outline-none text-sm"
          />
          <SearchIcon className="h-12 p-3 cursor-pointer" />
        </div>
        {/* Orders and Accounts */}
        <div
          className="
      text-white
        flex
        items-center
        space-x-6
        mx-5
        text-xs
        whitespace-nowrap
        "
        >
          <div className="link space-y-[2px]">
            <p>Hello Nirjan Pakhira!</p>
            <p className="font-bold">Account & List</p>
          </div>
          <div className="link space-y-[2px]">
            <p>Returns</p>
            <p className="font-bold">& Orders</p>
          </div>
          <div
            className="
          link 
          space-y-[2px]
          relative
         
          mt-2
          "
          >
            <span
              className="
            absolute 
            top-0
            right-0 
            md:right-2 
            h-4
            w-4
            bg-yellow-400
            text-center
            rounded-full
            text-black
            font-bold
            "
            >
              0
            </span>
            <ShoppingCartIcon className=" h-8" />
            <p className="font-bold hidden md:inline ">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-6 p-2 pl-6">
        <p className="flex items-center link">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Bussiness</p>
        <p className="link">Todays Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Fashion</p>
        <p className="link hidden lg:inline-flex">Footwear</p>
        <p className="link hidden lg:inline-flex">Health & Medication</p>
        <p className="link hidden lg:inline-flex">Furnitures</p>
        <p className="link hidden lg:inline-flex">Eyewear</p>
      </div>
    </header>
  );
}

export default Header;
