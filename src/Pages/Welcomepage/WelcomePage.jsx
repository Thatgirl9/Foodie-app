import { useState, useEffect } from "react";
import FoodieImg from "../../assets/Group 3.png";

import FirstPage from "../FirstPage/FirstPage";

const WelcomePage = () => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  //* Using timeout to set the Welcomepage to only show for some seconds then move to the nextpage

  useEffect(() => {
    //* Set a timeout to change the
  });

  return (
    <div className="bg-firstPageBg h-screen flex justify-center items-center">
      <div>
        <img src={FoodieImg} width="150px" height="192" />
        <FirstPage />
      </div>
    </div>
  );
};

export default WelcomePage;
