import React, { useState } from 'react';

import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    Button,
} from '@chakra-ui/react';

import './style.scss';
// import StripeBtn from '../../stripeBtn';

import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon,
    // FacebookMessengerShareButton,
    // FacebookMessengerIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'react-share';

const LandingForm = ({ handleAdd }) => {
    const avatars = [
        {
            name: 'Lake',
            url:
                'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/colors/aDesks+-+10.jpg',
        },
        // {
        //     name: 'Forrest',
        //     url:
        //         'https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/colors/aDesks+-+11.jpg',
        // },
    ];

    return (
        <>
            <Box position={'relative'} id="order">
                <Container
                    as={SimpleGrid}
                    maxW={'7xl'}
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 10, lg: 10 }}
                    py={{ base: 10, sm: 20, lg: 10 }}
                >
                    <Stack spacing={{ base: 10, md: 20 }}>
                        <Heading
                            lineHeight={1.1}
                            fontSize={{
                                base: '3xl',
                                sm: '4xl',
                                md: '5xl',
                                lg: '6xl',
                            }}
                        >
                            Elevate your work today!
                        </Heading>
                        <Text
                            color={'black'}
                            fontSize={{ base: 'sm', sm: 'md' }}
                        >
                            We spend, on average, 6.8 hours at our desk each
                            day, so we deserve an ergonomic setup that unites
                            quality, durability, and great design to make our
                            work day better.
                            <Text
                                color={'black'}
                                fontSize={{ base: 'sm', sm: 'md' }}
                            >
                                Composition matters. Linoleum is a natural
                                bio-based material that is highly durable,
                                non-toxic, anti-microbial, and easy to maintain.
                                We added a beautiful oak frame for a luxurious
                                look and a sleek cutout for your cables - and of
                                course the absolute best elevation system on the
                                market.
                            </Text>
                        </Text>

                        <Stack direction={'row'} spacing={4} align={'center'}>
                            {avatars.map((avatar) => (
                                <>
                                    <AvatarGroup>
                                        <>
                                            <Avatar
                                                className="zoom"
                                                key={avatar.name}
                                                name={avatar.name}
                                                src={avatar.url}
                                                // size={useBreakpointValue({
                                                //     base: 'md',
                                                //     md: 'lg',
                                                // })}
                                                position={'relative'}
                                                zIndex={2}
                                                _before={{
                                                    content: '""',
                                                    width: 'full',
                                                    height: 'full',
                                                    rounded: 'full',
                                                    transform: 'scale(1.125)',
                                                    bgGradient:
                                                        'linear(to-r, #e6e4e1,#f9f7f4)',
                                                    position: 'absolute',
                                                    zIndex: -1,
                                                    top: 0,
                                                    left: 0,
                                                }}
                                            ></Avatar>
                                        </>
                                    </AvatarGroup>
                                    <Text>{avatar.name} Color</Text>
                                </>
                            ))}
                        </Stack>
                    </Stack>
                    <Stack
                        bgColor={'#e6e4e1'}
                        rounded={'xl'}
                        p={{ base: 4, sm: 6, md: 8 }}
                        spacing={{ base: 8 }}
                        maxW={{ lg: 'lg' }}
                        shadow={'md'}
                    >
                        <Stack spacing={4}>
                            <Heading
                                color={'gray.800'}
                                lineHeight={1.1}
                                fontSize={{
                                    base: '2xl',
                                    sm: '3xl',
                                    md: '4xl',
                                }}
                            >
                                Order now!
                            </Heading>
                            <Text
                                color={'black'}
                                fontSize={{ base: 'sm', sm: 'md' }}
                            >
                                OMNI will split the cost of your desk upgrade!
                                We go into production, when we reach 100 orders,
                                so share this exclusive deal with friends &
                                family! You can expect your desk 4-6 weeks from
                                when we go into production.
                            </Text>
                        </Stack>
                        <Box mt={10}>
                            <a
                                onClick={handleAdd}
                                href="https://buy.stripe.com/00g9Ez3kX2I543S149"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button
                                    fontWeight={'light'}
                                    className="button button--webcoderskull button--border-thick button--text-medium"
                                >
                                    Order Now
                                </Button>
                            </a>
                            {/* <StripeBtn /> */}
                        </Box>
                        <Box mt={10}>
                            {/* <FacebookShareButton
                                url="https://www.theomnified.com/100familyfriends/"
                                quote={
                                    'To support employees, working from home in Denmark, OMNI will split the cost with you on the first 100 Deluxe Desks (reg. price 12.000kr)! Pay now and we go into production when we reach 100 orders. Share this exclusive deal with family & friends!'
                                }
                                hashtag={'#getOMNIfied'}
                            >
                                <FacebookIcon size="2.5rem" />
                            </FacebookShareButton> */}
                            <LinkedinShareButton
                                // className="ml-3"
                                url={
                                    'https://www.theomnified.com/100familyfriends/'
                                }
                                summary={
                                    'To support employees, working from home in Denmark, OMNI will split the cost with you on the first 100 Deluxe Desks (reg. price 12.000kr)! Pay now and we go into production when we reach 100 orders. Share this exclusive deal with family & friends!'
                                }
                                source={
                                    'https://www.theomnified.com/100familyfriends/'
                                }
                            >
                                <LinkedinIcon size="2.5rem" />
                            </LinkedinShareButton>
                            <EmailShareButton
                                className="ml-3"
                                subject="OMNI - The Deluxe Elevation Desk"
                                body="To support employees, working from home in Denmark, OMNI will split the cost with you on the first 100 Deluxe Desks (reg. price 12.000kr)! Pay now and we go into production when we reach 100 orders. Share this exclusive deal with family and friends!"
                                // separator
                                // body="https://www.theomnified.com/100familyfriends"
                            >
                                <EmailIcon size="2.5rem"></EmailIcon>
                            </EmailShareButton>

                            {/* <WhatsappShareButton
                                className="ml-3"
                                url={
                                    'https://www.theomnified.com/100familyfriends/'
                                }
                                title={
                                    'To support employees, working from home in Denmark, OMNI will split the cost with you on the first 100 Deluxe Desks (reg. price 12.000kr)! Pay now and we go into production when we reach 100 orders. Share this exclusive deal with family & friends!'
                                }
                            >
                                <WhatsappIcon size="2.5rem"></WhatsappIcon>
                            </WhatsappShareButton> */}
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default LandingForm;
