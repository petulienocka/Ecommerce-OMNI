import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Closets = ({ closets, setSelectedClosets }) => {
    return (
        <>
            <SimpleGrid columns={[2, null, 3]} spacing="40px" mt="5rem">
                {closets &&
                    closets.map((closet) => (
                        <Link
                            to={`/closets/${closet.url}`}
                            onClick={() => setSelectedClosets(closet)}
                        >
                            <Box bg="tomato" height="80px">
                                <h1>{closet.name}</h1>
                            </Box>
                        </Link>
                    ))}
            </SimpleGrid>
        </>
    );
};

export default Closets;
