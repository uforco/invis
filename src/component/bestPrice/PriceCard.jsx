import { PropTypes } from "prop-types";
import PackageDetails from "./PackageDetails";
const PriceCard = ({ data, inxNum }) => {
  return (
    <div
      className={` relative  h-[690px] overflow-hidden shadow-gray-500 rounded-xl shadow-lg ${
        inxNum + 1 === 2
          ? " scale-95 border-[3px] border-[#ffbe32] md:border-0 sm:scale-105 md:scale-110 z-10 "
          : " scale-90 sm:scale-95  z-0 "
      } py-12 w-[376px] sm:w-96 border bg-gray-100 overflow-hidden `}
    >
      <div
        className={
          inxNum + 1 === 2
            ? " absolute  px-12 py-1 bg-gradient-to-r from-[#fdac33]  to-[#ffd91c] -rotate-45 top-10 -left-12 "
            : "hidden"
        }
      >
        <p className=" uppercase font-semibold ">Recommended</p>
      </div>
      <div className=" font-Poppins flex flex-col gap-1 justify-center items-center ">
        <h1 className=" uppercase text-2xl px-4 font-semibold border-b border-black ">
          {data?.packageName}
        </h1>
        <p className=" uppercase font-medium text-sm tracking-widest ">
          {data?.packageTitle}
        </p>
        <h2 className=" font-bold text-4xl mt-1 ">$ {data?.packagePrice}</h2>
      </div>
      <PackageDetails item={data?.packagedetails}></PackageDetails>
    </div>
  );
};
PriceCard.propTypes = {
  data: PropTypes.object,
  inxNum: PropTypes.number,
};
export default PriceCard;
