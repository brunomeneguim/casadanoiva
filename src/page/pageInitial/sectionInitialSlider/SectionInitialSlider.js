/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção do Slider para a página Inicial */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import styles from "./SectionInitialSlider.module.css";

export default function SectionInitialSlider() {
  return (
    <section className={styles.sectionInitialSlider}>
      <Swiper
        style={{
          "--swiper-pagination-color": "#BB7D68",
          "--swiper-navigation-color": "#BB7D68",
        }}
        className={styles.mySwiperInitial}
        id="swiperInitial"
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img
            className={styles.imgSliderInitial}
            src="/assets/img/imgSlider1.jpg"
            alt="Slide Inicial 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.imgSliderInitial}
            src="/assets/img/imgSlider2.jpg"
            alt="Slide Inicial 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.imgSliderInitial}
            src="/assets/img/imgSlider3.jpg"
            alt="Slide Inicial 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.imgSliderInitial}
            src="/assets/img/imgSlider4.jpg"
            alt="Slide Inicial 4"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
