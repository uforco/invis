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
import ExpertiseContainCard from "./ExpertiseContainCard";

const ExpertiseContainSlider = ({expertiseInfo}) => {
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
        {expertiseInfo.map((item, inx) => (
          <SwiperSlide key={inx}>
            <div className=" w-full justify-start flex mb-12 " >
              <ExpertiseContainCard
                data={item}
                key={inx}
              ></ExpertiseContainCard>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
ExpertiseContainSlider.propTypes = {
    expertiseInfo: PropTypes.array,
};
export default ExpertiseContainSlider;
