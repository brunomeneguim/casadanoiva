import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data.js";
import "./style.css";

const SecaoSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval = 10;
    let intervalTime = 4000;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const nextSlide = (e) => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        console.log("next");
    };

    const prevSlide = (e) => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
        console.log("prev");

    };
    // eslint-disable-next-line
    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [auto, autoScroll, currentSlide, slideInterval]);

    return (
        <section className="container-slider">
            <div className="slider">
                <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
                <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
                {sliderData.map((slide, index) => {
                    return (
                        <div
                            className={index === currentSlide ? "slide current" : "slide"}
                            key={index}
                        >
                            {index === currentSlide && (
                                <div>
                                    <img src={slide.image} alt="slide" className="image" onSubmit={handleSubmit} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default SecaoSlider;