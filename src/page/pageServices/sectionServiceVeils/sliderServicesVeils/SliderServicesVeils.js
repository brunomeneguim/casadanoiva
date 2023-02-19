import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

import styles from './SliderServicesVeils.module.css';

export default function SliderServicesVeils() {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-pagination-color": "#fff",
                    "--swiper-navigation-color": "#fff"
                }}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={styles.mySwiperVeils}

                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }}
            >
                <SwiperSlide><img className={styles.imgSliderVeils} src="/assets/imgServicos/Veus/imgServicoVeus1.jpg" alt="Véu 1" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgSliderVeils} src="/assets/imgServicos/Veus/imgServicoVeus2.jpg" alt="Véu 2" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgSliderVeils} src="/assets/imgServicos/Veus/imgServicoVeus3.jpg" alt="Véu 3" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgSliderVeils} src="/assets/imgServicos/Veus/imgServicoVeus4.jpg" alt="Véu 4" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgSliderVeils} src="/assets/imgServicos/Veus/imgServicoVeus5.jpg" alt="Véu 5" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgSliderVeils} src="/assets/imgServicos/Veus/imgServicoVeus6.jpg" alt="Véu 6" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgSliderVeils} src="/assets/imgServicos/Veus/imgServicoVeus7.jpg" alt="Véu 7" /></SwiperSlide>
            </Swiper>
        </>
    )
}