import "./verification.css";

import ArrowLeft from "../../assets/SignIn/bi_arrow-left.png";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PopUp from "../../Components/Popup";

// Function to generate random code for verification.
const generateRandomCode = () => {
  const code = [];
  for (let i = 0; i < 4; i++) {
    code.push(Math.floor(Math.random() * 10));
  }
  // console.log(code);
  return code;
};

// generateRandomCode();

const VerificationPage = () => {
  const navigate = useNavigate();
  const { email } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [verificationCode, setVerificationCode] = useState(
    generateRandomCode()
  );
  // const verificationCode = generateRandomCode();
  const [userInput, setUserInput] = useState(["", "", "", ""]);
  const [showCodePopup, setShowCodePopup] = useState(true);
  const [showVerificationPopup, setShowVerificationPopup] = useState(false);
  const [verificationResult, setVerificationResult] = useState(false);

  const handleGoBack = () => {
    navigate(-1);
  };

  // Saving the user input
  const handleInputChange = (index, value) => {
    const newInput = [...userInput];
    newInput[index] = value;
    setUserInput(newInput);
  };

  // Checking if the random number code matches the user input.
  const checkVerificationCode = () => {
    const isCodeCorrect = userInput.join("") === verificationCode.join("");
    setVerificationResult(isCodeCorrect);
    setShowVerificationPopup(true);

    if (verificationResult) {
      navigate("/homepage");
    }
  };

  // Setting the verification code to disappear after  3 seconds using useEffect.

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCodePopup(false);
    }, 3000);

    // Clearing the timeout
    return () => clearTimeout(timeout);
  }, []);

  // const handlePopupButtonClick = () => {
  //   if (verificationResult) {
  //     navigate("/homepage");
  //   }

  //   setShowVerificationPopup(false);
  // };

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

      {/* The Popup Message */}
      {showCodePopup && (
        <PopUp
          // onButtonClick={() => setShowCodePopup(false)}
          style={{ top: "6px", right: "5px" }}
        >
          Your verification code: {verificationCode.join("")}
        </PopUp>
      )}

      {/* <form action=""> */}
      <div className="flex justify-center items-center gap-4">
        {verificationCode.map((digit, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            name="verificationCode"
            maxLength={1}
            value={userInput[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className={`w-[55px] h-[55px] rounded-md px-5 bg-inputBtn font-body font-bold text-black placeholder:font-bold placeholder:text-black focus:bg-verificationInput border  focus:outline-none ${
              verificationResult ? "border-green-500" : "border-secondPageBtn"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <p className="font-body flex gap-1 items-center">
          <span className="font-medium text-sm text-placeholder">
            You didn’t get a code?
          </span>

          <button
            onClick={() => setShowCodePopup(true)}
            className="font-bold text-secondPageBtn"
          >
            Resend
          </button>
        </p>
      </div>

      <div className="flex justify-center items-center mt-14 mb-3">
        <button
          className="bg-secondPageBtn text-white w-full h-16 rounded-xl font-bold hover:cursor-pointer hover:transition-all items-center justify-center flex font-header hover:border-secondPageBg hover:border"
          type="button"
          onClick={checkVerificationCode}
        >
          {verificationResult ? "Verified" : "Verify"}
        </button>
      </div>

      {/* The Verification Text Popup */}
      {showVerificationPopup && (
        <PopUp
          // onButtonClick={handlePopupButtonClick}
          style={{
            color: verificationResult ? "green" : "red",
            borderColor: verificationResult ? "green" : "red",
            fontSize: verificationResult ? "1.2rem" : "1rem",
            fontWeight: verificationResult ? "800" : "700",
            textAlign: "center",
            bottom: "20px",
            left: "10px",
          }}
        >
          {verificationResult
            ? "Verified!"
            : "Verification Failed. Please try again"}
        </PopUp>
      )}
    </div>
  );
};

export default VerificationPage;
