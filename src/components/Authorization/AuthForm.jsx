import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import AuthContext from "../../context/AuthContext/AuthContext";
import apiCall from "../../utils/Api/ApiCall";

export default function AuthForm({ isLogin }) {
  // Separate formData for login and signup
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    Firstname: "",
    Lastname: "",
    Organizationame: "",
    Employeeid: "",
    email: "",
    password: "",
    Confirmpassword: "",
  });

  const { setauthToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Handle input changes for login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle input changes for signup
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Sign up submission
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const { Firstname, Lastname, Organizationame, Employeeid, email, password } = signupData; // Destructure only needed fields
      const data = await apiCall("/api/users/signup", "POST", {
        Firstname,
        Lastname,
        Organizationame,
        Employeeid,
        email,
        password,
      });
      toast.success("Signup successful! Please Log In.", { autoClose: 3000 });
      navigate("/api/users/login");
    } catch (err) {
      handleError(err);
    }
  };

  // Login submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = loginData; 
      console.log(loginData)
      const data = await apiCall("/api/users/login", "POST", {
        email,
        password
      });
    //   const data = await apiCall("/api/users/login", loginData, "Login successful!", () => {
    //     navigate("/");
    // });``
    

      Cookies.set("authToken", data.token);
      setauthToken(data.token);
      toast.success("Login successful!", { autoClose: 2000 });
      navigate("/"); // Redirect to the home page
    } catch (err) {
      handleError(err);
    }
  };

  // Handle errors
  const handleError = (err) => {
    const message = err?.response?.data?.message || "Something went wrong";
    setError(message);
    toast.error(message, { autoClose: 3000 });
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-prussianblue'>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-serif font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}>
          {!isLogin && (
            <>
              <div className="mb-4">
                <label htmlFor="firstname" className="block text-sm font-serif font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="Firstname"
                  value={signupData.Firstname}
                  onChange={handleSignupChange}
                  className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="lastname" className="block text-sm font-serif font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="Lastname"
                  value={signupData.Lastname}
                  onChange={handleSignupChange}
                  className="w-full px-4 py-2 mt-1 text-sm border rounded-md font-serif focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="organizationame" className="block text-sm font-serif font-medium text-gray-700">
                  Organization Name
                </label>
                <input
                  type="text"
                  id="organizationame"
                  name="Organizationame"
                  value={signupData.Organizationame}
                  onChange={handleSignupChange}
                  className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employeeId" className="block text-sm font-serif font-medium text-gray-700">
                  Employee ID
                </label>
                <input
                  type="text"
                  id="employeeId"
                  name="employeeId"
                  value={signupData.Employeeid}
                  onChange={handleSignupChange}
                  className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-serif font-medium text-gray-700">
              {isLogin ? "Email or Username" : "Email/Username"}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={isLogin ? loginData.email : signupData.email}
              onChange={isLogin ? handleLoginChange : handleSignupChange}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block font-serif text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={isLogin ? loginData.password : signupData.password}
              onChange={isLogin ? handleLoginChange : handleSignupChange}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {!isLogin && (
            <div className="mb-6">
              <label htmlFor="Confirmpassword" className="block font-serif text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="Confirmpassword"
                name="Confirmpassword"
                value={signupData.Confirmpassword}
                onChange={handleSignupChange}
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 font-medium font-serif text-white bg-green-200 rounded-md hover:bg-prussianblue focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
