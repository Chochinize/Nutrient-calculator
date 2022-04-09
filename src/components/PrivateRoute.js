import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  

  return (
    <div>
      <div>{state.status}</div>
      <div>{state.message.clearance}</div>
      <div>{err.msg}</div>
    </div>
  )
}

export default PrivateRoute