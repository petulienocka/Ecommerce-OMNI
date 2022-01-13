import React from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-bootstrap/Carousel';

import './style.scss';

const ContentMobile = () => {
    const { t } = useTranslation();

    return (
        <>
            <Carousel
                autoPlay={true}
                controls={true}
                indicators={true}
                slide={true}
                touch={true}
                keyboard={true}
                fade
            >
                <Carousel.Item style={{ height: '300px' }}>
                    <Carousel.Caption className="carousel-caption-phone step1">
                        <h1>{t`content.one.main`}</h1>
                        <p>{t`content.one.sub`}</p>
                        {/* <Row className="inline mt-5">
                            <button className="omni-button">
                                {t`content.one.button`}
                            </button>
                            <span className="ml-3">
                                <img src={Arrow} alt="icon" width="15px"></img>
                            </span>
                        </Row> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: '300px' }}>
                    <Carousel.Caption className="carousel-caption-phone step2">
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
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: '300px' }}>
                    <Carousel.Caption className="carousel-caption-phone step3">
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
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: '300px' }}>
                    <Carousel.Caption className="carousel-caption-phone step4">
                        <h1>{t`content.four.main`}</h1>
                        <p>{t`content.four.sub`}</p>
                        {/* <Row className="inline mt-4">
                            <button className="omni-button">
                                {t`content.four.button`}{' '}
                            </button>
                            <span className="ml-3">
                                <img src={Arrow} alt="icon" width="15px"></img>
                            </span>
                        </Row> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};
export default ContentMobile;
