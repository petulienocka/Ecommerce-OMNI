import React from 'react';
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
} from '@chakra-ui/react';

import { HashLink } from 'react-router-hash-link';

import './style.scss';

const LandingHero = () => {
    return (
        <Container
            maxW={'8xl'}
            bgImage={
                'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Oct2021/landing-hero.png'
            }
            bgColor={'#e6e4e1'}
            borderBottom={'1px solid black'}
        >
            <Container maxW={'7xl'}>
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    pt={{ base: 28, md: 28 }}
                    // pb={{ base: 10, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}
                >
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
                            color={'black'}
                        >
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: '30%',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'red.400',
                                    zIndex: -1,
                                }}
                            >
                                First 100 for 6000kr*
                            </Text>
                            <br />
                            {/* <Text as={'span'} color={'black'}>
                                go for DKK 5900* each!
                            </Text> */}
                        </Heading>

                        <Text
                            color={'black'}
                            fontSize={{ base: 'md', sm: 'md', lg: 'xl' }}
                        >
                            To support employees, working from home in Denmark,
                            OMNI will split the cost with you on the first 100
                            Deluxe Desks (reg. price 12.000kr)! Pay now and we
                            go into production when we reach 100 orders. Share
                            this exclusive deal with family & friends!
                        </Text>
                        {/* <Text color={'black'}>
                            We go into production, when we reach 100 orders, so
                            share this exclusive deal with friends and family!
                        </Text> */}
                        <Text
                            color={'black'}
                            fontSize={{ base: 'xs', md: 'xs' }}
                        >
                            *Prices are incl. VAT with pickup in Copenhagen.
                            Contact us for shipping quotes or custom sizes. If
                            we don’t go into production, we refund you within 2
                            wks.
                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'column', sm: 'row' }}
                        >
                            <a
                                href="https://buy.stripe.com/00g9Ez3kX2I543S149"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button
                                    fontWeight={'light'}
                                    className="button button--webcoderskull button--border-thick button--text-medium"
                                >
                                    Order Now
                                </Button>
                            </a>
                        </Stack>
                    </Stack>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}
                    >
                        <Box
                            position={'relative'}
                            height={{ base: '330px', md: '650px' }}
                            // rounded={'2xl'}
                            // boxShadow={'2xl'}
                            width={'full'}
                            overflow={'hidden'}
                        >
                            <model-viewer
                                id="iframe-viewer"
                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/3d-Models/BED-animation-android.glb"
                                ios-src="https://theomnified-media.s3.eu-north-1.amazonaws.com/3d-Models/BED-animation-ios.usdz"
                                rel="ar"
                                ar
                                camera-controls
                                ar-scale="auto"
                                ar-modes="webxr scene-viewer quick-look fallback"
                                quick-look-browsers="safari chrome"
                                environment-image="neutral"
                                ar-status="not-presenting"
                                alt="3d model boheme package"
                                shadow-intensity="1"
                                camera-orbit="55deg 75deg"
                                style={{ width: '100%', height: '100%' }}
                                autoplay
                            ></model-viewer>
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </Container>
    );
};

export default LandingHero;
