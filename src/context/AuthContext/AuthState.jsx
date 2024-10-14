import { createContext, useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import Cookies from "js-cookie";

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(Cookies.get("authToken"));

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  const login = (token) => {
    Cookies.set("authToken", token, { secure: true, sameSite: 'strict' });
    setAuthToken(token);
  };

  const logout = () => {
    Cookies.remove("authToken");
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;