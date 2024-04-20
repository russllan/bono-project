import scss from "./GallerySlider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { galleryData } from "./constant";

function GallerySlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={130}
        centeredSlides={true}
        className="mySwiper"
      >
        {galleryData?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={scss.img}>
              <img src={item.img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default GallerySlider;
