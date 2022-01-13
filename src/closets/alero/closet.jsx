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
    Box,
    Button,
    CheckboxGroup,
    HStack,
    SimpleGrid,
} from '@chakra-ui/react';
import OuterCategory from './components/category/outer';
import Blazer from './components/outer/blazer';
import Coat from './components/outer/coat';
import Jacket from './components/outer/jacket';
import Cardigans from './components/outer/cardigans';
import Dress from './components/dress';
import Swimsuit from './components/swimsuit';
import { Checkbox } from '@material-ui/core';

const Closet = ({ items, setItems }) => {
    const [mainCategory, setMainCategory] = useState('regular');

    const [topCategory, setTopCategory] = useState('T-shirt');
    const [bottomCategory, setBottomCategory] = useState('Pants');
    const [outerCategory, setOuterCategory] = useState('Blazer');

    return (
        <>
            <div
                className="justify-content-center text-center"
                style={{ marginTop: '5rem' }}
            >
                <h1>MAIN:</h1>

                <Button onClick={() => setMainCategory('regular')}>
                    REGULAR
                </Button>
                <Button onClick={() => setMainCategory('dress')}>DRESS</Button>
                {/* <Button onClick={() => setMainCategory('one')}>
                    ONE PIECE
                </Button> */}
                <Button onClick={() => setMainCategory('swimwear')}>
                    SWIMWEAR
                </Button>
            </div>
            <hr />
            <SimpleGrid columns={[2, null, 3]} spacing="40px" mt={'5rem'}>
                <Box>
                    {' '}
                    <TopCategory
                        topCategory={topCategory}
                        setTopCategory={setTopCategory}
                    />
                </Box>
                <Box>
                    {' '}
                    <BottomCategory setBottomCategory={setBottomCategory} />
                </Box>
                <Box>
                    <OuterCategory setOuterCategory={setOuterCategory} />
                </Box>
            </SimpleGrid>

            {mainCategory === 'regular' ? (
                <>
                    {topCategory === 'T-shirt' ? (
                        <Tshirt items={items} />
                    ) : null}
                    {topCategory === 'Sleeveless' ? <Sleeveless /> : null}
                    {topCategory === 'Shirt' ? <Shirt /> : null}
                    {topCategory === 'Pullover' ? <Pullover /> : null}

                    {bottomCategory === 'Pants' ? <Pants /> : null}
                    {bottomCategory === 'Short' ? <Short /> : null}
                    {bottomCategory === 'Skirt' ? <Skirt /> : null}

                    {outerCategory === 'Blazer' ? <Blazer /> : null}
                    {outerCategory === 'Cardigans' ? <Cardigans /> : null}
                    {outerCategory === 'Coat' ? <Coat /> : null}
                    {outerCategory === 'Jacket' ? <Jacket /> : null}
                </>
            ) : null}

            {mainCategory === 'dress' ? (
                <>
                    <Dress items={items} />
                </>
            ) : null}

            {mainCategory === 'swimwear' ? (
                <>
                    <Swimsuit items={items} />
                </>
            ) : null}
        </>
    );
};

export default Closet;
