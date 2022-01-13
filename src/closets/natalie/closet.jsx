import React, { useState } from 'react';

import Tshirt from './components/top/t-shirt';
import Sleeveless from './components/top/sleeveless';
import Shirt from './components/top/shirt';
import Pullover from './components/top/pullover';
import TopCategory from './components/category/top';
import BottomCategory from './components/category/bottom';
import Pants from './components/bottom/pants';
import Short from './components/bottom/short';
import Skirt from './components/bottom/skirt';
import {
    Avatar,
    Box,
    Button,
    chakra,
    CheckboxGroup,
    Grid,
    GridItem,
    HStack,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Text,
} from '@chakra-ui/react';
import OuterCategory from './components/category/outer';
import Blazer from './components/outer/blazer';
import Coat from './components/outer/coat';
import Jacket from './components/outer/jacket';
import Cardigans from './components/outer/cardigans';
import Dress from './components/onePiece/dress';

import { Tab, Col, Nav, Row } from 'react-bootstrap';
import OnePieceCategory from './components/category/onePiece';
import Overall from './components/onePiece/overall';
import Statistic from './statistics';
import Swimsuit from './components/onePiece/swimwear';

const NatalieCloset = () => {
    const [mainCategory, setMainCategory] = useState('all');

    const [topCategory, setTopCategory] = useState('T-shirt');
    const [bottomCategory, setBottomCategory] = useState('Pants');
    const [outerCategory, setOuterCategory] = useState('Blazer');
    const [onePieceCategory, setonePieceCategory] = useState('Dress');

    const [items, setItems] = useState([]);

    const fetchData = () => {
        fetch('https://api.npoint.io/eb35d003cd0c1991c6aa/6')
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div
                className="justify-content-center text-center"
                style={{ marginTop: '2rem' }}
            >
                <Grid
                    h="100%"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                >
                    <GridItem
                        rowSpan={2}
                        colSpan={1}
                        borderRight={'1px solid black'}
                        bg="white"
                    >
                        {' '}
                        <Tab.Container
                            id="left-tabs-example"
                            defaultActiveKey="all"
                        >
                            <Row>
                                <Col>
                                    <Nav
                                        variant="pills"
                                        className="flex-column"
                                    >
                                        <Nav.Item>
                                            <Nav.Link>
                                                <Avatar src="https://bit.ly/broken-link" />
                                                <p>{items.name}</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <br />
                                        <Nav.Item>
                                            <Nav.Link
                                                eventKey="all"
                                                onClick={() =>
                                                    setMainCategory('all')
                                                }
                                            >
                                                All
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link
                                                eventKey="regular"
                                                onClick={() =>
                                                    setMainCategory('regular')
                                                }
                                            >
                                                Set
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link
                                                eventKey="one-piece"
                                                onClick={() =>
                                                    setMainCategory('onePiece')
                                                }
                                            >
                                                One Piece
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </GridItem>
                    <GridItem colSpan={4}>
                        {mainCategory === 'regular' ? (
                            <>
                                <SimpleGrid
                                    columns={[1, null, 3]}
                                    spacing="40px"
                                    textAlign="left"
                                    mt={'2rem'}
                                >
                                    <Box
                                        maxW="7xl"
                                        mx={'auto'}
                                        pt={5}
                                        px={{ base: 2, sm: 12, md: 17 }}
                                    >
                                        <Stat
                                            px={{ base: 4, md: 8 }}
                                            py={'5'}
                                            shadow={'xl'}
                                            border={'1px solid'}
                                            rounded={'lg'}
                                        >
                                            <StatLabel
                                                fontWeight={'medium'}
                                                isTruncated
                                            >
                                                TOP:
                                            </StatLabel>
                                            <TopCategory
                                                topCategory={topCategory}
                                                setTopCategory={setTopCategory}
                                            />
                                        </Stat>
                                    </Box>
                                    <Box
                                        // maxW="7xl"
                                        mx={'auto'}
                                        pt={5}
                                        px={{ base: 2, sm: 12, md: 17 }}
                                    >
                                        <Stat
                                            px={{ base: 4, md: 8 }}
                                            py={'5'}
                                            shadow={'xl'}
                                            border={'1px solid'}
                                            //   borderColor={useColorModeValue('gray.800', 'gray.500')}
                                            rounded={'lg'}
                                        >
                                            <StatLabel
                                                fontWeight={'medium'}
                                                isTruncated
                                            >
                                                BOTTOM:
                                            </StatLabel>
                                            <BottomCategory
                                                bottomCategory={bottomCategory}
                                                setBottomCategory={
                                                    setBottomCategory
                                                }
                                            />
                                        </Stat>
                                    </Box>
                                    <Box
                                        // maxW="7xl"
                                        mx={'auto'}
                                        pt={5}
                                        px={{ base: 2, sm: 12, md: 17 }}
                                    >
                                        <Stat
                                            px={{ base: 4, md: 8 }}
                                            py={'5'}
                                            shadow={'xl'}
                                            border={'1px solid'}
                                            //   borderColor={useColorModeValue('gray.800', 'gray.500')}
                                            rounded={'lg'}
                                        >
                                            <StatLabel
                                                fontWeight={'medium'}
                                                isTruncated
                                            >
                                                OUTER:
                                            </StatLabel>
                                            <OuterCategory
                                                outerCategory={outerCategory}
                                                setOuterCategory={
                                                    setOuterCategory
                                                }
                                            />
                                        </Stat>
                                    </Box>
                                </SimpleGrid>
                                {topCategory === 'T-shirt' ? (
                                    <Tshirt items={items} />
                                ) : null}
                                {topCategory === 'Sleeveless' ? (
                                    <Sleeveless />
                                ) : null}
                                {topCategory === 'Shirt' ? <Shirt /> : null}
                                {topCategory === 'Pullover' ? (
                                    <Pullover />
                                ) : null}

                                {bottomCategory === 'Pants' ? <Pants /> : null}
                                {bottomCategory === 'Short' ? <Short /> : null}
                                {bottomCategory === 'Skirt' ? <Skirt /> : null}

                                {outerCategory === 'Blazer' ? <Blazer /> : null}
                                {outerCategory === 'Cardigans' ? (
                                    <Cardigans />
                                ) : null}
                                {outerCategory === 'Coat' ? <Coat /> : null}
                                {outerCategory === 'Jacket' ? <Jacket /> : null}
                            </>
                        ) : null}

                        {mainCategory === 'onePiece' ? (
                            <>
                                <SimpleGrid
                                    columns={[2, null, 3]}
                                    spacing="40px"
                                    mt={'2rem'}
                                >
                                    <Box
                                        // maxW="7xl"
                                        mx={'auto'}
                                        pt={5}
                                        px={{ base: 2, sm: 12, md: 17 }}
                                    >
                                        <Stat
                                            px={{ base: 4, md: 8 }}
                                            py={'5'}
                                            shadow={'xl'}
                                            border={'1px solid'}
                                            //   borderColor={useColorModeValue('gray.800', 'gray.500')}
                                            rounded={'lg'}
                                        >
                                            <StatLabel
                                                fontWeight={'medium'}
                                                isTruncated
                                            >
                                                ONE PIECE:
                                            </StatLabel>
                                            <OnePieceCategory
                                                onePieceCategory={
                                                    onePieceCategory
                                                }
                                                setonePieceCategory={
                                                    setonePieceCategory
                                                }
                                            />
                                        </Stat>
                                    </Box>
                                    <Box></Box>
                                </SimpleGrid>
                                {onePieceCategory === 'Dress' ? (
                                    <Dress />
                                ) : null}
                                {onePieceCategory === 'Swimwear' ? (
                                    <Swimsuit />
                                ) : null}
                                {onePieceCategory === 'Overall' ? (
                                    <Overall />
                                ) : null}
                            </>
                        ) : null}

                        {mainCategory === 'all' ? (
                            <Statistic
                                topCategory={topCategory}
                                setTopCategory={setTopCategory}
                                bottomCategory={bottomCategory}
                                setBottomCategory={setBottomCategory}
                                outerCategory={outerCategory}
                                setOuterCategory={setOuterCategory}
                                onePieceCategory={onePieceCategory}
                                setonePieceCategory={setonePieceCategory}
                            />
                        ) : null}
                    </GridItem>
                </Grid>
            </div>
        </>
    );
};

export default NatalieCloset;
