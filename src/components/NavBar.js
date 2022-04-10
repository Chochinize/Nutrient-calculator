import React from "react";
import { Link } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Logout from './Logout'
const NavBar = () => {


  return (
    <header className="border-2   border-x-0 border-t-0 border-black ">
      
   <ul className="flex justify-between  realtive  p-2 md:bg-red-100 md:relative">
     <li className="bg-gray-200 rounded-xl w-max p-2 hover:bg-gray-300"><Link to="/">Go to </Link></li>
     <li className="bg-gray-200 rounded-xl w-max p-2 hover:bg-gray-300"><Link to="/admin">Go to the Admin page</Link></li>
     <li className="bg-gray-200 rounded-xl w-max p-2 hover:bg-gray-300"><Link to="/Charts">Go to the Charts</Link></li>
  
     <li className="bg-gray-200 rounded-xl w-max p-2 hover:bg-gray-300"><Link to="/secret">PrivateRoute</Link></li>
     <li className="bg-gray-200 rounded-xl w-max p-2 hover:bg-gray-300"><Link to="/SignIn">SignIn</Link></li>
     <li className="bg-gray-200 rounded-xl w-max p-2 hover:bg-gray-300"><Link to="/SignUp">SignUp</Link></li>
     <Logout/>
    </ul>
    
</header>
  );
};

export default NavBar;
