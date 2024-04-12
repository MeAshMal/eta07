import { useEffect, useState } from "react";
import { signInWithFacebookPopup, signInWithGooglePopup } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetMyDetailsQuery,
  useLoginMutation,
  useSignInWithSocialMutation,
} from "../redux/services/auth";
import { useAlert } from "react-alert";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, response] = useSignInWithSocialMutation();
  const [loginWithCreds, Loginresponse] = useLoginMutation();
  const alert = useAlert();
  const handleGoogleLogin = async () => {
    const res = await signInWithGooglePopup();
    if (res) {
      login({ name: res.user.displayName, email: res.user.email });
    }
  };
  const handleFacebookLogin = async () => {
    const res = await signInWithFacebookPopup();
    if (res) {
      login({ name: res.user.displayName, email: res.user.email });
    }
  };
  const { data } = useGetMyDetailsQuery();
  useEffect(() => {
    if (data?.user || response.data?.success) {
      window.location.href = "/";
    }
  }, [data, response]);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginWithCreds({ email, password });
  };
  useEffect(() => {
    if (Loginresponse.data?.success) {
      alert.success(Loginresponse.data?.message);
    } else if (Loginresponse.error) {
      alert.error(Loginresponse.error?.data?.message);
    }
    console.log(Loginresponse);
  }, [Loginresponse]);
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[130px] box-border gap-[64px] tracking-[normal] mq750:gap-[32px_64px] mq450:gap-[16px_64px]">
      <main className="w-[1312px] flex flex-row items-start justify-start py-0 px-[57px] box-border max-w-full lg:pl-7 lg:pr-7 lg:box-border">
        <section className="flex-1 flex flex-row items-start justify-start gap-[62px] max-w-full text-left text-lg text-darkslategray-100 font-averta lg:gap-[62px_31px] mq750:gap-[62px_15px] mq1050:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[47px] px-0 pb-0 box-border min-w-[426px] max-w-full mq750:pt-[31px] mq750:box-border mq750:min-w-full">
            <div className="self-stretch h-[670px] flex flex-col items-end justify-start max-w-full">
              <div className=" w-[246px] flex flex-row items-start justify-end py-0 px-[18px] box-border">
                <div className="bg-white rounded-xl flex-1 rounded-3xs  shadow-[0px_4px_8.1px_1px_rgba(0,_0,_0,_0.13)] [backdrop-filter:blur(40.1px)] overflow-hidden flex flex-row items-start justify-start py-2.5 pr-px pl-[9px] gap-[10px] z-[1] border-[0.5px] border-solid border-white">
                  <button className="   cursor-pointer [border:none] pt-1 px-[18px] pb-[5px] bg-goldenrod rounded-md overflow-hidden flex flex-row items-start justify-start hover:bg-darkgoldenrod">
                    <b className="h-[51px] relative text-[40.9px] inline-block font-averta text-white text-left min-w-[24px] mq450:text-[25px] mq1050:text-[33px]">
                      $
                    </b>
                  </button>
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <b className="relative inline-block min-w-[41px]">100+</b>
                      <div className="self-stretch relative text-sm">
                        Furniture Options with Discount
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-end justify-start py-[152px] px-[30px] box-border bg-[url('/public/frame-1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mt-[-66px] mq450:pt-[152px] mq450:pb-[99px] mq450:box-border">
                <img
                  className="top-[-150px] relative object-cover max-w-full"
                  alt=""
                  src="/login/sofa.png"
                />
                <div className="rounded-xl relative top-[-281px] left-[-590px] h-20 w-[210px] rounded-3xs bg-white shadow-[0px_4px_8.1px_1px_rgba(0,_0,_0,_0.13)] [backdrop-filter:blur(40.1px)] box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 pr-px pl-[9px] gap-[10px] z-[1] border-[0.5px] border-solid border-white">
                  <div className="bg-goldenrod m-auto p-3 rounded-lg">
                    <img
                      className="h-[40px] w-[40px] relative rounded-md overflow-hidden shrink-0 m-auto"
                      loading="lazy"
                      alt=""
                      src="/login/star.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <b className="relative inline-block min-w-[61px]">
                        45345+
                      </b>
                      <div className="self-stretch relative text-sm leading-[16px] inline-block min-h-[34px]">
                        Most Rated products
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="m-0 w-[480px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-8 px-8 pb-[32.19999999999982px] box-border gap-[20px] min-w-[480px] max-w-full mq750:min-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq1050:flex-1 mq1050:pt-[21px] mq1050:pb-[21px] mq1050:box-border"
          >
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-[16px]">
              <h1 className="m-0 relative text-[32px] leading-[112%] font-semibold font-poppins text-darkslategray-200 text-left inline-block min-w-[88.5px] shrink-0 [debug_commit:f6aba90] mq450:text-[19px] mq450:leading-[22px] mq1050:text-[26px] mq1050:leading-[29px]">
                Login
              </h1>
              <div className="flex flex-row items-start justify-start gap-[8px] shrink-0 [debug_commit:f6aba90] mq450:flex-wrap">
                <div className="relative text-base font-poppins text-gray-100 text-left">
                  Don’t have a account?
                </div>
                <Link
                  to={"/signup"}
                  className="relative text-base [text-decoration:underline] font-semibold font-poppins text-goldenrod text-left inline-block min-w-[71.2px] whitespace-nowrap"
                >
                  Sign up
                </Link>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-[58px] pb-[11.900000000000093px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="rounded-[72px] overflow-hidden flex flex-row items-start justify-start py-[5px] px-[3px] gap-[10px] border-[2px] border-solid border-goldenrod mq450:flex-wrap">
                <button className="cursor-pointer [border:none] py-[14.5px] px-[40.5px] bg-goldenrod rounded-[55px] flex flex-row items-start justify-start hover:bg-darkgoldenrod">
                  <div className="relative text-base leading-[100%] font-medium font-poppins text-white text-left inline-block min-w-[43px]">
                    Login
                  </div>
                </button>
                <div className="rounded-10xs flex flex-row items-start justify-start py-[14.5px] px-[13.5px]">
                  <div className="relative text-base leading-[100%] font-medium font-poppins text-darkslategray-200 text-left inline-block min-w-[129px]">
                    Guest Checkout
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="relative text-base font-poppins text-darkslategray-200 text-left">
                  Email or Phone Number
                </div>
                <div className="self-stretch rounded-10xs overflow-hidden flex flex-row items-start justify-start pt-3.5 px-5 pb-[17px] border-[1px] border-solid border-goldenrod">
                  <input
                    className="w-full [border:none] [outline:none] font-poppins text-base bg-[transparent] h-6 relative text-gray-100 text-left inline-block whitespace-nowrap p-0"
                    placeholder="you@example.com"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8.049999999999955px]">
                <div className="relative text-base font-poppins text-darkslategray-200 text-left inline-block min-w-[78.3px]">
                  Password
                </div>
                <div className="self-stretch rounded-10xs overflow-hidden flex flex-row items-start justify-start pt-3.5 px-5 pb-[17px] border-[1px] border-solid border-goldenrod">
                  <input
                    className="w-full [border:none] [outline:none] font-poppins text-base bg-[transparent] h-6 relative text-gray-100 text-left inline-block p-0"
                    placeholder="Enter Password"
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-end">
                  <div className="relative text-base [text-decoration:underline] font-medium font-poppins text-goldenrod text-left">
                    Forget Password?
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-[11px] pb-[11.900000000000093px]">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <input className="m-0 h-[25.1px] w-6" type="checkbox" />
                <div className="relative text-base font-poppins text-darkslategray-200 text-left inline-block min-w-[122px]">
                  Remember me
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full">
              <button className="cursor-pointer [border:none] pt-4 pb-[15px] pr-5 pl-[21px] bg-goldenrod flex-1 rounded-10xs overflow-hidden flex flex-row items-start justify-center box-border max-w-full hover:bg-darkgoldenrod">
                <div className="w-[43px] relative text-base font-medium font-poppins text-white text-center inline-block min-w-[43px]">
                  Login
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[27px] pb-5 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-center gap-[21.900000000000546px] opacity-[0.7] max-w-full mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[75px]">
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                </div>
                <div className="relative text-sm font-poppins text-gray-100 text-left inline-block min-w-[86.4px]">
                  or login with
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[75px]">
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="cursor-pointer [border:none] pt-4 pb-[15px] pr-5 pl-[21px] bg-whitesmoke self-stretch h-[55px] rounded-10xs overflow-hidden shrink-0 flex flex-row items-start justify-center box-border gap-[16px] whitespace-nowrap hover:bg-gainsboro"
              >
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/login/google.png"
                />
                <div className="relative text-base font-poppins text-darkslategray-200 text-left">
                  Continue with Google
                </div>
              </button>
              <button
                type="button"
                onClick={handleFacebookLogin}
                className="cursor-pointer [border:none] pt-4 pb-[15px] pr-5 pl-[21px] bg-whitesmoke self-stretch h-[55px] rounded-10xs overflow-hidden shrink-0 flex flex-row items-start justify-center box-border gap-[16px] whitespace-nowrap hover:bg-gainsboro"
              >
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/login/facebook.png"
                />
                <div className="relative text-base font-poppins text-darkslategray-200 text-left">
                  Continue with Facebook
                </div>
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};
export default Login;
