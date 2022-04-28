import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import axios from "axios";
import { useEffect } from "react";

const RequireAuth = ()=>{
    const { authIsDone } = useAuth();
   console.log(authIsDone)
    useEffect( async()=>{
        const res = await axios.post('/u/',{withCredentials:true}) 
        console.log(authIsDone)
        console.log(res)
        
    },[])
    const location = useLocation();
    return(
        !authIsDone ? <Outlet/> : <Navigate to="/SignIn" state={{from: location}} replace/>
    );
}
export default RequireAuth;