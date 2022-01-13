import React from 'react';
import './style.scss';

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

import {
    Box,
    Heading,
    Text,
    Image,
    Grid,
    GridItem,
    Button,
    VStack,
} from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { useTranslation } from 'react-i18next';

const SidebarMobile = () => {
    const { t } = useTranslation();
    SwiperCore.use([Keyboard, Mousewheel, Autoplay, Navigation, EffectFade]);

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
    });

    const Convinience = () => {
        return (
            <>
                <VStack align="stretch">
                    <Box
                        position={'relative'}
                        height={'145px'}
                        rounded={'1xl'}
                        boxShadow={'2xl'}
                        width={'100%'}
                        overflow={'hidden'}
                    >
                        <Image
                            alt={'Hero Image'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Why-OMNI/1.png"
                        />
                    </Box>
                </VStack>
                <GridItem p={'2rem'}>
                    <Heading
                        color={'black'}
                        fontWeight={'normal'}
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                    >{t`whyOmni.convinience.subheader`}</Heading>
                    <br />
                    <Text color={'black'}>{t`whyOmni.convinience.text`}</Text>
                </GridItem>
            </>
        );
    };

    const PayAsYouGo = () => {
        return (
            <>
                <VStack align="stretch">
                    <Box
                        position={'relative'}
                        height={'145px'}
                        rounded={'1xl'}
                        boxShadow={'2xl'}
                        width={'100%'}
                        overflow={'hidden'}
                    >
                        <Image
                            alt={'Hero Image'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Why-OMNI/2.jpg"
                        />
                    </Box>
                </VStack>
                <GridItem p={'2rem'}>
                    <Heading
                        color={'black'}
                        fontWeight={'normal'}
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                    >{t`whyOmni.payAsYouGo.subheader`}</Heading>
                    <br />
                    <Text color={'black'}>{t`whyOmni.payAsYouGo.text`}</Text>
                </GridItem>
            </>
        );
    };

    const Flexibility = () => {
        return (
            <>
                <VStack align="stretch">
                    <Box
                        position={'relative'}
                        height={'145px'}
                        rounded={'1xl'}
                        boxShadow={'2xl'}
                        width={'100%'}
                        overflow={'hidden'}
                    >
                        <Image
                            alt={'Hero Image'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Why-OMNI/3.jpg"
                        />
                    </Box>
                </VStack>
                <GridItem p={'2rem'}>
                    <Heading
                        color={'black'}
                        fontWeight={'normal'}
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                    >{t`whyOmni.flexibility.subheader`}</Heading>
                    <br />
                    <Text color={'black'}>{t`whyOmni.flexibility.text`}</Text>
                </GridItem>
            </>
        );
    };

    const Sustainability = () => {
        return (
            <>
                <VStack align="stretch">
                    <Box
                        position={'relative'}
                        height={'145px'}
                        rounded={'1xl'}
                        boxShadow={'2xl'}
                        width={'100%'}
                        overflow={'hidden'}
                    >
                        <Image
                            alt={'Hero Image'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Why-OMNI/4.jpg"
                        />
                    </Box>
                </VStack>
                <GridItem p={'2rem'}>
                    <Heading
                        color={'black'}
                        fontWeight={'normal'}
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                    >{t`whyOmni.sustainability.subheader`}</Heading>
                    <br />
                    <Text
                        color={'black'}
                    >{t`whyOmni.sustainability.text`}</Text>
                </GridItem>
            </>
        );
    };

    // const [activeComponent, setActiveComponent] = useState('convinience');

    // const modifyActiveComponent = useCallback(
    //     (newActiveComponent) => {
    //         setActiveComponent(newActiveComponent);
    //     },
    //     [setActiveComponent]
    // );

    return (
        <ChakraProvider theme={theme}>
            <div id="why-omni" style={{ marginTop: '7rem' }}>
                <Swiper
                    className="swiper-container"
                    spaceBetween={50}
                    slidesPerView={1}
                    mousewheel={true}
                    keyboard={true}
                    effectFade={true}
                    autoplay={true}
                    fade
                    style={{
                        backgroundColor: '#f9f7f4',
                        justifyContent: 'left',
                        alignItems: 'left',
                        marginTop: '7rem',
                    }}
                >
                    <SwiperSlide
                        style={{
                            width: '375px',
                            height: 'auto',
                        }}
                    >
                        <Button
                            className="a"
                            colorScheme="transparent"
                            variant="link"
                            style={{
                                padding: '1rem',
                            }}
                        >{t`whyOmni.convinience.header`}</Button>
                        <Convinience />
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            width: '375px',
                            height: 'auto',
                        }}
                    >
                        <Button
                            className="a"
                            colorScheme="transparent"
                            variant="link"
                            style={{
                                padding: '1rem',
                            }}
                        >{t`whyOmni.payAsYouGo.header`}</Button>
                        <PayAsYouGo />
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            width: '375px',
                            height: 'auto',
                        }}
                    >
                        <Button
                            className="a"
                            colorScheme="transparent"
                            variant="link"
                            style={{
                                padding: '1rem',
                            }}
                        >{t`whyOmni.flexibility.header`}</Button>
                        <Flexibility />
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            width: '375px',
                            height: 'auto',
                        }}
                    >
                        <Button
                            className="a"
                            colorScheme="transparent"
                            variant="link"
                            style={{
                                padding: '1rem',
                            }}
                        >{t`whyOmni.sustainability.header`}</Button>
                        <Sustainability />
                    </SwiperSlide>
                </Swiper>
                <Grid
                    h="500px"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                    mt="3rem"
                ></Grid>
            </div>
        </ChakraProvider>
    );
};

export default SidebarMobile;
