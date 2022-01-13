import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import styled, { keyframes } from 'styled-components';

import './style.scss';
import { FaTshirt } from 'react-icons/fa';
import { GiShirt, GiSleevelessJacket, GiTrousers } from 'react-icons/gi';

import { Redirect } from 'react-router-dom';

const bounce = keyframes`
100%,0% { transform: scale(1.1); }
50% { transform: scale(0.5);  }
`;
const Tshirt = styled(FaTshirt)`
    font-size: 50px;
    animation: 3s ${bounce} 0.5s linear infinite;
`;
const Pants = styled(GiTrousers)`
    font-size: 50px;
    animation: 3s ${bounce} 0.5s linear infinite;
`;
const Shirt = styled(GiShirt)`
    font-size: 50px;
    animation: 3s ${bounce} 0.5s linear infinite;
`;
const Jacket = styled(GiSleevelessJacket)`
    font-size: 50px;
    animation: 3s ${bounce} 0.5s linear infinite;
`;

const Natalie = ({ items }) => {
    const [checked, setChecked] = useState(true);
    const handleClick = () => setChecked(!checked);

    useEffect(() => {
        setTimeout(function () {
            setChecked(!checked);
        }, 1500);
    }, []);

    useEffect(() => {
        setTimeout(function () {
            <Redirect to="/natalie-closet" />;
        }, 2500);
    }, []);

    return (
        <>
            <Container maxW={'5xl'}>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                    >
                        Welcome{' '}
                        <Text as={'span'} color={'orange.400'}>
                            Natalie Molitoris
                        </Text>
                    </Heading>
                    <Text color={'gray.500'} maxW={'3xl'}>
                        SOme text here ?
                    </Text>
                    <Stack spacing={6} direction={'row'}>
                        <Button
                            rounded={'full'}
                            px={6}
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            _hover={{ bg: 'orange.500' }}
                        >
                            <a href="/natalie-closet">Enter Closet</a>
                        </Button>
                    </Stack>
                    <Flex w={'full'}>
                        {/* <Illustration
                            height={{ sm: '24rem', lg: '28rem' }}
                            mt={{ base: 12, sm: 16 }}
                        /> */}
                    </Flex>
                </Stack>
            </Container>

            {/* <Stack
                className="curtain"
                minH={'100vh'}
                direction={{ base: 'column', md: 'row' }}
            >
                <div class="curtain__wrapper">
                    <input
                        type="checkbox"
                        onClick={handleClick}
                        checked={checked}
                    />
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
                                        Natalie Molitoris
                                    </Text>{' '}
                                </Heading>
                                <Text
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                    color={'gray.500'}
                                >
                                    See your closet inventory bla bla bla
                                </Text>
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
                                <a href="/natalie-closet">Enter Closet</a>
                            </Button>
                        </Stack>
                        <HStack spacing="24px">
                            <Box>
                                <Tshirt />
                            </Box>
                            <Box>
                                <Pants />
                            </Box>
                            <Box>
                                <Shirt />
                            </Box>
                            <Box>
                                <Jacket />
                            </Box>
                        </HStack> 
                    </div>
                </div>
            </Stack> */}
        </>
    );
};

export default Natalie;
