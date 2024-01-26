import react from "./../../../assets/Technologies/react96.png";
import mongodb from "./../../../assets/Technologies/mongodb-96.png";
import express from "./../../../assets/Technologies/express-js-96.png";
import nodejs from "./../../../assets/Technologies/nodejs96.png";
import Typewriter from "react-ts-typewriter";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const SliderTech = () => {
  // console.log(children);

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <div className=" flex gap-1 justify-center items-center ">
            <div className=" flex justify-center items-center h-[80px] w-[80px] ">
              <div className=" withanimation ">
                <img src={mongodb} alt="" />
              </div>
            </div>
            <div>
              <h2 className=" text-[#4CAF50] text-5xl  font-semibold ">
                <Typewriter cursor={false} speed={300} text="MongoDB" />
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex gap-1 justify-center items-center ">
            <div className=" flex justify-center items-center h-[80px] w-[80px] ">
              <div className="  withanimation ">
                <img src={express} alt="" />
              </div>
            </div>
            <div className=" h-[40px] flex -mb-2 items-end overflow-hidden  ">
              <h2 className=" text-[#424242] text-5xl ">
                <Typewriter cursor={false} speed={300} text="press" />
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex gap-3 justify-center items-center ">
            <div className=" flex justify-center items-center h-[80px] w-[80px] ">
              <div className="  withanimation ">
                <img className=" reaclogo " src={react} alt="" />
              </div>
            </div>
            <div>
              <h2 className=" text-[#52DBFF] text-5xl  font-semibold ">
                <Typewriter cursor={false} speed={300} text="React" />
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex flex-row-reverse gap-1 justify-center items-center ">
            <div className=" flex justify-center items-center h-[80px] w-[80px] ">
              <div className=" withanimation ">
                <img src={nodejs} alt="" />
              </div>
            </div>
            <div>
              <h2 className=" text-[#21A366] text-5xl  font-semibold ">
                <Typewriter cursor={false} speed={300} text="Node" />
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SliderTech;
