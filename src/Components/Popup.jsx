import PropTypes from "prop-types";

const PopUp = ({ children, buttonText, onButtonClick }) => {
  PopUp.propTypes = {
    children: PropTypes.func.isRequired,
    buttonText: PropTypes.func.isRequired,
    onButtonClick: PropTypes.func.isRequired,
  };

  return (
    // <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
    <div className=" fixed top-4 right-3 bg-forgotEmail p-2 rounded-md shadow-md text-center border border-secondPageBtn translate-x-0 transition-all">
      <p>{children}</p>
      <button
        type="button"
        className="mt-4 p-2 rounded-md "
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
    // </div>
  );
};

export default PopUp;
