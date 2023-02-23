import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

import styles from "./SliderServicesVeils.module.css";

export default function SliderServicesVeils() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-color": "#fff",
          display: "flex",
          position: "relative",
          width: "80%",
          height: "100%",
          padding: "50px 0",
        }}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`${styles.swiperVeils}`}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <img
            className={`${styles.imgSliderVeils}`}
            src="/assets/img/imgServices/Veils/imgServicesVeils1.jpg"
            alt="Véu 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.imgSliderVeils}`}
            src="/assets/img/imgServices/Veils/imgServicesVeils2.jpg"
            alt="Véu 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.imgSliderVeils}`}
            src="/assets/img/imgServices/Veils/imgServicesVeils3.jpg"
            alt="Véu 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.imgSliderVeils}`}
            src="/assets/img/imgServices/Veils/imgServicesVeils4.jpg"
            alt="Véu 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.imgSliderVeils}`}
            src="/assets/img/imgServices/Veils/imgServicesVeils5.jpg"
            alt="Véu 5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.imgSliderVeils}`}
            src="/assets/img/imgServices/Veils/imgServicesVeils6.jpg"
            alt="Véu 6"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
