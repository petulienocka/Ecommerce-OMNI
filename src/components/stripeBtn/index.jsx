import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import './style.scss';

const StripeBtn = () => {
    const publishableKey =
        'pk_live_51Jc7pWBoDrOG1vnlSxj7EhhQVsWlF2JyrV2bAuuOCVQRXRFAHyUeYE2LyU25tkILj3NViLBrQcFbJq9RmEZh1hcl00ktpWDSrb';

    const [price, setPrice] = useState(60);

    const onToken = (token) => {
        const body = {
            amount: price * 100,
            token: token,
        };

        axios
            // .post('localhost:9090/payment', body)
            .post('https://warm-river-70169.herokuapp.com/payment', body)
            .then((response) => {
                console.log(response);
                alert('Payment Success');
            })
            .catch((error) => {
                console.log('Payment Error: ', error);
                alert('Payment Error');
            });
    };

    return (
        <StripeCheckout
            label="Order" //Component button text
            name="OMNI" //Modal Header
            description="Deluxe Elevation Desk"
            // panelLabel="Send Order"
            amount={price * 100}
            // currency="DKK"
            token={onToken}
            stripeKey={publishableKey}
            image="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Common/omni-favicon.png" //Pop-in header image
            billingAddress
            shippingAddress
        />
    );
};

export default StripeBtn;
