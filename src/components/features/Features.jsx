import React from "react";
import { IoFastFoodOutline, IoLocationSharp } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GiHotMeal } from "react-icons/gi";


const Features = () => {
  return (
    <div className="max-w-[1620px] mb-10 px-12 rounded-lg p-4 mx-auto py-12 bg-gradient-to-b from-red-200/20 to-slate-100/20 ">
      <h2 className="my-4 mb-12 lg:mb-20 text-3xl text-center font-bold md:text-4xl lg:text-6xl text-red-700">How does it work</h2>
      <div className="grid md:grid-cols-4 gap-16">
        <div className="w-full flex gap-4 flex-col items-center">
          <IoLocationSharp size={100} className="text-red-400" />
          <h5 className="text-center text-2xl font-bold ">Select location</h5>
          <p className="text-center px-2">
            Choose the location where your food will be delivered.
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-4 ">
          <IoFastFoodOutline size={100} className="text-red-400" />
          <h5 className="text-2xl font-bold text-center">Choose Order</h5>
          <p className="text-center px-2">
            Check over hundreds of menus to pick your favorite food
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-4 ">
          <FaMoneyCheckDollar size={100} className="text-red-400" />
          <h5 className="text-center text-2xl font-bold ">Pay advanced</h5>
          <p className="text-center px-2">
            It's quick, safe, and simple. Select several methods of payment
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-4 ">
          <GiHotMeal size={100} className="text-red-400" />
          <h5 className="text-2xl font-bold text-center">Enjoy meals</h5>
          <p className="text-center px-2">
            Food is made and delivered directly to your home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
