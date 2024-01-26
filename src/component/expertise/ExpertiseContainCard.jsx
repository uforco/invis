import { PropTypes } from "prop-types";
const ExpertiseContainCard = ({ data }) => {
  return (
    <div>
      <div className=" flex flex-col w-full items-start justify-center gap-5 ">
        <div className=" flex justify-start items-start ">
          <div className=" bg-yellow-300 p-2 rounded w-[60px] h-[60px] ">
            <img className="w-full" src={data?.img} alt={data?.title} />
          </div>
        </div>
        <div className=" font-Poppins text-[#16205F] ">
          <h2 className=" text-2xl font-semibold ">{data?.title}</h2>
          <p className=" mt-2 font-medium ">{data?.descrip}</p>
        </div>
      </div>
    </div>
  );
};
ExpertiseContainCard.propTypes = {
  data: PropTypes.object,
};
export default ExpertiseContainCard;
