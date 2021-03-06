
import Graphics  from "./components/Graphics";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Layout from './components/Layout';
import Missing from './components/Missing';
import Editor from './components/Editor';

import PrivateRoute from './components/PrivateRoute'
import { useEffect } from "react";
import axios from "axios";
import Calories from "./components/Calories";
import {useState} from 'react'
import NavBar from "./components/NavBar";
import RequireAuth from "./components/RequireAuth";
import UserPanel from './components/UserPanel'
import Verification from "./components/Verification";


axios.defaults.baseURL = process.env.NODE_ENV  ===  'development' ? process.env.REACT_APP_DEV_BASEURL : process.env.REACT_APP_PROD_BASEURL  ;
axios.defaults.withCredentials = true;
console.log(axios.defaults.baseURL)
console.log(process.env)
function App() {


  // const [ result, setResult ] = useState({
  //   protein:[0],
  //   carbs: [0],
  //   fats:[0]
  // })
  // setResult(prevState=>({...prevState,protein:3}))
  // console.log(result.protein)
  useEffect(() => {
    document.title = "WrokWrok"
    console.log(123)
 }, []);
      return (
                 
          <Routes>
          <Route path='/' element={<Layout />}>
            {/* Public routes */}
            <Route path='SignIn' element={<SignIn/>}/>
            <Route path='SignUp' element={<SignUp/>}/>
            <Route path='secret' element={<PrivateRoute/>}/>


            {/* Protected routes */}
            {/* <Route element={<RequireAuth/>}> */}
              {/* <Route path='/' element={<Home/>}/> */}
              {/* <Route path='editor' element={<Editor/>}/> */}
              
              <Route path='u/:id' element={<UserPanel/>}/>
              <Route path='u/:id/verifyToken' element={<Verification/>}/>
              
              
            {/* </Route> */}
            {/* Catch all  */}
            <Route path='*' element={<Missing/>}/>
          </Route>
        </Routes>
       

  );
}
export default App;
