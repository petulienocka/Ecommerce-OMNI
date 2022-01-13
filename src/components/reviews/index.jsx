import React, { useState } from 'react';
import { reviews } from '../../helpers/reviews';

import { Progress } from '@chakra-ui/react';
import { Row } from 'react-bootstrap';

const Reviews = () => {
    const [data, setData] = useState(reviews);
    return (
        <>
            {data.map((review) => {
                return (
                    <>
                        <p>{review.review}</p>
                        <br />
                        <Row
                            style={{
                                margin: 0,
                                alignItems: 'center',
                            }}
                        >
                            <Progress
                                value={review.rating}
                                size="xs"
                                colorScheme="gray"
                                width={'15vw'}
                            ></Progress>
                            <p style={{ paddingLeft: '0.5rem' }}>
                                {' '}
                                {review.stars}
                            </p>
                        </Row>
                        <br />
                    </>
                );
            })}
        </>
    );
};

export default Reviews;
