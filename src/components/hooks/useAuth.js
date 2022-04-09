import { useContext } from "react";
import { GlobalContext } from "../../context/ContextApi";

const useAuth = ()=>{
    return useContext(GlobalContext);
}

export default useAuth;