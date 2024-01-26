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

import PriceCard from "./PriceCard";
import { PropTypes } from "prop-types";

const PriceSlider = ({ pricedetails }) => {
  return (
    <>
      <Swiper
        className=" w-full flex justify-center overflow-visible "
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        spaceBetween={30}
      >
        {pricedetails.map((item, inx) => (
          <SwiperSlide key={inx}>
            <div className=" w-full flex mb-8 justify-center ">
              <PriceCard data={item} inxNum={inx}></PriceCard>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
PriceSlider.propTypes = {
  pricedetails: PropTypes.array,
};
export default PriceSlider;
