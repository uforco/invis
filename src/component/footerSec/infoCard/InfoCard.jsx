import { PropTypes } from "prop-types";
import OptionInfo from "./OptionInfo";
const InfoCard = ({ data, inx }) => {
  return (
    <div className={`flex  ${inx < 1 ? "justify-start lg:justify-center" : " justify-start lg:justify-end"} `}>
      <div className=" text-[#16205F] ">
        <div className=" font-bold py-5 text-xl ">
          <h3>{data?.title}</h3>
        </div>
        <div>
          {data?.optionText?.map((item, inx) => (
            <OptionInfo item={item} key={inx}></OptionInfo>
          ))}
        </div>
      </div>
    </div>
  );
};
InfoCard.propTypes = {
  data: PropTypes.object,
  inx: PropTypes.number,
};
export default InfoCard;
