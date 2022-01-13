import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import useWindowScrollPosition from '@rehooks/window-scroll-position';
import { useTranslation } from 'react-i18next';

import './style.scss';

const FeedbackCarousel = () => {
    const [slide, setSlide] = useState(false);
    const changePosition = 1500;

    let position = useWindowScrollPosition();
    // console.log('this is the scroll position:', position);

    if (position.y > changePosition && !slide) {
        setSlide(true);
    }

    if (position.y <= changePosition && slide) {
        setSlide(false);
    }
    let autoSlide = slide ? 3000 : null;
    const { t } = useTranslation();
    return (
        <>
            <div id="feedback">
                <Carousel
                    autoPlay={false}
                    interval={autoSlide}
                    controls={true}
                    indicators={true}
                    slide={true}
                    touch={true}
                    keyboard={true}
                    style={{ borderTop: '1px solid black' }}
                    // fade
                >
                    <Carousel.Item style={{ backgroundColor: '#f9f7f4' }}>
                        <Carousel.Caption className="carousel-caption-desktop">
                            <h6>"{t`feedbackSlider.0.feedback1.0.message`}"</h6>
                            <p className="mt-5">
                                {t`feedbackSlider.0.feedback1.0.author`}
                            </p>
                            <p>
                                {' '}
                                <strong>{t`feedbackSlider.0.feedback1.0.company`}</strong>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundColor: '#f9f7f4' }}>
                        <Carousel.Caption className="carousel-caption-desktop">
                            <h6>"{t`feedbackSlider.0.feedback2.0.message`}"</h6>
                            <p className="mt-5">
                                {t`feedbackSlider.0.feedback2.0.author`}
                            </p>
                            <p>
                                <strong>{t`feedbackSlider.0.feedback2.0.company`}</strong>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundColor: '#f9f7f4' }}>
                        <Carousel.Caption className="carousel-caption-desktop">
                            <h6>"{t`feedbackSlider.0.feedback3.0.message`}"</h6>
                            <p className="mt-5">
                                {t`feedbackSlider.0.feedback3.0.author`}
                            </p>
                            <p>
                                <strong>{t`feedbackSlider.0.feedback3.0.company`}</strong>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundColor: '#f9f7f4' }}>
                        <Carousel.Caption className="carousel-caption-desktop">
                            <h6>"{t`feedbackSlider.0.feedback4.0.message`}"</h6>
                            <p className="mt-5">
                                {t`feedbackSlider.0.feedback4.0.author`}
                            </p>
                            <p>
                                <strong>{t`feedbackSlider.0.feedback4.0.company`}</strong>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundColor: '#f9f7f4' }}>
                        <Carousel.Caption className="carousel-caption-desktop">
                            <h6>"{t`feedbackSlider.0.feedback5.0.message`}"</h6>
                            <p className="mt-5">
                                {t`feedbackSlider.0.feedback5.0.author`}
                            </p>
                            <p>
                                <strong>{t`feedbackSlider.0.feedback5.0.company`}</strong>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundColor: '#f9f7f4' }}>
                        <Carousel.Caption className="carousel-caption-desktop">
                            <h6>"{t`feedbackSlider.0.feedback6.0.message`}"</h6>
                            <p className="mt-5">
                                {t`feedbackSlider.0.feedback6.0.author`}
                            </p>
                            <p>
                                <strong>{t`feedbackSlider.0.feedback6.0.company`}</strong>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundColor: '#f9f7f4' }}>
                        <Carousel.Caption className="carousel-caption-desktop">
                            <h6>"{t`feedbackSlider.0.feedback7.0.message`}"</h6>
                            <p className="mt-5">
                                {t`feedbackSlider.0.feedback7.0.author`}
                            </p>
                            <p>
                                <strong>{t`feedbackSlider.0.feedback7.0.company`}</strong>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundColor: '#f9f7f4' }}>
                        <Carousel.Caption className="carousel-caption-desktop">
                            <h6>"{t`feedbackSlider.0.feedback8.0.message`}"</h6>
                            <p className="mt-5">
                                {t`feedbackSlider.0.feedback8.0.author`}
                            </p>
                            <p>
                                <strong>{t`feedbackSlider.0.feedback8.0.company`}</strong>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundColor: '#f9f7f4' }}>
                        <Carousel.Caption className="carousel-caption-desktop">
                            <h6>"{t`feedbackSlider.0.feedback9.0.message`}"</h6>
                            <p className="mt-5">
                                {t`feedbackSlider.0.feedback9.0.author`}
                            </p>
                            <p>
                                <strong>{t`feedbackSlider.0.feedback9.0.company`}</strong>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundColor: '#f9f7f4' }}>
                        <Carousel.Caption className="carousel-caption-desktop">
                            <h6>{t`feedbackSlider.0.feedback10.0.message`}</h6>
                            <p className="mt-5">
                                {t`feedbackSlider.0.feedback10.0.author`}
                            </p>
                            <p>
                                <strong>{t`feedbackSlider.0.feedback10.0.company`}</strong>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default FeedbackCarousel;
