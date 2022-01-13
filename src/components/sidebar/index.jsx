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

import { useTranslation } from 'react-i18next';
import ScreenDetection from '../../helpers/ScreenDetection';
import SidebarMobile from './indexMobile';

const Sidebar = () => {
    const { t } = useTranslation();
    const size = ScreenDetection();
    const [activeComponent, setActiveComponent] = useState('convinience');

    const modifyActiveComponent = useCallback(
        (newActiveComponent) => {
            setActiveComponent(newActiveComponent);
        },
        [setActiveComponent]
    );
    if (size.width < 550) {
        return <SidebarMobile />;
    }

    const Convinience = () => {
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
                        {t`whyOmni.convinience.header`}
                    </Heading>
                    <br />
                    <Text
                        color={'black'}
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                    >{t`whyOmni.convinience.subheader`}</Text>
                    <br />
                    <Text color={'black'}>{t`whyOmni.convinience.text`}</Text>
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
                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Why-OMNI/1.png"
                            />
                        </Box>
                    </Flex>
                </GridItem>
            </>
        );
    };

    const PayAsYouGo = () => {
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
                        {t`whyOmni.payAsYouGo.header`}
                    </Heading>
                    <br />
                    <Text
                        color={'black'}
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                    >{t`whyOmni.payAsYouGo.subheader`}</Text>
                    <br />
                    <Text color={'black'}>{t`whyOmni.payAsYouGo.text`}</Text>
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
                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Why-OMNI/2.jpg"
                            />
                        </Box>
                    </Flex>
                </GridItem>
            </>
        );
    };

    const Flexibility = () => {
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
                        {t`whyOmni.flexibility.header`}
                    </Heading>
                    <br />
                    <Text
                        color={'black'}
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                    >{t`whyOmni.flexibility.subheader`}</Text>
                    <br />
                    <Text color={'black'}>{t`whyOmni.flexibility.text`}</Text>
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
                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Why-OMNI/3.jpg"
                            />
                        </Box>
                    </Flex>
                </GridItem>
            </>
        );
    };

    const Sustainability = () => {
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
                        {t`whyOmni.sustainability.header`}
                    </Heading>
                    <br />
                    <Text
                        color={'black'}
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                    >{t`whyOmni.sustainability.subheader`}</Text>
                    <br />
                    <Text
                        color={'black'}
                    >{t`whyOmni.sustainability.text`}</Text>
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
                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Why-OMNI/4.jpg"
                            />
                        </Box>
                    </Flex>
                </GridItem>
            </>
        );
    };

    return (
        <div id="why-omni">
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
                                        modifyActiveComponent('convinience')
                                    }
                                    leftIcon={
                                        <img
                                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/arrow.svg"
                                            alt="icon"
                                            width="15px"
                                            style={{
                                                display:
                                                    activeComponent ===
                                                    'convinience'
                                                        ? 'flex'
                                                        : 'none',
                                            }}
                                        ></img>
                                    }
                                    style={{
                                        fontWeight:
                                            activeComponent === 'convinience'
                                                ? 'bold'
                                                : 'normal',
                                    }}
                                >{t`whyOmni.convinience.header`}</Button>
                            </li>
                            <li>
                                <Button
                                    className="a"
                                    colorScheme="transparent"
                                    variant="link"
                                    onClick={() =>
                                        modifyActiveComponent('payAsYouGo')
                                    }
                                    leftIcon={
                                        <img
                                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/arrow.svg"
                                            alt="icon"
                                            width="15px"
                                            style={{
                                                display:
                                                    activeComponent ===
                                                    'payAsYouGo'
                                                        ? 'flex'
                                                        : 'none',
                                            }}
                                        ></img>
                                    }
                                    style={{
                                        fontWeight:
                                            activeComponent === 'payAsYouGo'
                                                ? 'bold'
                                                : 'normal',
                                    }}
                                >{t`whyOmni.payAsYouGo.header`}</Button>
                            </li>
                            <li>
                                <Button
                                    className="a"
                                    colorScheme="transparent"
                                    variant="link"
                                    onClick={() =>
                                        modifyActiveComponent('flexibility')
                                    }
                                    leftIcon={
                                        <img
                                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/arrow.svg"
                                            alt="icon"
                                            width="15px"
                                            style={{
                                                display:
                                                    activeComponent ===
                                                    'flexibility'
                                                        ? 'flex'
                                                        : 'none',
                                            }}
                                        ></img>
                                    }
                                    style={{
                                        fontWeight:
                                            activeComponent === 'flexibility'
                                                ? 'bold'
                                                : 'normal',
                                    }}
                                >{t`whyOmni.flexibility.header`}</Button>
                            </li>
                            <li>
                                <Button
                                    colorScheme="transparent"
                                    className="a"
                                    variant="link"
                                    onClick={() =>
                                        modifyActiveComponent('sustainability')
                                    }
                                    leftIcon={
                                        <img
                                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/arrow.svg"
                                            alt="icon"
                                            width="15px"
                                            style={{
                                                display:
                                                    activeComponent ===
                                                    'sustainability'
                                                        ? 'flex'
                                                        : 'none',
                                            }}
                                        ></img>
                                    }
                                    style={{
                                        fontWeight:
                                            activeComponent === 'sustainability'
                                                ? 'bold'
                                                : 'normal',
                                    }}
                                >{t`whyOmni.sustainability.header`}</Button>
                            </li>
                        </ul>
                    </div>
                </GridItem>
                {activeComponent === 'convinience' && <Convinience />}
                {activeComponent === 'payAsYouGo' && <PayAsYouGo />}
                {activeComponent === 'flexibility' && <Flexibility />}
                {activeComponent === 'sustainability' && <Sustainability />}
            </Grid>
        </div>
    );
};

export default Sidebar;
