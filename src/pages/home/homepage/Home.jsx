import Banner from "./../header/banner/Banner";
import WidthControl from "./../../../layout/widthControl/WidthControl";
import BannerFooter from "../header/bannerfooter/BannerFooter";
import EasyProcess from "./../easyProcessSec/EasyProcess";
import Technologies from './../technologies/Technologies';
import ConnectWithHireToday from './../../../component/ConnectSecBox/ConnectWithHireToday';
import BestPriceforPackage from './../../../component/bestPrice/BestPriceforPackage';
import Expertise from './../../../component/expertise/Expertise';
// Expertise image store
import dedicated from "./../../../assets/Expertise/dedicated.png"
import StaffAugmentation from "./../../../assets/Expertise/StaffAugmentation.png"
import SoftwareOutsourcing from "./../../../assets/Expertise/SoftwareOutsourcing.png"
import RemoteOffice from "./../../../assets/Expertise/RemoteOffice.png"
import FooterPage from './../../../component/footerSec/footerPage/FooterPage';

const Home = () => {

  const ContainData = [
    {
      img: dedicated,
      title: "Dedicated Teams",
      descrip: "Find your next team member",
    },
    {
      img: StaffAugmentation,
      title: "Staff Augmentation",
      descrip: "Build a distributed development team",
    },
    {
      img: SoftwareOutsourcing,
      title: "Software Outsourcing",
      descrip: "End-to-End Software Development Outsourcing Solutions",
    },
    {
      img: RemoteOffice,
      title: "Remote Office",
      descrip: "Open your own remote development center and grow your business",
    },
  ];

  return (
    <div>
      <WidthControl>
        <>
          <Banner></Banner>
          <BannerFooter></BannerFooter>
        </>
      </WidthControl>
      <EasyProcess></EasyProcess>
      <Expertise data={ContainData} ></Expertise>
      <BestPriceforPackage></BestPriceforPackage>
      <Technologies></Technologies>
      <ConnectWithHireToday></ConnectWithHireToday>
      <FooterPage></FooterPage>
    </div>
  );
};

export default Home;
