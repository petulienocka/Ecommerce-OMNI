import React from 'react';
import Row from 'react-bootstrap/Row';

const Products = ({ item }) => {
    return (
        <>
            <img src={item.image} alt="boheme-package" />
            <div id="overlay"></div>
            <div className="package-title">
                <Row>
                    <h1>{item.name}</h1>
                    <span>
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/arrow.svg"
                            alt="arrow"
                        ></img>
                    </span>
                </Row>
                <p className="mt-3 package-price">{item.price} kr/mo</p>
            </div>
        </>
    );
};

export default Products;
