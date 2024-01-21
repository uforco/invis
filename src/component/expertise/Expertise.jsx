import WidthControl from "../../layout/widthControl/WidthControl";
import ExpertiseHeader from "./ExpertiseHeader";
import ExpertiseContain from "./ExpertiseContain";
import { PropTypes } from 'prop-types';
const Expertise = ({data}) => {
  console.log(data)
  return (
    <div className=" bg-white py-20 ">
      <WidthControl>
        <div className=" flex flex-col gap-16 items-start justify-center " >
          <ExpertiseHeader></ExpertiseHeader>
          <ExpertiseContain ContainData={data} ></ExpertiseContain>
        </div>
      </WidthControl>
    </div>
  );
};
Expertise.propTypes={
  data: PropTypes.array
}
export default Expertise;
