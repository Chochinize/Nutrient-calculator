import React,{ useContext, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/ContextApi'


const Logout = () => {
    
  const { authIsDone, setAuthIsDone,dispatch} = useContext(GlobalContext);
    const navigate = useNavigate();
  //   useEffect(()=>{
    
  //       try {
  //           const LoggingOut = async()=>{
  //               const res = await axios.get('http://localhost:5050/u/LogOut',{ withCredentials:'include' })
  //               console.log(res.data)
  //           }
  //           LoggingOut()  
  //           navigate('/')
  //       } catch (error) {
            
  //       }
  // })

  const logoutUser = async()=>{
   console.log('log out')
    try {
      const res = await axios.get('/u/LogOut',{ withCredentials:true })
      // dispatch({type:'AUTH', payload:{successs:res.data }})
      // setAuthIsDone(false);
      // navigate('/SignIn');
      
    } catch (error) {
      console.log(error.response.data)
    }
  }
  return (
    <div>
      <div className='mx-2' onClick={(e)=>logoutUser()}>LogOut</div>
    </div>
  )
}

export default Logout