import WidthControl from "../../../layout/widthControl/WidthControl";
import Technologiesheader from "./Technologiesheader";
import TechnologiesContainer from "./TechnologiesContainer";
// import SliderTech from './SliderTech';

const Technologies = () => {
  return (
    <div className=" py-20 ">
      <WidthControl>
        <>
          <Technologiesheader></Technologiesheader>
          <TechnologiesContainer></TechnologiesContainer>
          {/* <SliderTech></SliderTech> */}
        </>
      </WidthControl>
    </div>
  );
};

export default Technologies;
