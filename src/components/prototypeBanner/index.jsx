import React from 'react';
import {
    Stack,
    Button,
    Text,
    VStack,
    Image,
    SimpleGrid,
} from '@chakra-ui/react';
import ScreenDetection from '../../helpers/ScreenDetection';

import { useTranslation } from 'react-i18next';
import IndexMobile from './indexMobile';
import { i18n } from '../../helpers/i18n';

const Banner = () => {
    const { t } = useTranslation();
    const size = ScreenDetection();
    const baseUrl = i18n.language === '' ? '' : '/' + i18n.language;

    if (size.width < 550) {
        return <IndexMobile />;
    }

    return (
        <>
            <div id="cta" style={{ paddingTop: '5rem' }}></div>
            <SimpleGrid
                columns={2}
                direction={{ base: 'column', md: 'row' }}
                spacingX="40px"
                spacingY="20px"
                w={'full'}
                h={'40vh'}
                backgroundColor={'#e6e4e1'}
                backgroundSize={'cover'}
                borderTop={'2px solid black'}
            >
                <VStack justify={'center'} px={{ base: 4, md: 8 }}>
                    <Stack maxW={'2xl'} spacing={6}>
                        <Text
                            color={'black'}
                            fontWeight={0}
                            lineHeight={1.2}
                            fontSize={{
                                base: '2xl',
                                md: '3xl',
                            }}
                        >
                            Company Accounts
                        </Text>
                        <a
                            className="hash-link"
                            href={baseUrl + '/company-accounts'}
                        >
                            <Button
                                fontWeight={'light'}
                                className="button button--webcoderskull button--border-thick button--text-medium"
                            >
                                {t`cta.one.button`}
                            </Button>
                        </a>
                    </Stack>
                </VStack>
                <VStack position={'relative'} pt={10}>
                    <Stack maxW={'3xl'} direction={'row'}>
                        <Image
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/Screen2.png"
                            alt="screen-1"
                            objectFit={'cover'}
                            objectPosition={'center'}
                            zIndex={'3'}
                            top={0}
                            w={'250px'}
                        />
                        <Image
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/Screen1.png"
                            alt="screen-2"
                            objectFit={'cover'}
                            objectPosition={'center'}
                            zIndex={'1'}
                            top={'20px'}
                            left={'100px'}
                            position={'absolute'}
                            w={'250px'}
                        />
                    </Stack>
                </VStack>
            </SimpleGrid>
        </>
    );
};

export default Banner;
