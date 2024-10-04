// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

const ImageSwiper = () => {
  return (
    <div className="imageSwiperContainer  fade-in cursor-pointer select-none">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      >
        <SwiperSlide>
          <div className="md:h-[400px]  max-w-full sm:h-[600px] sm:w-full mx-auto">
            {" "}
            <img
              loading="lazy"
              src="https://www.ibizsoftinc.com/images/banner-1.jpg"
              alt="Slide 1"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="md:h-[400px] max-w-full sm:h-[600px] sm:w-full mx-auto">
            <img
              loading="lazy"
              src="https://www.ibizsoftinc.com/images/banner-1.jpg"
              alt="Slide 2"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[400px] max-w-full sm:h-[600px] sm:w-full mx-auto">
            {" "}
            <img
              loading="lazy"
              src="https://www.ibizsoftinc.com/images/banner-1.jpg"
              alt="Slide 3"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[400px] max-w-full sm:h-[600px] sm:w-full mx-auto">
            {" "}
            <img
              loading="lazy"
              src="https://www.ibizsoftinc.com/images/banner-1.jpg"
              alt="Slide 4"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
        {/* ... other slides ... */}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
