import "./forgot.css";
import { useState } from "react";

import ArrowLeft from "../../assets/SignIn/bi_arrow-left.png";
import EmailIcon from "../../assets/ForgotPw/dashicons_email-alt2.png";
import PhoneIcon from "../../assets/ForgotPw/bxs_phone.png";

import { useNavigate } from "react-router-dom";
import PopUp from "../../Components/Popup";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [showSent, setShowSent] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleShowSent = () => {
    setShowSent(true);
    setTimeout(() => {
      setShowSent(false);
    }, 2000);
  };

  const handleShowReset = () => {
    setShowReset(true);
    setTimeout(() => {
      setShowReset(false);
      navigate(-1);
    }, 3000);

    // setTimeout(() => {
    //   setShowReset(true);
    //   navigate(-1);
    // });
  };

  return (
    <div className="p-9 flex flex-col">
      <div className="mb-6">
        <button onClick={handleGoBack}>
          <img src={ArrowLeft} width="24px" height="24px" alt="Left Arrow" />
        </button>
      </div>
      <div className="mb-8">
        <div className="flex gap-1 flex-col">
          <div>
            <p className="font-header text-2xl font-[900]">Forgot Password</p>
          </div>
          <div>
            <p className="text-sm font-medium font-body">
              Select from the option which you want<br></br> to reset your
              password
            </p>
          </div>
        </div>
      </div>

      {showSent && (
        <PopUp
          onButtonClick={handleShowSent}
          style={{
            top: "6px",
            left: "50%",
            fontSize: "1rem",
            padding: "0.7em 2em",
            color: "green",
            fontWeight: "800",
            borderColor: "green",
          }}
        >
          Sent!
        </PopUp>
      )}

      {showReset && (
        <PopUp
          onButtonClick={handleShowReset}
          style={{
            top: "1em",
            right: "1em",
            padding: "0.8em 2em",
            color: "green",
            fontWeight: "800",
            borderColor: "green",
          }}
        >
          Reset Successful!
        </PopUp>
      )}

      <div className="flex justify-center items-center mt-9 mb-5">
        <button
          className="bg-forgotEmail text-secondPageBtn w-full h-[70px] rounded-xl hover:cursor-pointer hover:transition-all flex gap-3 items-center pl-10 hover:border-secondPageBtn hover:border"
          type="button"
          onClick={handleShowSent}
        >
          <img src={EmailIcon} alt="Email Icon" width="24px" height="24px" />
          <p className="flex flex-col">
            <span className="font-header text-left font-[900]">Email</span>
            <span className="text-placeholder font-medium font-body">
              Send to my email
            </span>
          </p>
        </button>
      </div>
      <div className="flex justify-center items-center mb-3">
        <button
          className="bg-inputBtn w-full h-[70px] rounded-xl hover:cursor-pointer hover:transition-all flex gap-3 items-center pl-10 hover:border-secondPageBtn hover:border"
          type="button"
          onClick={handleShowSent}
        >
          <img src={PhoneIcon} alt="Email Icon" width="24px" height="24px" />
          <p className="flex flex-col">
            <span className="font-header text-left font-[900] text-forgotPhone">
              Mobile number
            </span>
            <span className="text-placeholder font-medium font-body text-sm">
              Send to my mobile number
            </span>
          </p>
        </button>
      </div>
      <div className="flex justify-center items-center mt-9 mb-3">
        <button
          className="bg-secondPageBtn text-white w-full h-16 rounded-xl font-bold hover:cursor-pointer hover:transition-all items-center justify-center flex font-header hover:border-secondPageBg hover:border"
          type="button"
          onClick={handleShowReset}
        >
          Reset password
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
