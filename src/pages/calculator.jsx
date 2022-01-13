import React from 'react';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/esm/Container';
import { useTranslation } from 'react-i18next';
import Calculator from '../components/calculator';
import { HashLink } from 'react-router-hash-link';

import './main.scss';

const CalculatorPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content={t`description.calculator`}
                ></meta>
                <meta name="title" content={t`titles.calculator`}></meta>
                <title>{t`titles.calculator`}</title>
            </Helmet>
            <Container
                fluid={true}
                style={{ marginTop: '10rem' }}
                id="calculator-section"
            >
                <h1>{t`titles.calculator`}</h1>
                <br />
                <p>{t`description.calculator`}</p>
                <br />
                <br />
                <div>
                    <HashLink smooth to="#calculator">
                        <div class="calc-arrow">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </HashLink>
                </div>
            </Container>
            <div style={{ marginTop: '10rem' }}>
                <Calculator />
            </div>
            <br />
            <br />
        </>
    );
};

export default CalculatorPage;
