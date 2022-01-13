import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Keyboard,
    Mousewheel,
    Autoplay,
    Navigation,
    EffectFade,
} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

const Short = () => {
    SwiperCore.use([Keyboard, Mousewheel, Autoplay, Navigation, EffectFade]);
    return (
        <>
            <Swiper
                className="swiper-container"
                // interval={3000}
                spaceBetween={1}
                slidesPerView={3}
                mousewheel={true}
                keyboard={true}
                loop={true}
            >
                <SwiperSlide className="text-center">
                    <img
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Unliish/Icons/denim-shorts.png"
                        alt="company-logo"
                        width="120px"
                    />
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <img
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Unliish/Icons/denim-shorts.png"
                        alt="company-logo"
                        width="120px"
                    />
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <img
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Unliish/Icons/denim-shorts.png"
                        alt="company-logo"
                        width="120px"
                    />
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <img
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Unliish/Icons/denim-shorts.png"
                        alt="company-logo"
                        width="120px"
                    />
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <img
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Unliish/Icons/denim-shorts.png"
                        alt="company-logo"
                        width="120px"
                    />
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <img
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Unliish/Icons/denim-shorts.png"
                        alt="company-logo"
                        width="120px"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Short;
