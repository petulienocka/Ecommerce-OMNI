import React from 'react';

import { Button } from '@chakra-ui/react';

const BottomCategory = ({ setBottomCategory }) => {
    return (
        <div>
            <h1>BOTTOM:</h1>

            <Button onClick={() => setBottomCategory('Pants')}>Pants</Button>
            <Button onClick={() => setBottomCategory('Short')}>Short</Button>
            <Button onClick={() => setBottomCategory('Skirt')}>Skirt</Button>
        </div>
    );
};

export default BottomCategory;
