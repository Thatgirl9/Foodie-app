import "./signup.css";

import ArrowLeft from "../../assets/SignIn/bi_arrow-left.png";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../Components/PasswordInput";

const SignUp = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (navigate(-1) === navigate("./welcomepage")) {
      navigate("./firstpage");
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="p-9 flex flex-col">
      <div className="mb-6">
        {/* <Link to="/signin"> */}
        <button onClick={handleGoBack}>
          <img src={ArrowLeft} width="24px" height="24px" alt="Left Arrow" />
        </button>
        {/* </Link> */}
      </div>
      <div className="mb-8">
        <div className="flex gap-1 flex-col">
          <div>
            <p className="font-header text-2xl font-[900]">Sign Up</p>
          </div>
          <div>
            <p className="text-sm font-medium font-body">
              Create an account to get started!
            </p>
          </div>
        </div>
      </div>

      <form action="">
        <div className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="text-base font-semibold font-body">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="email"
              className="w-full h-14 rounded-md px-4 bg-inputBtn font-body placeholder:font-medium placeholder:text-placeholder outline-none"
              placeholder="Your full name"
            />
          </div>

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
            <PasswordInput />
          </div>
        </div>

        <div className="flex justify-center items-center mt-9 mb-3">
          <button
            className="bg-secondPageBtn text-white w-full h-14 rounded-md font-bold font-header hover:cursor-pointer hover:transition-all items-center justify-center flex"
            type="submit"
          >
            Sign Up
          </button>
        </div>

        <div className="flex justify-center ">
          <p className="font-body flex gap-1 items-center">
            <span className="font-medium text-sm text-placeholder">
              Have an account?
            </span>
            <Link to="/signin">
              <span className="font-bold text-secondPageBtn">Sign In</span>
            </Link>
          </p>
        </div>
      </form>

      <div className="flex justify-center mt-14">
        <p className="font-body text-center">
          <span className="font-medium text-sm text-placeholder">
            By clicking Sign In, you agree to our
          </span>
          <br></br>
          <span className="font-bold text-secondPageBtn">
            Terms and Data Policy
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
