import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/esm/Container';
import { Helmet } from 'react-helmet';
import HubspotFormComponent from '../components/hubspotForm';

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
                <title>OMNI | GET STARTED</title>
            </Helmet>
            <Container style={{ paddingBottom: '5%' }}>
                <div
                    className="form-text-container text-center"
                    style={{ marginTop: '10rem' }}
                >
                    <h1
                        className="mt-5"
                        style={{ fontSize: '20px' }}
                    >{t`getStarted.title`}</h1>
                    <div className="mt-5">
                        <HubspotFormComponent />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default GetStarted;
