import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helmet from 'react-helmet';
import { i18n } from './helpers/i18n';
import Routes from './helpers/sitemap-routes';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';
import Drawer from '@material-ui/core/Drawer';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './App.scss';
import Cart from './shop/cart';
import Header from './components/header';

import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

ReactGA.initialize('UA-135640078-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const tagManagerArgs = {
    gtmId: 'GTM-NDRDX2W',
};
TagManager.initialize(tagManagerArgs);

const cartItemsfromLocalStorage = JSON.parse(
    localStorage.getItem('cart') || '[]'
);

function App() {
    window.dataLayer.push({
        event: 'pageview',
    });

    const stripe = loadStripe(
        'pk_test_51Jc7pWBoDrOG1vnlCx9ZZjtILkWbeoOSM93KGGlVtmbBS5NMeAd5EpdYSEJnKsoR1nDsuZDr177Bx7Fptff5PEgD00lfweqz3V'
    );

    const [products, setProducts] = useState([]);
    const [price, setPrice] = useState(200);
    const [plan, setPlan] = useState('Subsribe Only');
    const [months, setMonths] = useState('24+');
    const [selectedData, setSelectedData] = useState([]);
    const [showSelectedData, setShowSelectedData] = useState(false);

    const [cartOpen, setCartOpen] = useState(false);

    React.useEffect(() => {
        if (selectedData.id === 1) {
            setPrice(398);
        }
        if (selectedData.id === 2) {
            setPrice(448);
        }
        if (selectedData.id === 3) {
            setPrice(498);
        }
    }, [selectedData]);

    const fetchData = () => {
        fetch('https://api.npoint.io/5a5366bcd78b081553a4')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    React.useEffect(() => {
        fetchData();
    }, []);
    const [cartItems, setCartItems] = useState(cartItemsfromLocalStorage);

    var sendItem = cartItems.map((item) => [
        item.id,
        item.qty + ' x ' + item.name,
        plan,
        months,
    ]);

    const myJSON = JSON.stringify(sendItem, null, 4);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    });

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: i18n.language,
                    dir: i18n.dir(),
                }}
            />
            <Header
                countCartItems={cartItems.length}
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                setCartOpen={setCartOpen}
            />
            <div className="App">
                <Drawer
                    anchor="right"
                    open={cartOpen}
                    onClose={() => setCartOpen(false)}
                >
                    <Cart
                        cartItems={cartItems}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        price={price}
                        item={selectedData}
                        plan={plan}
                        months={months}
                        myJSON={myJSON}
                    ></Cart>
                </Drawer>
                <Elements stripe={stripe}>
                    <Routes
                        selectedData={selectedData}
                        cartItems={cartItems}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        setCartOpen={setCartOpen}
                        price={price}
                        plan={plan}
                        months={months}
                        products={products}
                        setSelectedData={setSelectedData}
                        setShowSelectedData={setShowSelectedData}
                        showSelectedData={showSelectedData}
                        setPlan={setPlan}
                        setPrice={setPrice}
                        setMonths={setMonths}
                    />
                </Elements>
            </div>
        </>
    );
}

export default App;
