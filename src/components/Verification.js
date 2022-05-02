import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const Verification = () => {
const params = useParams()
const navigate = useNavigate()
console.log(params.id)
    useEffect(async()=>{
        try {
            const res = await axios.get(`/u/${params.id}/verifyToken`)
            navigate('/SignIn')
        } catch (error) {
            
        }
    },[])    

  return (
    <div>Verification</div>
  )
}

export default Verification