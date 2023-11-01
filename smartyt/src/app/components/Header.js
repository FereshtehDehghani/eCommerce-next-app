"use client";
import React from "react";
import Logo from "./Logo";
import Container from "./Container";
import { LiaSearchSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="bg-bodyColor h-20">
      <Container className="h-full flex items-center md:gap-5 justify-between md:justify-start">
        <Logo />
        {/* Search Feild */}
        <div
          className="w-full bg-[white] hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50
        rounded-full px-4 py-1.5 focus-within:border-[#F4511E]
        group"
        >
          <LiaSearchSolid className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search for products"
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
        {/* Login/Register */}
        <div
          onClick={() => signIn()}
          className="headerDiv cursor-pointer hover:bg-[white]"
        >
          <AiOutlineUser className="text-2xl" />
          <p className="text-sm font-semibold">Login/Register</p>
        </div>
        {/* Card button */}
        <div
          className="bg-black rounded-full text-slate-100 hover:text-white
         hover:bg-slate-950 flex items-center justify-center gap-x-1 px-3 py-1.5
         border-[1px] border-black hover:border-orange-600 duration-200 relative"
        >
          <IoMdCart className="text-xl" />
          <p className="text-sm font-semibold">$0.00</p>
          <span
            className="bg-white text-orange-600 rounded-full w-5 h-5 text-xs font-semibold
            absolute -top-1 -right-2 flex items-center justify-center shadow-xl shadow-black"
          >
            10
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Header;
