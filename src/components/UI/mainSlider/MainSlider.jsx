import scss from "./MainSlider.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { dataSlider } from "./constants";

function MainSlider() {
  return (
    <div className={scss.mainSlider}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className={scss.mySwiper}
      >
        {dataSlider?.map((item) => (
          <SwiperSlide key={item.title}>
            <div className={scss.wrapperSlide}>
              <span>Выделяесь среди других</span>
              <h1>{item.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainSlider;
