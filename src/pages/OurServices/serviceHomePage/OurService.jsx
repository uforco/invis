import WidthControl from "../../../layout/widthControl/WidthControl";
import HirePermanent from "../hirePermanent/HirePermanent";
import OurServicelist from "../ourService/OurServiceList";
import ConnectWithHireToday from "./../../../component/ConnectSecBox/ConnectWithHireToday";
import headerimg from "./../../../assets/OurService/headerimg.png";
import OurHeader from './../../../component/ourHeader/OurHeader';
import FooterPage from './../../../component/footerSec/footerPage/FooterPage';
import NavberManu from "../../../component/navberManu/NavberManu";
const OurService = () => {

  const herderData = {
    headerImg: headerimg,
    headerTitle: "Our Services",
    description: `We specialize in helping you build a team of expert
    developers.`
  }
  return (
    <div>
      <NavberManu></NavberManu>
      <OurHeader data={herderData} ></OurHeader>
      <WidthControl>
        <div>
          <HirePermanent></HirePermanent>
          <OurServicelist></OurServicelist>
        </div>
      </WidthControl>
      <div className=" py-10 " >
        <ConnectWithHireToday></ConnectWithHireToday>
      </div>
      <FooterPage></FooterPage>
    </div>
  );
};

export default OurService;
