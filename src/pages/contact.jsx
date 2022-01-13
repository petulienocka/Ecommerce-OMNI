import React, { useState } from 'react';
import { Box, Text, Grid, GridItem, VStack } from '@chakra-ui/react';

import HubspotFormComponent from '../components/hubspotForm';
import ScreenDetection from '../helpers/ScreenDetection';
import { useHistory } from 'react-router-dom';

// import { Redirect } from 'react-router-dom';
// import { i18n } from '../../helpers/i18n';

const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    const history = useHistory();

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && emailIsValid(email) && phone && company && message) {
            fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encode({
                    'form-name': 'landing-form',
                    name: name.trim(),
                    email: email,
                    phone: phone,
                    company: company,
                    message: message,
                }),
            })
                .then((res) => {
                    redirectAfterSubmission();
                })
                .catch((error) => alert(error));
        }
    };

    const redirectAfterSubmission = () => {
        setTimeout(() => {
            history.push('/thank-you');
        }, 1500);
    };

    const Mobile = () => {
        return (
            <>
                <VStack spacing={4} align="stretch" mt={'5rem'}>
                    <Box
                        h="auto"
                        p={'2rem'}
                        style={{
                            backgroundColor: '#f9f7f4',
                            borderBottom: '1px solid black',
                        }}
                    >
                        <Text
                            fontSize={{
                                base: '24px',
                                sm: '24px',
                                lg: '24px',
                            }}
                            color={'black'}
                            fontWeight={'normal'}
                        >
                            Contact Us
                        </Text>
                        <br />
                        <Text
                            fontSize={{
                                base: '16px',
                                sm: '16px',
                                lg: '16px',
                            }}
                            color={'black'}
                            fontWeight={'normal'}
                        >
                            OMNI’s furniture subscriptions are available in all
                            of Denmark, but we are expanding to more countries,
                            so contact us to find out if your area is next.
                        </Text>
                        <Text
                            fontSize={{
                                base: '16px',
                                sm: '16px',
                                lg: '16px',
                            }}
                            color={'black'}
                            fontWeight={'normal'}
                        >
                            Use the form or email us at info@theomnified.com. We
                            respond within the hour.
                        </Text>
                    </Box>

                    <Box h="auto" p={'2rem'}>
                        <div className="landing-form" id="contact">
                            <div className="contact-wrapper">
                                <div className="contact-form">
                                    <form
                                        className="myform"
                                        onSubmit={handleSubmit}
                                        data-netlify="true"
                                        name="contact"
                                        data-netlify-recaptcha="true"
                                        method="post"
                                    >
                                        <label for="fullname">Full Name</label>
                                        <input
                                            id="fullname"
                                            type="text"
                                            name="name"
                                            required
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        ></input>

                                        <label for="email">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        ></input>
                                        <label for="phone">Phone number</label>
                                        <input
                                            id="phone"
                                            type="number"
                                            name="phone"
                                            required
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                        ></input>
                                        <label for="company">Company URL</label>
                                        <input
                                            id="company"
                                            type="text"
                                            name="company"
                                            required
                                            value={company}
                                            onChange={(e) =>
                                                setCompany(e.target.value)
                                            }
                                        ></input>
                                        <label>Message</label>
                                        <textarea
                                            placeholder=""
                                            name="message"
                                            value={message}
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                        ></textarea>
                                        {/* <textarea
                                                hidden
                                                name="omni"
                                                value={myJSON}
                                            ></textarea> */}

                                        <div data-netlify-recaptcha="true"></div>
                                        <br />
                                        <button
                                            type="submit"
                                            style={{
                                                backgroundColor: 'black',
                                                color: 'white',
                                                padding: '0.5rem',
                                                width: '100%',
                                            }}
                                        >
                                            Send Your Order
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Box>
                </VStack>
            </>
        );
    };
    const size = ScreenDetection();
    if (size.width < 550) {
        return <Mobile />;
    }
    return (
        <>
            <Grid
                h="600px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(4, 1fr)"
                gap={4}
                mt="5rem"
                style={{ backgroundColor: '#f9f7f4' }}
                direction={{ base: 'column', sm: 'row' }}
            >
                <GridItem colSpan={2} p={'2rem'}>
                    <Text
                        fontSize={{
                            base: '48px',
                            sm: '48px',
                            lg: '48px',
                        }}
                        color={'black'}
                        fontWeight={'normal'}
                    >
                        Contact Us
                    </Text>
                    <br />
                    <br />
                    <Text
                        fontSize={{
                            base: '24px',
                            sm: '24px',
                            lg: '24px',
                        }}
                        color={'black'}
                        fontWeight={'normal'}
                    >
                        Let us help you get OMNIfied!
                    </Text>
                    <hr style={{ backgroundColor: 'black' }} />
                    <br />
                    <Text
                        fontSize={{
                            base: '16px',
                            sm: '16px',
                            lg: '16px',
                        }}
                        color={'black'}
                        fontWeight={'normal'}
                    >
                        OMNI’s furniture subscriptions are available in all of
                        Denmark, but we are expanding to more countries, so
                        contact us to find out if your area is next.
                    </Text>
                    <br />
                    <Text
                        fontSize={{
                            base: '16px',
                            sm: '16px',
                            lg: '16px',
                        }}
                        color={'black'}
                        fontWeight={'normal'}
                    >
                        {' '}
                        Use the form or email us at info@theomnified.com.
                        <br /> We respond within the hour.
                    </Text>
                </GridItem>
                <GridItem colSpan={2} p={'2rem'} mt={'10rem'}>
                    <hr style={{ backgroundColor: 'black' }} />
                    <br />
                    <HubspotFormComponent />
                </GridItem>
            </Grid>
        </>
    );
};

export default ContactUs;
