import React from "react";
import logo from "../../assets/logo/logo2.png";

export default function AuthImage(){
    return (
      <>
        <div className="w-full h-full lg:w-5/12 hidden lg:block bg-gray-400 dark:bg-gray-800 overflow-hidden">
          <img
            src={logo}
            className="w-full h-full object-cover rounded-l-lg"
            alt="ARIAS Logo"
          />
        </div>
      </>
    );
}