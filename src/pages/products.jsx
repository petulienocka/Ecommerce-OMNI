import React from 'react';
import { Helmet } from 'react-helmet';

import { useTranslation } from 'react-i18next';

const ProductsPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content={t`description.products`}
                ></meta>
                <meta name="title" content={t`titles.products`}></meta>
                <title>{t`titles.products`}</title>
            </Helmet>
        </>
    );
};

export default ProductsPage;
