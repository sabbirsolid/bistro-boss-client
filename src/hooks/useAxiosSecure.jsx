import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log(token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(function(response) {
    return response;
  }, async (error) =>{
    const status = error.response.status;
    console.log('status error in the interceptor', status);
    if(status === 401 || status === 403){
        await logout();
        navigate("/login")
    }
    return Promise.reject(error);
  })
  return axiosSecure;
};

export default useAxiosSecure;