import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import '../../helpers/i18n.js';
import './style.scss';
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';

const DesktopContactForm = () => {
    const { t } = useTranslation();
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [question, setQuestion] = useState('');
    const [error, setError] = useState('');
    const [sendEmail, setSendEmail] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if ((email, name, phone, company, question)) {
            axios
                .post('https://api-beta.omnified.co/question/create', {
                    email,
                    name,
                    phone,
                    company,
                    question,
                })
                .then(function (response) {
                    setSendEmail(true);
                    console.log('Email is sent', { response });
                    // <Redirect to={'/obligation'}/>
                    // alert(
                    //     'Thank you for providing us your email. We will contact you soon as possible.'
                    // );

                    // window.location.reload();
                })
                .catch(function (error) {
                    if (error.response.status === 400) {
                        setError('Error');
                    } else setError('Server error');
                });
        } else {
            setError('Try again');
            console.log(error);
        }

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <h2
                data-aos="fade-right"
                className="mt-5 main-text"
                style={{
                    fontSize: '20px',
                    textAlign: 'center',
                    paddingRight: '30%',
                }}
            >{t`indexPage.contactForm.0.title`}</h2>
            <Container>
                <Form
                    method="post"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    className="mt-5"
                >
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationName">
                            <Form.Label>
                                {t`indexPage.contactForm.0.formNames.0.name`}*
                            </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="name"
                                placeholder=""
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationEmail">
                            <Form.Label>
                                {' '}
                                {t`indexPage.contactForm.0.formNames.0.email`}*
                            </Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="email"
                                    placeholder=""
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    name="email"
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide your email.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationPhone">
                            <Form.Label>
                                {' '}
                                {t`indexPage.contactForm.0.formNames.0.phone`}*
                            </Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="tel"
                                    placeholder=""
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    name="phone"
                                    onChange={(event) =>
                                        setPhone(event.target.value)
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide your phone number.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCompanyName"
                        >
                            <Form.Label>
                                {' '}
                                {t`indexPage.contactForm.0.formNames.0.company`}
                                *
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                name="company"
                                onChange={(event) =>
                                    setCompany(event.target.value)
                                }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide the company name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group
                            as={Col}
                            md="8"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>
                                {' '}
                                {t`indexPage.contactForm.0.formNames.0.other`}*
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="question"
                                onChange={(event) =>
                                    setQuestion(event.target.value)
                                }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please write us your questions or comments.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button
                        type="submit"
                        className="contactFormBtn mb-5"
                        onClick={handleSubmit}
                    >
                        {t`indexPage.contactForm.0.button`}
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default DesktopContactForm;
