import React, { useEffect } from "react";
import moment from "moment";

const Calculations = () => {
    
  return (
    <div>

      <div className="font-mono font-black text-4xl  ">
        <ul className="text-center">Today is {moment().format("LLL")}</ul>
        <span className="flex flex-col">
            <header> Head</header>
            <input type='text ' className="border-none outline-2æ"></input>

        </span>
      </div>
      
    </div>
  );
};

export default Calculations;
