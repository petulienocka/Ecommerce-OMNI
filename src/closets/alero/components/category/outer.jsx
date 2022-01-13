import React from 'react';

import { Button } from '@chakra-ui/react';

const OuterCategory = ({ setOuterCategory }) => {
    return (
        <div>
            <h1>OUTER:</h1>
            <Button onClick={() => setOuterCategory('Coat')}>Coat</Button>
            <Button onClick={() => setOuterCategory('Blazer')}>Blazer</Button>
            <Button onClick={() => setOuterCategory('Cardigans')}>
                Cardigans
            </Button>
            <Button onClick={() => setOuterCategory('Jacket')}>Jacket</Button>
        </div>
    );
};

export default OuterCategory;
