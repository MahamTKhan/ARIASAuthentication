import PasswordForm from "./PasswordForm";
import AuthImage from "../Authorization/Authimg";
export default function ResetPassword() {
  return (
    <>
      <div className="h-full bg-white">
        <div className="flex justify-center items-center px-6 py-12">
          <div className="w-full xl:w-3/11 lg:w-10/10 flex shadow-lg">
            <AuthImage /> 
            <div className="w-full lg:w-7/12 p-6 bg-prussianblue">
              <PasswordForm isForgetPswd={false}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
