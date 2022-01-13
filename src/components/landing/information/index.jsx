import React from 'react';

import {
    Container,
    Stack,
    Box,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

import { Icon, createIcon } from '@chakra-ui/react';

import Fade from 'react-reveal/Fade';

const DeskInfo = () => {
    const features = [
        {
            id: 1,
            title: 'Width',
            text: '140cm',
        },
        {
            id: 2,
            title: 'Depth',
            text: '70cm',
        },
        {
            id: 3,
            title: 'Height',
            text: '60cm-125cm',
        },
        {
            id: 4,
            title: 'Material',
            text: 'Linoleum, oak, and steel',
        },
    ];

    return (
        <>
            {/* _________--------------__________ */}

            <Box p={4}>
                <Stack
                    spacing={4}
                    as={Container}
                    maxW={'4xl'}
                    textAlign={'center'}
                    py={'2rem'}
                >
                    <Heading fontSize={'3xl'}>
                        OMNI's Deluxe Elevation Desk
                    </Heading>
                    <Text color={'black'} fontSize={'xl'}>
                        Sporting a beautiful table top in natural linoleum with
                        a gorgeous oak frame and a stylish cutout to pull cables
                        through, this custom desk is supported by a
                        top-of-the-line three-tier Linak elevation system and is
                        handmade right here in Denmark.
                    </Text>
                </Stack>

                <Container maxW={'5xl'} mt={10} mb={10}>
                    <SimpleGrid
                        columns={{ base: 1, md: 2, lg: 4 }}
                        spacing={10}
                    >
                        {features.map((feature) => (
                            <HStack key={feature.id} align={'top'}>
                                <Fade top cascade>
                                    <Box px={2}>
                                        <Icon
                                            viewBox="0 0 200 200"
                                            color="#e6e4e1"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                                            />
                                        </Icon>
                                    </Box>
                                    <VStack align={'start'}>
                                        <Text fontWeight={600}>
                                            {feature.title}
                                        </Text>
                                        <Text color={'gray.600'}>
                                            {feature.text}
                                        </Text>
                                    </VStack>
                                </Fade>
                            </HStack>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
        </>
    );
};

export default DeskInfo;
