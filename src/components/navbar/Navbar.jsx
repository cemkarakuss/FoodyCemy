import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* LeftSide */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} onClick={() => setNav(!nav)} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:4xl px-2">
          F<span className="font-bold text-red-400">OO</span>DY{" "}
          <span className="font-bold">CEMY</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-red-400 text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/*SearchInput*/}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent focus:outline-none w-full p-2"
          type="text"
          placeholder="Search food"
        />
      </div>
      {/* Cart Button */}

      <button className="bg-red-400 border-none text-white hidden md:flex items-center py-2 px-2 rounded-lg">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>

      {/* MobileMenu */}
      {/* Overlay */}
      {nav ? (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/70 z-10"></div>
      ) : (
        ""
      )}

      {/* SideDrawerMenu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] bg-white h-screen z-10 duration-500"
            : "fixed top-0 left-[-100%] w-[300px] bg-white h-screen z-10 duration-1000"
        }
      >
        <AiOutlineClose
          size={30}
          onClick={() => setNav(!nav)}
          className="top-4 right-4 absolute cursor-pointer hover:rotate-180 duration-200 hover:scale-125 hover:text-red-500"
        />
        <h2 className="text-2xl p-4">
          F<span className="text-red-400 font-bold">OO</span>DY{" "}
          <span className="font-bold">CEMY</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4  text-gray-700">
            <li className="text-xl cursor-pointer hover:scale-105 hover:text-red-400 duration-300 transition-colors  py-4 flex items-center">
              <TbTruckDelivery size={25} className="mr-3" /> Orders
            </li>
            <li className="text-xl cursor-pointer hover:scale-105 hover:text-red-400 duration-300 transition-colors py-4 flex items-center">
              <MdFavorite size={25} className="mr-3" /> Favorites
            </li>
            <li className="text-xl cursor-pointer hover:scale-105 hover:text-red-400 duration-300 transition-colors py-4 flex items-center">
              <FaWallet size={25} className="mr-3" /> Wallet
            </li>
            <li className="text-xl cursor-pointer hover:scale-105 hover:text-red-400 duration-300 transition-colors py-4 flex items-center">
              <MdHelp size={25} className="mr-3" /> Help
            </li>
            <li className="text-xl cursor-pointer hover:scale-105 hover:text-red-400 duration-300 transition-colors py-4 flex items-center">
              <AiFillTag size={25} className="mr-3" /> Promotion
            </li>
            <li className="text-xl cursor-pointer hover:scale-105 hover:text-red-400 duration-300 transition-colors py-4 flex items-center">
              <BsFillSaveFill size={25} className="mr-3" /> Best Ones
            </li>
            <li className="text-xl cursor-pointer hover:scale-105 hover:text-red-400 duration-300 transition-colors py-4 flex items-center">
              <FaUserFriends size={25} className="mr-3" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
