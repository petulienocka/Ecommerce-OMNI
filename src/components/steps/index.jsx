import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';

import './style.scss';

const Steps = () => {
    const { t } = useTranslation();
    return (
        <>
            <section
                className="step-section"
                style={{
                    borderTop: '1px solid black',
                    borderBottom: '1px solid black',
                    backgroundColor: '#f9f7f4',
                }}
            >
                <Row>
                    <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <Card className="library-card">
                            <div id="step-bg">
                                <h1 className="background  mt-5"> 1</h1>
                                <div className="step-text">
                                    <h1>{t`steps.one.main`}</h1>
                                    <p>{t`steps.one.sub`}</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <Card className="library-card">
                            <div id="step-bg">
                                <h1 className="background  mt-5"> 2</h1>
                                <div className="step-text">
                                    <h1>{t`steps.two.main`}</h1>
                                    <p>{t`steps.two.sub`}</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <Card className="library-card">
                            <div id="step-bg">
                                <h1 className="background mt-5"> 3</h1>
                                <div className="step-text">
                                    <h1>{t`steps.three.main`}</h1>
                                    <p>{t`steps.three.sub`}</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                {/* <Row>
                    <Col md={4} className="step step-border">
                        <div id="step-bg">
                            <h1 className="background  mt-5"> 1</h1>
                            <div className="step-text">
                                <h1>{t`steps.one.main`}</h1>
                                <p>{t`steps.one.sub`}</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="step step-border">
                        <div id="step-bg">
                            <h1 className="background  mt-5"> 2</h1>
                            <div className="step-text">
                                <h1>{t`steps.two.main`}</h1>
                                <p>{t`steps.two.sub`}</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="step step-last">
                        <div id="step-bg">
                            <h1 className="background mt-5"> 3</h1>
                            <div className="step-text">
                                <h1>{t`steps.three.main`}</h1>
                                <p>{t`steps.three.sub`}</p>
                            </div>
                        </div>
                    </Col>
                </Row> */}
            </section>
        </>
    );
};

export default Steps;
