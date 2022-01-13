import React from 'react';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/esm/Container';
import InternalMenu from '../components/internalMenu';
import Questions from '../components/questions';
import { useTranslation } from 'react-i18next';

const Faq = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <meta name="description" content={t`description.faq`}></meta>
                <meta name="title" content={t`titles.faq`}></meta>
                <title>{t`titles.faq`}</title>
            </Helmet>

            <Container fluid={true}>
                <InternalMenu />
            </Container>
            <Container
                fluid={true}
                className="mt-5 pb-5"
                style={{ backgroundColor: '#E9E4DE' }}
            >
                <Questions />
            </Container>
            <br />
            <br />
        </>
    );
};

export default Faq;
