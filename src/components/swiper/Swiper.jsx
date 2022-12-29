// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default ({ swiperImages }) => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        loop={true}
        style={{
          height: "inherit",
          width: "inherit",
          margin: "inherit",
          padding: "inherit",
        }}
      >
        {swiperImages.map((info, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={info.image}
                style={{ width: "100%", height: "100%", objectFit: "fit" }}
              />
              <p className="swiperText">{info.text}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
