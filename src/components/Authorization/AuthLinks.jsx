import React from "react";
import { Link } from "react-router-dom";

export default function AuthLinks({ isLoginForm }) {
  return (
    <>
      <div className="text-center">
        {isLoginForm?(<>
            {/* Forgot Password Link */}
            <Link
              className="inline-block text-md align-baseline hover:text-green-300 text-white"
              to="/password/forgotpassword"
            >
              Forgot Password?
            </Link>
            <br />
            {/* Reset Password Link */}
            <Link
              className="inline-block text-md align-baseline hover:text-green-300 text-white"
              to="/password/resetpassword"
            >
              Reset Password?
            </Link>
          </>
      ):(<h3 className="inline-block text-md align-baseline hover:text-green-300 text-white">Explore Arias</h3>)}
      </div>
      {/* <div className="mt-2 text-center">
        {!isLoginForm ? (
          <Link
            className="inline-block text-sm align-baseline text-white hover:text-green-500"
            to="/login"
          >
            Already have an account? Login!
          </Link>
        ) : (
          <Link
            className="inline-block text-sm align-baseline text-white hover:text-green-500"
            to="/signup"
          >
            Do not have an account? Signup!
          </Link>
        )}
      </div> */}
    </>
  );
}
