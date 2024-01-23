import { PropTypes } from "prop-types";
const OwnerContactCard = ({ data, inx }) => {
  let x = inx + 1;
  return (
    <div
      className={` ${x > 1 ? "justify-start md:justify-end" : "justify-start md:justify-start"} w-full flex  `}
    >
      <div>
        <div
          className={`flex justify-start  items-center overflow-hidden ${
            x < 1 ? "w-32   " : " w-40"
          } h-32 `}
        >
          <div
            className={`mb-5 rounded-md ${
              x > 1
                ? "bg-gradient-to-br px-1 from-[#ffa319]  to-[#ffdb26]"
                : "bg-transparent"
            } p-2 overflow-hidden `}
          >
            <img
              className={` ${x > 1 ? "w-24 " : "w-full"} -mb-2 `}
              src={data?.employeeImage}
              alt=""
            />
          </div>
        </div>
        <div className=" font-Poppins flex flex-col gap-4 ">
          <div>
            <h2 className=" text-xl font-semibold capitalize ">
              {data?.employeeName}
            </h2>
            <p className=" text-sm font-semibold">
              {data?.employeePost ? data?.employeePost : ""}
            </p>
          </div>
          <div>
            <h2 className=" text-lg ">{data?.employeeEmail}</h2>
            <p className=" font-semibold ">{data?.employeePhone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
OwnerContactCard.propTypes = {
  data: PropTypes.object,
  inx: PropTypes.number,
};
export default OwnerContactCard;
