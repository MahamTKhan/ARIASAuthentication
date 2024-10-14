// apiCall.js
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:3000"
// API call helper to reduce redundant code
export const apiCall = async (url, data, successMessage, onSuccess) => {
  try {
    const res  = await axios.post(`${BASE_URL}${url}`, data, { withCredentials: true }); 
    console.log(res.data)// Include cookies in the request

    if (res.data) {
      toast.success(successMessage, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        draggable: false,
        closeOnClick: false,
        theme: "colored",
        transition: toast.flip,
        onClose: onSuccess,
      });
      return res.data; // return the whole response
    }
  } catch (err) {
    if (err.response && err.response.status >= 400 && err.response.status <= 500) {
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        draggable: false,
        closeOnClick: false,
        theme: "colored",
        transition: toast.flip,
      });
    }
    throw err;
  }
};

export default apiCall;
