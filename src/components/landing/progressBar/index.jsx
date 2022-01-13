import React, { useState, useEffect } from 'react';

import { Container, Heading } from '@chakra-ui/react';

import ProgressBar from 'react-bootstrap/ProgressBar';
import './style.scss';

const ProgressBarComponent = ({ addOne, currentDate }) => {
    const [desksLeft, setDesksLeft] = useState();

    useEffect(() => {
        setDesksLeft(100 - addOne);
    }, [addOne]);

    // const initialDate = new Date(2021, 9, 6);
    // const now = Date.now();
    // const difference = now - initialDate;
    // const update = 24 * 60 * 60 * 1000;
    // const daySince = Math.floor(difference / update);

    // console.log('days since:', daySince);

    return (
        <>
            <Container
                maxW={'8xl'}
                py={'5rem'}
                bgColor={'#f9f7f4'}
                borderTop={'1px solid black'}
            >
                <Container maxW={'3xl'}>
                    <Heading fontSize={'3xl'}>
                        Desks left at this price: {desksLeft} / 100
                    </Heading>
                    <br />
                    <ProgressBar
                        animated
                        now={addOne}
                        min={0}
                        max={100}
                        label=""
                    />
                </Container>
            </Container>
        </>
    );
};

export default ProgressBarComponent;
