import react from "./../../../assets/Technologies/react96.png";
import mongodb from "./../../../assets/Technologies/mongodb-96.png";
import express from "./../../../assets/Technologies/express-js-96.png";
import nodejs from "./../../../assets/Technologies/nodejs96.png";
import Typewriter from "react-ts-typewriter";

const TechnologiesContainer = () => {
  return (
    <div className=" mt-10 ">
      <div className=" grid font-Poppins grid-cols-4 gap-2 ">
        <div className=" flex gap-1 justify-center items-center ">
          <div className=" flex justify-center items-center h-[80px] w-[80px] ">
            <div className=" withanimation ">
              <img src={mongodb} alt="" />
            </div>
          </div>
          <div>
            <h2 className=" text-[#4CAF50] text-3xl  font-semibold ">
              <Typewriter cursor={false} speed={300} text="MongoDB" />
            </h2>
          </div>
        </div>
        <div className=" flex gap-1 justify-center items-center ">
          <div className=" flex justify-center items-center h-[80px] w-[80px] ">
            <div className="  withanimation ">
              <img src={express} alt="" />
            </div>
          </div>
          <div className=" h-[40px] flex -mb-2 items-end overflow-hidden  ">
            <h2 className=" text-[#424242] text-4xl ">
              <Typewriter cursor={false} speed={300} text="press" />
            </h2>
          </div>
        </div>
        <div className=" flex gap-3 justify-center items-center ">
          <div className=" flex justify-center items-center h-[80px] w-[80px] ">
            <div className="  withanimation ">
              <img className=" reaclogo " src={react} alt="" />
            </div>
          </div>
          <div>
            <h2 className=" text-[#52DBFF] text-3xl  font-semibold ">
              <Typewriter cursor={false} speed={300} text="React" />
            </h2>
          </div>
        </div>
        <div className=" flex flex-row-reverse gap-1 justify-center items-center ">
          <div className=" flex justify-center items-center h-[80px] w-[80px] ">
            <div className=" withanimation ">
              <img src={nodejs} alt="" />
            </div>
          </div>
          <div>
            <h2 className=" text-[#21A366] text-3xl  font-semibold ">
              <Typewriter cursor={false} speed={300} text="Node" />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesContainer;
