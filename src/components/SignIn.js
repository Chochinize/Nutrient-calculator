import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import useAuth from "./hooks/useAuth";

const Login = (props ) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const { users, state, dispatch, setAuthIsDone,authIsDone,auth } = useAuth();
 
console.log(state)
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/u/login",
        {
          email: user.email,
          password: user.password,
        },
        { withCredentials: true }
      );
      console.log('from sign in', res)
      console.log(axios.defaults.baseURL)
        setAuthIsDone(true);
        dispatch({ type: 'AUTH', payload: res.data.user})
        navigate(`/u/${res.data.user._id}`) 
    } catch (err) {
      console.log(err)
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };
  const CustomNotification = () => {
    if (!err) return err;
    return err;
  };
  const [onLogin, setOnLogin] = useState(false);

  return (
    <div className="relative top-44">
      <div className="  hover:shadow-xl  grid  place-items-center  ">
        <div className="border-2  border-grey-100  p-10  m-10 hover:shadow-xl  ">
          <div>
            <form onSubmit={loginSubmit}>
              <input
                type="email"
                name="email"
                id="login-email"
                placeholder="Email"
                required
                value={user.email}
                className="placeholder-shadow-xl outline-none text-center border-b-2"
                onChange={onChangeInput}
              />

              <input
                type="password"
                name="password"
                id="login-password"
                placeholder="Password"
                required
                value={user.password}
                autoComplete="true"
                className="placeholder-shadow-xl outline-none text-center border-b-2"
                onChange={onChangeInput}
              />

              <button type="submit">Login</button>
              <p>
                You don't have an account?
                <span onClick={() => setOnLogin(true)}>
                  {" "}
                  <a href="/SignUp"> REGISTER</a>
                </span>
              </p>
            </form>
            <h3 className="  absolute  top-20  right-0  animate-wiggle rounded-full bg-purple-400 opacity-75">
              <CustomNotification />
            </h3>
          </div>
        </div>
      </div>
      {/* <SignUp/> */}
    </div>
  );
};

export default Login;
