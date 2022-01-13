import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from '../components/footer';
import Spinner from '../components/spinner';
import Campaign from '../pages/campaign';
import Closets from '../pages/closets';
import Test from '../pages/test';
import Closet from '../closets/alero/closet';

import axios from 'axios';
import Alero from '../closets/alero/main';
import Natalie from '../closets/natalie/main';
import NatalieCloset from '../closets/natalie/closet';

const baseRouteUrl = '/:locale(da|en)?';

const IndexPage = lazy(() => import('../pages'));
const Faq = lazy(() => import('../pages/faq'));
const NotFound = lazy(() => import('../pages/not-found'));
const Terms = lazy(() => import('../pages/terms-conditions'));
const Privacy = lazy(() => import('../pages/privacy-policy'));
const ThankYou = lazy(() => import('../pages/thank-you'));
const Prototype = lazy(() => import('../pages/prototype'));
const ContactUs = lazy(() => import('../pages/contact'));

// const CalculatorPage = lazy(() => import('../pages/calculator'));
// const WhyOmni = lazy(() => import('../pages/why-omni'));
// const SalaryDeductionPage = lazy(() => import('../pages/salary-deduction'));
// const CompanyPaidPage = lazy(() => import('../pages/company-paid'));
// const BlogIndex = lazy(() => import('../pages/blogs/index'));

export default function Routes({
    selectedData,
    cartItems,
    onAdd,
    onRemove,
    setCartOpen,
    price,
    plan,
    months,
    products,
    setSelectedData,
    setShowSelectedData,
    showSelectedData,
    setPlan,
    setPrice,
    setMonths,
}) {
    const [items, setItems] = useState([]);

    const fetchData = () => {
        fetch('https://api.npoint.io/eb35d003cd0c1991c6aa')
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    React.useEffect(() => {
        fetchData();
    }, []);
    return (
        <Router>
            <Suspense fallback={<Spinner />}>
                <Switch>
                    <Route
                        exact
                        path={[
                            baseRouteUrl + '/',
                            baseRouteUrl + '/library/:slug',
                        ]}
                    >
                        <IndexPage
                            selectedData={selectedData}
                            onAdd={onAdd}
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
                    </Route>
                    <Route path={baseRouteUrl + '/company-accounts'}>
                        <Prototype
                            onAdd={onAdd}
                            onRemove={onRemove}
                            cartItems={cartItems}
                            setCartOpen={setCartOpen}
                        />
                    </Route>
                    <Route path={baseRouteUrl + '/100familyfriends'}>
                        <Campaign products={products} onAdd={onAdd} />
                    </Route>
                    {/* <Route exact path="/closets/">
                        <Closets
                            closets={closets}
                            setSelectedClosets={setSelectedClosets}
                        />
                    </Route>
                    <Route exact path="/closets/:url">
                        <Test
                            selectedClosets={selectedClosets}
                            setSelectedClosets={setSelectedClosets}
                        />
                    </Route> */}

                    {/* ALERO */}
                    <Route exact path="/welcome-alero">
                        <Alero items={items} setItems={setItems} />
                    </Route>
                    <Route exact path="/alero-closet">
                        <Closet items={items} setItems={setItems} />
                    </Route>
                    {/* *************** */}

                    {/* NATALIE*/}
                    <Route exact path="/welcome-natalie">
                        <Natalie items={items} setItems={setItems} />
                    </Route>
                    <Route exact path="/natalie-closet">
                        <NatalieCloset items={items} setItems={setItems} />
                    </Route>
                    {/* *************** */}

                    <Route path={baseRouteUrl + '/contact'}>
                        <ContactUs />
                    </Route>
                    <Route path={baseRouteUrl + '/thank-you'}>
                        <ThankYou />
                    </Route>

                    <Route path={baseRouteUrl + '/terms-conditions'}>
                        <Terms />
                    </Route>
                    <Route path={baseRouteUrl + '/privacy-policy'}>
                        <Privacy />
                    </Route>
                    <Route path={baseRouteUrl + '/faq'}>
                        <Faq />
                    </Route>
                    <Route path={baseRouteUrl + ''}>
                        <NotFound />
                    </Route>
                </Switch>
                {/* <Footer /> */}
            </Suspense>
        </Router>
    );
}
