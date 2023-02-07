import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

export default function SecaoSlider() {
    return (

        <div className="secao-slider">
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
                id="pagina-inicial"
            >
                <SwiperSlide><img src="./assets/imgServicos/acessorios/imgSlider1.jpg" alt="Slide 1" /></SwiperSlide>
                <SwiperSlide><img src="./assets/imgServicos/acessorios/imgSlider2.jpg" alt="Slide 2" /></SwiperSlide>
                <SwiperSlide><img src="./assets/imgServicos/acessorios/imgSlider3.jpg" alt="Slide 3" /></SwiperSlide>
                <SwiperSlide><img src="./assets/imgServicos/acessorios/imgSlider4.jpg" alt="Slide 4" /></SwiperSlide>
            </Swiper>
        </div>
    );
}
