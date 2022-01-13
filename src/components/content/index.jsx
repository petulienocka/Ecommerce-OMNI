import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScreenDetection from '../../helpers/ScreenDetection';

import { useTranslation } from 'react-i18next';
import ContentMobile from './indexMobile';

import './style.scss';

const Content = () => {
    const { t } = useTranslation();
    const size = ScreenDetection();

    if (size.width < 550) {
        return <ContentMobile />;
    }
    return (
        <>
            <section
                id="content-section"
                style={{ backgroundColor: '#e6e4e1' }}
            >
                <Row>
                    <Col
                        sm={3}
                        className="step1"
                        style={{ borderRight: '1px solid black' }}
                    >
                        <h1>{t`content.one.main`}</h1>
                        <p>{t`content.one.sub`}</p>
                        {/* <Row className="inline ">
                            <button className="omni-button">
                                {t`content.one.button`}
                            </button>
                            <span className="ml-3">
                                <img src={Arrow} alt="icon" width="15px"></img>
                            </span>
                        </Row> */}
                    </Col>
                    <Col
                        sm={3}
                        className="step2"
                        style={{ borderRight: '1px solid black' }}
                    >
                        <h1>{t`content.two.main`}</h1>
                        <p>{t`content.two.sub`}</p>
                        {/* <Row className="inline mt-5">
                            <button className="omni-button">
                                {t`content.two.button`}{' '}
                            </button>
                            <span className="ml-3">
                                <img src={Arrow} alt="icon" width="15px"></img>
                            </span>
                        </Row> */}
                    </Col>
                    <Col
                        sm={3}
                        className="step3"
                        style={{ borderRight: '1px solid black' }}
                    >
                        <h1>{t`content.three.main`}</h1>
                        <p>{t`content.three.sub`}</p>
                        {/* <Row className="inline mt-5">
                            <button className="omni-button">
                                {t`content.three.button`}{' '}
                            </button>
                            <span className="ml-3">
                                <img src={Arrow} alt="icon" width="15px"></img>
                            </span>
                        </Row> */}
                    </Col>
                    <Col sm={3} className="step4">
                        <h1>{t`content.four.main`}</h1>
                        <p>{t`content.four.sub`}</p>
                        {/* <Row className="inline mt-3">
                            <button className="omni-button">
                                {t`content.four.button`}{' '}
                            </button>
                            <span className="ml-3">
                                <img src={Arrow} alt="icon" width="15px"></img>
                            </span>
                        </Row> */}
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default Content;
