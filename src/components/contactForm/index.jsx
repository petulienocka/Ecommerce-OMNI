import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Collapse from 'react-bootstrap/Collapse';
import ButtonOpen from '../../assets/images/index/ButtonOpen.png';
import ButtonClose from '../../assets/images/index/ButtonClose.png';
import { useTranslation } from 'react-i18next';
import '../../helpers/i18n.js';
import './style.scss';

const ContactForm = () => {
    const { t } = useTranslation();
    const [validated, setValidated] = useState(false);
    const [open, setOpen] = useState(false);

    //const collapsed = { ButtonOpen, ButtonClose };
    const [selected, setSelected] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <Row>
                <Col sm={8}>
                    <h2
                        className="main-text"
                        style={{ fontSize: '20px' }}
                    >{t`indexPage.contactForm.0.title`}</h2>
                </Col>
                <Col sm={4} className="text-center mt-3">
                    <Button
                        className=" collapse-btn"
                        onClick={() => {
                            setOpen(!open);
                            setSelected((prevMode) => !prevMode);
                        }}
                        aria-controls="example-collapse-text"
                        aria-expanded={ButtonOpen}
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            outline: 'none',
                        }}
                    >
                        <img
                            src={selected ? ButtonClose : ButtonOpen}
                            alt="open-icon"
                            width="50px"
                        ></img>
                    </Button>
                </Col>
            </Row>
            <Collapse in={open}>
                <Form
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
                            <Form.Control required type="text" placeholder="" />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationEmail">
                            <Form.Label>
                                {t`indexPage.contactForm.0.formNames.0.email`}*
                            </Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="email"
                                    placeholder=""
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide your email.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationPhone">
                            <Form.Label>
                                {t`indexPage.contactForm.0.formNames.0.phone`}*
                            </Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="tel"
                                    placeholder=""
                                    aria-describedby="inputGroupPrepend"
                                    required
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
                                {t`indexPage.contactForm.0.formNames.0.company`}
                                *
                            </Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Form.Row>

                    {/* <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Form.Row> */}
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>
                            {t`indexPage.contactForm.0.formNames.0.other`}*
                        </Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button type="submit" className="contactFormBtn mb-5">
                        {t`indexPage.contactForm.0.button`}
                    </Button>
                </Form>
            </Collapse>
        </>
    );
};

export default ContactForm;
