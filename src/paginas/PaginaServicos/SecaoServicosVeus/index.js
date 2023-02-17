/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o segundo serviço para a página Serviços */

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

export default function SecaoServicosVeus() {
    return (

        /* Container Véus */
        <section className="secaoServicosVeus" id="veus">

            {/* Container penas do Slider */}
            <Swiper
                /* Id para diferenciar do Slider da página inicial */
                // slidesPerView={2}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                id="swiperVeus"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }}
            >
                <SwiperSlide><img className="imgSliderVeus" src="/assets/imgServicos/Veus/imgServicoVeus1.jpg" alt="Véu 1" /></SwiperSlide>
                <SwiperSlide><img className="imgSliderVeus" src="/assets/imgServicos/Veus/imgServicoVeus2.jpg" alt="Véu 2" /></SwiperSlide>
                <SwiperSlide><img className="imgSliderVeus" src="/assets/imgServicos/Veus/imgServicoVeus3.jpg" alt="Véu 3" /></SwiperSlide>
                <SwiperSlide><img className="imgSliderVeus" src="/assets/imgServicos/Veus/imgServicoVeus4.jpg" alt="Véu 4" /></SwiperSlide>
                <SwiperSlide><img className="imgSliderVeus" src="/assets/imgServicos/Veus/imgServicoVeus5.jpg" alt="Véu 5" /></SwiperSlide>
                <SwiperSlide><img className="imgSliderVeus" src="/assets/imgServicos/Veus/imgServicoVeus6.jpg" alt="Véu 6" /></SwiperSlide>
                <SwiperSlide><img className="imgSliderVeus" src="/assets/imgServicos/Veus/imgServicoVeus7.jpg" alt="Véu 7" /></SwiperSlide>
            </Swiper>

            {/* Container apenas dos Textos */}
            <div className="boxVeus">
                <h1 className="tituloVeus">Véus</h1>
                <p className="textoVeus">O Véu da Noiva tem um significado especial de transparecer a pureza e honra da mulher, além de ficar
                    muito lindo nas fotos! Na Casa da Noiva você encontra vários modelos de véus: longos, médios, curtos, lisos, com bordados,
                    simples, rendados, com fita de cetim... E os valores variam entre R$ 100,00 à R$ 200,00 a locação.
                </p>
            </div>
        </section>
    );
}
