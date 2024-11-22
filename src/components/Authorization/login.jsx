import AuthNavbar from "./AuthorizationNavbar";
import {AuthProvider} from "../../context/AuthContext/AuthState";
import AuthForm from "./AuthForm";
//import AuthFormImage from "./AuthFormImage";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import AuthLinks from "./AuthLinks";

export default function Login() {
  const Navigate = useNavigate();
  useEffect(() => {
    let authToken = Cookies.get("authToken");
    if (authToken) {
      Navigate("/");//Home page 
    }
  }, []);

  return (
    <>
      <div className="h-full w-full  bg-prussianblue">
              <div className="w-full h-full lg:w-12/12 p-4 bg-green-200">
                <AuthNavbar isLoginForm={true} />
                </div>
                <div className="w-full lg:w-12/12 py-4 align-middle justify-center bg-prussianblue">
                <AuthForm isLogin={true} />
                <AuthLinks isLoginForm={true}/>
                </div>
              </div>
           
    </>
  );
}
