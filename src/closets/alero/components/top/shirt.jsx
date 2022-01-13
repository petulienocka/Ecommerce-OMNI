import React, { useState } from 'react';

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

const Shirt = () => {
    SwiperCore.use([Keyboard, Mousewheel, Autoplay, Navigation, EffectFade]);

    const [finalData, setFinalData] = useState({});

    const fetchData = () => {
        fetch('https://api.npoint.io/bbe23d63b7951d366d62')
            .then((response) => response.json())
            .then((data) => {
                setFinalData(data[0].clothes.regular.top);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Swiper
                className="swiper-container"
                spaceBetween={1}
                slidesPerView={3}
                mousewheel={true}
                keyboard={true}
                loop={true}
                style={{ marginTop: '5rem' }}
            >
                {finalData.shirt &&
                    finalData.shirt.map((item) => (
                        <SwiperSlide className="text-center">
                            <img
                                src={item.image}
                                alt="company-logo"
                                width="120px"
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
};

export default Shirt;
