import FoodieImg2 from "../../assets/Group 2.png";
import ImageSlide1 from "../../assets/Group 65.png";
import ImageSlide2 from "../../assets/Group 66.png";

import { useState, useEffect } from "react";

const slides = [
  {
    img: ImageSlide1,
    h2Tag1: "All your",
    h2Tag2: "Favorite foods",
    pTag1: "Order your favorite meal with",
    pTag2: "safety on-demand delivery",
  },
  {
    img: ImageSlide2,
    h2Tag1: "Get delivery",
    h2Tag2: "at your doorstep",
    pTag1: "Your ready ordered meal would",
    pTag2: "be delivered  in seconds!",
  },
  // Add more slides as needed
];

const FirstPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the active index, looping back to 0 if it exceeds the number of slides
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // Adjust the time (in milliseconds) between slides as needed

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    // Main Body Div
    <div className="flex justify-center items-center flex-col gap-3 text-center bg-secondPageBg w-full">
      {/* Second Page body div */}

      {/* Foodie Logo */}
      <div className="flex justify-center items-center mt-4 mb-8">
        <img src={FoodieImg2} width="139px" height="47px" alt="Foodie Logo" />
      </div>

      <div className="text-center flex flex-col gap-8 w-[90%] h-[80%]">
        {/*  Slide */}
        <div className=" h-[]">
          {/* Image */}
          <div className="flex justify-center items-center border-2">
            <img
              src={slides[activeIndex].img}
              width="250px"
              height=""
              alt="Meal"
            />
          </div>

          {/* Text */}
          <div className="mt-5">
            <h2 className="font-header text-2xl font-[800]">
              {slides[activeIndex].h2Tag1}
              <br></br>
              {slides[activeIndex].h2Tag2}
            </h2>
            <p className="font-body text-sm font-medium mt-4">
              {slides[activeIndex].pTag1}
              <br></br>
              {slides[activeIndex].pTag2}
            </p>
          </div>
        </div>
        {/* End of  slide */}
      </div>

      {/* Small btn */}
      <div className="flex justify-center items-center mt-5">
        <div className="w-3 h-3 bg-firstPageBg rounded-sm"></div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center items-center flex-col gap-3 mt-7 w-[90%] mb-7">
        <button className="bg-secondPageBtn text-white w-full h-12 rounded-md font-semibold hover:cursor-pointer hover:transition-all">
          Sign Up
        </button>
        <button className="bg-transparent border border-secondPageBtn font-semibold h-12 w-full  rounded-md text-secondPageBtn hover:cursor-pointer">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default FirstPage;
