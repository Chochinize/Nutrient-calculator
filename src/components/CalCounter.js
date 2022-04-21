import React from "react";

const CalCounter = () => {
  return (
    <div className="grid grid-cols-2 h-full ">
      <div className="bg-blue-200 ">
        <select className="appearance-none 
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option defaultChecked>Choose product</option>
          <option>Rise</option>
          <option>Oats</option>
          <option>Chicken</option>
        </select>
        <label className="p-2">
          <input
            type="number"
            className=" p-2 outline-none "
            placeholder="place your grams"
            
          />
        </label>
      </div>
      <div className="bg-red-200">2</div>
    </div>
  );
};

export default CalCounter;
