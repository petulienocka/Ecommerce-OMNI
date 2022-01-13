import React from 'react';

import { Container, Box, Image, SimpleGrid } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

import ScreenDetection from '../../helpers/ScreenDetection';
import JournalMobile from './indexMobile';

const Journal = () => {
    const size = ScreenDetection();

    <Global
        styles={`
      @font-face {
        font-family: 'FlechaM-Regular';
        font-display: swap;
        src: url(../../assets/fonts/FlechaM/FlechaLRegular.otf) format('otf');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      @font-face {
        font-family: 'BwGradual-Regular', sans-serif;
        font-display: swap;
        src: url(../../assets/fonts/Gradual-Regular.otf) format('otf');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      `}
    />;

    const theme = extendTheme({
        fonts: {
            heading: 'FlechaM-Regular',
            body: 'BwGradual-Regular',
        },
    });

    if (size.width < 550) {
        return <JournalMobile />;
    }

    return (
        <>
            <ChakraProvider theme={theme}>
                <Container maxW={'8xl'}>
                    <SimpleGrid columns={[1, 2, 4]} spacing="5px">
                        <Box
                            position={'relative'}
                            height={'400px'}
                            rounded={'1xl'}
                            width={'100%'}
                            overflow={'hidden'}
                        >
                            <Image
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/1.jpg"
                            />
                        </Box>

                        <Box
                            position={'relative'}
                            height={'400px'}
                            rounded={'1xl'}
                            width={'100%'}
                            overflow={'hidden'}
                        >
                            <Image
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/2.jpg"
                            />
                        </Box>

                        <Box
                            position={'relative'}
                            height={'400px'}
                            rounded={'1xl'}
                            width={'100%'}
                            overflow={'hidden'}
                        >
                            <Image
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/3.jpg"
                            />
                        </Box>

                        <Box
                            position={'relative'}
                            height={'400px'}
                            rounded={'1xl'}
                            width={'100%'}
                            overflow={'hidden'}
                        >
                            <Image
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Journal/4.jpg"
                            />
                        </Box>
                    </SimpleGrid>
                </Container>
            </ChakraProvider>
        </>
    );
};

export default Journal;
