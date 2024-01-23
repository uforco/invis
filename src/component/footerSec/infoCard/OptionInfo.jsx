import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
const OptionInfo = ({ item }) => {
  return (
    <div className=" font-Poppins  font-normal text-[#16205F] py-2 " >
      {item?.pageLink ? (
        <Link  className=" hover:text-[#FF5B22] " to={item?.pageLink}>{item?.name}</Link>
      ) : (
        <p>{item?.name}</p>
      )}
    </div>
  );
};
OptionInfo.propTypes = {
  item: PropTypes.object,
};
export default OptionInfo;
