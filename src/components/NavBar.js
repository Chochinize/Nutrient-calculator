import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Logout from "./Logout";
import { Tab } from "@headlessui/react";
import Example from "./Tab";
import axios from "axios";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useParams } from "react-router-dom";

const NavBar = () => {
  const [offset, setOffset] = useState(0);
  
  const { state,user } = useAuth();
  
  console.log('from auth',state.auth?.verified?.status);
  console.log(console.log(state.auth.email))
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(()=>{
    return state
  },[state])
  console.log(offset);
  const { id } = useParams();
  useEffect(async () => {
    const res = await axios.get("/", {
      withCredentials: true,
    });
    console.log('res.data',res);
  }, []);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header className="w-full h-full absolute   font-dongle font-extrabold text-3xl  ">
      <div
        className={`transition ease-in-out z-50    fixed ${
          offset > 51
            ? "top-[14px]  p-2  "
            : "top-[5rem] w-[800px] sm:w-full xs:w-full m-auto  "
        } left-[0rem]  right-[0rem] transition ease-in-out     ${
          offset > 50
            ? `transform scale-x-[3] -translate-y-4   text-white  `
            : ""
        }   bg-black text-[16px]  h-[4rem] text-2xl `}
      >
        <div
          className={`${
            offset > 51
              ? "flex justify-between    items-center h-full scale-x-[0.3] "
              : "flex justify-end mr-4 items-center h-full scale-x-[1]   text-3xl text-white "
          }`}
        >
          <div className={`   cursor-pointer`}>

            
            <Menu as="div" className="">
              <div>
                <Menu.Button
                  className="inline-flex h-7 justify-center w-max rounded-md border border-gray-300 shadow-sm  px-2   text-xl font-extrabold text-white
                                     hover:text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                >

                  {!state.auth?.verified?.status ? '' : (<Link to={`/u/${state.auth._id}`} className="mx-2">{state.auth.email} </Link>)}
                  
                  <ChevronDownIcon
                    className="-mr-2 ml-2 h-6 w-4"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute  mt-4 w-full  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1 -ml-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-2xl"
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                       <a
                       href="/#"
                       className={classNames(
                         active
                           ? "bg-gray-100 text-gray-900"
                           : "text-gray-700",
                         "block px-4 py-2 text-2xl"
                       )}
                     >
                       Options
                     </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                      <a
                      href={`/${state.auth._id}`}
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700",
                        "block px-4 py-2 text-2xl"
                      )}
                    >
                      {!state.auth?.verified?.status ? <Link to="/SignIn" className="mx-2">Log in </Link> : <Logout/>}
                      {/* <Logout/> */}
                      {/* <Link to="/SignIn" className="mx-2">Log in </Link> */}
                    </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          {/* <div    className="inline-flex h-7  justify-center w-max rounded-md border border-gray-300 shadow-sm px-2      text-2xl font-extrabold text-white
                                     hover:text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 cursor-pointer">
                                       <span className="-my-0.5">

         <a href={`/u/${state.auth._id}`}>
              Account
           </a>
                                       </span>
          </div>
          <div className="inline-flex h-7  justify-center w-max rounded-md border border-gray-300 shadow-sm px-2      text-2xl font-extrabold text-white
                                     hover:text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 cursor-pointer">
        <span className="-my-0.5">
          
              News{" "}
          </span>
          </div> */}
        </div>
      </div>
      <ul className="flex justify-end  text-2xl w-full ">
       

    
    
        {/* <li className="bg-blue-400  w-max  h-max  hover:bg-gray-300 ">
          <Link to="/" className="mx-2">Home</Link>
        </li> */}
        {/* <li className="bg-gray-200  w-max h-max  hover:bg-gray-300 ">
          <Link to={`u/${id}`} className="mx-2">Acount</Link>
        </li> */}
        {/* <li className="bg-gray-200  w-max  h-max  hover:bg-gray-300 ">
          <Link to="/SignIn" className="mx-2">SignIn</Link>
        </li> */}
        {/* <li className="bg-gray-200  w-max h-max  hover:bg-gray-300 ">
          <Link to="/SignUp" className="mx-2">SignUp</Link>
        </li> */}


        {!state.auth?.verified?.status ? (   <ul className="flex gap-4">

           <li className="bg-gray-200 flex p-2 gap-2 border-2 border-black  w-max h-max  hover:bg-gray-300 ">
          <Link to="/SignIn" className="mx-2">Log in </Link>
         
        </li>
        <li className="bg-gray-200 flex p-2 gap-2 border-2 border-black  w-max h-max  hover:bg-gray-300 ">
          <Link to="/SignUp" className="mx-2">Sign Up </Link>
         
        </li>
        </ul>
        ) : <li className="bg-gray-200  w-max h-max  hover:bg-gray-300 ">
          <Link to={`/u/${state.auth._id}`} className="mx-2">{state.auth.email} </Link>
          
          
        </li> }
        <li className="bg-gray-200  w-max  h-max hover:bg-gray-300 cursor-pointer ">
        </li>
      </ul>
    </header>
  );
  
};

export default NavBar;
// text-transparent bg-clip-text bg-gradient-to-t from-white to-green-300 border-2 border-black rounded-md  px-4 text-[40px]
