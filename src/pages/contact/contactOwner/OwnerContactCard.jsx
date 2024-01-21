import { PropTypes } from "prop-types";
const OwnerContactCard = ({ data, inx }) => {
  let x = inx + 1;
  return (
    <div
      className={` ${
        x % 2 == 0
          ? "justify-center"
          : x % 3 == 0
          ? "justify-end"
          : "justify-start"
      } w-full flex  `}
    >
      <div>
        <div
          className={`flex justify-start items-center overflow-hidden ${
            x % 2 == 0 ? " w-32 -ml-3  " : x % 3 == 0 ? "w-32 -ml-3  " : " w-40"
          } h-32 `}
        >
          <div className={`mb-5 `}>
            <img
              className={` ${
                x % 2 == 0 ? "w-24 " : x % 3 == 0 ? "w-24 " : "w-full"
              } `}
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
  data: PropTypes.array,
  inx: PropTypes.number,
};
export default OwnerContactCard;
