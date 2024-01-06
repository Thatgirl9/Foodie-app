import "./signup.css";

import ArrowLeft from "../../assets/SignIn/bi_arrow-left.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PasswordInput from "../../Components/PasswordInput";

const SignUp = () => {
  // Routing
  const navigate = useNavigate();
  // Validating Email and Name.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Go back to previous page
  const handleGoBack = () => {
    if (navigate(-1) === navigate("./welcomepage")) {
      navigate("./firstpage");
    } else {
      navigate(-1);
    }
  };

  // Validating Name Function
  const handleNameValid = (event) => {
    const newName = event.target.value;

    // Check if the entered name contains a number or a special character
    if (/\d/.test(newName) || /[!@#$%^&*(),.?":{}|<>]/g.test(newName)) {
      setNameError("Name cannot contain numbers");
    } else {
      setNameError("");
    }

    // Check if the entered name contains a special character
    // if (/[!@#$%^&*(),.?":{}|<>]/g.test(newName)){
    //   setNameError('Name cannot contain special characters');
    // } else{
    //   setNameError('');
    // }

    // Update the name state
    setName(newName);
  };

  // Validating Email Function
  const handleEmailValid = (event) => {
    const newEmail = event.target.value;

    //Check if the entered email does not contain the @ symbol
    if (!/@/.test(newEmail)) {
      setEmailError("Email must contain @ symbol");
    } else {
      setEmailError("");
    }

    // Update the email state
    setEmail(newEmail);
  };

  // Preventing reloading of the page
  const formSubmit = (e) => {
    e.preventDefault();
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

      <form action="" onSubmit={formSubmit}>
        <div className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="text-base font-semibold font-body">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              inputMode="text"
              onChange={handleNameValid}
              className={`w-full h-14 rounded-md px-4 bg-inputBtn font-body placeholder:font-medium placeholder:text-placeholder outline-none border ${
                nameError ? "border-red-500" : "border-inputBtn"
              }`}
              placeholder="Your full name"
            />
            {nameError && (
              <p className="text-red-500 text-sm font-header mt-1">
                {nameError}
              </p>
            )}
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
              value={email}
              inputMode="email"
              onChange={handleEmailValid}
              className={`w-full h-14 rounded-md px-4 bg-inputBtn font-body placeholder:font-medium border placeholder:text-placeholder outline-none ${
                emailError ? "border-red-500" : "border-inputBtn"
              }`}
              placeholder="Your email"
            />
            {emailError && (
              <p className="text-red-500 text-sm font-header mt-1">
                {emailError}
              </p>
            )}
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
          <Link
            to="/verificationpage"
            className="bg-secondPageBtn text-white w-full h-14 rounded-md font-bold font-header hover:cursor-pointer hover:transition-all items-center justify-center flex"
          >
            <button type="submit">Sign Up</button>
          </Link>
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
            By clicking Sign Up, you agree to our
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
