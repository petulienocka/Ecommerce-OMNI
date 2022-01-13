import React from 'react';
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

const Tip = () => {
    const { t } = useTranslation();
    return (
        <>
            <Flex
                w={'full'}
                h={'40vh'}
                backgroundImage={
                    'url(https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Index/IMG_0107.JPG)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
            >
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
                >
                    <Stack maxW={'3xl'} align={'flex-start'} spacing={6}>
                        <Text
                            color={'white'}
                            fontWeight={0}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({
                                base: '1xl',
                                md: '3xl',
                            })}
                        >
                            {t`tip.text`}
                        </Text>
                    </Stack>
                </VStack>
            </Flex>
        </>
    );
};

export default Tip;
