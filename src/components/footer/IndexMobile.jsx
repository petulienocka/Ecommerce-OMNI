import React from 'react';
import './style.scss';
import SvgIcons from './SvgIcons';
import Container from 'react-bootstrap/Container';
import { useTranslation } from 'react-i18next';
import { i18n } from '../../helpers/i18n';
import { HashLink } from 'react-router-hash-link';
import ReactGA from 'react-ga';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react';

const IndexMobile = () => {
    const { t } = useTranslation();

    const ClickHandler = () => {
        ReactGA.event({
            category: 'Phone Number',
            action: 'Phone Number Clicked',
        });
    };

    const baseUrl = i18n.language === '' ? '' : '/' + i18n.language;
    return (
        <Container fluid className="footerWrapper">
            <div className="titlesWrapper">
                <h4
                    className="mainTitle"
                    style={{ color: 'black' }}
                >{t`footer.mainTitle`}</h4>
            </div>
            <hr style={{ backgroundColor: 'black' }} />
            <ul className="socialIconList">
                <SvgIcons />
            </ul>

            <Accordion className="mt-5" allowMultiple>
                <AccordionItem>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            <h4>{t`footer.browseSection.main`}</h4>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <hr style={{ backgroundColor: 'black' }} />
                    <AccordionPanel pb={4}>
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
                                    smooth
                                    href={baseUrl + '/contact'}
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {t`footer.browseSection.sub2`}
                                </a>
                            </li>
                        </ul>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            <h4>{t`footer.aboutSection.main`}</h4>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <hr style={{ backgroundColor: 'black' }} />
                    <AccordionPanel pb={4}>
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
                                    href={baseUrl + `company-accounts`}
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
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            <h4>{t`footer.helpSection.main`}</h4>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <hr style={{ backgroundColor: 'black' }} />
                    <AccordionPanel pb={4}>
                        <ul className="linkList">
                            <li className="link">
                                <a
                                    className="link"
                                    href={baseUrl + `/contact`}
                                >{t`footer.helpSection.sub1`}</a>
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
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <div className="mobile-address mt-3 mb-3 p-3">
                <p>
                    {' '}
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
                <br />
                <p>
                    <p>
                        <a
                            className="address-link"
                            href="tel:+45 50 38 95 96"
                            onClick={ClickHandler}
                        >
                            +45 50 38 95 96
                        </a>
                    </p>
                </p>
                <br />
                <p>
                    <a
                        className="address-link"
                        target="_blank"
                        rel="noreferrer"
                        href="https://g.page/OMNI-Copenhagen?share"
                    >{t`footer.address`}</a>
                </p>
                <br />
                <p className="address-link">
                    <strong>CVR:</strong> 30301248
                </p>
            </div>
        </Container>
    );
};

export default IndexMobile;
