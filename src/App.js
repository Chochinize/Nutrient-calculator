
import Graphics  from "./components/Graphics";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Layout from './components/Layout';
import Missing from './components/Missing';
import Editor from './components/Editor';
import Admin from './components/Admin';
import PrivateRoute from './components/PrivateRoute'
import { useEffect } from "react";
import axios from "axios";
import Calories from "./components/Calories";
import {useState} from 'react'
import NavBar from "./components/NavBar";



function App() {


      return (
        <div className="">
          
         
          
          <Routes>
          <Route path='/' element={<Layout />}>
            {/* Public routes */}
            <Route path='SignIn' element={<SignIn/>}/>
            {/* <Route path='Charts' element={<Graphics/>}/> */}
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
       
        </div>
  );
}
export default App;
