import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../style.scss';
import { Row, Col, Button } from 'react-bootstrap';
import { Box, HStack } from '@chakra-ui/react';

const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

export default function Cart(props) {
    const { cartItems, onAdd, onRemove, plan, months, myJSON } = props;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    // React.useEffect(() => {
    //     localStorage.setItem('cart', myJSON);
    // });

    console.log('myJSON from parent', myJSON);

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
                    omni: myJSON,
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

    return (
        <>
            <div className="cart">
                {cartItems.length === 0 ? (
                    <div className="justify-content-center text-center mt-5">
                        <p>Your shopping cart is empty.</p>
                        <br />
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Common/omni-favicon.png"
                            alt="logo"
                            width="50px"
                            style={{ display: 'initial' }}
                        ></img>
                        <br />
                        <br />
                        <p>
                            <a
                                href="/contact"
                                style={{
                                    textDecoration: 'underline',
                                    color: 'black',
                                }}
                            >
                                Contact us{' '}
                            </a>
                            if you have any questions.
                        </p>
                        <br />
                    </div>
                ) : null}

                {cartItems.map((item) => (
                    <>
                        <div
                            className="cart-items"
                            style={{ paddingBottom: '3rem' }}
                        >
                            <Row style={{ margin: 0 }}>
                                <Col sm={6} style={{ margin: 0 }}>
                                    <HStack spacing="0" className="mt-3">
                                        <Box>
                                            <img
                                                src={item.screenshot}
                                                alt={item.chair.name}
                                                width="100%"
                                            />
                                        </Box>
                                        {/* <Box w="100px">
                                            <img
                                                src={
                                                    item.desk.colors[
                                                        item.desk[
                                                            'selected'
                                                        ].toLowerCase()
                                                    ]
                                                        ? item.desk.colors[
                                                              item.desk[
                                                                  'selected'
                                                              ].toLowerCase()
                                                          ].image
                                                        : null
                                                }
                                                alt={item.desk.name}
                                                width="100%"
                                            />
                                        </Box> */}
                                    </HStack>
                                </Col>

                                <Col sm={6} style={{ margin: 0 }}>
                                    <h1
                                        style={{
                                            color: 'black',
                                            fontSize: '18px',
                                        }}
                                    >
                                        <strong>
                                            {item.qty} x {item.name} Package
                                        </strong>
                                    </h1>
                                    <br />
                                    <p
                                        style={{
                                            color: 'black',
                                            fontSize: '12px',
                                        }}
                                    >
                                        Chair color: {item.chair.selected}
                                    </p>
                                    <p
                                        style={{
                                            color: 'black',
                                            fontSize: '12px',
                                        }}
                                    >
                                        Desk color: {item.desk.selected}
                                    </p>
                                    <br />
                                    <div className="buttons">
                                        <Button
                                            style={{
                                                backgroundColor: 'transparent',
                                                color: 'black',
                                                border: 'none',
                                            }}
                                            onClick={() => onRemove(item)}
                                        >
                                            -
                                        </Button>
                                        <p>{item.qty}</p>
                                        <Button
                                            style={{
                                                backgroundColor: 'transparent',
                                                color: 'black',
                                                border: 'none',
                                            }}
                                            onClick={() => onAdd(item)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            <div className="mt-5">
                                <p>
                                    <strong>Chosen Plan: </strong> {plan},{' '}
                                    {months} months
                                </p>
                            </div>
                        </div>
                    </>
                ))}

                <div
                    className="landing-form"
                    id="landing-form"
                    style={{
                        padding: '3rem',
                        borderTop: '1px solid black',
                    }}
                >
                    <a href="#checkout">
                        <button
                            type="submit"
                            style={{
                                backgroundColor: 'black',
                                color: 'white',
                                padding: '0.5rem',
                                width: '100%',
                            }}
                        >
                            Checkout
                        </button>
                    </a>
                    <div className="contact-wrapper mt-5" id="checkout">
                        <div className="contact-form">
                            <form
                                className="myform"
                                onSubmit={handleSubmit}
                                data-netlify="true"
                                name="landing-form"
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
                                    onChange={(e) => setName(e.target.value)}
                                ></input>

                                <label for="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>

                                <label for="phone">Phone number</label>
                                <input
                                    id="phone"
                                    type="number"
                                    name="phone"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                ></input>

                                <label for="company">Company Name</label>
                                <input
                                    id="company"
                                    type="text"
                                    name="company"
                                    value={company}
                                    required
                                    onChange={(e) => setCompany(e.target.value)}
                                ></input>

                                <label>Comments</label>
                                <textarea
                                    placeholder=""
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <textarea
                                    hidden
                                    name="omni"
                                    value={myJSON}
                                ></textarea>

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

                {/* <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2> */}
                {/* <div className="go-to-cart">
                    <button
                        style={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '0.5rem',
                            width: '100%',
                        }}
                    >
                        <a href={baseUrl + '/cart'}>Go to the cart</a>
                    </button>
                </div> */}
            </div>
        </>
    );
}
