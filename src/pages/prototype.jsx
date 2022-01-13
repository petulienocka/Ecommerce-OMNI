import React, { useEffect, useRef } from 'react';
import {
    Box,
    Heading,
    Text,
    Image,
    SimpleGrid,
    Grid,
    GridItem,
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
// import { i18n } from '../../helpers/i18n';

import ScreenDetection from '../helpers/ScreenDetection';

import {
    Container,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
} from '@chakra-ui/react';

// import { HashLink } from 'react-router-hash-link';

import '../components/cta/style.scss';
import Stats from '../components/stats';
import { i18n } from '../helpers/i18n';

const Prototype = ({ setCartOpen }) => {
    const baseUrl = i18n.language === '' ? '' : '/' + i18n.language;
    const { t } = useTranslation();
    const size = ScreenDetection();

    // const baseUrl = i18n.language === '' ? '' : '/' + i18n.language;

    const [imgSource, setImgSrc] = React.useState(
        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/Screen1.png'
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
                    'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/Screen1.png'
                );
            } else if (scrollTop < 600) {
                setImgSrc(
                    'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/Screen2.png'
                );
            } else {
                setImgSrc(
                    'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/Screen3.png'
                );
            }
        }
    };

    const Arrow = createIcon({
        displayName: 'Arrow',
        viewBox: '0 0 72 24',
        path: (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
                fill="currentColor"
            />
        ),
    });

    return (
        <>
            <Container
                maxW={'3xl'}
                borderBottom={{ base: '1px solid black', md: 'none' }}
            >
                <Stack
                    as={Box}
                    textAlign={{ base: 'left', md: 'center' }}
                    spacing={{ base: 8, md: 14 }}
                    pt={{ base: 36, md: 36 }}
                    pb={{ base: 10, md: 36 }}
                >
                    <Heading
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
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
                        Become better and greener. <br />
                        <Text as={'span'} color={'#e6e4e1'}>
                            Get OMNIfied today.
                        </Text>
                    </Heading>
                    <Text color={'black'}>
                        It is estimated that 80% of the workforce will continue
                        to work from home post COVID-19, and 83% of companies
                        have already implemented remote work in some capacity.
                        But people need help to be give their best from home.
                        Start a trial with OMNI today.
                    </Text>
                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}
                        px={'1rem'}
                    >
                        <Button
                            bg={'#e6e4e1'}
                            rounded={0}
                            px={6}
                            _hover={{
                                bg: '#e6e4e1.500',
                            }}
                        >
                            <a
                                href={baseUrl + '/contact'}
                                style={{
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                            >
                                {' '}
                                Get Started
                            </a>
                        </Button>

                        <Box display={{ base: 'none', md: 'flex' }}>
                            <Icon
                                as={Arrow}
                                color={useColorModeValue(
                                    'gray.800',
                                    'gray.300'
                                )}
                                w={71}
                                position={'absolute'}
                                right={-71}
                                top={'10px'}
                            />
                            <Text
                                fontSize={'lg'}
                                fontFamily={'Caveat'}
                                position={'absolute'}
                                right={'-125px'}
                                top={'-15px'}
                                transform={'rotate(10deg)'}
                            >
                                Contact Us
                            </Text>
                        </Box>
                    </Stack>
                </Stack>
            </Container>
            <Stats />
            {size.width > 550 && (
                <SimpleGrid
                    columns={2}
                    spacing={5}
                    mt={10}
                    borderBottom={'1px solid black'}
                    className="cta-container"
                    id="prototype"
                >
                    <Box borderRight="1px solid black">
                        <div className="left">
                            <Image
                                p={'5rem'}
                                id="img1"
                                src={imgSource}
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
                                            Easy administration
                                        </Text>
                                        <br />
                                    </Heading>
                                    <Text pl={'5rem'} color={'black'}>
                                        White label portal for company admins to
                                        manage employees.
                                    </Text>
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
                                            Transparent process
                                        </Text>
                                        <br />
                                    </Heading>
                                    <Text pl={'5rem'} color={'black'}>
                                        Company overview to follow
                                        subscriptions.
                                    </Text>
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
                                            Happy users
                                        </Text>
                                        <br />
                                    </Heading>

                                    <Text pl={'5rem'} color={'black'}>
                                        Employee access to view subscription
                                        details and follow order progress.
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Box>
                </SimpleGrid>
            )}

            {size.width < 550 && (
                <Grid
                    id="prototype"
                    h="auto"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                    pb={10}
                >
                    <GridItem colSpan={5}>
                        <Image
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/Screen1.png"
                            alt="cta"
                            objectFit={'cover'}
                            objectPosition={'top center'}
                            w={'100%'}
                        />
                    </GridItem>
                    <GridItem colSpan={5} p={5}>
                        <Heading fontSize={'3xl'}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                color={'black'}
                                fontWeight={'normal'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    zIndex: -1,
                                }}
                            >
                                Easy administration
                            </Text>
                            <br />
                        </Heading>
                        <Text color={'black'}>
                            White label portal for company admins to manage
                            employees.
                        </Text>
                    </GridItem>
                    <GridItem colSpan={5}>
                        <Image
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/Screen2.png"
                            alt="cta"
                            objectFit={'cover'}
                            objectPosition={'top center'}
                            w={'100%'}
                        />
                    </GridItem>
                    <GridItem colSpan={5} p={5}>
                        <Heading fontSize={'3xl'}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                color={'black'}
                                fontWeight={'normal'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    zIndex: -1,
                                }}
                            >
                                Transparent process
                            </Text>
                            <br />
                        </Heading>
                        <Text color={'black'}>
                            Company overview to follow subscriptions.
                        </Text>
                    </GridItem>
                    <GridItem colSpan={5}>
                        <Image
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/Screen3.png"
                            alt="cta"
                            objectFit={'cover'}
                            objectPosition={'top center'}
                            w={'100%'}
                        />
                    </GridItem>
                    <GridItem colSpan={5} p={5}>
                        <Heading fontSize={'3xl'}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                color={'black'}
                                fontWeight={'normal'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    zIndex: -1,
                                }}
                            >
                                Happy users
                            </Text>
                            <br />
                        </Heading>
                        <Text color={'black'}>
                            Employee access to view subscription details and
                            follow order progress.
                        </Text>
                    </GridItem>
                </Grid>
            )}
        </>
    );
};

export default Prototype;
