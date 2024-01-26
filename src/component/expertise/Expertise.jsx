import WidthControl from "../../layout/widthControl/WidthControl";
import ExpertiseHeader from "./ExpertiseHeader";
import ExpertiseContain from "./ExpertiseContain";

const Expertise = () => {
  return (
    <div className=" bg-white py-20 pb-4 sm:py-20 ">
      <WidthControl>
        <div className=" flex flex-col gap-8 sm:gap-16 mx-4 items-start justify-center ">
          <ExpertiseHeader></ExpertiseHeader>
          <ExpertiseContain></ExpertiseContain>
        </div>
      </WidthControl>
    </div>
  );
};
export default Expertise;
