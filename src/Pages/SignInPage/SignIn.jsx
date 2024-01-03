import "./signin.css";

import ArrowLeft from "../../assets/SignIn/bi_arrow-left.png";
import Hands from "../../assets/SignIn/emojione_hand-with-fingers-splayed.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="p-9 flex flex-col">
      <div className="mb-6">
        <Link to="/firstpage">
          <button>
            <img src={ArrowLeft} width="24px" height="24px" alt="Left Arrow" />
          </button>
        </Link>
      </div>

      <div className="mb-8">
        <div className="flex gap-2">
          <p className="font-header text-2xl font-extrabold ">Welcome back</p>
          <span>
            <img src={Hands} alt="Waving Emoji" width="22px" height="22px" />
          </span>
        </div>
        <div>
          <p className="text-sm font-medium font-body">Sign in your account</p>
        </div>
      </div>

      <form action="">
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
            <input
              type="password"
              name="password"
              id="password"
              className="w-full h-14 rounded-md px-4 bg-inputBtn font-body placeholder:font-medium placeholder:text-placeholder outline-none"
              placeholder="Your password"
            />
          </div>

          <div>
            <p className="text-secondPageBtn font-bold text-base font-body">
              Forgot password?
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          <button className="bg-secondPageBtn text-white w-full h-14 rounded-md font-semibold hover:cursor-pointer hover:transition-all items-center justify-center flex">
            Login
          </button>
        </div>

        <div>
          <p>
            <span></span>
            <span></span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
