import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
const BannerLeft = () => {
  return (
    <div className=" w-auto h-full  ">
      <div className=" relative h-full w-[400px] ">
        <div className="absolute py-14 flex flex-col pl-1  justify-center gap-10  top-1/2 rounded-tr-[50px] -translate-y-1/2  w-[580px] bg-white ">
          <h2 className=" font-semibold text-[#16205F] font-Poppins text-5xl leading-tight tracking-wide ">
            Building dev team, <br /> Quickly and <br /> Affordably
          </h2>
          <p className=" text-base pr-40 text-[#16205F] font-Poppins font-normal ">
            We specialize in helping you build a team of expert <br /> developers,
            testers, and leaders. We are setup to <br /> deliver long term solutions,
            or scale to different needs quickly.
          </p>
          <Link to={""}>
            <Button className=" relative transition group duration-500 ease-in-out shadow-sm shadow-[#ff99007a] flex justify-center items-center  gap-2 rounded-lg bg-gradient-to-r hover:bg-gradient-to-br p-4 from-[#f90]  to-[#F2CB00] text-sm text-white font-Poppins font-medium ">
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
