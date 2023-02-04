import React from "react";
import HeroSlider, { Slide } from 'hero-slider';

const slider1 = "./assets/imgSlider1.jpg";
const slider2 = "./assets/imgSlider2.jpg";
const slider3 = "./assets/imgSlider3.jpg";
const slider4 = "./assets/imgSlider4.jpg";

const Slider = () => {
    return (
        <HeroSlider
            slidingAnimation="left_to_right"
            orientation="horizontal"
            initialSlider={1}
            onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
            onChange={nextSlide => console.log("onChange", nextSlide)}
            onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.33)"
            }}
            settings={{
                slidingDuration: 250,
                slidingDelay: 100,
                shoudAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 4500,
                height: "100vh"
            }}
        >

            <Slide
                background={{
                    backgroundImage: slider1,
                    backgroundAttachment: "fixed"
                }}
            />
            <Slide
                background={{
                    backgroundImage: slider2,
                    backgroundAttachment: "fixed"
                }}
            />
            <Slide
                background={{
                    backgroundImage: slider3,
                    backgroundAttachment: "fixed"
                }}
            />
            <Slide
                background={{
                    backgroundImage: slider4,
                    backgroundAttachment: "fixed"
                }}
            />
        </HeroSlider>
    );
}

export default Slider;