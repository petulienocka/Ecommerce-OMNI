import React, { useState, useCallback } from 'react';
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
    Flex,
    Box,
    Heading,
    Text,
    Image,
    Grid,
    GridItem,
    Button,
} from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { useTranslation } from 'react-i18next';

const CompanyMobile = () => {
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

    const Hybrid = () => {
        return (
            <>
                <GridItem colSpan={4} p={'1rem'}>
                    <Heading
                        fontSize={{
                            base: '3xl',
                            sm: '4xl',
                            lg: '34px',
                        }}
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
                        {t`companyPaid.one.header`}
                    </Heading>
                    <br />
                    <Heading
                        color={'black'}
                        fontWeight={'normal'}
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                    >{t`companyPaid.one.subheader`}</Heading>
                    <br />
                    <Text color={'black'}>{t`companyPaid.one.text`}</Text>
                </GridItem>
                <GridItem colSpan={1}>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}
                    >
                        <Box
                            position={'relative'}
                            height={'450px'}
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
                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Paid/1.webp"
                            />
                        </Box>
                    </Flex>
                </GridItem>
            </>
        );
    };

    const Money = () => {
        return (
            <>
                <GridItem colSpan={4} p={'1rem'}>
                    <Heading
                        fontSize={{
                            base: '3xl',
                            sm: '4xl',
                            lg: '34px',
                        }}
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
                        {t`companyPaid.two.header`}
                    </Heading>
                    <br />
                    <Heading
                        color={'black'}
                        fontWeight={'normal'}
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                    >{t`companyPaid.two.subheader`}</Heading>
                    <br />
                    <Text color={'black'}>{t`companyPaid.two.text`}</Text>
                </GridItem>
                <GridItem colSpan={1}>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}
                    >
                        <Box
                            position={'relative'}
                            height={'450px'}
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
                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Paid/2.webp"
                            />
                        </Box>
                    </Flex>
                </GridItem>
            </>
        );
    };

    const Carbon = () => {
        return (
            <>
                <GridItem colSpan={4} p={'1rem'}>
                    <Heading
                        fontSize={{
                            base: '3xl',
                            sm: '4xl',
                            lg: '34px',
                        }}
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
                        {t`companyPaid.three.header`}
                    </Heading>
                    <br />
                    <Heading
                        color={'black'}
                        fontWeight={'normal'}
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                    >{t`companyPaid.three.subheader`}</Heading>
                    <br />
                    <Text color={'black'}>{t`companyPaid.three.text`}</Text>
                </GridItem>
                <GridItem colSpan={1}>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}
                    >
                        <Box
                            position={'relative'}
                            height={'450px'}
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
                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Company-Paid/3.webp"
                            />
                        </Box>
                    </Flex>
                </GridItem>
            </>
        );
    };

    const [activeComponent, setActiveComponent] = useState('hybrid');

    const modifyActiveComponent = useCallback(
        (newActiveComponent) => {
            setActiveComponent(newActiveComponent);
        },
        [setActiveComponent]
    );

    return (
        <ChakraProvider theme={theme}>
            <div id="why-omni" style={{ marginTop: '7rem' }}>
                <Swiper
                    className="swiper-container"
                    spaceBetween={0}
                    slidesPerView={2.5}
                    mousewheel={true}
                    keyboard={true}
                    effectFade={true}
                    autoplay={true}
                    fade
                    style={{
                        backgroundColor: '#f9f7f4',
                        height: '3rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                    }}
                >
                    <SwiperSlide
                        className="text-center"
                        style={{ display: 'flex', marginLeft: 'ml-5' }}
                    >
                        <Button
                            className="a"
                            colorScheme="transparent"
                            variant="link"
                            onClick={() => modifyActiveComponent('hybrid')}
                            style={{
                                fontWeight:
                                    activeComponent === 'hybrid'
                                        ? 'bold'
                                        : 'normal',
                            }}
                        >{t`companyPaid.one.header`}</Button>
                    </SwiperSlide>
                    <SwiperSlide
                        className="text-center"
                        style={{ display: 'flex', marginLeft: '5rem' }}
                    >
                        <Button
                            className="a"
                            colorScheme="transparent"
                            variant="link"
                            onClick={() => modifyActiveComponent('money')}
                            style={{
                                fontWeight:
                                    activeComponent === 'money'
                                        ? 'bold'
                                        : 'normal',
                            }}
                        >{t`companyPaid.two.header`}</Button>
                    </SwiperSlide>
                    <SwiperSlide
                        className="text-center"
                        style={{ display: 'flex', marginLeft: '5rem' }}
                    >
                        <Button
                            className="a"
                            colorScheme="transparent"
                            variant="link"
                            onClick={() => modifyActiveComponent('carbon')}
                            style={{
                                fontWeight:
                                    activeComponent === 'carbon'
                                        ? 'bold'
                                        : 'normal',
                            }}
                        >{t`companyPaid.three.header`}</Button>
                    </SwiperSlide>
                </Swiper>
                <Grid
                    h="650px"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                    mt="3rem"
                >
                    {activeComponent === 'hybrid' && <Hybrid />}
                    {activeComponent === 'money' && <Money />}
                    {activeComponent === 'carbon' && <Carbon />}
                </Grid>
            </div>
        </ChakraProvider>
    );
};

export default CompanyMobile;
