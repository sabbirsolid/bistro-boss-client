import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  // google login function
  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      console.log(res.user);
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email
        }
        axiosPublic.post('/users', userInfo)
        .then(res =>{
          console.log(res.data);
          navigate("/");
        })
    });
  };
  return (
    <div className="text-center">
      <button onClick={handleGoogleLogin} className="btn">
        <FaGoogle></FaGoogle>
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
