import React, { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const slidesRef = useRef([]);

    useEffect(() => {
    if (emblaApi) {
        const applyParallax = () => {
            const progress = emblaApi.scrollProgress();

            slidesRef.current.forEach((slide, index) => {
                const offset = emblaApi.scrollSnapList()[index] - progress;
                slide.style.transform = `translateX(${offset * 30}px)`; // Reduced from 50px to 30px
            });
        };

        emblaApi.on('scroll', applyParallax);
        emblaApi.on('resize', applyParallax);
    }
}, [emblaApi]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide" ref={el => slidesRef.current[0] = el}>
                    <img src="https://via.placeholder.com/1200x400" alt="Slide 1" />
                </div>
                <div className="embla__slide" ref={el => slidesRef.current[1] = el}>
                    <img src="https://via.placeholder.com/1200x400" alt="Slide 2" />
                </div>
                <div className="embla__slide" ref={el => slidesRef.current[2] = el}>
                    <img src="https://via.placeholder.com/1200x400" alt="Slide 3" />
                </div>
            </div>
        </div>
    );
}
