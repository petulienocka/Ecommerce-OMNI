import React, { useState, useCallback } from 'react';
import './style.scss';

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
import ScreenDetection from '../../helpers/ScreenDetection';
import SalaryMobile from './indexMobile';

const SalaryDeduction = () => {
    const { t } = useTranslation();
    const size = ScreenDetection();
    const [activeComponent, setActiveComponent] = useState('problems');

    const modifyActiveComponent = useCallback(
        (newActiveComponent) => {
            setActiveComponent(newActiveComponent);
        },
        [setActiveComponent]
    );
    if (size.width < 550) {
        return <SalaryMobile />;
    }

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
                <GridItem colSpan={2}>
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
                        {t`salaryDeduction.one.header`}
                    </Heading>
                    <br />
                    <Text
                        color={'black'}
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                    >{t`salaryDeduction.one.subheader`}</Text>
                    <br />
                    <Text color={'black'}>{t`salaryDeduction.one.text`}</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}
                    >
                        <Box
                            position={'relative'}
                            height={'500px'}
                            rounded={'1xl'}
                            boxShadow={'2xl'}
                            width={'80%'}
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
                    </Flex>
                </GridItem>
            </>
        );
    };

    const Settle = () => {
        return (
            <>
                <GridItem colSpan={2}>
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
                        {t`salaryDeduction.two.header`}
                    </Heading>
                    <br />
                    <Text
                        color={'black'}
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                    >{t`salaryDeduction.two.subheader`}</Text>
                    <br />
                    <Text color={'black'}>{t`salaryDeduction.two.text`}</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}
                    >
                        <Box
                            position={'relative'}
                            height={'500px'}
                            rounded={'1xl'}
                            boxShadow={'2xl'}
                            width={'80%'}
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
                    </Flex>
                </GridItem>
            </>
        );
    };

    const HomeOffice = () => {
        return (
            <>
                <GridItem colSpan={2}>
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
                        {t`salaryDeduction.three.header`}
                    </Heading>
                    <br />
                    <Text
                        color={'black'}
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                    >{t`salaryDeduction.three.subheader`}</Text>
                    <br />
                    <Text color={'black'}>{t`salaryDeduction.three.text`}</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}
                    >
                        <Box
                            position={'relative'}
                            height={'500px'}
                            rounded={'1xl'}
                            boxShadow={'2xl'}
                            width={'80%'}
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
                    </Flex>
                </GridItem>
            </>
        );
    };

    return (
        <div id="why-omni">
            <ChakraProvider theme={theme}>
                <Grid
                    h="500px"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                    mt="10rem"
                >
                    <GridItem
                        rowSpan={2}
                        colSpan={1}
                        bg="#f9f7f4"
                        borderRight="1px solid black"
                        p="1rem"
                    >
                        <div class="main-nav" role="navigation">
                            <ul class="unstyled list-hover-slide">
                                <li>
                                    <Button
                                        className="a"
                                        colorScheme="transparent"
                                        variant="link"
                                        onClick={() =>
                                            modifyActiveComponent('problems')
                                        }
                                        leftIcon={
                                            <img
                                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/arrow.svg"
                                                alt="icon"
                                                width="15px"
                                                style={{
                                                    display:
                                                        activeComponent ===
                                                        'problems'
                                                            ? 'flex'
                                                            : 'none',
                                                }}
                                            ></img>
                                        }
                                        style={{
                                            fontWeight:
                                                activeComponent === 'problems'
                                                    ? 'bold'
                                                    : 'normal',
                                        }}
                                    >{t`salaryDeduction.one.header`}</Button>
                                </li>
                                <li>
                                    <Button
                                        className="a"
                                        colorScheme="transparent"
                                        variant="link"
                                        onClick={() =>
                                            modifyActiveComponent('settle')
                                        }
                                        leftIcon={
                                            <img
                                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/arrow.svg"
                                                alt="icon"
                                                width="15px"
                                                style={{
                                                    display:
                                                        activeComponent ===
                                                        'settle'
                                                            ? 'flex'
                                                            : 'none',
                                                }}
                                            ></img>
                                        }
                                        style={{
                                            fontWeight:
                                                activeComponent === 'settle'
                                                    ? 'bold'
                                                    : 'normal',
                                        }}
                                    >{t`salaryDeduction.two.header`}</Button>
                                </li>
                                <li>
                                    <Button
                                        className="a"
                                        colorScheme="transparent"
                                        variant="link"
                                        onClick={() =>
                                            modifyActiveComponent('home-office')
                                        }
                                        leftIcon={
                                            <img
                                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/arrow.svg"
                                                alt="icon"
                                                width="15px"
                                                style={{
                                                    display:
                                                        activeComponent ===
                                                        'home-office'
                                                            ? 'flex'
                                                            : 'none',
                                                }}
                                            ></img>
                                        }
                                        style={{
                                            fontWeight:
                                                activeComponent ===
                                                'home-office'
                                                    ? 'bold'
                                                    : 'normal',
                                        }}
                                    >{t`salaryDeduction.three.header`}</Button>
                                </li>
                            </ul>
                        </div>
                    </GridItem>
                    {activeComponent === 'problems' && <Problems />}
                    {activeComponent === 'settle' && <Settle />}
                    {activeComponent === 'home-office' && <HomeOffice />}
                </Grid>
            </ChakraProvider>
        </div>
    );
};

export default SalaryDeduction;
