import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';

import './style.scss';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <>
            <Stack
                minH={'50vh'}
                direction={{ base: 'column', sm: 'row' }}
                className="hero-wrap"
                id="hero"
                // mt={100}
            >
                <Flex
                    p={8}
                    flex={1}
                    align={'center'}
                    justify={{ base: 'left', md: 'center' }}
                    className="flex-hero"
                >
                    <Stack spacing={6} maxW={'lg'} className="title">
                        <Heading
                            pt={{ base: 12, md: 8 }}
                            pl={{ base: 0, md: 8 }}
                            fontSize={{ base: '5xl', md: '4xl', lg: '6xl' }}
                        >
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: useBreakpointValue({
                                        base: '20%',
                                        md: '30%',
                                    }),
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: '#e6e4e1',
                                    zIndex: -1,
                                }}
                            >
                                Work
                            </Text>
                            <br />{' '}
                            <Text color={'#e6e4e1'} as={'span'}>
                                anywhere
                            </Text>{' '}
                        </Heading>

                        <Stack
                            direction={{ base: 'column', md: 'row' }}
                            spacing={4}
                            pl={{ base: 0, md: 8 }}
                        >
                            <Button
                                fontWeight={'light'}
                                className="button button--webcoderskull button--border-thick button--text-medium"
                            >
                                <HashLink
                                    smooth
                                    to={'#products'}
                                    className="hash-link"
                                >
                                    {' '}
                                    {t`index.mainHero.button`}
                                </HashLink>
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={2} borderLeft={'1px solid black'} className="image">
                    <Image
                        alt={'hero'}
                        objectFit={'cover'}
                        bgGradient={{
                            base: 'linear(to-r, white.600, transparent)',
                            md: 'none',
                        }}
                        objectPosition={'center'}
                        className="hero"
                        src={
                            'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/main-hero.jpeg'
                        }
                        fallbackSrc={
                            'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/main-hero-hero.jpeg'
                        }
                    />
                </Flex>
            </Stack>
        </>
    );
};

export default Hero;
