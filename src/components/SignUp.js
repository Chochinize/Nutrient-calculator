import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  
  
  const [user, setUser] = useState({ name: "", email: "", password: "",cf_password:""});
  const [err, setErr] = useState({msg:'',text:''});
  

  console.log('error message:',err)
  const  navigate  =  useNavigate();
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    console.log('erererer')
    try {                           
      const res = await axios.post("/u/SignUp", {
        name: user.name,
        email: user.email,
        password: user.password,
        cf_password:user.cf_password,
    },{withCredentials:true});
      
      // setUser({ name: "", email: "", password: "" });
      setErr({msg:res.data.msg});
      navigate('/')
    } catch (err) {
      err.response.data.msg && setErr({msg:err.response.data.msg,text:err.response.data.msg.text});
    }
  };
console.log(err);
console.log(user)
  return (
    <div className="  relative top-44   z-50   hover:shadow-xl  grid  place-items-center  ">
      <div className="border-2  border-grey-100  p-10  m-10 hover:shadow-xl">
        <div>
          {
           (
            <form
              className="flex flex-wrap w-min text-center gap-6 text-xl"
              onSubmit={registerSubmit}
            >
              <label>
                Name:
                <input
                  className="placeholder-shadow-xl outline-none text-center border-b-2  "
                  type="text"
                  name="name"
                  id="register-name"
                  placeholder="...Your Asterix..."
                  value={user.name}
                  onChange={onChangeInput}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  className="placeholder-shadow-xl outline-none text-center border-b-2"
                  type="email"
                  name="email"
                  id="register-email"
                  placeholder="Email"
                  required
                  value={user.email}
                  onChange={onChangeInput}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  id="register-password"
                  placeholder="Password"
                  required
                  value={user.password}
                  autoComplete="true"
                  onChange={onChangeInput}
                  className="placeholder-shadow-xl outline-none text-center border-b-2"
                />
              </label>
              <label>
                Repeat Password:
                <input
                  type="password"
                  name="cf_password"
                  id="confirm-password"
                  placeholder="Password"
                  required
                  value={user.cf_password}
                  autoComplete="true"
                  onChange={onChangeInput}
                  className="placeholder-shadow-xl outline-none text-center border-b-2"
                />
              </label>

              <button type="submit" value="Submit" className="m-auto">
                Register
              </button>
              <h3 className="fixed  top-20  right-0   bg-purple-400 opacity-75">
                {err.msg  == 'Sign up Success' ? (
                  <div  className="w-52  ">
                    
                  <p>{err.msg}</p>
                 
                    </div>
                ) : <div>
                  <p>
                  

                    <a
                    className="flex  flex-wrap "
                    //https://master.d3ksrba71tzc64.amplifyapp.com/projects/api/projects
                    href=""
                    >
                        {err.msg}
                        
                    
                  </a>
                    </p>
                
                </div>
                
                }
              </h3>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
