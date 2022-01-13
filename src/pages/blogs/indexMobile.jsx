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
    useDisclosure,
    ModalOverlay,
    Modal,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalHeader,
} from '@chakra-ui/react';

import './style.scss';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';
import { i18n } from '../../helpers/i18n';

// import { Helmet } from 'react-helmet';
// import { useTranslation } from 'react-i18next';

const BlogMobile = () => {
    // const { t } = useTranslation();

    const baseUrl = i18n.language === '' ? '' : '/' + i18n.language;

    const [doc, setDocData] = useState(null);

    const [cribs, setCribs] = useState([]);
    const [partners, setPartners] = useState([]);
    const [team, setTeam] = useState([]);
    const [times, setTimes] = useState([]);
    const [guides, setGuides] = useState([]);

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

    const [postTitle, setPostTitle] = useState([]);

    const [postText, setPostText] = useState([]);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState('inside');

    const initialRef = React.useRef();
    const finalRef = React.useRef();

    if (doc) {
        return (
            <>
                {/* <Helmet>
                    <meta
                        name="description"
                        content={t`description.library`}
                    ></meta>
                    <meta name="title" content={t`titles.library`}></meta>
                    <title>{t`titles.library`}</title>
                </Helmet> */}
                <div id="about">
                    <Container maxW={'7xl'} p={0} marginTop={0}>
                        <Stack align={'center'} marginTop={0}>
                            <Navbar bg="white" className="categories">
                                <Container>
                                    <Nav className="me-auto">
                                        <Nav.Link
                                            href=""
                                            onClick={() =>
                                                modifyActiveComponent('cribs')
                                            }
                                            style={{
                                                fontSize: '10px',
                                                borderBottom:
                                                    activeComponent === 'cribs'
                                                        ? '1px solid black'
                                                        : 'none',
                                            }}
                                        >
                                            CRIBS
                                        </Nav.Link>
                                        <Nav.Link
                                            href=""
                                            onClick={() =>
                                                modifyActiveComponent(
                                                    'partners'
                                                )
                                            }
                                            style={{
                                                fontSize: '10px',

                                                borderBottom:
                                                    activeComponent ===
                                                    'partners'
                                                        ? '1px solid black'
                                                        : 'none',
                                            }}
                                        >
                                            PARTNERS
                                        </Nav.Link>
                                        <Nav.Link
                                            href=""
                                            onClick={() =>
                                                modifyActiveComponent('team')
                                            }
                                            style={{
                                                fontSize: '10px',

                                                borderBottom:
                                                    activeComponent === 'team'
                                                        ? '1px solid black'
                                                        : 'none',
                                            }}
                                        >
                                            TEAM
                                        </Nav.Link>
                                        <Nav.Link
                                            href=""
                                            onClick={() =>
                                                modifyActiveComponent('times')
                                            }
                                            style={{
                                                fontSize: '10px',

                                                borderBottom:
                                                    activeComponent === 'times'
                                                        ? '1px solid black'
                                                        : 'none',
                                            }}
                                        >
                                            TIMES
                                        </Nav.Link>
                                        <Nav.Link
                                            href=""
                                            onClick={() =>
                                                modifyActiveComponent('guides')
                                            }
                                            style={{
                                                fontSize: '10px',

                                                borderBottom:
                                                    activeComponent === 'guides'
                                                        ? '1px solid black'
                                                        : 'none',
                                            }}
                                        >
                                            GUIDES
                                        </Nav.Link>
                                    </Nav>
                                </Container>
                            </Navbar>
                            <Flex
                                flex={1}
                                justify={'center'}
                                align={'center'}
                                position={'relative'}
                                w={'full'}
                            >
                                <Box
                                    position={'relative'}
                                    height={'400px'}
                                    width={'100%'}
                                    rounded={'1xl'}
                                    boxShadow={'2xl'}
                                    overflow={'auto'}
                                    cursor={'pointer'}
                                    overflowX={'scroll'}
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
                                        columns={[3, null, 3]}
                                        spacing="5px"
                                    >
                                        {activeComponent === 'cribs' &&
                                            cribs.length > 0 &&
                                            cribs.map((post) => {
                                                return (
                                                    <Link
                                                        to={
                                                            baseUrl +
                                                            '/library/' +
                                                            post.slugs[0]
                                                        }
                                                    >
                                                        <Box
                                                            height="169px"
                                                            onClick={() => {
                                                                setPostTitle(
                                                                    post.data
                                                                        .title[0]
                                                                        .text
                                                                );
                                                                setPostText(
                                                                    post.data
                                                                        .body
                                                                );
                                                                onOpen();
                                                            }}
                                                            id="image-box"
                                                        >
                                                            <Image
                                                                alt={
                                                                    'Hero Image'
                                                                }
                                                                fit={'cover'}
                                                                align={'center'}
                                                                w={'100%'}
                                                                h={'100%'}
                                                                src={
                                                                    post.data
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
                                                                    style={{
                                                                        display:
                                                                            postTitle ===
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                                ? 'flex'
                                                                                : 'none',
                                                                    }}
                                                                />
                                                            </div>
                                                            <div id="post-overlay"></div>
                                                        </Box>
                                                    </Link>
                                                );
                                            })}
                                        {activeComponent === 'partners' &&
                                            partners.length > 0 &&
                                            partners.map((post) => {
                                                return (
                                                    <Link
                                                        to={
                                                            baseUrl +
                                                            '/library/' +
                                                            post.slugs[0]
                                                        }
                                                    >
                                                        <Box
                                                            height="169px"
                                                            onClick={() => {
                                                                setPostTitle(
                                                                    post.data
                                                                        .title[0]
                                                                        .text
                                                                );
                                                                setPostText(
                                                                    post.data
                                                                        .body
                                                                );
                                                                onOpen();
                                                            }}
                                                            id="image-box"
                                                        >
                                                            <Image
                                                                alt={
                                                                    'Hero Image'
                                                                }
                                                                fit={'cover'}
                                                                align={'center'}
                                                                w={'100%'}
                                                                h={'100%'}
                                                                src={
                                                                    post.data
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
                                                                    style={{
                                                                        display:
                                                                            postTitle ===
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                                ? 'flex'
                                                                                : 'none',
                                                                    }}
                                                                />
                                                            </div>
                                                            <div id="post-overlay"></div>
                                                        </Box>
                                                    </Link>
                                                );
                                            })}
                                        {activeComponent === 'team' &&
                                            team.length > 0 &&
                                            team.map((post) => {
                                                return (
                                                    <Link
                                                        to={
                                                            baseUrl +
                                                            '/library/' +
                                                            post.slugs[0]
                                                        }
                                                    >
                                                        <Box
                                                            height="169px"
                                                            onClick={() => {
                                                                setPostTitle(
                                                                    post.data
                                                                        .title[0]
                                                                        .text
                                                                );
                                                                setPostText(
                                                                    post.data
                                                                        .body
                                                                );
                                                                onOpen();
                                                            }}
                                                            id="image-box"
                                                        >
                                                            <Image
                                                                alt={
                                                                    'Hero Image'
                                                                }
                                                                fit={'cover'}
                                                                align={'center'}
                                                                w={'100%'}
                                                                h={'100%'}
                                                                src={
                                                                    post.data
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
                                                                    style={{
                                                                        display:
                                                                            postTitle ===
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                                ? 'flex'
                                                                                : 'none',
                                                                    }}
                                                                />
                                                            </div>
                                                            <div id="post-overlay"></div>
                                                        </Box>
                                                    </Link>
                                                );
                                            })}
                                        {activeComponent === 'times' &&
                                            times.length > 0 &&
                                            times.map((post) => {
                                                return (
                                                    <Link
                                                        to={
                                                            baseUrl +
                                                            '/library/' +
                                                            post.slugs[0]
                                                        }
                                                    >
                                                        <Box
                                                            height="169px"
                                                            onClick={() => {
                                                                setPostTitle(
                                                                    post.data
                                                                        .title[0]
                                                                        .text
                                                                );
                                                                setPostText(
                                                                    post.data
                                                                        .body
                                                                );
                                                                onOpen();
                                                            }}
                                                            id="image-box"
                                                        >
                                                            <Image
                                                                alt={
                                                                    'Hero Image'
                                                                }
                                                                fit={'cover'}
                                                                align={'center'}
                                                                w={'100%'}
                                                                h={'100%'}
                                                                src={
                                                                    post.data
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
                                                                    style={{
                                                                        display:
                                                                            postTitle ===
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                                ? 'flex'
                                                                                : 'none',
                                                                    }}
                                                                />
                                                            </div>
                                                            <div id="post-overlay"></div>
                                                        </Box>
                                                    </Link>
                                                );
                                            })}
                                        {activeComponent === 'guides' &&
                                            guides.length > 0 &&
                                            guides.map((post) => {
                                                return (
                                                    <Link
                                                        to={
                                                            baseUrl +
                                                            '/library/' +
                                                            post.slugs[0]
                                                        }
                                                    >
                                                        <Box
                                                            height="169px"
                                                            onClick={() => {
                                                                setPostTitle(
                                                                    post.data
                                                                        .title[0]
                                                                        .text
                                                                );
                                                                setPostText(
                                                                    post.data
                                                                        .body
                                                                );
                                                                onOpen();
                                                            }}
                                                            id="image-box"
                                                        >
                                                            <Image
                                                                alt={
                                                                    'Hero Image'
                                                                }
                                                                fit={'cover'}
                                                                align={'center'}
                                                                w={'100%'}
                                                                h={'100%'}
                                                                src={
                                                                    post.data
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
                                                                    style={{
                                                                        display:
                                                                            postTitle ===
                                                                            post
                                                                                .data
                                                                                .title[0]
                                                                                .text
                                                                                ? 'flex'
                                                                                : 'none',
                                                                    }}
                                                                />
                                                            </div>
                                                            <div id="post-overlay"></div>
                                                        </Box>
                                                    </Link>
                                                );
                                            })}
                                    </SimpleGrid>
                                </Box>
                            </Flex>

                            <Modal
                                initialFocusRef={initialRef}
                                finalFocusRef={finalRef}
                                isOpen={isOpen}
                                onClose={onClose}
                                scrollBehavior={scrollBehavior}
                            >
                                <ModalOverlay />

                                <ModalContent>
                                    <ModalHeader>
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
                                    </ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>
                                        <RichText
                                            fontSize={{
                                                base: '3xl',
                                                sm: '4xl',
                                                lg: '16px',
                                            }}
                                            render={postText}
                                        />
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                        </Stack>
                    </Container>

                    {/* <h1>GUIDES</h1>
                <Row>
                    {guides.length > 0 &&
                        guides.map((post) => {
                            return ( */}
                    {/* <> */}

                    {/* <Col sm={3}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img
                                                variant="top"
                                                src={post.data.image.url}
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    {post.data.title[0].text}
                                                </Card.Title>
                                                <Card.Text>
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card's content.
                                                </Card.Text>
                                                <button
                                                    onClick={() => {
                                                        setPostTitle(
                                                            post.data.title[0]
                                                                .text
                                                        );
                                                        setPostText(
                                                            post.data.body
                                                        );
                                                    }}
                                                >
                                                    BUTTON
                                                </button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </>
                            );
                        })}
                </Row> */}
                </div>
            </>
        );
    } else {
        return null;
    }
};

export default BlogMobile;
