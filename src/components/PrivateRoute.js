import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import Sidebar from "./SideBar";
import useAuth from './hooks/useAuth';

import HeaderType from "./ThemeHeader/HeaderType";
import NavBar from "./NavBar";
import CalCounter from "./CalCounter";
import Calories from "./Calories";


const PrivateRoute = () => {

  const [err, setErr] = useState({msg:'',text:''});
  const [state, setState] = useState({status:'',message:{}});
  useEffect(()=>{
    const secretRoute = async()=>{
    
      try {
        const res = await axios.get(`http://localhost:5050/u/secretContent`, { withCredentials: true });
      
        setState({status:res.data.status, message:res.data.message})
      } catch (err) {
        
        err.response.data.msg && setErr({msg:err.response.data.msg,text:err.response.data.msg.text});
        console.log( err.response.data.msg )
  
      }
    }
    secretRoute();
  },[])
  {/* <div>{state.status}</div>
      <div>{state.message.clearance}</div>
      <div>{err.msg}</div>  */}
  const { show, setShow } = useAuth();
  const Swap = () => {
    setShow(!true)
};

  return (
    <div className="grid place-items-center min-h-screen  relative top-40">

    <div className=" px-4 xs:w-full grid gap-4   ">
      <h1 className="text-4xl font-extrabold"> 
      <span className='bg-yellow-200'>
     

      </span>
      </h1>
      <div className="h-8   bg-blue-500 xs:square sm:h-auto xs:square xs:h-auto ">
        <Calories/>
      </div>
      <div className="h-8 bg-blue-500 sm:square sm:h-auto xs:square xs:h-auto"></div>
      <div className="h-8 bg-blue-500 sm:square sm:h-auto xs:square xs:h-auto"></div>
      <div className="h-8 bg-blue-500 sm:square sm:h-auto xs:square xs:h-auto"></div>
  
      
    </div>
    </div>
  )
}

export default PrivateRoute