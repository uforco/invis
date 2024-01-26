import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// // import "swiper/css/navigation";
// import "swiper/css/pagination";

// // import required modules
// import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import { PropTypes } from "prop-types";
import ProcessCard from "../../../../component/processCard/ProcessCard";

const BannerInfoSlider = ({ data }) => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        spaceBetween={30}
      >
        {data.map((item, inx) => (
          <SwiperSlide key={inx}>
            <div className=" flex justify-center mb-3 " >
              <ProcessCard item={item} key={inx}></ProcessCard>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
BannerInfoSlider.propTypes = {
  data: PropTypes.array,
};
export default BannerInfoSlider;
