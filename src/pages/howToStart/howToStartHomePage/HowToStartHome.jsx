import OurHeader from "../../../component/ourHeader/OurHeader";
import OurTitleSection from "../../../component/ourTitleSection/OurTitleSection";
import WidthControl from "../../../layout/widthControl/WidthControl";
import WhyChoose from "../whyChoose/WhyChoose";
import headerimg from "./../../../assets/OurService/headerimg.png";
import HowToStartCard from "./../howtostartCard/HowToStartCard";
import ConnectWithHireToday from "./../../../component/ConnectSecBox/ConnectWithHireToday";
import FooterPage from "./../../../component/footerSec/footerPage/FooterPage";
import NavberManu from "../../../component/navberManu/NavberManu";
const HowToStartHome = () => {
  const herderData = {
    headerImg: headerimg,
    headerTitle: "How to Start",
    description: `We specialize in helping you build a team of expert developers.`,
  };
  const heading = {
    title: "How to Get Started with Courtney",
    descraption:
      "From full-time remote engineering teams to hourly contractors, work with remote devs as needed",
  };
  return (
    <div>
      <NavberManu></NavberManu>
      <OurHeader data={herderData}></OurHeader>
      <WidthControl>
        <div className=" py-24 pb-16 ">
          <div className=" px-5 " >
            <OurTitleSection heading={heading}></OurTitleSection>
            <HowToStartCard></HowToStartCard>
          </div>
          <WhyChoose></WhyChoose>
        </div>
      </WidthControl>
      <ConnectWithHireToday></ConnectWithHireToday>
      <FooterPage></FooterPage>
    </div>
  );
};

export default HowToStartHome;
