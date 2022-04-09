import { useEffect } from 'react'
import LiveChart from "./components/Chart";
import Graphics  from "./components/Graphics";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Layout from './components/Layout';
import Missing from './components/Missing';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Lounge from './components/Lounge';
import RequireAuth from './components/RequireAuth';
import useAuth from './components/hooks/useAuth';
import PrivateRoute from './components/PrivateRoute'
import { useState } from 'react' 
function App() {
  
  
  const { show,setShow } = useAuth()
  const Swap = () => {
    setShow(!true)
};
  console.log(show)
      return (
        <>
         {show ?  <button onClick={Swap} >
                  
                  <svg
                    className="w-4 h-4 text-gray-300 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M10.25 6.75L4.75 12L10.25 17.25"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M19.25 12H5"
                    ></path>
                  </svg>
                </button> : ''}
        <Routes>
            
          <Route path='/' element={<Layout />}>
            {/* Public routes */}
            <Route path='SignIn' element={<SignIn/>}/>
            <Route path='Charts' element={<Graphics/>}/>
            <Route path='SignUp' element={<SignUp/>}/>
            <Route path='secret' element={<PrivateRoute/>}/>


            {/* Protected routes */}
            {/* <Route element={<RequireAuth/>}> */}
              <Route path='/' element={<Home/>}/>
              <Route path='editor' element={<Editor/>}/>
              <Route path='admin' element={<Admin/>}/>
              <Route path='lounge' element={<Lounge/>}/>
              
            {/* </Route> */}
            {/* Catch all  */}
            <Route path='*' element={<Missing/>}/>
          </Route>
        </Routes>
        </>
  );
}

export default App;
