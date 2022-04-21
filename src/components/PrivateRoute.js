import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import Sidebar from "./SideBar";
import useAuth from './hooks/useAuth';
import Calories from "./Calories";
import HeaderType from "./ThemeHeader/HeaderType";
import NavBar from "./NavBar";
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
      <div>{err.msg}</div>  <div className=" w-full flex   ">
            
           
          <ArrowCircleRightIcon onClick={Swap} className='h-10 w-10 absolute z-40'/>
            
         
          <Sidebar/>
        <Calories/>
           
          </div>*/}
  const { show, setShow } = useAuth();
  const Swap = () => {
    setShow(!true)
};

  return (
    <div>
      
         
     
     
      
          
     
      
       
      
    </div>
  )
}

export default PrivateRoute