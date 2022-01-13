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
    GridItem,
    Button,
    VStack,
} from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { useTranslation } from 'react-i18next';

const SalaryMobile = () => {
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

    const Problems = () => {
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
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Salary-Deduction/1.webp"
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
                    >{t`salaryDeduction.one.subheader`}</Heading>
                    <br />
                    <Text color={'black'}>{t`salaryDeduction.one.text`}</Text>
                </GridItem>
            </>
        );
    };

    const Settle = () => {
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
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Salary-Deduction/2.webp"
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
                    >{t`salaryDeduction.two.subheader`}</Heading>
                    <br />
                    <Text color={'black'}>{t`salaryDeduction.two.text`}</Text>
                </GridItem>
            </>
        );
    };

    const HomeOffice = () => {
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
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Salary-Deduction/3.webp"
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
                    >{t`salaryDeduction.three.subheader`}</Heading>
                    <br />
                    <Text color={'black'}>{t`salaryDeduction.three.text`}</Text>
                </GridItem>
            </>
        );
    };

    // const [activeComponent, setActiveComponent] = useState('problems');

    // const modifyActiveComponent = useCallback(
    //     (newActiveComponent) => {
    //         setActiveComponent(newActiveComponent);
    //     },
    //     [setActiveComponent]
    // );

    return (
        <ChakraProvider theme={theme}>
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
                        // onClick={() => modifyActiveComponent('problems')}
                        style={{
                            padding: '1rem',
                            // fontWeight:
                            //     activeComponent === 'problems'
                            //         ? 'bold'
                            //         : 'normal',
                        }}
                    >{t`salaryDeduction.one.header`}</Button>
                    {/* {activeComponent === 'problems' && <Problems />} */}
                    <Problems />
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
                        // onClick={() => modifyActiveComponent('settle')}
                    >{t`salaryDeduction.two.header`}</Button>
                    <Settle />
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
                        // onClick={() => modifyActiveComponent('home-office')}
                    >{t`salaryDeduction.three.header`}</Button>
                    <HomeOffice />
                </SwiperSlide>
            </Swiper>
        </ChakraProvider>
    );
};

export default SalaryMobile;
