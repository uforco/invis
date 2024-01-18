import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const BannerLeft = () => {
  return (
    <div className=" w-auto h-full bg-slate-600 ">
      <div className=" relative h-full w-[537px] ">
        <div className=" flex flex-col pl-1 pr-24 justify-center gap-8 absolute top-1/2 rounded-tr-[50px] -translate-y-1/2  w-[720px] bg-red-600 ">
          <h2 className=" font-semibold text-[#16205F] font-Poppins text-6xl leading-tight tracking-wide ">
            Building dev team, Quickly and Affordably
          </h2>
          <p className=" text-base text-[#16205F] font-Poppins font-normal ">
            We specialize in helping you build a team of expert developers,
            testers, and leaders. We are setup to deliver long term solutions,
            or scale to different needs quickly.
          </p>
          <Link to={""}>
            <button className=" flex justify-center items-center gap-2 rounded-lg bg-gradient-to-tr p-4 px-8 from-[#f90] to-[#F2CB00] text-sm text-white font-Poppins font-medium ">
              Build a team <span className=" text-xl " ><FaArrowRightLong></FaArrowRightLong></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerLeft;
