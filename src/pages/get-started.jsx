import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Steps from '../components/steps';
import { useTranslation } from 'react-i18next';

const GetStarted = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content={t`description.getStarted`}
                ></meta>
                <meta name="title" content={t`titles.getStarted`}></meta>
                <title>{t`titles.getStarted`}</title>
            </Helmet>
            <Container fluid style={{ marginTop: '5rem' }}>
                <Steps />
            </Container>
            <section id="title-section" style={{ textTransform: 'uppercase' }}>
                <h1>{t`packages.title`}</h1>
            </section>
        </>
    );
};

export default GetStarted;
