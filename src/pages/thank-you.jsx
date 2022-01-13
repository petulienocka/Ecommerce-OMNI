import React from 'react';
import { Container } from 'react-bootstrap';
import { i18n } from '../helpers/i18n';
import { useTranslation } from 'react-i18next';
import '../App.scss';

const ThankYou = () => {
    const { t } = useTranslation();
    const baseUrl = i18n.language === '' ? '' : '/' + i18n.language;
    return (
        <>
            <Container
                className="text-center"
                style={{ marginTop: '10%', display: 'inherit' }}
            >
                <div className="justify-content-center text-center">
                    <h1>{t`thankYou.main`}</h1>
                    <img
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Common/omni-favicon.png"
                        alt="logo"
                        width="100px"
                        style={{ display: 'initial' }}
                    ></img>
                </div>

                <div className="text-center mt-3 text-box">
                    <p>{t`thankYou.firstSection`}</p>
                    <br />
                    <p>{t`thankYou.secondSection`}</p>
                    <br />
                    <a href={baseUrl + '/'}>{t`thankYou.goBack`}</a>
                </div>
            </Container>
        </>
    );
};

export default ThankYou;
