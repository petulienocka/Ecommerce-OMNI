import React, { useEffect, useRef } from 'react';
import { Box, Heading, Text, Image, SimpleGrid } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import './style.scss';

// import { HashLink } from 'react-router-hash-link';
import ScreenDetection from '../../helpers/ScreenDetection';
import CTAMobile from './indexMobile';

const CTA = () => {
    const { t } = useTranslation();
    const size = ScreenDetection();

    const [imgSource, setImgSrc] = React.useState(
        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/cta1.jpg'
    );
    const [imgFallback, setImgFallback] = React.useState(
        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/cta1-min.jpg'
    );
    const leftDivRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = (e) => {
        const leftDiv = leftDivRef.current;
        if (leftDiv) {
            const scrollTop = 0 - leftDiv.getBoundingClientRect().top;
            if (scrollTop < 300) {
                setImgSrc(
                    'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/cta1.jpg'
                );
                setImgFallback(
                    'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/cta1-min.jpg'
                );
            } else if (scrollTop < 600) {
                setImgSrc(
                    'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/cta2.jpg'
                );
                setImgFallback(
                    'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/cta2-min.jpg'
                );
            } else {
                setImgSrc(
                    'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/cta3.jpg'
                );
                setImgFallback(
                    'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/cta3-min.jpg'
                );
            }
        }
    };

    if (size.width < 550) {
        return <CTAMobile />;
    }

    return (
        <>
            {/* <div className="cta-container">
                <div className="left">
                    <img src={imgSource} alt="placeholder" />
                </div>
                <div className="middle" ref={leftDivRef}>
                    <div className="in-middle">
                        <div className="in-in-middle">ONE</div>
                        <div className="in-in-middle">TWO</div>
                        <div className="in-in-middle">THREE</div>
                    </div>
                </div>
            </div> */}
            <SimpleGrid
                columns={2}
                spacing={5}
                borderTop={'1px solid black'}
                borderBottom={'1px solid black'}
                className="cta-container"
            >
                <Box borderRight="1px solid black">
                    <div className="left">
                        <Image
                            p={'5rem'}
                            id="img1"
                            src={imgSource}
                            fallbackSrc={imgFallback}
                            alt="cta"
                            objectFit={'cover'}
                            objectPosition={'center'}
                            w={'100%'}
                        />
                    </div>
                </Box>
                <Box>
                    <div class="middle" ref={leftDivRef}>
                        <div class="in-middle">
                            <div
                                class="in-in-middle"
                                style={{ borderBottom: '1px solid black' }}
                            >
                                <Heading
                                    p={'5rem'}
                                    fontSize={{
                                        base: '3xl',
                                        sm: '4xl',
                                        lg: '5xl',
                                    }}
                                >
                                    <Text
                                        as={'span'}
                                        position={'relative'}
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
                                        {t`cta.one.main`}
                                    </Text>
                                    <br />
                                </Heading>
                                <Text
                                    pl={'5rem'}
                                    pr={'5rem'}
                                    color={'black'}
                                >{t`cta.one.subOne`}</Text>
                            </div>
                            <div
                                className="in-in-middle"
                                style={{ borderBottom: '1px solid black' }}
                            >
                                <Heading
                                    p={'5rem'}
                                    fontSize={{
                                        base: '3xl',
                                        sm: '4xl',
                                        lg: '5xl',
                                    }}
                                >
                                    <Text
                                        as={'span'}
                                        position={'relative'}
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
                                        {t`cta.two.main`}
                                    </Text>
                                    <br />
                                </Heading>
                                <Text
                                    pl={'5rem'}
                                    pr={'5rem'}
                                    color={'black'}
                                >{t`cta.two.sub`}</Text>
                            </div>
                            <div className="in-in-middle">
                                <Heading
                                    p={'5rem'}
                                    fontSize={{
                                        base: '3xl',
                                        sm: '4xl',
                                        lg: '5xl',
                                    }}
                                >
                                    <Text
                                        as={'span'}
                                        position={'relative'}
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
                                        {t`cta.three.main`}
                                    </Text>
                                    <br />
                                </Heading>
                                <Text
                                    pl={'5rem'}
                                    pr={'5rem'}
                                    color={'black'}
                                >{t`cta.three.sub`}</Text>
                                <Text
                                    id="about"
                                    pl={'5rem'}
                                    pr={'5rem'}
                                    color={'black'}
                                >{t`cta.three.subTwo`}</Text>
                            </div>
                        </div>
                    </div>
                </Box>
            </SimpleGrid>
        </>
    );
};

export default CTA;
