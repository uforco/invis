import { PropTypes } from "prop-types";

const OurServiceListCard = ({ data }) => {
  return (
    <div className=" w-full px-0 py-4 ">
      <div className=" flex gap-6">
        <div>
          <div className="bg-gradient-to-l from-[#ff7c02] to-[#ffd60b] flex justify-center items-center rounded-full w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] overflow-hidden p-[5px] ">
            <img className="w-full lg:w-[120px] p-2" src={data?.serviceImg} alt="" />
          </div>
        </div>
        <div className="text-[#16205F] font-Poppins ">
          <h2 className=" text-2xl pt-0 mt-0 tracking-wide font-bold ">
            {data?.serviceName}
          </h2>
          <p className=" font-semibold py-1 tracking-wide leading-6 ">
            {data?.serviceTitle}
          </p>
          <div className=" py-2 ">
            <ul className=" list-disc ml-4 ">
              {data?.serviceItem?.map((item, inx) => (
                <li key={inx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
OurServiceListCard.propTypes = {
  data: PropTypes.array,
};
export default OurServiceListCard;
