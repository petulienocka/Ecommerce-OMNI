import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import BohemeModel from './Boheme-3d';
import RebelModel from './Rebel-3d';
import DeluxeModel from './Deluxe-3d';

const Model3d = ({ model }) => {
    return (
        <>
            <Flex
                flex={1}
                justify={'center'}
                align={'center'}
                position={'relative'}
                w={'full'}
            >
                <div className="item-hints">
                    <div className="hint" data-position="4">
                        <span className="hint-radius"></span>
                        <span className="hint-dot"></span>
                        <div className="hint-content do--split-children">
                            <h1 style={{ color: 'black' }}>
                                {model.chair.name}
                            </h1>
                            <p>{model.chair.dimensions}</p>
                            <br />
                            <h1 style={{ color: 'black' }}>
                                {model.desk.name}
                            </h1>
                            <p>{model.desk.dimensions}</p>
                        </div>
                    </div>
                </div>
                <Box
                    position={'relative'}
                    height={'auto'}
                    rounded={'1xl'}
                    boxShadow={'none'}
                    width={'100%'}
                    overflow={'hidden'}
                >
                    {model.id === 1 ? (
                        <>
                            <BohemeModel />
                        </>
                    ) : null}
                    {model.id === 2 ? (
                        <>
                            <RebelModel />
                        </>
                    ) : null}
                    {model.id === 3 ? (
                        <>
                            <DeluxeModel />
                        </>
                    ) : null}
                </Box>
            </Flex>
        </>
    );
};

export default Model3d;
