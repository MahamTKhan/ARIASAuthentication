import React from "react";
import { Link } from "react-router-dom";

export default function AuthLinks({ isLoginForm }) {
  return (
    <>
      <div className="text-center">
        <a
          className="inline-block text-sm align-baseline hover:text-green-500 text-white"
          href="/Arias/forgot-password"
        >
          Forgot Password?
        </a>
      </div>
      <div className="mt-2 text-center">
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
      </div>
    </>
  );
}
