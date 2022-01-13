import React from 'react';
import { Row } from 'react-bootstrap';
import '../style.scss';

export default function Product(props) {
    const { product } = props;
    return (
        <>
            <img src={product.image} alt="boheme-package" />
            <div id="overlay"></div>
            <div className="package-title">
                <Row>
                    <h1>{product.name}</h1>
                    <span>
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/arrow.svg"
                            alt="arrow"
                        ></img>
                    </span>
                </Row>
                <p className="mt-3 package-price">{product.price} kr/mo</p>
            </div>
            {/* <img className="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={() => onAdd(product)}>Add To Cart</button>
            </div> */}
        </>
    );
}
