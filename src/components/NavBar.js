import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Logout from './Logout'
import { Tab } from "@headlessui/react";
import Example from './Tab'
import axios from "axios";


const NavBar = () => {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  console.log(offset); 

  useEffect( async()=>{
    const res = await axios.get('http://localhost:5050/',{withCredentials:true}) 
    console.log(res)
    
    
},[])


  return (
    <header className="border-2  w-full relative h-full    border-black font-dongle font-extrabold text-3xl  ">
    
      {/* <div className={ `mx-[40rem]  transition ease-in-out    fixed ${offset > 51 ? 'top-[14px]  ':'top-[5rem]'} left-[0rem] right-[0rem] transition ease-in-out  rounded-md   ${offset > 50 ? `transform scale-x-[3] -translate-y-4  h-24 text-white  `:''}   bg-black text-[16px] h-[3rem] text-2xl `} >
          <div className={ `${offset > 51 ? 'flex justify-between -translate-x-48   items-center h-full scale-x-[0.3] ':'flex justify-evenly items-center h-full scale-x-[1]   text-3xl text-white '}`}> 
              <div className={`border-2 border-white px-5 hover:bg-white hover:text-black`}>Menu</div>
              <div className="border-2 border-white px-5 hover:bg-white hover:text-black">Account</div>
              <div className="border-2 border-white px-5 hover:bg-white hover:text-black">News </div>
          </div>
          </div> */}
   <ul className="flex justify-between      ">
  
     <li className="bg-gray-200 rounded-xl w-max p-2 hover:bg-gray-300"><Link to="/">Go to </Link></li>
    
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
// text-transparent bg-clip-text bg-gradient-to-t from-white to-green-300 border-2 border-black rounded-md  px-4 text-[40px]     