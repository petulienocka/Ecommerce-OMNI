import React, { useState } from 'react';

import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import OuterCategory from './components/category/outer';
import BottomCategory from './components/category/bottom';
import TopCategory from './components/category/top';
import OnePieceCategory from './components/category/onePiece';
import Tshirt from './components/top/t-shirt';
import Sleeveless from './components/top/sleeveless';
import Shirt from './components/top/shirt';
import Pullover from './components/top/pullover';
import Pants from './components/bottom/pants';
import Short from './components/bottom/short';
import Skirt from './components/bottom/skirt';
import Blazer from './components/outer/blazer';
import Cardigans from './components/outer/cardigans';
import Coat from './components/outer/coat';
import Jacket from './components/outer/jacket';
import Dress from './components/onePiece/dress';
import Swimsuit from './components/onePiece/swimwear';
import Overall from './components/onePiece/overall';

const Statistic = ({
    topCategory,
    setTopCategory,
    bottomCategory,
    setBottomCategory,
    outerCategory,
    setOuterCategory,
    onePieceCategory,
    setonePieceCategory,
}) => {
    const [topData, setTopData] = useState({});
    const [bottomData, setBottomData] = useState({});
    const [outerData, setOuterData] = useState({});
    const [onePieceData, setOnePieceData] = useState({});

    const fetchData = () => {
        fetch('https://api.npoint.io/eb35d003cd0c1991c6aa/6')
            .then((response) => response.json())
            .then((data) => {
                setTopData(data.clothes.regular.top);
                setBottomData(data.clothes.regular.bottom);
                setOuterData(data.clothes.regular.outer);
                setOnePieceData(data.clothes.onePiece);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    React.useEffect(() => {
        fetchData();
    }, []);

    const lengthTopData = topData;
    const lengthBottomData = bottomData;
    const lengthOuterData = outerData;
    const lengthOnePieceData = onePieceData;

    return (
        <>
            {/* <SimpleGrid
                columns={[1, null, 4]}
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
                        <StatLabel fontWeight={'medium'} isTruncated>
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
                        rounded={'lg'}
                    >
                        <StatLabel fontWeight={'medium'} isTruncated>
                            BOTTOM:
                        </StatLabel>
                        <BottomCategory
                            bottomCategory={bottomCategory}
                            setBottomCategory={setBottomCategory}
                        />
                    </Stat>
                </Box>
                <Box mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                    <Stat
                        px={{ base: 4, md: 8 }}
                        py={'5'}
                        shadow={'xl'}
                        border={'1px solid'}
                        //   borderColor={useColorModeValue('gray.800', 'gray.500')}
                        rounded={'lg'}
                    >
                        <StatLabel fontWeight={'medium'} isTruncated>
                            OUTER:
                        </StatLabel>
                        <OuterCategory
                            outerCategory={outerCategory}
                            setOuterCategory={setOuterCategory}
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
                        rounded={'lg'}
                    >
                        <StatLabel fontWeight={'medium'} isTruncated>
                            ONE PIECE:
                        </StatLabel>
                        <OnePieceCategory
                            onePieceCategory={onePieceCategory}
                            setonePieceCategory={setonePieceCategory}
                        />
                    </Stat>
                </Box>
            </SimpleGrid> */}

            {/* CLOTHES SWIPERS */}

            {lengthTopData && lengthTopData?.tShirt?.length > 0 ? (
                <>
                    <Tshirt />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total amount:{' '}
                        <strong>{lengthTopData?.tShirt?.length}</strong>
                    </Box>
                </>
            ) : null}

            {lengthTopData && lengthTopData?.sleeveless?.length > 0 ? (
                <>
                    <Sleeveless />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total amount:{' '}
                        <strong>{lengthTopData?.sleeveless?.length}</strong>
                    </Box>
                </>
            ) : null}

            {lengthTopData && lengthTopData?.shirt?.length > 0 ? (
                <>
                    <Shirt />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total amount:{' '}
                        <strong>{lengthTopData?.shirt?.length}</strong>
                    </Box>
                </>
            ) : null}

            {lengthTopData && lengthTopData?.sweater?.length > 0 ? (
                <>
                    <Pullover />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total amount:{' '}
                        <strong>{lengthTopData?.sweater?.length}</strong>
                    </Box>
                </>
            ) : null}

            <hr />
            <br />

            {/* BOTTOM */}

            {lengthBottomData && lengthBottomData?.pants?.length > 0 ? (
                <>
                    <Pants />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total amount:{' '}
                        <strong>{lengthBottomData?.pants?.length}</strong>
                    </Box>
                </>
            ) : null}
            {lengthBottomData && lengthBottomData?.shorts?.length > 0 ? (
                <>
                    <Short />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total amount:{' '}
                        <strong>{lengthBottomData?.shorts?.length}</strong>
                    </Box>
                </>
            ) : null}

            {lengthBottomData && lengthBottomData?.skirt?.length > 0 ? (
                <>
                    <Skirt />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total amount:{' '}
                        <strong>{lengthBottomData?.skirt?.length}</strong>
                    </Box>
                </>
            ) : null}

            <hr />
            <br />

            {/* OUTER */}

            {lengthOuterData && lengthOuterData?.blazer?.length > 0 ? (
                <>
                    <Blazer />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total amount:{' '}
                        <strong>{lengthOuterData?.blazer?.length}</strong>
                    </Box>
                </>
            ) : null}

            {lengthOuterData && lengthOuterData?.cardigan?.length > 0 ? (
                <>
                    <Cardigans />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total amount:{' '}
                        <strong>{lengthOuterData?.cardigan?.length}</strong>
                    </Box>
                </>
            ) : null}

            {lengthOuterData && lengthOuterData?.coat?.length > 0 ? (
                <>
                    <Coat />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total amount:{' '}
                        <strong>{lengthOuterData?.coat?.length}</strong>
                    </Box>
                </>
            ) : null}

            {lengthOuterData && lengthOuterData?.jacket?.length > 0 ? (
                <>
                    <Jacket />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total amount:{' '}
                        <strong>{lengthOuterData?.jacket?.length}</strong>
                    </Box>
                </>
            ) : null}

            <hr />
            <br />

            {/* ONE PIECE */}

            {lengthOnePieceData && lengthOnePieceData?.dress?.length > 0 ? (
                <>
                    <Dress />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total amount:{' '}
                        <strong>{lengthOnePieceData?.dress?.length}</strong>
                    </Box>
                </>
            ) : null}

            {lengthOnePieceData && lengthOnePieceData?.swimwear?.length > 0 ? (
                <>
                    <Swimsuit />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total amount:{' '}
                        <strong>{lengthOnePieceData?.swimwear?.length}</strong>
                    </Box>
                </>
            ) : null}

            {lengthOnePieceData && lengthOnePieceData?.overall?.length > 0 ? (
                <>
                    <Overall />
                    <Box w="100%" p={4} color="black" textAlign="left">
                        Total amount:{' '}
                        <strong>{lengthOnePieceData?.overall?.length}</strong>
                    </Box>
                </>
            ) : null}

            <hr />
            <br />
        </>
    );
};

export default Statistic;
