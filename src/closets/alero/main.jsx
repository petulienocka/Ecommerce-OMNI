import React from 'react';
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import styled, { keyframes } from 'styled-components';

import './style.scss';

const Alero = ({ items }) => {
    const bounce = keyframes`
    100%,0% { transform: scale(1.1); }
    50% { transform: scale(0.5);  }
  `;

    const Circle = styled.div`
        position: absolute;
        border: 2.75rem solid #86d0db;
        border-radius: 50%;
        animation: 3s ${bounce} 0.5s linear infinite;
    `;

    const CircleXs = styled(Circle)`
        width: 5rem;
        height: 5rem;
        top: 12%;
        left: 12%;
        border-width: 0.75rem;
    `;

    const CircleS = styled(Circle)`
        width: 7.5rem;
        height: 7.5rem;
        top: 70%;
        right: 45%;
        border-width: 1rem;
    `;

    const CircleL = styled(Circle)`
        width: 30rem;
        height: 30rem;
        top: -20%;
        right: -80%;
    `;
    const CircleM = styled(Circle)`
        width: 15rem;
        height: 15rem;
        bottom: -15%;
        left: -25%;
        border-width: 1.5rem;
    `;

    return (
        <>
            <Stack
                className="curtain"
                minH={'100vh'}
                direction={{ base: 'column', md: 'row' }}
            >
                <div class="curtain__wrapper">
                    <input type="checkbox" defaultChecked />
                    <div class="curtain__panel curtain__panel--left">
                        <Flex
                            p={6}
                            flex={1}
                            align={'center'}
                            justify={'center'}
                        >
                            <Stack spacing={6} w={'full'} maxW={'lg'}>
                                <Heading
                                    fontSize={{
                                        base: '3xl',
                                        md: '4xl',
                                        lg: '5xl',
                                    }}
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
                                            bg: '#0ca6c0',
                                            zIndex: -1,
                                        }}
                                    >
                                        Welcome
                                    </Text>
                                    <br />{' '}
                                    <Text color={'#0ca6c0'} as={'span'}>
                                        Alero Akuya
                                    </Text>{' '}
                                </Heading>
                                <Text
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                    color={'gray.500'}
                                >
                                    See your closet inventory bla bla bla
                                </Text>
                                <Stack
                                    direction={{ base: 'column', md: 'row' }}
                                    spacing={4}
                                >
                                    <Button
                                        rounded={'full'}
                                        bg={'#86d0db'}
                                        color={'white'}
                                        _hover={{
                                            bg: '#0ca6c0',
                                        }}
                                    >
                                        Enter Closet
                                    </Button>
                                </Stack>
                            </Stack>
                        </Flex>
                    </div>

                    <div class="curtain__panel curtain__panel--right">
                        <Flex flex={0.7}>
                            <Image
                                alt={'Login Image'}
                                objectFit={'cover'}
                                src={
                                    'https://theomnified-media.s3.eu-north-1.amazonaws.com/Unliish/princess-bg.png'
                                }
                            />
                        </Flex>
                    </div>

                    <div class="curtain__content">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/trophy.svg" />
                        <h2>Achievement Unlocked!</h2>
                        <CircleXs />
                        <CircleS />
                        <CircleM />
                        <CircleL />
                    </div>
                </div>
            </Stack>
            {/* <div class="curtain" style={{ marginTop: '15rem' }}>
                <div class="curtain__wrapper">
                    <input type="checkbox" defaultChecked />
                    <div class="curtain__panel curtain__panel--left"></div>

                    <div class="curtain__prize"></div>

                    <div class="curtain__panel curtain__panel--right"></div>
                </div>
            </div> */}
        </>
    );
};

export default Alero;
