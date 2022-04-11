
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



function App() {

  useEffect( async()=>{
    const res = await axios.get('http://localhost:5050/',{withCredentials:true}) 
    console.log(res)
    
    
},[])
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
