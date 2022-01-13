import React from 'react';
import Sidebar from '../components/sidebar';

import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const WhyOmni = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content={t`description.whyOmni`}
                ></meta>
                <meta name="title" content={t`titles.whyOmni`}></meta>
                <title>{t`titles.whyOmni`}</title>
            </Helmet>
            <Sidebar />
            <br />
        </>
    );
};

export default WhyOmni;
