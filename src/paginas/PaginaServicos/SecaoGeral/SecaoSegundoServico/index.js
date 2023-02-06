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

export default function SecaoSegundoServico() {
    return (
        <div className="secao-segundo-servico" >

            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="./assets/imgServicos/veus/imgSlider1.jpg" alt="Slide 1" /></SwiperSlide>
                <SwiperSlide><img src="./assets/imgServicos/veus/imgSlider2.jpg" alt="Slide 2" /></SwiperSlide>
                <SwiperSlide><img src="./assets/imgServicos/veus/imgSlider3.jpg" alt="Slide 3" /></SwiperSlide>
                <SwiperSlide><img src="./assets/imgServicos/veus/imgSlider4.jpg" alt="Slide 4" /></SwiperSlide>
            </Swiper>
            <div className="card-veus" id="veus">
                <h1 className="veus-titulo">Véus</h1>
                <p className="veus-paragrafo">Sim. Por causa do código de ética do psicólogo não é autorizado divulgar
                    os valores das sessões por aqui. Porém no pacote mensal (4 sessões) o valor é
                    diferenciado, com desconto comparado ao valor da sessão individual.
                    Se você tem interesse em fazer terapia, me chama no chat que te passo os valores!
                </p>
            </div>
        </div>
    );
}
