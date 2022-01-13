import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Company from './company';

import './main.scss';

const CompanyPaidPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content={t`description.companyPaid`}
                ></meta>
                <meta name="title" content={t`titles.companyPaid`}></meta>
                <title>{t`titles.companyPaid`}</title>
            </Helmet>
            <Company />
        </>
    );
};

export default CompanyPaidPage;
