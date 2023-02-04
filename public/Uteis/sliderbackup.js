/*import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/bundle';
import './style.css'
*/
/* FUNÇÃO QUE EXPORTA A SECAO SLIDER PARA A SECAO GERAL */
/*
export default function SecaoSlider() {
    return (
        <section className="secao-slider">
            <div className="swiper-container">
                <Swiper                            
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}                    
                    pagination={{
                        clickable: true,                        
                    }}                    
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <img src="./../assets/imgSlider1.jpg" alt="Slide 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./../assets/imgSlider2.jpg" alt="Slide 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./../assets/imgSlider3.jpg" alt="Slide 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./../assets/imgSlider4.jpg" alt="Slide 4" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
/*
var swiper = new Swiper ('.wiper-container', {
    speed: 600,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

*/
