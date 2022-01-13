import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Page not found - 404"></meta>
                <meta name="title" content="Page not found - 404"></meta>
                <title>404 | Page not found</title>
            </Helmet>

            <div
                className="text-center"
                style={{ marginTop: '20rem', height: '800px' }}
            >
                <h3>404 page not found</h3>
            </div>
        </>
    );
};

export default NotFound;
