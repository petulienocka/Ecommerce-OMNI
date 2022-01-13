import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import { RichText } from 'prismic-reactjs';

import { client } from '../../ prismic-configuration';
import Prismic from '@prismicio/client';

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
    SimpleGrid,
} from '@chakra-ui/react';

import './style.scss';

import ScreenDetection from '../../helpers/ScreenDetection';
import BlogMobile from './indexMobile';

import Nav from 'react-bootstrap/Nav';

import moment from 'moment';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import { i18n } from '../../helpers/i18n';

const BlogIndex = () => {
    const [doc, setDocData] = useState(null);
    const size = ScreenDetection();

    const baseUrl = i18n.language === '' ? '' : '/' + i18n.language;

    const [cribs, setCribs] = useState([]);
    const [partners, setPartners] = useState([]);
    const [team, setTeam] = useState([]);
    const [times, setTimes] = useState([]);
    const [guides, setGuides] = useState([]);

    const [selected, setSelected] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await client.query(
                Prismic.Predicates.at('document.type', 'post'),
                { pageSize: 100 }
            );
            if (result) {
                const cribsArr = [];
                const partnersArr = [];
                const teamArr = [];
                const timesArr = [];
                const guidesArr = [];
                result.results.forEach((post) => {
                    switch (post.data.category[0].text) {
                        case 'Cribs':
                            cribsArr.push(post);
                            break;

                        case 'Partners':
                            partnersArr.push(post);
                            break;
                        case 'Team':
                            teamArr.push(post);
                            break;

                        case 'Times':
                            timesArr.push(post);
                            break;
                        case 'Guides':
                            guidesArr.push(post);
                            break;

                        default:
                            console.warn('Missing blog post category.');
                    }
                });
                setCribs(cribsArr);
                setPartners(partnersArr);
                setTeam(teamArr);
                setTimes(timesArr);
                setGuides(guidesArr);
                return setDocData(result);
            } else {
                console.warn(
                    'Page document not found. Make sure it exists in your Prismic repository'
                );
            }
        };
        fetchData();
    }, []);

    const [activeComponent, setActiveComponent] = useState('team');

    const modifyActiveComponent = React.useCallback(
        (newActiveComponent) => {
            setActiveComponent(newActiveComponent);
        },
        [setActiveComponent]
    );

    const [postTitle, setPostTitle] = useState('');
    const [postText, setPostText] = useState([]);
    const [date, setDate] = useState();
    const [image, setImage] = useState(
        'https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/white-bg.jpeg'
    );

    const convertDate = (date) => {
        return moment(date).format('MMMM DD, YYYY');
    };

    cribs.sort(function (cribs, b) {
        return new Date(b.data.createdat) - new Date(cribs.data.createdat);
    });

    partners.sort(function (partners, b) {
        return new Date(b.data.createdat) - new Date(partners.data.createdat);
    });

    team.sort(function (team, b) {
        return new Date(b.data.createdat) - new Date(team.data.createdat);
    });

    times.sort(function (times, b) {
        return new Date(b.data.createdat) - new Date(times.data.createdat);
    });

    guides.sort(function (guides, b) {
        return new Date(b.data.createdat) - new Date(guides.data.createdat);
    });

    // useEffect(() => {
    //     if (activeComponent === 'cribs') {
    //         setPostTitle('');
    //         setPostText();
    //         setDate();
    //     }
    //     if (activeComponent === 'partners') {
    //         setPostTitle('');
    //         setDate();
    //     }
    //     if (activeComponent === 'team') {
    //         setDate();
    //     }
    //     if (activeComponent === 'times') {
    //         setDate();
    //     }
    //     if (activeComponent === 'guides') {
    //         setDate();
    //     }
    // }, [activeComponent, cribs, partners, team, times, guides]);

    if (size.width < 550) {
        return <BlogMobile />;
    }

    const styles = StyleSheet.create({
        fadeIn: {
            animationName: fadeIn,
            animationDuration: '3s',
        },
    });

    if (doc) {
        return (
            <>
                <div>
                    <Container maxW={'7xl'}>
                        <ul className="snip1226">
                            <li
                                className={
                                    activeComponent === 'cribs' ? 'current' : ''
                                }
                            >
                                <Nav.Link
                                    href=""
                                    data-hover="cribs"
                                    onClick={() => {
                                        modifyActiveComponent('cribs');
                                    }}
                                >
                                    CRIBS
                                </Nav.Link>
                            </li>
                            <li
                                className={
                                    activeComponent === 'partners'
                                        ? 'current'
                                        : ''
                                }
                            >
                                <Nav.Link
                                    href=""
                                    data-hover="partners"
                                    onClick={() => {
                                        modifyActiveComponent('partners');
                                    }}
                                >
                                    PARTNERS
                                </Nav.Link>
                            </li>
                            <li
                                className={
                                    activeComponent === 'team' ? 'current' : ''
                                }
                            >
                                <Nav.Link
                                    href=""
                                    data-hover="team"
                                    onClick={() => {
                                        modifyActiveComponent('team');
                                    }}
                                >
                                    TEAM
                                </Nav.Link>
                            </li>
                            <li
                                className={
                                    activeComponent === 'times' ? 'current' : ''
                                }
                            >
                                <Nav.Link
                                    href=""
                                    data-hover="times"
                                    onClick={() => {
                                        modifyActiveComponent('times');
                                    }}
                                >
                                    TIMES
                                </Nav.Link>
                            </li>
                            <li
                                className={
                                    activeComponent === 'guides'
                                        ? 'current'
                                        : ''
                                }
                            >
                                <Nav.Link
                                    href=""
                                    data-hover="guides"
                                    onClick={() => {
                                        modifyActiveComponent('guides');
                                    }}
                                >
                                    GUIDES
                                </Nav.Link>
                            </li>
                        </ul>
                        <Stack
                            align={'center'}
                            spacing={{ base: 8, md: 10 }}
                            py={{ base: 10, md: 10 }}
                            direction={{ base: 'column', md: 'row' }}
                        >
                            <Flex
                                flex={1}
                                justify={'center'}
                                align={'center'}
                                position={'relative'}
                                w={'full'}
                            >
                                <Box
                                    position={'relative'}
                                    height={'450px'}
                                    rounded={'1xl'}
                                    // boxShadow={'2xl'}
                                    width={'100%'}
                                    overflow={'auto'}
                                    cursor={'pointer'}
                                    backgroundColor={'transparent !important'}
                                    css={{
                                        '&::-webkit-scrollbar': {
                                            width: '10px',
                                        },
                                        '&::-webkit-scrollbar-track': {
                                            boxShadow: 'inset 0 0 0 5x grey',
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            background: 'black',
                                        },
                                    }}
                                >
                                    <SimpleGrid
                                        columns={[2, null, 3]}
                                        spacing="5px"
                                        borderLeft="1px solid black"
                                    >
                                        {activeComponent === 'cribs' &&
                                            cribs.length > 0 &&
                                            cribs.map((post) => {
                                                return (
                                                    <>
                                                        <motion.div
                                                            whileHover={{
                                                                scale: 0.9,
                                                                shadow:
                                                                    '0px 0px 4px gray',
                                                            }}
                                                        >
                                                            <Link
                                                                to={
                                                                    baseUrl +
                                                                    '/library/' +
                                                                    post
                                                                        .slugs[0]
                                                                }
                                                            >
                                                                <Box
                                                                    height="200px"
                                                                    paddingLeft="0.5rem"
                                                                    onClick={() => {
                                                                        setPostTitle(
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                        );
                                                                        setPostText(
                                                                            post
                                                                                .data
                                                                                .body
                                                                        );
                                                                        setDate(
                                                                            convertDate(
                                                                                post
                                                                                    .data
                                                                                    .createdat
                                                                            )
                                                                        );
                                                                        setImage(
                                                                            post
                                                                                .data
                                                                                .image
                                                                                .url
                                                                        );
                                                                        setSelected(
                                                                            true
                                                                        );
                                                                    }}
                                                                    id={
                                                                        selected &&
                                                                        postTitle ===
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                            ? 'image-box-light'
                                                                            : 'image-box'
                                                                    }
                                                                >
                                                                    <Image
                                                                        alt={
                                                                            'Hero Image'
                                                                        }
                                                                        fit={
                                                                            'cover'
                                                                        }
                                                                        align={
                                                                            'center'
                                                                        }
                                                                        w={
                                                                            '100%'
                                                                        }
                                                                        h={
                                                                            '100%'
                                                                        }
                                                                        src={
                                                                            post
                                                                                .data
                                                                                .image
                                                                                .url
                                                                        }
                                                                    />
                                                                    <div id="top-left">
                                                                        <h1 className="post-text">
                                                                            {
                                                                                post
                                                                                    .data
                                                                                    .title[0]
                                                                                    .text
                                                                            }
                                                                        </h1>
                                                                        <img
                                                                            className="post-image"
                                                                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/element-graphic-plus-copy-2.svg"
                                                                            alt="hover-post"
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        id={
                                                                            selected &&
                                                                            postTitle ===
                                                                                post
                                                                                    .data
                                                                                    .title[0]
                                                                                    .text
                                                                                ? 'post-overlay-light'
                                                                                : 'post-overlay'
                                                                        }
                                                                    ></div>
                                                                </Box>
                                                            </Link>
                                                        </motion.div>
                                                    </>
                                                );
                                            })}
                                        {activeComponent === 'partners' &&
                                            partners.length > 0 &&
                                            partners.map((post) => {
                                                return (
                                                    <motion.div
                                                        whileHover={{
                                                            scale: 0.9,
                                                            shadow:
                                                                '0px 0px 4px gray',
                                                        }}
                                                    >
                                                        <Link
                                                            to={
                                                                baseUrl +
                                                                '/library/' +
                                                                post.slugs[0]
                                                            }
                                                        >
                                                            <Box
                                                                height="200px"
                                                                paddingLeft="0.5rem"
                                                                onClick={() => {
                                                                    setPostTitle(
                                                                        post
                                                                            .data
                                                                            .title[0]
                                                                            .text
                                                                    );
                                                                    setPostText(
                                                                        post
                                                                            .data
                                                                            .body
                                                                    );
                                                                    setDate(
                                                                        convertDate(
                                                                            post
                                                                                .data
                                                                                .createdat
                                                                        )
                                                                    );
                                                                    setImage(
                                                                        post
                                                                            .data
                                                                            .image
                                                                            .url
                                                                    );
                                                                    setSelected(
                                                                        true
                                                                    );
                                                                }}
                                                                id={
                                                                    selected &&
                                                                    postTitle ===
                                                                        post
                                                                            .data
                                                                            .title[0]
                                                                            .text
                                                                        ? 'image-box-light'
                                                                        : 'image-box'
                                                                }
                                                            >
                                                                <Image
                                                                    alt={
                                                                        'Hero Image'
                                                                    }
                                                                    fit={
                                                                        'cover'
                                                                    }
                                                                    align={
                                                                        'center'
                                                                    }
                                                                    w={'100%'}
                                                                    h={'100%'}
                                                                    src={
                                                                        post
                                                                            .data
                                                                            .image
                                                                            .url
                                                                    }
                                                                />
                                                                <div id="top-left">
                                                                    <h1 className="post-text">
                                                                        {
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                        }
                                                                    </h1>
                                                                    <img
                                                                        className="post-image"
                                                                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/element-graphic-plus-copy-2.svg"
                                                                        alt="hover-post"
                                                                    />
                                                                </div>
                                                                <div
                                                                    id={
                                                                        selected &&
                                                                        postTitle ===
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                            ? 'post-overlay-light'
                                                                            : 'post-overlay'
                                                                    }
                                                                ></div>
                                                            </Box>
                                                        </Link>
                                                    </motion.div>
                                                );
                                            })}
                                        {activeComponent === 'team' &&
                                            team.length > 0 &&
                                            team.map((post) => {
                                                return (
                                                    <motion.div
                                                        whileHover={{
                                                            scale: 0.9,
                                                            shadow:
                                                                '0px 0px 4px gray',
                                                        }}
                                                    >
                                                        <Link
                                                            to={
                                                                baseUrl +
                                                                '/library/' +
                                                                post.slugs[0]
                                                            }
                                                        >
                                                            <Box
                                                                height="200px"
                                                                paddingLeft="0.5rem"
                                                                boxShadow="xl"
                                                                onClick={() => {
                                                                    setPostTitle(
                                                                        post
                                                                            .data
                                                                            .title[0]
                                                                            .text
                                                                    );
                                                                    setPostText(
                                                                        post
                                                                            .data
                                                                            .body
                                                                    );
                                                                    setDate(
                                                                        convertDate(
                                                                            post
                                                                                .data
                                                                                .createdat
                                                                        )
                                                                    );
                                                                    setImage(
                                                                        post
                                                                            .data
                                                                            .image
                                                                            .url
                                                                    );
                                                                    setSelected(
                                                                        true
                                                                    );
                                                                }}
                                                                id={
                                                                    selected &&
                                                                    postTitle ===
                                                                        post
                                                                            .data
                                                                            .title[0]
                                                                            .text
                                                                        ? 'image-box-light'
                                                                        : 'image-box'
                                                                }
                                                            >
                                                                <Image
                                                                    alt={
                                                                        'Hero Image'
                                                                    }
                                                                    fit={
                                                                        'cover'
                                                                    }
                                                                    align={
                                                                        'center'
                                                                    }
                                                                    w={'100%'}
                                                                    h={'100%'}
                                                                    src={
                                                                        post
                                                                            .data
                                                                            .image
                                                                            .url
                                                                    }
                                                                />
                                                                <div id="top-left">
                                                                    <h1 className="post-text">
                                                                        {
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                        }
                                                                    </h1>
                                                                    <img
                                                                        className="post-image"
                                                                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/element-graphic-plus-copy-2.svg"
                                                                        alt="hover-post"
                                                                    />
                                                                </div>
                                                                <div
                                                                    id={
                                                                        selected &&
                                                                        postTitle ===
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                            ? 'post-overlay-light'
                                                                            : 'post-overlay'
                                                                    }
                                                                ></div>
                                                            </Box>
                                                        </Link>
                                                    </motion.div>
                                                );
                                            })}
                                        {activeComponent === 'times' &&
                                            times.length > 0 &&
                                            times.map((post) => {
                                                return (
                                                    <motion.div
                                                        whileHover={{
                                                            scale: 0.9,
                                                            shadow:
                                                                '0px 0px 4px gray',
                                                        }}
                                                    >
                                                        <Link
                                                            to={
                                                                baseUrl +
                                                                '/library/' +
                                                                post.slugs[0]
                                                            }
                                                        >
                                                            <Box
                                                                height="200px"
                                                                paddingLeft="0.5rem"
                                                                onClick={() => {
                                                                    setPostTitle(
                                                                        post
                                                                            .data
                                                                            .title[0]
                                                                            .text
                                                                    );
                                                                    setPostText(
                                                                        post
                                                                            .data
                                                                            .body
                                                                    );
                                                                    setDate(
                                                                        convertDate(
                                                                            post
                                                                                .data
                                                                                .createdat
                                                                        )
                                                                    );
                                                                    setImage(
                                                                        post
                                                                            .data
                                                                            .image
                                                                            .url
                                                                    );
                                                                    setSelected(
                                                                        true
                                                                    );
                                                                }}
                                                                id={
                                                                    selected &&
                                                                    postTitle ===
                                                                        post
                                                                            .data
                                                                            .title[0]
                                                                            .text
                                                                        ? 'image-box-light'
                                                                        : 'image-box'
                                                                }
                                                            >
                                                                <Image
                                                                    alt={
                                                                        'Hero Image'
                                                                    }
                                                                    fit={
                                                                        'cover'
                                                                    }
                                                                    align={
                                                                        'center'
                                                                    }
                                                                    w={'100%'}
                                                                    h={'100%'}
                                                                    src={
                                                                        post
                                                                            .data
                                                                            .image
                                                                            .url
                                                                    }
                                                                />
                                                                <div id="top-left">
                                                                    <h1 className="post-text">
                                                                        {
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                        }
                                                                    </h1>
                                                                    <img
                                                                        className="post-image"
                                                                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/element-graphic-plus-copy-2.svg"
                                                                        alt="hover-post"
                                                                    />
                                                                </div>
                                                                <div
                                                                    id={
                                                                        selected &&
                                                                        postTitle ===
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                            ? 'post-overlay-light'
                                                                            : 'post-overlay'
                                                                    }
                                                                ></div>
                                                            </Box>
                                                        </Link>
                                                    </motion.div>
                                                );
                                            })}
                                        {activeComponent === 'guides' &&
                                            guides.length > 0 &&
                                            guides.map((post) => {
                                                return (
                                                    <motion.div
                                                        whileHover={{
                                                            scale: 0.9,
                                                            shadow:
                                                                '0px 0px 4px gray',
                                                        }}
                                                    >
                                                        <Link
                                                            to={
                                                                baseUrl +
                                                                '/library/' +
                                                                post.slugs[0]
                                                            }
                                                        >
                                                            <Box
                                                                height="200px"
                                                                paddingLeft="0.5rem"
                                                                onClick={() => {
                                                                    setPostTitle(
                                                                        post
                                                                            .data
                                                                            .title[0]
                                                                            .text
                                                                    );
                                                                    setPostText(
                                                                        post
                                                                            .data
                                                                            .body
                                                                    );
                                                                    setDate(
                                                                        convertDate(
                                                                            post
                                                                                .data
                                                                                .createdat
                                                                        )
                                                                    );
                                                                    setImage(
                                                                        post
                                                                            .data
                                                                            .image
                                                                            .url
                                                                    );
                                                                    setSelected(
                                                                        true
                                                                    );
                                                                }}
                                                                id={
                                                                    selected &&
                                                                    postTitle ===
                                                                        post
                                                                            .data
                                                                            .title[0]
                                                                            .text
                                                                        ? 'image-box-light'
                                                                        : 'image-box'
                                                                }
                                                            >
                                                                <Image
                                                                    alt={
                                                                        'Hero Image'
                                                                    }
                                                                    fit={
                                                                        'cover'
                                                                    }
                                                                    align={
                                                                        'center'
                                                                    }
                                                                    w={'100%'}
                                                                    h={'100%'}
                                                                    src={
                                                                        post
                                                                            .data
                                                                            .image
                                                                            .url
                                                                    }
                                                                />
                                                                <div id="top-left">
                                                                    <h1 className="post-text">
                                                                        {
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                        }
                                                                    </h1>
                                                                    <img
                                                                        className="post-image"
                                                                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/element-graphic-plus-copy-2.svg"
                                                                        alt="hover-post"
                                                                    />
                                                                </div>
                                                                <div
                                                                    id={
                                                                        selected &&
                                                                        postTitle ===
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                            ? 'post-overlay-light'
                                                                            : 'post-overlay'
                                                                    }
                                                                ></div>
                                                            </Box>
                                                        </Link>
                                                    </motion.div>
                                                );
                                            })}
                                    </SimpleGrid>
                                </Box>
                            </Flex>
                            <Flex
                                flex={1}
                                justify={'center'}
                                align={'center'}
                                position={'relative'}
                                w={'full'}
                            >
                                <Box
                                    position={'relative'}
                                    height={'450px'}
                                    rounded={'1xl'}
                                    width={'100%'}
                                    overflow={'auto'}
                                    css={{
                                        '&::-webkit-scrollbar': {
                                            width: '10px',
                                        },
                                        '&::-webkit-scrollbar-track': {
                                            boxShadow: 'inset 0 0 0 5x grey',
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            background: 'black',
                                        },
                                    }}
                                >
                                    <Image
                                        alt={'Hero Image'}
                                        fit={'cover'}
                                        align={'center'}
                                        w={'100%'}
                                        h={'200px'}
                                        src={image}
                                    />
                                    <br />

                                    <Heading
                                        fontSize={{
                                            base: '3xl',
                                            sm: '4xl',
                                            lg: '34px',
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
                                            {postTitle}
                                        </Text>
                                    </Heading>
                                    <br />
                                    <Text>{date}</Text>
                                    <br />

                                    <RichText
                                        fontSize={{
                                            base: '3xl',
                                            sm: '4xl',
                                            lg: '16px',
                                        }}
                                        render={postText}
                                    />
                                </Box>
                            </Flex>
                        </Stack>
                    </Container>
                </div>
            </>
        );
    } else {
        return null;
    }
};

export default BlogIndex;
