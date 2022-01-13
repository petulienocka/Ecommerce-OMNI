import React from 'react';
import { Grid, GridItem, Image, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const CTAMobile = () => {
    const { t } = useTranslation();

    return (
        <>
            <Grid
                h="auto"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
                pb={10}
            >
                <GridItem colSpan={5}>
                    <Image
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/cta1.jpg"
                        alt="cta"
                        objectFit={'cover'}
                        objectPosition={'top center'}
                        w={'100%'}
                    />
                </GridItem>
                <GridItem colSpan={5} p={5}>
                    <Heading fontSize={'3xl'}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            color={'black'}
                            fontWeight={'normal'}
                            _after={{
                                content: "''",
                                width: 'full',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                zIndex: -1,
                            }}
                        >
                            {t`cta.one.main`}
                        </Text>
                        <br />
                    </Heading>
                    <Text color={'black'}>{t`cta.one.subOne`}</Text>
                </GridItem>
                <GridItem colSpan={5}>
                    <Image
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/cta2.jpg"
                        alt="cta"
                        objectFit={'cover'}
                        objectPosition={'top center'}
                        w={'100%'}
                    />
                </GridItem>
                <GridItem colSpan={5} p={5}>
                    <Heading fontSize={'3xl'}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            color={'black'}
                            fontWeight={'normal'}
                            _after={{
                                content: "''",
                                width: 'full',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                zIndex: -1,
                            }}
                        >
                            {t`cta.two.main`}
                        </Text>
                        <br />
                    </Heading>
                    <Text color={'black'}>{t`cta.two.sub`}</Text>
                </GridItem>
                <GridItem colSpan={5}>
                    <Image
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/cta3.jpg"
                        alt="cta"
                        objectFit={'cover'}
                        objectPosition={'top center'}
                        w={'100%'}
                    />
                </GridItem>
                <GridItem colSpan={5} p={5}>
                    <Heading fontSize={'3xl'}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            color={'black'}
                            fontWeight={'normal'}
                            _after={{
                                content: "''",
                                width: 'full',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                zIndex: -1,
                            }}
                        >
                            {t`cta.three.main`}
                        </Text>
                        <br />
                    </Heading>
                    <Text color={'black'}>{t`cta.three.sub`}</Text>
                </GridItem>
            </Grid>
        </>
    );
};

export default CTAMobile;
