import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import RegModal from "../modals/RegModal";
const SignUp = () => {
  
  
  const [user, setUser] = useState({ name: "", email: "", password: "",cf_password:""});
  const [err, setErr] = useState({msg:'',text:''});
  const [open, setOpen] = useState(Boolean)
console.log('open/close',open)
  console.log('error message:',err)
  const  navigate  =  useNavigate();
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // setErr("");
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
      res.status === 200 ? setOpen(true) : ''
      console.log('yhas the response',res)
      setUser({ name: "", email: "", password: "", cf_password:"" });
      // setErr({msg:res.data.msg});
      open && navigate('/SignIn') 
    } catch (err) {
      console.log(err.response.data.err.msg)
      
      err.response.data.err.msg && setErr({msg:err.response.data.err.msg});
    }
  };
console.log(err);
console.log(user)
  return (
    <div className="  relative top-44   z-50   hover:shadow-xl  grid  place-items-center  ">
      <div className="border-2  border-grey-100  p-10  m-10 hover:shadow-xl">
        <RegModal open={open} setOpen={setOpen}/>
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
                  
                />
                  {err.msg == 'Please add all field' ? (<div className="text-[12px] text-red-600">Please enter a name</div>) : (<div></div>)  }
              </label>
              <label>
                Email:
                <input
                  className="placeholder-shadow-xl outline-none text-center border-b-2"
                  type="email"
                  name="email"
                  id="register-email"
                  placeholder="Email"
                  
                  value={user.email}
                  onChange={onChangeInput}
                />
                   {err.msg == 'invalid email' ? (<div className="text-[12px] text-red-600">invalid Email</div>) : (<div></div>)  }
                   {err.msg == 'email already exist' ? (<div className="text-[12px] text-red-600">User with this email exist</div>) : (<div></div>)  }
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
                  {err.msg == 'password must be at least 6 charachters' ? (<div className="text-[12px] text-red-600">password must be at least 6 charachters</div>) : (<div></div>)  }
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
                {err.msg == 'password does not match ' ? (<div className="text-[12px] text-red-600">password does not match</div>) : (<div></div>)  }
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
