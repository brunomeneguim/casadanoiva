// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import styles from "./SliderServicesAccessories.module.css";

export default function SliderServicesAccessories() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#BB7D68",
          "--swiper-navigation-color": "#BB7D68",
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
        className={`${styles.swiperAccessories}`}
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
            className={`${styles.imgSliderAccessories}`}
            src="/assets/img/imgServices/Accessories/imgServicesAccessories1.jpg"
            alt="Acessório 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.imgSliderAccessories}`}
            src="/assets/img/imgServices/Accessories/imgServicesAccessories2.jpg"
            alt="Acessório 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.imgSliderAccessories}`}
            src="/assets/img/imgServices/Accessories/imgServicesAccessories3.jpg"
            alt="Acessório 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.imgSliderAccessories}`}
            src="/assets/img/imgServices/Accessories/imgServicesAccessories4.jpg"
            alt="Acessório 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.imgSliderAccessories}`}
            src="/assets/img/imgServices/Accessories/imgServicesAccessories5.jpg"
            alt="Acessório 5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`${styles.imgSliderAccessories}`}
            src="/assets/img/imgServices/Accessories/imgServicesAccessories6.jpg"
            alt="Acessório 6"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
