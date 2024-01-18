import Banner from "./../header/banner/Banner";
import WidthControl from "./../../../layout/widthControl/WidthControl";
import BannerFooter from "../header/bannerfooter/BannerFooter";
const Home = () => {
  return (
    <WidthControl>
      <div>
        <Banner></Banner>
        <BannerFooter></BannerFooter>
      </div>
    </WidthControl>
  );
};

export default Home;
