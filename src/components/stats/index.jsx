import React from 'react';
import {
    Box,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';

import { GiOfficeChair } from 'react-icons/gi';
import { BiBuildingHouse } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';

import CountUp from 'react-countup';

import './style.scss';

const Stats = () => {
    return (
        <>
            <Box
                maxW="7xl"
                mx={'auto'}
                px={{ base: 2, sm: 12, md: 17 }}
                pb={10}
            >
                <SimpleGrid
                    columns={{ base: 1, md: 4 }}
                    spacing={{ base: 5, lg: 8 }}
                >
                    <Stat px={{ base: 0, md: 4 }} py={'5'} rounded={0}>
                        <Flex justifyContent={'space-between'}>
                            <Box
                                pl={{ base: 0, md: 4 }}
                                align={'center'}
                                alignSelf={'center'}
                            >
                                <GiOfficeChair className="circle-icon" />
                                <StatNumber
                                    fontSize={'3xl'}
                                    fontWeight={'medium'}
                                    pt={5}
                                >
                                    <CountUp
                                        start={0}
                                        end={80}
                                        delay={2}
                                        duration={2}
                                        suffix=" %"
                                    />
                                </StatNumber>
                                <StatLabel
                                    fontWeight={'medium'}
                                    fontSize={'1xl'}
                                >
                                    will continue to work from home in some
                                    capacity after COVID
                                </StatLabel>
                            </Box>
                        </Flex>
                    </Stat>
                    <Stat px={{ base: 3, md: 4 }} py={'5'}>
                        <Flex justifyContent={'space-between'}>
                            <Box
                                pl={{ base: 0, md: 4 }}
                                align={'center'}
                                alignSelf={'center'}
                            >
                                <BiBuildingHouse className="circle-icon" />
                                <StatNumber
                                    fontSize={'3xl'}
                                    fontWeight={'medium'}
                                    pt={5}
                                >
                                    <CountUp
                                        start={0}
                                        end={83}
                                        delay={2}
                                        duration={2}
                                        suffix=" %"
                                    />
                                </StatNumber>
                                <StatLabel
                                    fontWeight={'medium'}
                                    fontSize={'1xl'}
                                >
                                    have now successfully implemented remote
                                    work
                                </StatLabel>
                            </Box>
                        </Flex>
                    </Stat>
                    <Stat px={{ base: 3, md: 4 }} py={'5'}>
                        <Flex justifyContent={'space-between'}>
                            <Box
                                pl={{ base: 0, md: 4 }}
                                align={'center'}
                                alignSelf={'center'}
                            >
                                <GiReceiveMoney className="circle-icon" />

                                <StatNumber
                                    fontSize={'3xl'}
                                    fontWeight={'medium'}
                                    pt={5}
                                >
                                    <CountUp
                                        start={0}
                                        end={64}
                                        delay={2}
                                        duration={2}
                                        suffix=" %"
                                    />
                                </StatNumber>
                                <StatLabel
                                    fontWeight={'medium'}
                                    fontSize={'1xl'}
                                >
                                    value remote work over a $30,000 salary
                                    raise {'                   '}
                                </StatLabel>
                            </Box>
                        </Flex>
                    </Stat>

                    <Stat px={{ base: 3, md: 4 }} py={'5'}>
                        <Flex
                            justifyContent={'space-between'}
                            align={'center'}
                            alignSelf={'center'}
                        >
                            <Box
                                pl={{ base: 0, md: 4 }}
                                align={'center'}
                                alignSelf={'center'}
                            >
                                <IoIosPeople className="circle-icon" />
                                <StatNumber
                                    fontSize={'3xl'}
                                    fontWeight={'medium'}
                                    pt={5}
                                >
                                    <CountUp
                                        start={0}
                                        end={30}
                                        delay={2}
                                        duration={2}
                                        suffix=" %"
                                    />
                                </StatNumber>
                                <StatLabel
                                    fontWeight={'medium'}
                                    fontSize={'1xl'}
                                >
                                    say they will switch jobs, if they have to
                                    return to the office full-time
                                </StatLabel>
                            </Box>
                        </Flex>
                    </Stat>
                </SimpleGrid>
            </Box>
        </>
    );
};

export default Stats;
