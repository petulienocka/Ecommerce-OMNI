import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import './style.scss';

const InternalMenu = () => {
    const { t } = useTranslation();
    return (
        <>
            <Row
                style={{ paddingTop: '10rem', display: 'flex' }}
                className="menu-row mr-0 ml-0"
            >
                <Col md={6} className="text-center mt-5 ">
                    <h1>{t`faq.maintitle`}</h1>
                </Col>
                <Col md={5} className="internal-menu mt-3  float-right ">
                    <h3>
                        <a href="#general">{t`faq.mainNav.one`}</a>
                    </h3>
                    <h3>
                        <a href="#delivery">{t`faq.mainNav.two`}</a>
                    </h3>
                    <h3>
                        <a href="#flexibility">{t`faq.mainNav.three`}</a>
                    </h3>
                    <h3>
                        <a href="#demage">{t`faq.mainNav.four`}</a>
                    </h3>
                    <h3>
                        <a href="#billing">{t`faq.mainNav.five`}</a>
                    </h3>
                    <h3>
                        <a href="#support">{t`faq.mainNav.six`}</a>
                    </h3>
                </Col>
            </Row>
        </>
    );
};

export default InternalMenu;
