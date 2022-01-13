import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content={t`description.privacyPolicy`}
                ></meta>
                <meta name="title" content={t`titles.privacyPolicy`}></meta>
                <title>{t`titles.privacyPolicy`}</title>
            </Helmet>

            <div className="text-center" style={{ marginTop: '10rem' }}>
                <h1 style={{ color: 'black' }}>Privacy Policy</h1>
            </div>

            <div className="section-1 pl-5 pr-5 mt-5">
                <h2>Introduction and Overview</h2>
                <p className="mt-3">
                    This Privacy Policy describes how OMNI (“Company,”
                    “we,”“our,” or “us”) collects, uses, and shares information
                    about you as well as your rights and choices about such use
                    and sharing, and applies to your use of any online service
                    location that posts a link to this Privacy Policy and all
                    features, content, and other services that we own, control,
                    and make available through such online service location
                    (collectively, the “Service”). This Privacy Policy does not
                    apply to our information collection activities outside of
                    the Service (unless otherwise stated below or at the time of
                    collection). By using the Service, you agree to our Terms &
                    Conditions and to our collection, use and disclosure
                    practices, and other activities as described in this Privacy
                    Policy. If you do not agree and consent, discontinue use of
                    the Service.
                </p>
                <p>
                    If you have any questions about our privacy practices,
                    please contact us as set forth in the section entitled
                    “Contact Us” below.
                </p>
            </div>

            <div className="section-2 pl-5 pr-5 mt-5">
                <h2>Information Collection</h2>
                <h3 className="mt-5">1. Information You Provide</h3>
                <p className="mt-3">
                    We collect information you provide directly via the Service,
                    such as when you register an account, update your profile,
                    access our content, make a purchase, or participate in a
                    promotion, contact customer support, or apply for a job. We
                    may use Service Providers (defined below) to collect this
                    information.
                </p>
                <p>
                    The information we collect includes information that
                    identifies you personally (whether alone or in combination).
                    Some examples of information we collect include the
                    following:
                </p>
                <li>
                    Contact Data. We collect your first and last name, e-mail
                    address, postal address, phone number, and other similar
                    contact data. This includes the address for the delivery of
                    any furniture or other products related to our services.
                </li>
                <li>
                    Payment Data. We collect data necessary to process your
                    payment if you make a purchase, such as your payment
                    instrument number (such as a credit card number), and the
                    security code associated with your payment instrument.
                </li>
                <li>
                    Content. We collect the content of messages you send to us,
                    such as feedback and product reviews you write, or questions
                    and information you provide to customer support. We also
                    collect the content of your communications as necessary to
                    provide you with the services you use.
                </li>
                <p className="mt-3">
                    You may choose to voluntarily submit other information to us
                    through the Service that we do not request, and, in such
                    instances, you are solely responsible for such information.
                </p>

                <h3 className="mt-5">2. Information Collected Automatically</h3>
                <p className="mt-3">
                    We automatically collect information about your device and
                    how your device interacts with our Service. We may use
                    Service Providers to collect this information. Some examples
                    of information we collect include the following:
                </p>

                <li>
                    Service Use Data. We collect data about the features you
                    use, the pages you visit, the e-mails and advertisements you
                    view, the products you purchase, the time of day you browse,
                    your referring and exiting pages, and other similar
                    information.
                </li>
                <li>
                    Device Connectivity and Configuration Data. We collect data
                    about the type of device or browser you use, your device’s
                    operating software, your internet service provider, your
                    device’s regional and language settings, and other similar
                    information. This data also includes IP address, MAC
                    address, device advertising Id (e.g., IDFA or AAID), and
                    other device identifiers.
                </li>

                <p className="mt-3">
                    We use various current – and later – developed technologies
                    to collect this information (“Tracking Technologies”),
                    including the following:
                </p>
                <li>
                    Log Files. A log file is a file that records events that
                    occur in connection with your use of the Service, such as
                    your service use data.
                </li>
                <li>
                    Cookies. A cookie is a small data file stored on your device
                    that acts as a unique tag to identify your browser. We use
                    two types of cookies: session cookies and persistent
                    cookies. Session cookies make it easier for you to navigate
                    the Service and expire when you close your browser.
                    Persistent cookies help with personalizing your experience,
                    remembering your preferences, and supporting security
                    features. Additionally, persistent cookies allow us to bring
                    you advertising both on and off the Service. Persistent
                    cookies may remain on your device for extended periods of
                    time, and generally may be controlled through your browser
                    settings.
                </li>
                <li>
                    Advertising Technology. We may use certain advertising
                    analytics technology, like that provided by Google to
                    analyze your use of the Services or advertising that was
                    displayed to you.
                </li>
                <p>
                    Some information about your use of the Service and certain
                    Third Party Services (defined below) may be collected using
                    Tracking Technologies across time and services and used by
                    us and third parties for purposes such as to associate
                    different devices you use, and deliver relevant ads and/or
                    other content to you on the Service and certain Third Party
                    Services.
                </p>
                <h3 className="mt-5">3. Other Sources of Information</h3>
                <p>
                    We may receive information about you from credit check
                    vendors who we use to conduct such screenings. We will use
                    such information in accordance with this Privacy Policy.
                </p>
            </div>
            <div className="section-3 pl-5 pr-5 mt-5">
                <h2>Use of Information</h2>
                <p className="mt-3">
                    We use information about you for our legitimate interests,
                    including to:
                </p>
                <li>
                    Manage our Service, including your registration and online
                    or offline account.
                </li>
                <li>
                    Perform services requested by you, such as to respond to
                    your comments, questions, and requests, and provide customer
                    service.
                </li>
                <li>
                    Send you technical notices, updates, security alerts,
                    information regarding changes to our policies, and support
                    and administrative messages.
                </li>
                <li>
                    Prevent and address fraud, breach of policies or terms, and
                    threats or harm.
                </li>
                <li>
                    Determine your eligibility for furniture subscriptions,
                    including conducting credit checks and other screening
                    processes to the extent allowed under applicable laws.
                </li>
                <li>Monitor and analyse trends, usage, and activities.</li>
                <li>Conduct research, including focus groups and surveys.</li>
                <li>
                    Improve the Service or other Company websites, apps,
                    marketing efforts, products and services.
                </li>
                <p>
                    We may use information that does not identify you (including
                    information that has been de-identified) without obligation
                    to you except as prohibited by applicable law. For
                    information on your rights and choices regarding how we use
                    your information, please see the section entitled “Your
                    Rights and Choices” below.
                </p>
            </div>

            <div className="section-4 pl-5 pr-5 mt-5">
                <h2>Sharing of Information</h2>
                <p className="mt-3">
                    We share information about you as follows:
                </p>
                <li>
                    Service Providers. We may share your information with our
                    agents, vendors, and other service providers (collectively
                    "Service Providers") in connection with their work on our
                    behalf. Service Providers assist us with services such as
                    payment processing, credit checks, data analytics, marketing
                    and promotional services, Promotions, website hosting, and
                    technical support. Service Providers are prohibited from
                    using your information for any purpose other than to provide
                    this assistance, although we may permit them to use
                    aggregate information which does not identify you or
                    de-identified data for other purposes.
                </li>
                <li>
                    Affiliates. We may share your information with our related
                    entities including our parent and sister companies. For
                    example, we may share your information with our affiliates
                    for customer support, marketing, and technical operations.
                </li>
                <li>
                    Business Partners. We may share your information with our
                    business partners in connection with offering you co-branded
                    services, selling or distributing our products, or engaging
                    in joint marketing activities. For example, we may share
                    information about you with a retailer for purposes of
                    providing you with product support.
                </li>
                <li>
                    Third Parties. We may share your information with third
                    parties for purposes of facilitating your requests (such as
                    when you choose to share information with a social network
                    about your activities on the Service) and in connection with
                    tailoring advertisements, measuring and improving our
                    Service and advertising effectiveness, and enabling other
                    enhancements.
                </li>
                <li>
                    Merger or Acquisition. We may share your information in
                    connection with, or during negotiations of, any proposed or
                    actual merger, purchase, sale or any other type of
                    acquisition or business combination of all or any portion of
                    our assets, or transfer of all or a portion of our business
                    to another business.
                </li>
                <li>
                    Security and Compelled Disclosure. We may share your
                    information to comply with the law or other legal process,
                    and where required, in response to lawful requests by public
                    authorities, including to meet national security or law
                    enforcement requirements. We may also share your information
                    to protect the rights, property, life, health, security and
                    safety of us, the Service or any third party.
                </li>
                <li>
                    Consent. We may share your information for any other purpose
                    disclosed to you and with your consent.
                </li>
                <p>
                    Without limiting the foregoing, in our sole discretion, we
                    may share aggregated information which does not identify you
                    or de-identified information about you with third parties or
                    affiliates for any purpose except as prohibited by
                    applicable law. For information on your rights and choices
                    regarding how we share your information, please see the
                    section entitled “Your Rights and Choices” below.
                </p>
            </div>

            <div className="section-5 pl-5 pr-5 mt-5">
                <h2>Your Rights and Choices</h2>
                <h3 className="mt-5">
                    1. Review and Update of Account Information
                </h3>
                <p className="mt-3">
                    You may access, update, or remove certain account
                    information that you have voluntarily submitted to us
                    through the Service by sending an e-mail to the e-mail
                    address set forth in the section entitled “Contact Us”
                    below. We may require additional information from you to
                    allow us to confirm your identity. Please note that we will
                    retain and use your information as necessary to comply with
                    our legal obligations, resolve disputes, and enforce our
                    agreements. California residents have additional rights as
                    set forth in the sections entitled “Your California Privacy
                    Rights.”
                </p>
                <h3 className="mt-5">2. Tracking Technology Choices</h3>
                <p className="mt-3">
                    Cookies and Pixels. Most browsers accept cookies by default.
                    You can instruct your browser, by changing its settings, to
                    decline or delete cookies. If you use multiple browsers on
                    your device, you will need to instruct each browser
                    separately. Your ability to limit cookies is subject to your
                    browser settings and limitations.
                </p>
                <p>
                    Do Not Track. Your browser settings may allow you to
                    automatically transmit a “Do Not Track” signal to online
                    services you visit. Note, however, there is no industry
                    consensus as to what site and app operators should do with
                    regard to these signals. Accordingly, we do not monitor or
                    take action with respect to “Do Not Track” signals or other
                    mechanisms. For more information on “Do Not Track,” visit
                    allaboutdnt.com.
                </p>
                <p>
                    Please be aware that if you disable or remove Tracking
                    Technologies some parts of the Service may not function
                    correctly.
                </p>
                <p>
                    You must provide current, complete and accurate information
                    for Your Billing Account. You must promptly update all
                    information to keep Your Billing Account current, complete
                    and accurate (such as a change in billing address, credit
                    card number, or credit card expiration date), and You must
                    promptly notify OMNI or the Payment Processor if Your
                    Payment Method is cancelled or if You become aware of a
                    potential breach of security that may affect Your Billing
                    Account or payment. Such information can be changed by
                    calling OMNI's general line at +4550389596. If You fail to
                    provide any of the foregoing information, You agree that
                    OMNI may continue charging You under Your Billing Account
                    unless You have terminated these Paid Services Terms &
                    Conditions or Your Lease Agreement.
                </p>
                <h3 className="mt-5">3. Communications</h3>
                <p>
                    E-mails. You can opt-out of receiving promotional e-mails
                    from us at any time by following the instructions as
                    provided in e-mails to click on the unsubscribe link, or
                    e-mailing us at the e-mail address set forth in the section
                    entitled “Contact Us” below with the word UNSUBSCRIBE in the
                    subject field of the e-mail. Please note that you cannot
                    opt-out of non-promotional e-mails, such as those about your
                    account, transactions, servicing, or Company’s ongoing
                    business relations.
                </p>
            </div>

            <div className="section-6 pl-5 pr-5 mt-5">
                <h2>Data Security</h2>
                <p className="mt-3">
                    We implement and maintain reasonable administrative,
                    physical, and technical security safeguards to help protect
                    your information from loss, theft, misuse and unauthorized
                    access, disclosure, alteration and destruction.
                    Nevertheless, transmission via the internet is not
                    completely secure and we cannot guarantee the security of
                    your information.
                </p>
            </div>

            <div className="section-7 pl-5 pr-5 mt-5">
                <h2>Changes to this Privacy Policy</h2>
                <p className="mt-3">
                    We reserve the right to revise and reissue this Privacy
                    Policy at any time. Any changes will be effective
                    immediately upon posting of the revised Privacy Policy and
                    updating the “Effective Date” above. We will make reasonable
                    efforts to post and contact you for material changes to the
                    policy. Your continued use of our Service indicates your
                    consent to the Privacy Policy then posted. If the changes
                    are material, we may provide you additional notice to your
                    e-mail address.
                </p>
            </div>

            <div className="section-8 pl-5 pr-5 mt-5 mb-5">
                <h2>Contact Us</h2>
                <p className="mt-3">
                    If you have any questions or comments about this Privacy
                    Policy, our data practices, or our compliance with
                    applicable law, please contact us:
                </p>
                <p>By email: info@omnified.co</p>
            </div>
        </>
    );
};

export default Privacy;
