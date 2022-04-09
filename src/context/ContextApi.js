import { createContext, useEffect, useState, useReducer } from "react";
import { authenticateUser } from "../helpers/apiCalls";
import reducer  from "./reducer";

export const GlobalContext = createContext();

const ContextApi = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authIsDone, setAuthIsDone] = useState(false);
  const [show, setShow] = useState(false);

  const initialState = { 
    notify: {}, auth: {}, cart: [], modal: [], orders: [], users: [], categories: [], 

    
}

const [state, dispatch] = useReducer(reducer, initialState)


  // useEffect(() => {
  //   const authMe = async () => {
  //     try {
  //       const res = await authenticateUser();

  //       if (!res.error) {
  //         setUser(res);
  //         setAuthIsDone(true);
  //         return;
  //       }
  //     } catch (error) {}
  //   };
  //   authMe();
  // }, []);

  return (
    <GlobalContext.Provider
      value={{ user, setUser, state, authIsDone, setAuthIsDone, dispatch, show, setShow }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextApi;
