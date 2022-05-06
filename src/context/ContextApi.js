import { createContext, useEffect, useState, useReducer } from "react";
import { authenticateUser } from "../helpers/apiCalls";
import reducer  from "./reducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

const ContextApi = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authIsDone, setAuthIsDone] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const initialState = { 
    notify: {}, auth: {}, cart: [], modal: [], orders: [], users: [], categories: [],products:[] 

    
}

const [state, dispatch] = useReducer(reducer, initialState)
console.log('state products',state)
useEffect(() => {
  try {
    const fetchData = async () => {
      const res = await axios.get(`/u/`);
      console.log('refetching',res)
      dispatch({type:'PRODUCTS', payload:res})
    };
    fetchData();

  } catch (error) {
    return error;
  }
}, []);

  useEffect(() => {
    
    const authMe = async () => {
      try {
        const res = await authenticateUser();

        if (!res.error) {
          dispatch({ type: 'AUTH', payload:res})
          setUser(res);
          console.log('fast data check',res._id)
          setAuthIsDone(true);
          navigate(`/u/${res._id}`);
          return;
        }
      } catch (error) {}
    };
    authMe();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ user, setUser, state, authIsDone, setAuthIsDone, dispatch, show, setShow }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextApi;
