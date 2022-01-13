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
import Container from 'react-bootstrap/Container';

import ScreenDetection from '../../helpers/ScreenDetection';

import LogoCarouselMobile from './indexMobile';

const LogoCarousel = () => {
    const size = ScreenDetection();
    SwiperCore.use([Keyboard, Mousewheel, Autoplay, Navigation, EffectFade]);

    if (size.width < 550) {
        return <LogoCarouselMobile />;
    }
    return (
        <>
            <Container
                fluid
                className="mt-5"
                style={{
                    padding: '2rem',
                    borderBottom: '1px solid black',
                    borderTop: '1px solid black',
                }}
            >
                <Swiper
                    className="swiper-container"
                    // interval={3000}
                    spaceBetween={1}
                    slidesPerView={5}
                    mousewheel={true}
                    keyboard={true}
                    autoplay={{ delay: 500 }}
                    loop={true}
                >
                    <SwiperSlide className="text-center">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/ArlaFoods.png"
                            alt="company-logo"
                            width="100px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/Trifork.jpg"
                            alt="company-logo"
                            width="120px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/Mellemfolkeligt.jpg"
                            alt="company-logo"
                            width="120px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/Nordic_Prop.jpg"
                            alt="company-logo"
                            width="120px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/Visma.jpg"
                            alt="company-logo"
                            width="120px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center ml-5">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/Nordic.jpg"
                            alt="company-logo"
                            width="120px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/Corti.jpg"
                            alt="company-logo"
                            width="120px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/Lua.jpg"
                            alt="company-logo"
                            width="120px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/GrantCompass.jpg"
                            alt="company-logo"
                            width="120px"
                        />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </>
    );
};

export default LogoCarousel;
