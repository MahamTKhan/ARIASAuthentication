import AuthLinks from "./AuthLinks";
import AuthForm from "./AuthForm";
import AuthNavbar from "./AuthorizationNavbar";

export default function SignUp() {
  return (
    <>
      <div className="h-full w-full  bg-prussianblue">
              <div className="w-full h-full lg:w-12/12 p-4 bg-green-200">
                <AuthNavbar isLoginForm={true} />
                </div>
                <div className="w-full lg:w-12/12 py-4 align-middle justify-center bg-prussianblue">
                <AuthForm isLogin={false} />
                <AuthLinks isLoginForm={false}/>
                </div>
              </div>
           
    </>
  );
}
