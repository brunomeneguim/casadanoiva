/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção do Slider para a página Inicial */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

export default function SecaoInicialSlider() {
    return (

        <section className="secaoInicialSlider">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                id="sliderPaginaInicial"
            >
                <SwiperSlide><img src="/assets/imgSlider1.jpg" alt="Slide Inicial 1" /></SwiperSlide>
                <SwiperSlide><img src="/assets/imgSlider2.jpg" alt="Slide Inicial 2" /></SwiperSlide>
                <SwiperSlide><img src="/assets/imgSlider3.jpg" alt="Slide Inicial 3" /></SwiperSlide>
                <SwiperSlide><img src="/assets/imgSlider4.jpg" alt="Slide Inicial 4" /></SwiperSlide>
            </Swiper>
        </section>
    );
}
