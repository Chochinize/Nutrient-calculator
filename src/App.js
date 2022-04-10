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
import Sidebar from './components/SideBar';
import { ArrowCircleRightIcon } from '@heroicons/react/solid'


function App() {
  
  


      return (
        <>
      
        
           
          
       
        
      
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
              
              
            {/* </Route> */}
            {/* Catch all  */}
            <Route path='*' element={<Missing/>}/>
          </Route>
        </Routes>

                

        </>
  );
}

export default App;
