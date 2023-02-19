// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

import styles from './SliderServicesAccessories.module.css';

export default function SliderServicesAccessories() {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-pagination-color": "#BB7D68",
                    "--swiper-navigation-color": "#BB7D68"
                }}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={styles.mySwiperAccessories}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }}
            >
                <SwiperSlide><img className={styles.imgSliderAccessories} src="/assets/imgServicos/Acessorios/imgServicoAcessorios1.jpg" alt="Acessório 1" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgSliderAccessories} src="/assets/imgServicos/Acessorios/imgServicoAcessorios2.jpg" alt="Acessório 2" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgSliderAccessories} src="/assets/imgServicos/Acessorios/imgServicoAcessorios3.jpg" alt="Acessório 3" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgSliderAccessories} src="/assets/imgServicos/Acessorios/imgServicoAcessorios4.jpg" alt="Acessório 4" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgSliderAccessories} src="/assets/imgServicos/Acessorios/imgServicoAcessorios5.jpg" alt="Acessório 5" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgSliderAccessories} src="/assets/imgServicos/Acessorios/imgServicoAcessorios6.jpg" alt="Acessório 6" /></SwiperSlide>
            </Swiper>
        </>
    )
}