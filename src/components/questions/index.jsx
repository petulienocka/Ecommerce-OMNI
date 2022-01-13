import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import './style.scss';
import Container from 'react-bootstrap/esm/Container';
import { useTranslation } from 'react-i18next';
import Plus from '../../assets/images/faq/plus-symbol.svg';
import X from '../../assets/images/faq/x-symbol.svg';

const Questions = () => {
    const { t } = useTranslation();

    const [selected01, setSelected01] = useState(false);
    const [selected02, setSelected02] = useState(false);
    const [selected03, setSelected03] = useState(false);
    const [selected04, setSelected04] = useState(false);
    const [selected05, setSelected05] = useState(false);
    const [selected06, setSelected06] = useState(false);
    const [selected07, setSelected07] = useState(false);
    const [selected08, setSelected08] = useState(false);
    const [selected09, setSelected09] = useState(false);
    const [selected10, setSelected10] = useState(false);
    const [selected11, setSelected11] = useState(false);
    const [selected12, setSelected12] = useState(false);
    const [selected13, setSelected13] = useState(false);
    const [selected14, setSelected14] = useState(false);
    const [selected15, setSelected15] = useState(false);
    const [selected16, setSelected16] = useState(false);
    const [selected17, setSelected17] = useState(false);
    const [selected18, setSelected18] = useState(false);
    const [selected19, setSelected19] = useState(false);
    const [selected20, setSelected20] = useState(false);
    const [selected21, setSelected21] = useState(false);
    const [selected22, setSelected22] = useState(false);
    const [selected23, setSelected23] = useState(false);
    const [selected24, setSelected24] = useState(false);
    const [selected25, setSelected25] = useState(false);
    const [selected26, setSelected26] = useState(false);
    const [selected27, setSelected27] = useState(false);
    const [selected28, setSelected28] = useState(false);
    const [selected29, setSelected29] = useState(false);
    const [selected30, setSelected30] = useState(false);
    const [selected31, setSelected31] = useState(false);
    const [selected32, setSelected32] = useState(false);
    const [selected33, setSelected33] = useState(false);
    const [selected34, setSelected34] = useState(false);
    const [selected35, setSelected35] = useState(false);

    return (
        <>
            <div id="general">
                <Container fluid="true" className="question-container">
                    <h2 className="pt-5">{t`faq.mainNav.one`}</h2>

                    <Accordion>
                        <Card
                            style={{ backgroundColor: 'transparent' }}
                            className="mt-3"
                        >
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="0"
                                    onClick={() => {
                                        setSelected01((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected01 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items.0.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>{t`faq.items.0.body1.0.text`}</p>{' '}
                                    <p>{t`faq.items.0.body1.1.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="1"
                                    onClick={() => {
                                        setSelected02((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected02 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items.1.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p>{t`faq.items.1.body1.0.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card
                            id="question3"
                            style={{ backgroundColor: 'transparent' }}
                        >
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="2"
                                    onClick={() => {
                                        setSelected03((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected03 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>

                                    <h3>{t`faq.items.2.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p>{t`faq.items.2.body1.0.text`}</p>{' '}
                                    <p>{t`faq.items.2.body1.1.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="3"
                                    onClick={() => {
                                        setSelected04((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected04 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items.3.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    {' '}
                                    <p>{t`faq.items.3.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="4"
                                    onClick={() => {
                                        setSelected05((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected05 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items.4.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <p>{t`faq.items.4.body1.0.text`}</p>{' '}
                                    <p>{t`faq.items.4.body1.1.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="5"
                                    onClick={() => {
                                        setSelected06((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected06 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items.5.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                    {' '}
                                    <p>{t`faq.items.5.body1.0.text`}</p>{' '}
                                    <p>{t`faq.items.5.body1.1.text`}</p>
                                    <p>{t`faq.items.5.body1.2.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="6"
                                    onClick={() => {
                                        setSelected07((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected07 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items.6.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                    {' '}
                                    <p>{t`faq.items.6.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="7"
                                    onClick={() => {
                                        setSelected08((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected08 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items.7.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="7">
                                <Card.Body>
                                    <p>{t`faq.items.7.body1.0.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="8"
                                    onClick={() => {
                                        setSelected09((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected09 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items.8.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="8">
                                <Card.Body>
                                    <p>{t`faq.items.8.body1.0.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="9"
                                    onClick={() => {
                                        setSelected10((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected10 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items.9.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="9">
                                <Card.Body>
                                    {' '}
                                    <p>{t`faq.items.9.body1.0.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="10"
                                    onClick={() => {
                                        setSelected11((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected11 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items.10.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="10">
                                <Card.Body>
                                    <p>{t`faq.items.10.body1.0.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="11"
                                    onClick={() => {
                                        setSelected12((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected12 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items.11.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="11">
                                <Card.Body>
                                    <p>{t`faq.items.11.body1.0.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
            </div>

            <div id="delivery" className="mt-5">
                <Container
                    className="question-container"
                    style={{ textAlign: 'left' }}
                    fluid="true"
                >
                    <h2>{t`faq.mainNav.two`}</h2>
                    <Accordion>
                        <Card
                            style={{ backgroundColor: 'transparent' }}
                            className="mt-3"
                        >
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="0"
                                    onClick={() => {
                                        setSelected13((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected13 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items2.0.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>{t`faq.items2.0.body1.0.text`}</p>{' '}
                                    <p>{t`faq.items2.0.body1.1.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="1"
                                    onClick={() => {
                                        setSelected14((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected14 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items2.1.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p>{t`faq.items2.1.body1.0.text`}</p>
                                    <p>{t`faq.items2.1.body1.1.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="2"
                                    onClick={() => {
                                        setSelected15((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected15 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items2.2.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p>{t`faq.items2.2.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="3"
                                    onClick={() => {
                                        setSelected16((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected16 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items2.3.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    {' '}
                                    <p>{t`faq.items2.3.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="4"
                                    onClick={() => {
                                        setSelected17((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected17 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items2.4.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <p>{t`faq.items2.4.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
            </div>

            <div id="flexibility" className="mt-5">
                <Container
                    className="question-container"
                    style={{ textAlign: 'left' }}
                    fluid="true"
                >
                    <h2>{t`faq.mainNav.three`}</h2>
                    <Accordion>
                        <Card
                            style={{ backgroundColor: 'transparent' }}
                            className="mt-3"
                        >
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="0"
                                    onClick={() => {
                                        setSelected18((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected18 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items3.0.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>{t`faq.items3.0.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="1"
                                    onClick={() => {
                                        setSelected19((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected19 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items3.1.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p>{t`faq.items3.1.body1.0.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="2"
                                    onClick={() => {
                                        setSelected20((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected20 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items3.2.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p>{t`faq.items3.2.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="3"
                                    onClick={() => {
                                        setSelected21((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected21 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items3.3.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    {' '}
                                    <p>{t`faq.items3.3.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="4"
                                    onClick={() => {
                                        setSelected22((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected22 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items3.4.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <p>{t`faq.items3.4.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="5"
                                    onClick={() => {
                                        setSelected23((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected23 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items3.5.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                    <p>{t`faq.items3.5.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="6"
                                    onClick={() => {
                                        setSelected24((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected24 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items3.6.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                    <p>{t`faq.items3.6.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
            </div>

            <div id="demage" className="mt-5">
                <Container
                    className="question-container"
                    style={{ textAlign: 'left' }}
                    fluid="true"
                >
                    <h2>{t`faq.mainNav.four`}</h2>
                    <Accordion>
                        <Card
                            style={{ backgroundColor: 'transparent' }}
                            className="mt-3"
                        >
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="0"
                                    onClick={() => {
                                        setSelected25((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected25 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items4.0.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>{t`faq.items4.0.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="1"
                                    onClick={() => {
                                        setSelected26((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected26 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items4.1.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p>{t`faq.items4.1.body1.0.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="2"
                                    onClick={() => {
                                        setSelected27((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected27 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items4.2.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p>{t`faq.items4.2.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
            </div>

            <div id="billing" className="mt-5">
                <Container
                    className="question-container"
                    style={{ textAlign: 'left' }}
                    fluid="true"
                >
                    <h2>{t`faq.mainNav.five`}</h2>
                    <Accordion>
                        <Card
                            style={{ backgroundColor: 'transparent' }}
                            className="mt-3"
                        >
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="0"
                                    onClick={() => {
                                        setSelected28((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected28 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items5.0.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>{t`faq.items5.0.body1.0.text`}</p>{' '}
                                    <p>{t`faq.items5.0.body1.1.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="1"
                                    onClick={() => {
                                        setSelected29((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected29 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items5.1.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p>{t`faq.items5.1.body1.0.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="2"
                                    onClick={() => {
                                        setSelected30((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected30 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items5.2.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p>{t`faq.items5.2.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
            </div>

            <div id="support" className="mt-5">
                <Container
                    className="question-container"
                    style={{ textAlign: 'left' }}
                    fluid="true"
                >
                    <h2>{t`faq.mainNav.six`}</h2>
                    <Accordion>
                        <Card
                            style={{ backgroundColor: 'transparent' }}
                            className="mt-3"
                        >
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="0"
                                    onClick={() => {
                                        setSelected31((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected31 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items6.0.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>{t`faq.items6.0.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="1"
                                    onClick={() => {
                                        setSelected32((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected32 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items6.1.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p>{t`faq.items6.1.body1.0.text`}</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="2"
                                    onClick={() => {
                                        setSelected33((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected33 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items6.2.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p>{t`faq.items6.2.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="3"
                                    onClick={() => {
                                        setSelected34((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected34 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items6.3.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <p>{t`faq.items6.3.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="4"
                                    onClick={() => {
                                        setSelected35((prevMode) => !prevMode);
                                    }}
                                >
                                    <img
                                        className="mr-3"
                                        src={selected35 ? X : Plus}
                                        alt="plus"
                                        width="20px"
                                    ></img>
                                    <h3>{t`faq.items6.4.title.0.text`}</h3>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <p>{t`faq.items6.4.body1.0.text`}</p>{' '}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
            </div>
        </>
    );
};

export default Questions;
