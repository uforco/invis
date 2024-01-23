import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
const BannerLeft = () => {
  return (
    <div className=" w-auto h-full mx-2 ">
      <div className=" relative h-full w-auto lg:w-[400px] ">
        <div className=" lg:absolute py-3 md:py-8 lg:py-14 flex flex-col pl-1  lg:justify-center gap-6 lg:gap-10  lg:top-1/2 rounded-tr-[50px] lg:-translate-y-1/2 w-auto lg:w-[580px] bg-white ">
          <h2 className=" font-semibold text-[#16205F] font-Poppins text-4xl sm:text-5xl leading-tight tracking-wide ">
            Building dev team, <br /> Quickly and <br /> Affordably
          </h2>
          <p className=" text-base  pr-0 sm:pr-40 text-[#16205F] leading-loose  font-Poppins font-medium ">
            We specialize in helping you build a team of expert developers,
            testers, and leaders. We are setup to deliver long term solutions,
            or scale to different needs quickly.
          </p>
          <Link className=" mr-1 sm:mx-0 " to={""}>
            <Button className="w-full sm:w-auto relative transition group duration-500 ease-in-out shadow-sm shadow-[#ff99007a] flex justify-center items-center  gap-2 rounded-lg bg-gradient-to-r hover:bg-gradient-to-br p-4 from-[#f90] to-[#F2CB00] text-sm text-white font-Poppins font-medium ">
              <h2 className=" px-4 pr-10 ">Build a team</h2>
              <span className=" absolute transition ease-in-out top-1/2 -translate-y-1/2 group-hover:right-[24px] right-[28px] text-xl  ">
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerLeft;
