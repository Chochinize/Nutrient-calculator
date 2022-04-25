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
  
  useEffect(()=>{
    const secretRoute = async()=>{
    
      try {
        const res = await axios.get(`/u/`, { withCredentials: true });
      
        setState({message:res.data.message,token:jwt_decode(res.data.token)})
        console.log(res)
      } catch (err) {
        // err.response.data.msg && setErr({msg:err.response.data.msg,text:err.response.data.msg.text});
      }
    }
    secretRoute();
  },[])
 console.log('this is a state token',state?.token?.id)
  return (
   <div >
     <div className='absolute'>
      {state?.token ? state.token.id: 'nqma token'}
      {/* {state.message.map((item,id)=>{
        return(
          <div key={id}>
            {item.artist}
          </div>
        )
      })} */}
     </div>
     <div>{err.msg}</div>
   </div>
  )

}

export default Home