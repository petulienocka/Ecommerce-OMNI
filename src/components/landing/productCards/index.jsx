import React, { useState } from 'react';
import { Box, SimpleGrid, Text, Stack } from '@chakra-ui/react';

import { Center, Heading, Image, Button } from '@chakra-ui/react';

import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { i18n } from '../../../helpers/i18n';

import { HashLink } from 'react-router-hash-link';
import ScreenDetection from '../../../helpers/ScreenDetection';

const ProductCards = ({ products }) => {
    const baseUrl = i18n.language === '' ? '' : '/' + i18n.language;

    const IMAGE =
        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Oct2021/E6E4E1.png';

    const size = ScreenDetection();

    return (
        <>
            <Box p={4} py={'5rem'}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    {products.map((product) => {
                        return (
                            <Flippy
                                flipOnHover={true}
                                flipDirection="horizontal"
                            >
                                <FrontSide style={{ boxShadow: 'none' }}>
                                    <Stack>
                                        <Center>
                                            <Box
                                                role={'group'}
                                                p={6}
                                                maxW={'330px'}
                                                w={'full'}
                                                boxShadow={'2xl'}
                                                rounded={'lg'}
                                                pos={'relative'}
                                                zIndex={1}
                                            >
                                                <Box
                                                    rounded={'lg'}
                                                    mt={-12}
                                                    pos={'relative'}
                                                    height={'250px'}
                                                    _after={{
                                                        transition:
                                                            'all .3s ease',
                                                        content: '""',
                                                        w: 'full',
                                                        h: 'full',
                                                        pos: 'absolute',
                                                        top: 5,
                                                        left: 0,
                                                        backgroundImage: `url(${IMAGE})`,
                                                        filter: 'blur(15px)',
                                                        zIndex: -1,
                                                    }}
                                                    _groupHover={{
                                                        _after: {
                                                            filter:
                                                                'blur(20px)',
                                                        },
                                                    }}
                                                >
                                                    <Image
                                                        rounded={'lg'}
                                                        height={230}
                                                        width={282}
                                                        objectFit={'cover'}
                                                        src={product.image}
                                                    />
                                                </Box>
                                                <Stack pt={10} align={'center'}>
                                                    <Heading
                                                        fontSize={'2xl'}
                                                        fontFamily={'body'}
                                                        fontWeight={500}
                                                    >
                                                        {product.name} Package
                                                    </Heading>
                                                    <Stack
                                                        direction={'row'}
                                                        align={'center'}
                                                    >
                                                        <Text
                                                            fontWeight={800}
                                                            fontSize={'xl'}
                                                        >
                                                            {product.price}{' '}
                                                            kr/mo
                                                        </Text>
                                                    </Stack>
                                                </Stack>
                                            </Box>
                                        </Center>
                                    </Stack>
                                </FrontSide>
                                <BackSide
                                    style={{
                                        boxShadow: 'none',
                                    }}
                                >
                                    <Stack>
                                        <Center>
                                            <Box
                                                role={'group'}
                                                p={6}
                                                maxW={'330px'}
                                                w={'full'}
                                                boxShadow={'2xl'}
                                                rounded={'lg'}
                                                pos={'relative'}
                                                zIndex={1}
                                            >
                                                <Box
                                                    rounded={'lg'}
                                                    mt={-12}
                                                    pos={'relative'}
                                                    height={'250px'}
                                                    _after={{
                                                        transition:
                                                            'all .3s ease',
                                                        content: '""',
                                                        w: 'full',
                                                        h: 'full',
                                                        pos: 'absolute',
                                                        top: 5,
                                                        left: 0,
                                                        zIndex: -1,
                                                    }}
                                                >
                                                    <Stack
                                                        pt={10}
                                                        align={'left'}
                                                    >
                                                        <Heading
                                                            fontSize={'1xl'}
                                                            fontFamily={'body'}
                                                            fontWeight={500}
                                                        >
                                                            {product.chair.name}
                                                        </Heading>
                                                        {/* <Text
                                                            color={'gray.500'}
                                                            fontSize={'sm'}
                                                        >
                                                            {
                                                                product.chair
                                                                    .price
                                                            }{' '}
                                                            kr/mo
                                                        </Text> */}

                                                        <Text
                                                            color={'gray.500'}
                                                            fontSize={'sm'}
                                                        >
                                                            {
                                                                product.chair
                                                                    .dimensions
                                                            }
                                                        </Text>
                                                        <br />
                                                        <Heading
                                                            fontSize={'1xl'}
                                                            fontFamily={'body'}
                                                            fontWeight={500}
                                                        >
                                                            {product.desk.name}
                                                        </Heading>
                                                        {/* <Text
                                                            color={'gray.500'}
                                                            fontSize={'sm'}
                                                        >
                                                            {product.desk.price}{' '}
                                                            kr/mo
                                                        </Text> */}
                                                        <Text
                                                            color={'gray.500'}
                                                            fontSize={'sm'}
                                                        >
                                                            {
                                                                product.desk
                                                                    .dimensions
                                                            }
                                                        </Text>
                                                    </Stack>
                                                </Box>

                                                <Stack pt={5} align={'center'}>
                                                    {size.width < 550 ? (
                                                        <>
                                                            <SimpleGrid
                                                                columns={2}
                                                                spacing={10}
                                                            >
                                                                <a
                                                                    style={{
                                                                        textDecoration:
                                                                            'none',
                                                                    }}
                                                                    rel="ar"
                                                                    href={
                                                                        product.android
                                                                    }
                                                                    _hover={{
                                                                        color:
                                                                            'black',
                                                                    }}
                                                                >
                                                                    <Button className="button button--webcoderskull button--border-thick button--text-medium">
                                                                        Android
                                                                    </Button>
                                                                </a>
                                                                <a
                                                                    style={{
                                                                        textDecoration:
                                                                            'none',
                                                                    }}
                                                                    rel="ar"
                                                                    href={
                                                                        product.ios
                                                                    }
                                                                    _hover={{
                                                                        color:
                                                                            'black',
                                                                    }}
                                                                >
                                                                    <Button
                                                                        className="button button--webcoderskull button--border-thick button--text-medium"
                                                                        w={
                                                                            '100%'
                                                                        }
                                                                    >
                                                                        iOS
                                                                    </Button>
                                                                </a>
                                                            </SimpleGrid>
                                                            <br />
                                                            <Stack
                                                                direction={
                                                                    'row'
                                                                }
                                                                align={'center'}
                                                            >
                                                                <Text
                                                                    fontWeight={
                                                                        800
                                                                    }
                                                                    fontSize={
                                                                        'xl'
                                                                    }
                                                                >
                                                                    {
                                                                        product.price
                                                                    }{' '}
                                                                    kr/mo
                                                                </Text>
                                                            </Stack>
                                                            <br />
                                                            <Heading
                                                                fontSize={'1xl'}
                                                                fontFamily={
                                                                    'body'
                                                                }
                                                                fontWeight={500}
                                                            >
                                                                <HashLink
                                                                    smooth
                                                                    to={
                                                                        baseUrl +
                                                                        '#products'
                                                                    }
                                                                    style={{
                                                                        color:
                                                                            'black',
                                                                    }}
                                                                >
                                                                    See more
                                                                </HashLink>
                                                            </Heading>
                                                        </>
                                                    ) : null}
                                                    {size.width > 550 ? (
                                                        <>
                                                            <Heading
                                                                fontSize={'2xl'}
                                                                fontFamily={
                                                                    'body'
                                                                }
                                                                fontWeight={500}
                                                            >
                                                                {product.name}{' '}
                                                                Package
                                                            </Heading>
                                                            <Stack
                                                                direction={
                                                                    'row'
                                                                }
                                                                align={'center'}
                                                            >
                                                                <Text
                                                                    fontWeight={
                                                                        800
                                                                    }
                                                                    fontSize={
                                                                        'xl'
                                                                    }
                                                                >
                                                                    {
                                                                        product.price
                                                                    }{' '}
                                                                    kr/mo
                                                                </Text>
                                                            </Stack>
                                                            <Heading
                                                                fontSize={'1xl'}
                                                                fontFamily={
                                                                    'body'
                                                                }
                                                                fontWeight={500}
                                                            >
                                                                <HashLink
                                                                    smooth
                                                                    to={
                                                                        baseUrl +
                                                                        '#products'
                                                                    }
                                                                    style={{
                                                                        color:
                                                                            'black',
                                                                    }}
                                                                >
                                                                    See more
                                                                </HashLink>
                                                            </Heading>
                                                        </>
                                                    ) : null}
                                                </Stack>
                                            </Box>
                                        </Center>
                                    </Stack>
                                </BackSide>
                            </Flippy>
                        );
                    })}
                </SimpleGrid>
            </Box>
        </>
    );
};

export default ProductCards;
