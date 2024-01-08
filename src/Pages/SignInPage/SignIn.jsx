import "./signin.css";

import ArrowLeft from "../../assets/SignIn/bi_arrow-left.png";
import Hands from "../../assets/SignIn/emojione_hand-with-fingers-splayed.png";
import Line from "../../assets/SignIn/Line 2.png";
import GoogleLogo from "../../assets/SignIn/flat-color-icons_google.png";
import AppleLogo from "../../assets/SignIn/ant-design_apple-filled.png";

import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../Components/PasswordInput";

const SignIn = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (navigate(-1) === navigate("./welcomepage")) {
      navigate("./firstpage");
    } else {
      navigate(-1);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  // const handleNextPage = () => {
  //   navigate("/homepage");
  // };

  return (
    <div className="p-9 flex flex-col">
      <div className="mb-6">
        {/* <Link to="/firstpage"> */}
        <button onClick={handleGoBack}>
          <img src={ArrowLeft} width="24px" height="24px" alt="Left Arrow" />
        </button>
        {/* </Link> */}
      </div>

      <div className="mb-8">
        <div className="flex gap-2">
          <p className="font-header text-2xl font-[900] ">Welcome back</p>
          <span>
            <img src={Hands} alt="Waving Emoji" width="22px" height="22px" />
          </span>
        </div>
        <div>
          <p className="text-sm font-medium font-body">Sign in your account</p>
        </div>
      </div>

      <form action="" onSubmit={formSubmit}>
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="text-base font-semibold font-body"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full h-14 rounded-md px-4 bg-inputBtn font-body placeholder:font-medium placeholder:text-placeholder outline-none"
              placeholder="Your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-base font-semibold font-body"
            >
              Password
            </label>
            {/* <input
              type="password"
              name="password"
              id="password"
              className="w-full h-14 rounded-md px-4 bg-inputBtn font-body placeholder:font-medium placeholder:text-placeholder outline-none"
              placeholder="Your password"
            /> */}
            <PasswordInput onPasswordChange />
          </div>

          <div>
            <Link to="/forgotpassword">
              <p className="text-secondPageBtn font-bold text-base font-body">
                Forgot password?
              </p>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center mt-6 mb-3">
          <button
            className="bg-secondPageBtn text-white w-full h-14 rounded-md font-bold font-header hover:cursor-pointer hover:transition-all items-center justify-center flex"
            type="submit"
          >
            Login
          </button>
        </div>

        <div className="flex justify-center ">
          <p className="font-body flex gap-1 items-center">
            <span className="font-medium text-sm text-placeholder">
              Don’t have an account?
            </span>
            <Link to="/signup">
              <span className="font-bold text-secondPageBtn">Sign Up</span>
            </Link>
          </p>
        </div>
      </form>

      <div className="flex justify-center mt-6 flex-col">
        <div>
          <p className="flex items-center w-full gap-4 justify-center font-body">
            <span>
              <img src={Line} alt="Line" width="90px" height="1px" />
            </span>
            <span>Or with</span>
            <span>
              <img src={Line} alt="Line" width="90px" height="1px" />
            </span>
          </p>
        </div>

        <div className="flex justify-center items-center flex-col mt-12 gap-5">
          <div className="w-full flex justify-center items-center">
            <button className="flex items-center gap-2 text-secondPageBtn font-bold font-header border border-secondPageBtn h-14 rounded-md  hover:cursor-pointer hover:transition-all w-full justify-center">
              <span>
                <img
                  src={GoogleLogo}
                  alt="Google Icon"
                  width="22px"
                  height="22px"
                />
              </span>
              Sign in with Google
            </button>
          </div>

          <div className="w-full flex justify-center items-center">
            <button className="flex items-center gap-2 text-secondPageBtn font-bold font-header border border-secondPageBtn h-14 rounded-md  hover:cursor-pointer hover:transition-all w-full justify-center">
              <span>
                <img
                  src={AppleLogo}
                  alt="Apple Icon"
                  width="22px"
                  height="22px"
                />
              </span>
              Sign in with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
