import FoodieImg2 from "../../assets/Group 2.png";
import ImageSlide1 from "../../assets/Group 65.png";
import ImageSlide2 from "../../assets/Group 66.png";

// SWIPER

const FirstPage = () => {
  // SWIPER

  return (
    <div className="flex justify-center items-center flex-col text-center border-red-500 border-2 bg-secondPageBg ">
      {/* Most likely to be swiped */}
      <div className="text-center h-screen border-2 flex flex-col gap-8 w-[90%] ">
        <div className="mt-4 flex justify-center items-center ">
          <img src={FoodieImg2} width="139px" height="47px" alt="Foodie Icon" />
        </div>

        {/* 1ST SLIDE */}
        <div className="border-2 border-black">
          <div className="flex justify-center items-center border-2">
            <img
              src={ImageSlide1}
              width="250px"
              height="156px"
              alt="Served Meal"
            />
          </div>

          <div>
            <h2 className="font-header text-2xl font-[800]">
              All your <br></br> Favorite foods
            </h2>
            <p className="font-body text-sm font-medium mt-5">
              Order your favorite meal with<br></br> safety on-demand delivery
            </p>
          </div>
        </div>
        {/* End of 1st Slide */}

        {/* 2ND SLIDE */}

        <div className="">
          <div className="flex justify-center items-center border-2">
            <img
              src={ImageSlide2}
              width="250px"
              height="156px"
              alt="Served Meal"
            />
          </div>

          <div>
            <h2 className="font-header text-2xl font-[800]">
              All your <br></br> Favorite foods
            </h2>
            <p className="font-body text-sm font-medium mt-5">
              Order your favorite meal with<br></br> safety on-demand delivery
            </p>
          </div>
        </div>
        {/* End of 2nd Slide */}
      </div>

      {/* Buttons */}

      <div></div>
    </div>
  );
};

export default FirstPage;
