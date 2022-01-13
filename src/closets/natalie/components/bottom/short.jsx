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
import { Box, SimpleGrid, Text } from '@chakra-ui/react';

const Short = () => {
    SwiperCore.use([Keyboard, Mousewheel, Autoplay, Navigation, EffectFade]);
    const [finalData, setFinalData] = React.useState([]);

    const fetchData = () => {
        fetch('https://api.npoint.io/eb35d003cd0c1991c6aa/6')
            .then((response) => response.json())
            .then((data) => {
                setFinalData(data.clothes.regular.bottom);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    React.useEffect(() => {
        fetchData();
    }, []);

    const lengthData = finalData.short;

    return (
        <>
            <Swiper
                className="swiper-container"
                spaceBetween={0}
                slidesPerView={3}
                mousewheel={true}
                keyboard={true}
                loop={true}
            >
                {lengthData && lengthData.length === 0 ? (
                    <>
                        <h1 className="text-center" style={{ padding: '2rem' }}>
                            You have no shorts!
                        </h1>
                    </>
                ) : null}
                {finalData.shorts &&
                    finalData.shorts.map((item) => (
                        <>
                            <SwiperSlide>
                                <SimpleGrid
                                    columns={2}
                                    borderLeft="1px solid black"
                                >
                                    <Box p={2}>
                                        <img
                                            src={item.image}
                                            alt="shorts"
                                            width="150px"
                                        />
                                    </Box>
                                    <Box p={2} m={0} textAlign="left">
                                        <Text fontSize={15}> {item.name}</Text>
                                    </Box>
                                </SimpleGrid>
                            </SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                        </>
                    ))}
            </Swiper>
        </>
    );
};

export default Short;
