import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Calories from "../Calories";
import axios from "axios";
import useAuth from "../hooks/useAuth";
const index = () => {
  const id = useParams();

  const { state } = useAuth();
  console.log('state from user', state.auth?.verified?.status)

  return (
    <div className="grid    relative top-44">
        {!state.auth?.verified?.status ? <div> Please visiti your email address </div>:    <div className=" px-4 xs:w-full grid gap-4   ">
        <h1 className="text-4xl font-extrabold">
          <div className="flex gap-2 ">
            <div className="grow max-w-full h-14 bg-yellow-200">1</div>
            <div className="grow max-w-[550px] ">
              <>
                {" "}
                <div className="h-8   bg-blue-500 xs:square sm:h-auto xs:square md:bg-red-200 xs:h-auto md:square md:h-auto ">
                  <Calories />
                </div>
                <div className="h-8 bg-blue-500 sm:square sm:h-auto xs:square xs:h-auto md:square md:h-auto  "></div>
                <div className="h-8 bg-blue-500 sm:square sm:h-auto xs:square xs:h-auto"></div>{" "}
              </>
            </div>
            <div className="h-14  bg-yellow-200 grow max-w-full">1</div>
          </div>
        </h1>
      </div>}
    
    </div>
  );
};

export default index;
