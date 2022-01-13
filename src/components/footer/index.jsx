import React from 'react';
import IndexMobile from './IndexMobile';
import SvgIcons from './SvgIcons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import '../../helpers/i18n';
import ScreenDetection from '../../helpers/ScreenDetection';
import { i18n } from '../../helpers/i18n';
import { HashLink } from 'react-router-hash-link';

import './style.scss';

const Footer = () => {
    const { t } = useTranslation();
    const size = ScreenDetection();

    const baseUrl = i18n.language === '' ? '' : '/' + i18n.language;

    if (size.width < 1000) {
        return <IndexMobile />;
    }

    return (
        <Container fluid className="footerWrapper">
            <Row className="main">
                <Col>
                    <h4
                        className="mainFooterTitle"
                        style={{ color: 'black', textAlign: 'left' }}
                    >{t`footer.mainTitle`}</h4>
                </Col>
                <Col>
                    <ul className="socialIconList float-right">
                        <SvgIcons />
                    </ul>
                </Col>
            </Row>
            <Container fluid className="info container-fluid">
                <Row>
                    <Col className="titleAndSocialWrapper" lg={3}>
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/group.svg"
                            className="oval"
                            alt="favicon-oval"
                        ></img>
                    </Col>

                    <Col className="linksWrapper mt-5" lg={3}>
                        <h4 className="linkTitle">{t`footer.browseSection.main`}</h4>
                        <ul className="linkList">
                            <li className="link">
                                <HashLink
                                    smooth
                                    to={baseUrl + '#products'}
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {t`footer.browseSection.sub1`}
                                </HashLink>
                            </li>
                            <li className="link">
                                <a
                                    href={baseUrl + '/contact'}
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {t`footer.browseSection.sub2`}
                                </a>
                            </li>
                            {/* <li className="link">
                                <HashLink
                                    smooth
                                    to={baseUrl + '#products'}
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {t`footer.browse.0.linkText.1`}
                                </HashLink>
                            </li> */}
                        </ul>

                        <div
                            style={{
                                position: 'absolute',
                                bottom: '0',
                            }}
                        >
                            <p style={{ fontSize: '10px' }}>
                                <a
                                    className="address-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://g.page/OMNI-Copenhagen?share"
                                >{t`footer.address`}</a>
                            </p>
                            <p style={{ fontSize: '10px' }}>30301248</p>
                        </div>
                    </Col>
                    <Col className="linksWrapper mt-5" lg={3}>
                        <h4 className="linkTitle">{t`footer.aboutSection.main`}</h4>
                        <ul className="linkList">
                            <li className="link">
                                <HashLink
                                    smooth
                                    to={baseUrl + '#about'}
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {t`footer.aboutSection.sub1`}
                                </HashLink>
                            </li>
                            <li className="link">
                                <a
                                    className="link"
                                    href={baseUrl + `/company-accounts`}
                                >{t`footer.aboutSection.sub2`}</a>
                            </li>
                            {/* <li className="link">
                                <a
                                    className="link"
                                    style={{ pointerEvents: 'none' }}
                                    href="/"
                                >{t`footer.aboutSection.sub3`}</a>
                            </li> */}
                            <li className="link">
                                <a
                                    className="link"
                                    href={baseUrl + `/faq`}
                                >{t`footer.aboutSection.sub4`}</a>
                            </li>
                        </ul>
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '0',
                            }}
                        >
                            <p style={{ fontSize: '10px' }}>
                                <a
                                    className="address-link"
                                    href="tel:+45 50 38 95 96"
                                >
                                    {' '}
                                    +45 50 38 95 96
                                </a>
                            </p>
                        </div>
                    </Col>

                    <Col className="linksWrapper mt-5" lg={2}>
                        <h4 className="linkTitle">{t`footer.helpSection.main`}</h4>
                        <ul className="linkList">
                            <li className="link">
                                <a className="link" href={baseUrl + `/contact`}>
                                    {' '}
                                    {t`footer.helpSection.sub1`}
                                </a>
                            </li>
                            <li className="link">
                                <a
                                    className="link"
                                    href={baseUrl + `/terms-conditions`}
                                >{t`footer.helpSection.sub2`}</a>
                            </li>
                            <li className="link">
                                <a
                                    className="link"
                                    href={baseUrl + `/privacy-policy`}
                                >{t`footer.helpSection.sub3`}</a>
                            </li>
                        </ul>
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '0',
                            }}
                        >
                            <p style={{ fontSize: '10px' }}>
                                <a
                                    href="mailto: 
                                    info@omnified.co"
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    info@theomnified.com
                                </a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;

// desktop version
// <Col className='addressWrapper'></Col>
//                 <Col className='browseWrapper'></Col>
//                 <Col className='browseAbout'></Col>
//                 <Col className='browseContact'></Col>
