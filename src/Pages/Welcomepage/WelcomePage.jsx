import { useState, useEffect } from "react";
import FoodieImg from "../../assets/Group 3.png";

import FirstPage from "../FirstPage/FirstPage";
import Spinner from "../../Components/Spinner";

const WelcomePage = () => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  //* Using timeout to set the Welcomepage to only show for some seconds then move to the next page

  useEffect(() => {
    //* Set a timeout to change the state(false) after a certain number of seconds

    const timeoutId = setTimeout(() => {
      // Hides the welcomepage
      setShowWelcomePage(false);
    }, 5000);

    //* Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {showWelcomePage ? (
        //* Show the welcomepage

        <div className="bg-firstPageBg h-screen flex justify-center items-center">
          <div className="flex justify-center items-center flex-col gap-4">
            <img src={FoodieImg} width="150px" height="192" />

            <Spinner />
          </div>
        </div>
      ) : (
        // * Show the next page
        <FirstPage />
      )}
    </div>
  );
};

export default WelcomePage;
