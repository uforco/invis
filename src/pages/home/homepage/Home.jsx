import Banner from "./../header/banner/Banner";
import WidthControl from "./../../../layout/widthControl/WidthControl";
import BannerFooter from "../header/bannerfooter/BannerFooter";
import EasyProcess from "./../easyProcessSec/EasyProcess";
import Technologies from './../technologies/Technologies';
import ConnectWithHireToday from './../../../component/ConnectSecBox/ConnectWithHireToday';
import BestPriceforPackage from './../../../component/bestPrice/BestPriceforPackage';
import Expertise from './../../../component/expertise/Expertise';
// Expertise image store

import FooterPage from './../../../component/footerSec/footerPage/FooterPage';

const Home = () => {

  

  return (
    <div>
      <WidthControl>
        <>
          <Banner></Banner>
          <BannerFooter></BannerFooter>
        </>
      </WidthControl>
      <EasyProcess></EasyProcess>
      <Expertise ></Expertise>
      <BestPriceforPackage></BestPriceforPackage>
      <Technologies></Technologies>
      <ConnectWithHireToday></ConnectWithHireToday>
      <FooterPage></FooterPage>
    </div>
  );
};

export default Home;
