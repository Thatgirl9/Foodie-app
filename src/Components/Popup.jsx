import PropTypes from "prop-types";

const PopUp = ({ children, buttonText, onButtonClick, style }) => {
  PopUp.propTypes = {
    children: PropTypes.func.isRequired,
    buttonText: PropTypes.func.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    style: PropTypes.func.isRequired,
  };

  return (
    // <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
    <div
      className="fixed  bg-forgotEmail py-1 px-3 rounded-md shadow-md text-center border border-secondPageBtn transition-all font-header"
      style={style}
    >
      <p>{children}</p>
      <button type="button" className="h-0 w-0" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
    // </div>
  );
};

export default PopUp;
