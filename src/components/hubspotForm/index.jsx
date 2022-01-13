import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import '../../pages/main.scss';

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

const HubspotFormComponent = () => {
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
    return (
        <>
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
                            <Row>
                                <Col>
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
                                </Col>
                                <Col>
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
                                </Col>
                            </Row>
                            <Row>
                                <Col>
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
                                </Col>
                                <Col>
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
                                </Col>
                            </Row>

                            <label>Message</label>
                            <textarea
                                placeholder=""
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
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
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HubspotFormComponent;
