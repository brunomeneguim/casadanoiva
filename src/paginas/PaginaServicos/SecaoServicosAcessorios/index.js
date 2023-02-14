/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o primeiro serviço para a página Serviços */

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

export default function SecaoServicosAcessorios() {
    return (

        /* Container Acessórios */
        <section className="secaoServicosAcessorios" id="acessorios">

            {/* Container apenas dos Textos */}
            <div className="boxAcessorios">
                <h1 className="tituloAcessorios">Acessórios</h1>
                <p className="textoAcessorios">Sim. Por causa do código de ética do psicólogo não é autorizado divulgar
                    os valores das sessões por aqui. Porém no pacote mensal (4 sessões) o valor é
                    diferenciado, com desconto comparado ao valor da sessão individual.
                    Se você tem interesse em fazer terapia, me chama no chat que te passo os valores!
                </p>
            </div>
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
                id="swiperAcessorios"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }}
            >
                <SwiperSlide><img className="imgSliderAcessorios" src="/assets/imgServicos/Acessorios/imgServicoAcessorios1.jpg" alt="Acessório 1" /></SwiperSlide>
                <SwiperSlide><img className="imgSliderAcessorios" src="/assets/imgServicos/Acessorios/imgServicoAcessorios2.jpg" alt="Acessório 2" /></SwiperSlide>
                <SwiperSlide><img className="imgSliderAcessorios" src="/assets/imgServicos/Acessorios/imgServicoAcessorios3.jpg" alt="Acessório 3" /></SwiperSlide>
                <SwiperSlide><img className="imgSliderAcessorios" src="/assets/imgServicos/Acessorios/imgServicoAcessorios4.jpg" alt="Acessório 4" /></SwiperSlide>
                <SwiperSlide><img className="imgSliderAcessorios" src="/assets/imgServicos/Acessorios/imgServicoAcessorios5.jpg" alt="Acessório 5" /></SwiperSlide>
                <SwiperSlide><img className="imgSliderAcessorios" src="/assets/imgServicos/Acessorios/imgServicoAcessorios6.jpg" alt="Acessório 6" /></SwiperSlide>
            </Swiper>
        </section>
    );
}
