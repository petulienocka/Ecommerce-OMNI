import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import SalaryDeduction from '../components/salaryDeduction';

import './main.scss';

const SalaryDeductionPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content={t`description.salaryDeduction`}
                ></meta>
                <meta name="title" content={t`titles.salaryDeduction`}></meta>
                <title>{t`titles.salaryDeduction`}</title>
            </Helmet>
            <SalaryDeduction />
        </>
    );
};

export default SalaryDeductionPage;
