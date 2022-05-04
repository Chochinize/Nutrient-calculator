import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Calories from "../Calories";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Loaders from "../Loaders";

const index = () => {
  const id = useParams();

  const { state } = useAuth();
  console.log('state from user', state.auth?.verified?.status)

  return (
    <div className="grid    relative top-44">
        {!state.auth?.verified?.status ? <div className=" px-4 xs:w-full grid gap-4   ">
        <h1 className="text-4xl font-extrabold">
          <div className="flex gap-2 ">
            <div className="grow max-w-full   border-2">1</div>
            <div className="grow max-w-[550px] ">
              <>
                {" "}
                <div className="h-8 xs:square sm:h-auto xs:square border-[1px] border-black mb-2 rounded-[10px] xs:h-auto md:square md:h-auto ">
                    
                
                  <Loaders/>
                </div>
                <div className="h-8 bg-blue-500 sm:square sm:h-auto xs:square xs:h-auto md:square md:h-auto  ">Here is Chart</div>
                <div className="h-8 bg-blue-500 sm:square sm:h-auto xs:square xs:h-auto md:square md:h-auto  ">Here is Chart</div>
                <div className="h-8 bg-blue-500 xs:square xs:h-auto md:square md:h-auto"></div>
              </>
            </div>
            <div className="h-14  bg-yellow-200 grow max-w-full">1</div>
          </div>
        </h1>
      </div>
      :
      <div className=" px-4 xs:w-full grid gap-4   ">
        <h1 className="text-4xl font-extrabold">
          <div className="flex gap-2 ">
            <div className="grow max-w-full  xs:hidden sm:invisible lg:visible  ">3</div>
            <div className="grow max-w-[550px] ">
              <>
                {" "}
                <div className="h-8 xs:square sm:h-auto xs:square border-[2px] bg-gradient-to-r from-white to-white border-black mb-2 rounded-[10px] xs:h-auto md:square md:h-auto ">
                    
                  <Calories />

                </div>
                <div className="h-8 xs:square sm:h-auto sm:square md-full:square xs:s border-[1px] border-black mb-2 rounded-[10px]  xs:h-auto md:h-auto ">
              
                </div>
                <div className="h-8 bg-blue-500 sm:square sm:h-auto xs:square xs:h-auto md:square md:h-auto  ">Here is Chart</div>
                <div className="h-8 bg-blue-500 xs:square xs:h-auto md:square md:h-auto"></div>
              </>
            </div>
            <div className="grow max-w-full  xs:hidden sm:invisible  lg:visible  border-2">2</div>
          </div>
        </h1>
      </div>}
    
    </div>
  );
};

export default index;
