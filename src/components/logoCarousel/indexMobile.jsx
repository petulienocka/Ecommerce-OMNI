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

const LogoCarouselMobile = () => {
    SwiperCore.use([Keyboard, Mousewheel, Autoplay, Navigation, EffectFade]);

    return (
        <>
            <Container
                fluid
                className="mt-3 mb-3"
                style={{
                    padding: '2rem',
                    borderBottom: '1px solid black',
                    borderTop: '1px solid black',
                }}
            >
                <Swiper
                    className="swiper-container"
                    spaceBetween={5}
                    slidesPerView={2.5}
                    mousewheel={true}
                    keyboard={true}
                    autoplay={{ delay: 500 }}
                    loop={true}
                >
                    <SwiperSlide className="text-center">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/ArlaFoods.png"
                            alt="company-logo"
                            width="80px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/Trifork.jpg"
                            alt="company-logo"
                            width="100px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/Mellemfolkeligt.jpg"
                            alt="company-logo"
                            width="120px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center ml-2">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/Nordic_Prop.jpg"
                            alt="company-logo"
                            width="120px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center ml-2">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/Visma.jpg"
                            alt="company-logo"
                            width="120px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center ml-2">
                        <img
                            src=" https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/Nordic.jpg"
                            alt="company-logo"
                            width="120px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center ml-2">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/Corti.jpg"
                            alt="company-logo"
                            width="120px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center ml-2">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Logo/Lua.jpg"
                            alt="company-logo"
                            width="120px"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center ml-2">
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

export default LogoCarouselMobile;
