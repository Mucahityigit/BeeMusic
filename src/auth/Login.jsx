import React, { useEffect, useState } from "react";
import logo from "../assets/BeeMusicLogo.png";
import { loginEndpoint, setClientToken } from "../spotify";
const Login = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full h-[100vh] bg-bgColor">
      <img className="w-[200px] h-[200px]" src={logo} alt="" />
      <div className="text-xl font-bold text-activeColor">
        Please log in to the application by pressing the login button to use the
        API.
      </div>
      <a href={loginEndpoint}>
        <div className="ml-8 px-[80px] py-[15px] rounded-2xl text-2xl font-bold bg-activeColor text-bgColor">
          Log in
        </div>
      </a>
    </div>
  );
};

export default Login;
