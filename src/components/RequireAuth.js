import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import axios from "axios";
import { useEffect } from "react";

const RequireAuth = ()=>{
    const { authIsDone } = useAuth();
   
    useEffect( async()=>{
        const res = await axios.get('/u/',{withCredentials:true}) 
        console.log(authIsDone)
        
    },[])
    const location = useLocation();
    return(
        authIsDone ? <Outlet/> : <Navigate to="/SignIn" state={{from: location}} replace/>
    );
}
export default RequireAuth;