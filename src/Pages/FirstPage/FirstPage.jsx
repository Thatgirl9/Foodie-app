import FoodieImg2 from "../../assets/Group 2.png";
import ImageSlide1 from "../../assets/Group 65.png";
import ImageSlide2 from "../../assets/Group 66.png";

// SWIPER

// const FirstPage = () => {
//   // SWIPER

//   return (
//     <div className="flex justify-center items-center flex-col text-center border-red-500 border-2 bg-secondPageBg ">

//       {/* Most likely to be swiped */}
//       <div className="text-center h-screen border-2 flex flex-col gap-8 w-[90%] ">
//         <div className="mt-4 flex justify-center items-center ">
//           <img src={FoodieImg2} width="139px" height="47px" alt="Foodie Icon" />
//         </div>

//         {/* 1ST SLIDE */}
//         <div className="border-2 border-black">
//           <div className="flex justify-center items-center border-2">
//             <img
//               src={ImageSlide1}
//               width="250px"
//               height="156px"
//               alt="Served Meal"
//             />
//           </div>

//           <div>
//             <h2 className="font-header text-2xl font-[800]">
//               All your <br></br> Favorite foods
//             </h2>
//             <p className="font-body text-sm font-medium mt-5">
//               Order your favorite meal with<br></br> safety on-demand delivery
//             </p>
//           </div>
//         </div>
//         {/* End of 1st Slide */}

//         {/* 2ND SLIDE */}

//         <div className="">
//           <div className="flex justify-center items-center border-2">
//             <img
//               src={ImageSlide2}
//               width="250px"
5 / 6; //               alt="Served Meal"
//             />
//           </div>

//           <div>
//             <h2 className="font-header text-2xl font-[800]">
//               All your <br></br> Favorite foods
//             </h2>
//             <p className="font-body text-sm font-medium mt-5">
//               Order your favorite meal with<br></br> safety on-demand delivery
//             </p>
//           </div>
//         </div>
//         {/* End of 2nd Slide */}
//       </div>

//       {/* Buttons */}

//       <div></div>
//     </div>
//   );
// };

// export default FirstPage;

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
    <div className="flex justify-center items-center flex-col gap-3 text-center h-screen bg-secondPageBg w-full">
      {/* Second Page body div */}

      {/* Foodie Logo */}
      <div className="flex justify-center items-center mt-4 mb-8">
        <img src={FoodieImg2} width="139px" height="47px" alt="Foodie Logo" />
      </div>

      <div className="text-center flex flex-col gap-8 w-[90%]  border-2 border-black h-[300px]">
        {/*  Slide */}
        <div className=" h-[]">
          {/* Image */}
          <div className="flex justify-center items-center ">
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
      <div className="flex justify-center items-center">
        <div className="w-3 h-3 bg-firstPageBg rounded-sm"></div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center items-center flex-col gap-3">
        <button className="bg-secondPageBtn text-white w-full h-12 rounded-md">
          Sign Up
        </button>
        <button className="bg-transparent border-1 border-secondPageBtn text-secondPageBtn py-4 w-full px-3 rounded-md">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default FirstPage;
