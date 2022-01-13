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

const JournalMobile = () => {
    SwiperCore.use([Keyboard, Mousewheel, Autoplay, Navigation, EffectFade]);

    return (
        <>
            <Swiper
                className="swiper-container"
                spaceBetween={0}
                slidesPerView={1}
                mousewheel={true}
                keyboard={true}
                effectFade={true}
                autoplay={true}
                fade
            >
                <SwiperSlide className="text-center">
                    <img
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/1.jpg"
                        alt="journal-section"
                    ></img>
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <img
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/2.jpg"
                        alt="journal-section"
                    ></img>
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <img
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/3.jpg"
                        alt="journal-section"
                    ></img>
                </SwiperSlide>
                <SwiperSlide className="text-center">
                    <img
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/4.jpg"
                        alt="journal-section"
                    ></img>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default JournalMobile;
