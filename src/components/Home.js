import React, { useContext, useState, useEffect, } from 'react'
import { GlobalContext } from '../context/ContextApi'
import axios from 'axios';
import { Link } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import Sidebar from './SideBar';
import jwt_decode from 'jwt-decode';

const Home = () => {
  const [state, setState] = useState({message:[],token:{}});
  const [err, setErr] = useState({msg:'',text:''});
  const { auth } = useAuth();
  console.log('any route',auth)
  useEffect(()=>{
    const secretRoute = async()=>{
    
      try {
        const res = await axios.get(`/u`, { withCredentials: true });
        console.log('wait for response',res)
        // setState({message:res.data.message,token:jwt_decode(res.data.token)})
        console.log(res)
      } catch (err) {
        console.log(err.response.data.msg)
        err.response.data.msg && setErr({msg:err.response.data.msg,text:err.response.data.msg.text});
      }
    }
    secretRoute();
  },[])
  console.log(err)
  
 console.log('this is a state token',state?.token?.id)
 console.log('this is a state token',axios.defaults.baseURL)
  return (
   <div >
     <div className='absolute'>
dsadas
     </div>
     <div>{err.msg}</div>
   </div>
  )

}

export default Home

