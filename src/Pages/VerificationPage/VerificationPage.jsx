import "./verification.css";

import ArrowLeft from "../../assets/SignIn/bi_arrow-left.png";

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const VerificationPage = () => {
  const navigate = useNavigate();
  const { email } = useParams();
  const [verificationCode, setVerificationCode] = useState("");

  const handleGoBack = () => {
    navigate(-1);
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  // Create a random verification token
  // const createToken = () => {
  //   const token = Math.floor(Math.random() * 10000);
  //   console.log(token);
  //   setVerificationCode(token);
  // };

  // createToken();

  const handleShowModal = () => {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");
  };

  return (
    <div className="p-9 flex flex-col relative justify-center">
      <div className="mb-6">
        <button onClick={handleGoBack}>
          <img src={ArrowLeft} width="24px" height="24px" alt="Left Arrow" />
        </button>
      </div>

      <div className="flex justify-center items-center flex-col text-center mb-14">
        <p className="font-[900] font-header text-2xl">Verification Email</p>
        <p className=" font-body ">
          <span className="font-medium">Kindly enter the code sent to</span>
          <br></br>
          <span className="text-secondPageBtn font-semibold">{email}</span>
        </p>
      </div>

      <div className="absolute  right-3 top-4 border-2 border-secondPageBtn flex justify-center items-center p-3 px-6 rounded-lg modal">
        <p className="font-body text-base font-semibold text-secondPageBtn text-center tracking-wider">
          2389
        </p>
      </div>

      <button onClick={handleShowModal}>Modal</button>

      <form action="" onSubmit={formSubmit}>
        <div className="flex justify-center items-center gap-4">
          <input
            type="text"
            inputMode="numeric"
            name="verificationCode"
            className="w-[55px] h-[55px] rounded-md px-5 bg-inputBtn font-body font-bold text-black placeholder:font-bold placeholder:text-black focus:bg-verificationInput focus:border  focus:outline-none focus:border-secondPageBtn"
            placeholder="0"
          />

          <input
            type="text"
            inputMode="numeric"
            className="w-[55px] h-[55px] rounded-md bg-inputBtn font-body font-bold text-black  outline-none placeholder:font-bold placeholder:text-black px-5 focus:bg-verificationInput focus:border  focus:outline-none focus:border-secondPageBtn"
            placeholder="5"
          />

          <input
            type="text"
            inputMode="numeric"
            className="w-[55px] h-[55px] rounded-md px-5 bg-inputBtn font-body font-bold text-black  outline-none placeholder:font-bold placeholder:text-black focus:bg-verificationInput focus:border  focus:outline-none focus:border-secondPageBtn"
            placeholder="1"
          />

          <input
            type="text"
            inputMode="numeric"
            className="w-[55px] h-[55px] rounded-md px-5 bg-inputBtn font-body font-bold text-black  outline-none placeholder:font-bold placeholder:text-black focus:bg-verificationInput focus:border  focus:outline-none focus:border-secondPageBtn"
            placeholder="0"
          />

          <p>{verificationCode}</p>
        </div>

        <div className="flex justify-center mt-6">
          <p className="font-body flex gap-1 items-center">
            <span className="font-medium text-sm text-placeholder">
              You didn’t get a code?
            </span>

            <span className="font-bold text-secondPageBtn">Resend</span>
          </p>
        </div>

        <div className="flex justify-center items-center mt-14 mb-3">
          <button
            className="bg-secondPageBtn text-white w-full h-16 rounded-xl font-bold hover:cursor-pointer hover:transition-all items-center justify-center flex font-header hover:border-secondPageBg hover:border"
            type="submit"
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerificationPage;
