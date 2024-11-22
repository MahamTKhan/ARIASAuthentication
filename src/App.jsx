import React from "react";
import { AuthProvider } from "./context/AuthContext/AuthState";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Authorization/login";
import SignUp from "./components/Authorization/signup";
import ForgotPassword from "./components/Password/forgotpassword";
import ResetPassword from "./components/Password/resetpassword";
import OTPVerification from "./components/Password/OTP";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/password/forgotpassword" element={<ForgotPassword />} />
          <Route path="/password/resetpassword" element={<ResetPassword />} />
          <Route path="/verify-OTP" element={<OTPVerification />} />

          {/* Add further routes here */}
        </Routes>
        <ToastContainer />

      </Router>
    </AuthProvider>
  );
}

export default App;
