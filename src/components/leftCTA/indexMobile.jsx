import React from 'react';

import {
    Container,
    Stack,
    Flex,
    Heading,
    Text,
    Button,
    Link,
} from '@chakra-ui/react';

import { Global } from '@emotion/react';

import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

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

import './style.scss';
const LeftCTAMobile = () => {
    SwiperCore.use([Keyboard, Mousewheel, Autoplay, Navigation, EffectFade]);

    const { t } = useTranslation();
    <Global
        styles={`
      @font-face {
        font-family: 'FlechaM-Regular';
        font-display: swap;
        src: url(../../assets/fonts/FlechaM/FlechaLRegular.otf) format('otf');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      @font-face {
        font-family: 'BwGradual-Regular', sans-serif;
        font-display: swap;
        src: url(../../assets/fonts/Gradual-Regular.otf) format('otf');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      `}
    />;

    const theme = extendTheme({
        fonts: {
            heading: 'FlechaM-Regular',
            body: 'BwGradual-Regular',
        },
        colors: {
            transparent: 'transparent',
        },
    });

    return (
        <ChakraProvider theme={theme} id="left-cta">
            <Container maxW={'7xl'} id="journal">
                <Stack
                    align={'center'}
                    spacing={{ base: 8 }}
                    py={{ base: 10 }}
                    direction={{ base: 'column' }}
                    position={'relative'}
                >
                    <Stack flex={1} spacing={{ base: 5 }}>
                        <Heading
                            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
                        >
                            <Text
                                as={'span'}
                                color={'black'}
                                fontWeight={'normal'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: '30%',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    zIndex: -1,
                                }}
                            >
                                {t`LeftCTA.main`}
                            </Text>
                            <br />
                        </Heading>
                        <Text color={'black'}>{t`LeftCTA.sub`}</Text>

                        <Stack
                            spacing={{ base: 4 }}
                            direction={{ base: 'column' }}
                        >
                            <Button
                                colorScheme="transparent"
                                variant="link"
                                rightIcon={
                                    <img
                                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/arrow.svg"
                                        alt="icon"
                                        width="15px"
                                    ></img>
                                }
                            >
                                <Link
                                    href="https://medium.com/omni-office"
                                    _hover={{ color: 'black' }}
                                    target="_blank"
                                >
                                    {t`LeftCTA.button`}
                                </Link>
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
            <Flex
                flex={1}
                justify={'center'}
                align={'center'}
                position={'relative'}
                w={'full'}
                bg="transparent"
            >
                <Swiper
                    className="swiper-container"
                    spaceBetween={5}
                    slidesPerView={1}
                    mousewheel={true}
                    keyboard={true}
                    effectFade={true}
                    autoplay={false}
                    fade
                    navigation
                >
                    <SwiperSlide className="text-center">
                        <img
                            style={{ position: 'absolute' }}
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/blogOne.jpeg"
                            alt="Disrupting the Office Furniture Industry"
                            data-action="https://medium.com/omnified/disrupting-the-office-furniture-industry-84710df82b13"
                            width="100%"
                            height="300px"
                        />
                        {/* <div style={{ position: 'relative', bottom: '0' }}>
                            <h1>Disrupting the Office Furniture Industry</h1>
                        </div> */}
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/blogTwo.jpeg"
                            alt="How Furniture Affects Us and the Planet"
                            data-action="https://medium.com/omnified/how-furniture-affects-us-and-the-planet-1154746aa483"
                            width="100%"
                            height="300px"
                        />
                        {/* <h1>How Furniture Affects Us and the Planet</h1> */}
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/blogThree.jpeg"
                            alt="The End of Ownership"
                            data-action="https://medium.com/omnified/the-end-of-ownership-daca430f3ba"
                            width="100%"
                            height="300px"
                        />
                        {/* <h1>The End of Ownership</h1> */}
                    </SwiperSlide>
                    <SwiperSlide className="text-center ">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/blogFour.jpeg"
                            alt="OMNI Cribs S1E1 | Planday’s HQ"
                            data-action="https://medium.com/omnified/omni-cribs-a03e1aacd696"
                            width="100%"
                            height="300px"
                        />
                        {/* <h1>OMNI Cribs S1E1 | Planday’s HQ</h1> */}
                    </SwiperSlide>
                    <SwiperSlide className="text-center ">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/blogFive.jpeg"
                            alt="OMNI Cribs S1E3 | Simple Feast’s HQ"
                            data-action="https://medium.com/omnified/omni-cribs-2c991de4c0"
                            width="100%"
                            height="300px"
                        />
                        {/* <h1>OMNI Cribs S1E3 | Simple Feast’s HQ</h1> */}
                    </SwiperSlide>
                    <SwiperSlide className="text-center ">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/blogSix.jpeg"
                            alt="OMNI Cribs S1E4 | Lunar’s HQ"
                            data-action="https://medium.com/omnified/omni-cribs-s1e4-lunars-hq-5887f318cac4"
                            width="100%"
                            height="300px"
                        />
                        {/* <h1>OMNI Cribs S1E4 | Lunar’s HQ</h1> */}
                    </SwiperSlide>
                    <SwiperSlide className="text-center ">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/blogSeven.jpeg"
                            alt="How to furnish your home office"
                            data-action="https://medium.com/omnified/how-to-furnish-your-home-office-510392bb97e2"
                            width="100%"
                            height="300px"
                        />
                        {/* <h1>How to furnish your home office</h1> */}
                    </SwiperSlide>
                    <SwiperSlide className="text-center ">
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/blogEight.jpeg"
                            alt="Home office: rules employers & employees need to know"
                            data-action="https://medium.com/omnified/home-office-rules-employers-employees-need-to-know-ac06870a0171"
                            width="100%"
                            height="300px"
                        />
                        {/* <h1>
                            Home office: rules employers & employees need to
                            know
                        </h1> */}
                    </SwiperSlide>
                </Swiper>
            </Flex>
            {/* // Second CTA */}
        </ChakraProvider>
    );
};

export default LeftCTAMobile;
