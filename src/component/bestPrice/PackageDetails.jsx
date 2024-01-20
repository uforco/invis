import { FaCheck } from "react-icons/fa";
import { PropTypes } from "prop-types";
const PackageDetails = ({ item }) => {
  console.log(item);
  return (
    <div className=" flex py-5 flex-col justify-center items-center  ">
      {item?.map((data, inx) => (
        <div
          key={inx}
          className={`flex py-2 ${
            inx % 2 === 0
              ? " bg-transparent "
              : "bg-gradient-to-l from-[#ffbe32]  to-[#ffd606] "
          } w-full font-Poppins uppercase justify-center items-center `}
        >
          <div className=" flex justify-start w-10/12 gap-1 items-center ">
            <h4 className=" bg-green-500 text-[10px] text-white rounded-full p-1 ">
              <FaCheck></FaCheck>
            </h4>
            <p className=" text-sm font-medium ">{data}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
PackageDetails.propTypes = {
  item: PropTypes.array,
};
export default PackageDetails;
