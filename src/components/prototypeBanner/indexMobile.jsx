import React from 'react';
import {
    Grid,
    GridItem,
    Text,
    Image,
    VStack,
    Stack,
    Button,
} from '@chakra-ui/react';
import { i18n } from '../../helpers/i18n';
import { useTranslation } from 'react-i18next';

import './style.scss';

const IndexMobile = () => {
    const { t } = useTranslation();

    const baseUrl = i18n.language === '' ? '' : '/' + i18n.language;
    return (
        <>
            <Grid
                id="cta"
                h="auto"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(5, 1fr)"
                backgroundColor={'#e6e4e1'}
                gap={4}
                pb={10}
                mb={10}
            >
                <GridItem colSpan={5} p={5}>
                    <Text
                        color={'black'}
                        fontWeight={0}
                        lineHeight={1.2}
                        fontSize={'2xl'}
                    >
                        {' '}
                        Company Accounts
                    </Text>
                </GridItem>
                <GridItem colSpan={5}>
                    <VStack position={'relative'}>
                        <Stack maxW={'3xl'} direction={'row'}>
                            <Image
                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/Screen1.png"
                                alt="screen-1"
                                objectFit={'cover'}
                                objectPosition={'center'}
                                zIndex={'3'}
                                top={0}
                                w={'200px'}
                            />
                            <Image
                                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/Screen2.png"
                                alt="screen-2"
                                objectFit={'cover'}
                                objectPosition={'center'}
                                zIndex={'1'}
                                top={'20px'}
                                left={'100px'}
                                position={'absolute'}
                                w={'200px'}
                            />
                        </Stack>
                    </VStack>
                    <Button
                        p={5}
                        m={5}
                        mt={10}
                        fontWeight={'light'}
                        className="button button--webcoderskull button--border-thick button--text-medium"
                    >
                        <a
                            className="hash-link"
                            href={baseUrl + '/company-accounts'}
                        >
                            {t`cta.one.button`}
                        </a>
                    </Button>
                </GridItem>
            </Grid>
        </>
    );
};

export default IndexMobile;
