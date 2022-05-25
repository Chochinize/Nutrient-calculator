import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Calories from "../Calories";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Loaders from "../Loaders";
import BarChart from "../Charts/BarChart";

const index = () => {
  const id = useParams();
  const videoRef = useRef(null)
  const photoRef = useRef(null)

  // const getVideo = ()=>{
  //   navigator.mediaDevices.getUserMedia({
  //     audio:true,
  //     video:{width:1920, height:1080,}
  //   }).then(stream=>{
  //     let video = videoRef.current;
  //     video.srcObject = stream;
  //     video.play();
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  // }

  // useEffect(()=>{
  //   getVideo();
  // },[videoRef])

  const { state } = useAuth();
  const currentData = {protein:130,carbs:120,fats:30,calorie:33}

  return (
    <div className="grid    relative top-44">
        {!state.auth?.verified?.status ? <div className=" px-4 xs:w-full grid gap-4   ">
        <h1 className="text-4xl font-extrabold">
          <div className="flex gap-2 ">
            <div className="grow max-w-full   "></div>
            <div className="grow max-w-[550px] ">
              <>
                {" "}
                <div className="h-8 xs:square sm:h-auto xs:square  mb-2 rounded-[10px] xs:h-auto md:square md:h-auto ">
                    
                
                  <Loaders/>
                </div>
                <div className="h-8  sm:square sm:h-auto xs:square xs:h-auto md:square md:h-auto  "></div>
                <div className="h-8  sm:square sm:h-auto xs:square xs:h-auto md:square md:h-auto  "></div>
                <div className="h-8  xs:square xs:h-auto md:square md:h-auto"></div>
              </>
            </div>
            <div className="h-14   grow max-w-full"></div>
          </div>
        </h1>
      </div>
      :
      <div className=" px-4 xs:w-full grid gap-4   ">
        <h1 className="text-4xl font-extrabold">
          <div className="flex gap-2 ">
            <div className="grow max-w-full  xs:hidden sm:invisible lg:visible  "></div>
            <div className="grow max-w-[550px] ">
              <>
                {" "}
                <div className="h-8 xs:square sm:h-auto xs:square border-[2px] bg-gradient-to-r from-white to-white border-black mb-2 rounded-[10px] xs:h-auto md:square md:h-auto ">
                    
                  <Calories />

                </div>
                <div className="h-8 xs:square sm:h-auto sm:square md-full:square xs:s border-[1px] border-black mb-2 rounded-[10px]  xs:h-auto md:h-auto ">
                <BarChart currentData={currentData} />
                
                </div>
                <div className="h-8 xs:square sm:h-auto sm:square md-full:square xs:s border-[1px] border-black mb-2 rounded-[10px]  xs:h-auto md:h-auto ">
              {/* <video ref={videoRef}> </video> */}
              
              
                </div>
                <div className="h-8 xs:square sm:h-auto sm:square md-full:square xs:s border-[1px] border-black mb-2 rounded-[10px]  xs:h-auto md:h-auto ">
              {/* <video ref={videoRef}> </video> */}
              
                </div>
              </>
            </div>
            <div className="grow max-w-full  xs:hidden sm:invisible  lg:visible  "></div>
          </div>
        </h1>
      </div>}
    
    </div>
  );
};

export default index;
