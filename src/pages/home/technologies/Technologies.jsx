import WidthControl from "../../../layout/widthControl/WidthControl";
import Technologiesheader from "./Technologiesheader";
import TechnologiesContainer from "./TechnologiesContainer";

const Technologies = () => {
  return (
    <div className=" py-20 ">
      <WidthControl>
        <>
          <Technologiesheader></Technologiesheader>
          <TechnologiesContainer></TechnologiesContainer>
        </>
      </WidthControl>
    </div>
  );
};

export default Technologies;
