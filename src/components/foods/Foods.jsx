import React, { useState } from "react";
import DisplayFoods from "./DisplayFoods";
import { foodData } from "../../data/data";

const Foods = () => {
  const [foods, setFoods] = useState(foodData);
  console.log(foods);

  const filterType = (category) => {
    setFoods(
      foodData.filter((item) => {
        return item.category === category;
      })
    );
  };

  // const sortData = [...foodData.sort((a,b) => b.price - a.price)]
  // const reversedSortedData = [...foodData.sort((a,b) => b.price - a.price)]

  const highToLow = () => {
    const sortData = [...foodData.sort((a,b) => b.price - a.price)]   
    setFoods(sortData)
  };

  const lowToHigh = () => {
    const reversedSortedData = [...foodData.sort((a,b) => a.price - b.price)]
    setFoods(reversedSortedData)
  }

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-red-400 mb-10 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter Section */}
      <div className="flex flex-col mb-10 lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-600">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(foodData)}
              className="border-red-500 text-red-500 hover:bg-red-400 hover:text-white m-1"
            >
              All
            </button>
            <button
              onClick={() => filterType('Burger')}
              className="border-red-500 text-red-500 hover:bg-red-400 hover:text-white m-1"
            >
              Burgers
            </button>
            <button onClick={() => filterType('Pasta')} className="border-red-500 text-red-500 hover:bg-red-400 hover:text-white m-1">
              Pasta
            </button>
            <button onClick={() => filterType('Pizza')} className="border-red-500 text-red-500 hover:bg-red-400 hover:text-white m-1">
              Pizza
            </button>
            <button onClick={() => filterType('Drink')} className="border-red-500 text-red-500 hover:bg-red-400 hover:text-white m-1">
              Drinks
            </button>
            <button onClick={() => filterType('Dessert')} className="border-red-500 text-red-500 hover:bg-red-400 hover:text-white m-1">
              Desserts
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-600">Filter Price</p>
          <div className="flex justify-between flex-wrap max-w-[390px] w-full">
            <button onClick={() => highToLow()} className="border-red-500 text-red-500 hover:bg-red-400 hover:text-white m-1">
              Price: High to Low
            </button>
            <button onClick={() => lowToHigh()} className="border-red-500 text-red-500 hover:bg-red-400 hover:text-white m-1">
            Price: Low to High  
            </button>
            
          </div>
        </div>
      </div>
      <div className="grid mb-10 grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, i) => (
          <DisplayFoods item={item} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
