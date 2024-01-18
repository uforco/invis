import Banner from "./../header/banner/Banner";
import WidthControl from "./../../../layout/widthControl/WidthControl";
import BannerFooter from "../header/bannerfooter/BannerFooter";
import EasyProcess from "./../easyProcessSec/EasyProcess";
import Expertise from "./../expertise/Expertise";
const Home = () => {
  return (
    <div>
      <WidthControl>
          <Banner></Banner>
          <BannerFooter></BannerFooter>
      </WidthControl>
      <EasyProcess></EasyProcess>
      <Expertise></Expertise>
    </div>
  );
};

export default Home;
