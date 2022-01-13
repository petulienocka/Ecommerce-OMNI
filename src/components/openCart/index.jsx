import React from 'react';
import Badge from '@material-ui/core/Badge';
import { Context } from '../../helpers/Context';

const OpenCart = () => {
    const [cartOpen, setCartOpen] = React.useState(false);

    return (
        <>
            <button onClick={() => setCartOpen(true)}>
                <Badge
                    // badgeContent={getTotalItems(cartItems)}
                    color="error"
                >
                    <img
                        alt="shopping-cart-icon"
                        src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/cart.svg"
                    ></img>
                </Badge>
            </button>
        </>
    );
};

export default OpenCart;
