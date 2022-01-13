import React from 'react';

import { Button } from '@chakra-ui/react';

const TopCategory = ({ setTopCategory }) => {
    return (
        <div>
            <h1>TOP:</h1>
            <Button onClick={() => setTopCategory('Sleeveless')}>
                Sleeveless
            </Button>
            <Button onClick={() => setTopCategory('T-shirt')}>T-shirt</Button>
            <Button onClick={() => setTopCategory('Shirt')}>Shirt</Button>
            <Button onClick={() => setTopCategory('Pullover')}>Pullover</Button>
        </div>
    );
};

export default TopCategory;
