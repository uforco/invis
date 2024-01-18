import WidthControl from "./../../../layout/widthControl/WidthControl";
import ExpertiseHeader from "./ExpertiseHeader";
import ExpertiseContain from "./ExpertiseContain";
const Expertise = () => {
  return (
    <div className=" bg-white py-20 ">
      <WidthControl>
        <div className=" flex flex-col gap-16 items-start justify-center " >
          <ExpertiseHeader></ExpertiseHeader>
          <ExpertiseContain></ExpertiseContain>
        </div>
      </WidthControl>
    </div>
  );
};

export default Expertise;
