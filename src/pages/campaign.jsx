import React, { useEffect, useState } from 'react';

import LandingForm from '../components/landing/form';
import ProgressBarComponent from '../components/landing/progressBar';
import ProductCards from '../components/landing/productCards';
import LandingHero from '../components/landing/hero';

import DeskInfo from '../components/landing/information';

import { Helmet } from 'react-helmet';

import FeedbackCarousel from '../components/feedback';

const addOneLocalStorage = JSON.parse(localStorage.getItem('sold') || 0);

const Campaign = ({ products }) => {
    const [addOne, setAddOne] = useState(addOneLocalStorage);

    const handleAdd = () => {
        setAddOne(addOne + 2);
        localStorage.setItem('sold', addOne);
    };

    const currentDate = new Date(2021, 9, 7, 17, 31);
    console.log('today is:', currentDate);

    const numberOfDesks = 100;

    const dateNow = new Date();
    console.log('current date:', dateNow);

    const updateDate = 24 * 60 * 60;
    console.log('update every:', updateDate);

    const [desksLeft, setDesksLeft] = useState();

    console.log(
        'mapping through products',
        products.map((product) => {
            return product.name;
        })
    );

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="To support employees, working from home in Denmark, OMNI will split the cost with you on the first 100 Deluxe Desks (reg. price 12.000kr)! Pay now and we go into production when we reach 100 orders. Share this exclusive deal with family and friends!"
                ></meta>
                <meta name="title" content="First 100 for 6000kr"></meta>
                <meta
                    property="og:image"
                    content="https://theomnified-media.s3.eu-north-1.amazonaws.com/Products/Luxe.jpg"
                ></meta>
                <meta property="og:title" content="First 100 for 6000kr"></meta>
                <meta
                    property="og:description"
                    content="To support employees, working from home in Denmark, OMNI will split the cost with you on the first 100 Deluxe Desks (reg. price 12.000kr)! Pay now and we go into production when we reach 100 orders. Share this exclusive deal with family and friends!"
                ></meta>
                <meta
                    property="og:url"
                    content="https://www.theomnified.com/100familyfriends"
                ></meta>

                <title>
                    To support employees, working from home in Denmark, OMNI
                    will split the cost with you on the first 100 Deluxe Desks
                    (reg. price 12.000kr)! Pay now and we go into production
                    when we reach 100 orders. Share this exclusive deal with
                    family and friends!
                </title>
            </Helmet>
            <LandingHero />
            <DeskInfo />
            <ProgressBarComponent addOne={addOne} currentDate={currentDate} />
            <LandingForm handleAdd={handleAdd} />
            <FeedbackCarousel />
            {/* <LogoCarousel /> */}
            <ProductCards products={products} />
        </>
    );
};

export default Campaign;
