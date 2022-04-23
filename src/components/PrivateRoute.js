import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import Sidebar from "./SideBar";
import useAuth from './hooks/useAuth';


import Calories from "./Calories";


const PrivateRoute = () => {

  const [err, setErr] = useState({msg:'',text:''});
  const [state, setState] = useState({status:'',message:{}});

  
  const { authIsDone ,user, auth} = useAuth()
  console.log('autj',auth)
  // const { users, state, dispatch, setAuthIsDone,authIsDone } = useAuth();
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
 
  const { show, setShow } = useAuth();
  const Swap = () => {
    setShow(!true)
};
console.log(state.message.username)
console.log('ath',authIsDone)
  return (
    
 <div className="grid    relative top-44">
    <div className=" px-4 xs:w-full grid gap-4   ">
      <h1 className="text-4xl font-extrabold"> 

         <div class="flex gap-2 ">
  <div class="grow max-w-full h-14 bg-yellow-200">
    1
  </div>
  <div class="grow max-w-[550px] ">
          {authIsDone ?   (<> <div className="h-8   bg-blue-500 xs:square sm:h-auto xs:square md:bg-red-200 xs:h-auto md:square md:h-auto ">

        
        <Calories/>
      </div>
      <div className="h-8 bg-blue-500 sm:square sm:h-auto xs:square xs:h-auto md:square md:h-auto  ">
   
      </div> 
      <div className="h-8 bg-blue-500 sm:square sm:h-auto xs:square xs:h-auto"></div> <div> you are logged as  {state.message.email}</div></>)  
      :( <> <div>{err.msg}</div></>)  }
  </div>
  <div class="h-14  bg-yellow-200 grow max-w-full">
    1
  </div>
</div>
      
      
 
      </h1>
    
     
      
    </div>
    </div>
  )
}

export default PrivateRoute