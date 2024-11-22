import React from "react";
import logo from '../../assets/logo/logo2.png'
export default function AuthNavbar({isLoginForm, isOTP, isPswdForm}) {
  return (
    <>
          <div className="font-mono flex items-center justify-center mb-6">
            <img
              width={40}
              height={40}
              className="rounded-full mr-1 lg:block hidden"
              src={logo}
              alt="ARIAS Logo"
            />
            <span className="text-xl font-bold text-prussianblue lg:block hidden">
              ARIAS-Solution to your Hiring Needs!
            </span>
          </div>

        {!isOTP && (
          <h3 className="py-4 text-2xl text-center text-black">
            {!isLoginForm ? "Create an Account!" : "Welcome Back!"}
          </h3>
        )}
        
    </>
  );
}
