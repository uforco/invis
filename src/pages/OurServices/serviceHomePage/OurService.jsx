import WidthControl from "../../../layout/widthControl/WidthControl";
import HirePermanent from "../hirePermanent/HirePermanent";
import ServiceHeader from "../serviceHeader/ServiceHeader";
import OurServicelist from "../ourService/OurServiceList";
import ConnectWithHireToday from "./../../../component/ConnectSecBox/ConnectWithHireToday";
const OurService = () => {
  return (
    <div>
      <ServiceHeader></ServiceHeader>
      <WidthControl>
        <div>
          <HirePermanent></HirePermanent>
          <OurServicelist></OurServicelist>
        </div>
      </WidthControl>
      <div className=" py-10 " >
        <ConnectWithHireToday></ConnectWithHireToday>
      </div>
    </div>
  );
};

export default OurService;
