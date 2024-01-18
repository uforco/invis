import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const BannerLeft = () => {
  return (
    <div className=" w-auto h-full  ">
      <div className=" relative h-full w-[537px] ">
        <div className="absolute py-10 flex flex-col pl-1 pr-32 justify-center gap-10  top-1/2 rounded-tr-[50px] -translate-y-1/2  w-[736px] bg-white ">
          <h2 className=" font-semibold text-[#16205F] font-Poppins text-6xl leading-tight tracking-wide ">
            Building dev team, Quickly and Affordably
          </h2>
          <p className=" text-base text-[#16205F] font-Poppins font-normal ">
            We specialize in helping you build a team of expert developers,
            testers, and leaders. We are setup to deliver long term solutions,
            or scale to different needs quickly.
          </p>
          <Link to={""}>
            <button className=" relative transition group duration-500 ease-in-out shadow-sm shadow-[#ff99007a] flex justify-center items-center  gap-2 rounded-lg bg-gradient-to-r hover:bg-gradient-to-br p-4 from-[#f90]  to-[#F2CB00] text-sm text-white font-Poppins font-medium ">
              <h2 className=" px-4 pr-10 ">Build a team</h2>
              <span className=" absolute transition ease-in-out top-1/2 -translate-y-1/2 group-hover:right-[24px] right-[28px] text-xl  ">
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerLeft;
