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
                id="swiperServicos"
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
            </Swiper>

            {/* Container apenas dos Textos */}
            <div className="boxVeus">
                <h1 className="tituloVeus">Véus</h1>
                <p className="textoVeus">Sim. Por causa do código de ética do psicólogo não é autorizado divulgar
                    os valores das sessões por aqui. Porém no pacote mensal (4 sessões) o valor é
                    diferenciado, com desconto comparado ao valor da sessão individual.
                    Se você tem interesse em fazer terapia, me chama no chat que te passo os valores!
                </p>
            </div>
        </section>
    );
}
