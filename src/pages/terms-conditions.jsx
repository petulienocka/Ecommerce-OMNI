import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Terms = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content={t`description.termsConditions`}
                ></meta>
                <meta name="title" content={t`titles.termsConditions`}></meta>
                <title>{t`titles.termsConditions`}</title>
            </Helmet>

            <div className="text-center" style={{ marginTop: '10rem' }}>
                <h1 style={{ color: 'black' }}>Terms and Conditions</h1>
            </div>

            <div className="section-1 pl-5 pr-5 mt-5">
                <h2>OMNI Furniture Terms and Conditions</h2>
                <p className="mt-3">
                    These terms and conditions for Paid Services (as defined
                    below) (these “Paid Services Terms & Conditions”) govern the
                    lease or purchase of furniture or other items from
                    omnioffice.co (“Property”) and services, such as a
                    subscription plan, delivery, installation, or pick-up,
                    (“Services”) by a lessee or purchaser of such Property or
                    Services (hereinafter referred to as “You” or “Your” from
                    OMNI IVS (“OMNI”, “we”, “our”, or “us”). Notwithstanding
                    anything to the contrary in these Paid Services Terms &
                    Conditions, if a furniture rental lease agreement (“Lease
                    Agreement”) or other written agreement is entered into and
                    signed by both parties covering the lease or purchase of the
                    Property or Services, the terms and conditions of such Lease
                    or written agreement will prevail to the extent such terms
                    and conditions are inconsistent with these Paid Services
                    Terms & Conditions.
                </p>
            </div>

            <div className="section-2 pl-5 pr-5 mt-5">
                <h2>Ordering Property or Services</h2>
                <p className="mt-3">
                    You may select Property and the related Services, if
                    applicable, on omnioffice.co. Your selections will be
                    detailed in an order confirmation email and/or on the final
                    page of Your Lease Agreement. Your commencement date and
                    initial lease term for the Lease of such Property will be
                    determined by You and OMNI prior to delivery.
                </p>
                <p>
                    In addition to selecting Property, the application to lease
                    such Property may involve several steps, including: (i)
                    providing certain personal details, such as your name, phone
                    number, and address; (ii) answering several optional
                    questions about yourself, such as your furniture budget and
                    furniture preferences; (iii) providing payment information
                    to our third-party payment processor (the “Payment
                    Processor”), such as a direct debit information for an
                    account with a financial institution or a credit card that
                    You provide (Your “Billing Account”) for the purpose of
                    future processing of any payments to us that you authorize,
                    including but not limited to furniture rental, purchases,
                    and related fees; (iv) electing to share certain personally
                    identifiable information with third party websites,
                    services, or applications for the purposes of running a
                    credit check; (v) a brief phone interview with one of our
                    team members; and (vi) entering into a Lease with OMNI, and
                    agreeing to pay the applicable fees.
                </p>
            </div>
            <div className="section-3 pl-5 pr-5 mt-5">
                <h2>Fees & Charges</h2>
                <p className="mt-3">
                    The applicable fees and charges for the Services are
                    provided during the Property ordering process and/or listed
                    in Your Lease Agreement, in addition to the fees detailed in
                    these Paid Services Terms and Conditions.
                </p>
            </div>

            <div className="section-4 pl-5 pr-5 mt-5">
                <h2>Total of Payments</h2>
                <p className="mt-3">
                    The estimated total amount of payments You will have paid by
                    the end of an initial lease term will be indicated in Your
                    Lease Agreement, subject to any additional fees and charges
                    described in these Paid Services Terms & Conditions or such
                    Lease. Subsequent updates to the estimated total may be
                    confirmed during the ordering process or via email for any
                    Property changes. The amount You will have paid by the end
                    of Your lease term will be dependent on the length of such
                    lease term and the Property included in the Lease during
                    such lease term.
                </p>
            </div>

            <div className="section-5 pl-5 pr-5 mt-5">
                <h2>Total of Payments</h2>
                <p className="mt-3">
                    You agree to pay all fees and expenses set forth in your
                    order confirmation and/or Your Lease Agreement in accordance
                    with these Paid Services Terms & Conditions. You acknowledge
                    and agree that any payment method and related billing and
                    payment information that You provide to OMNI may be shared
                    by OMNI with companies who work on OMNI's behalf, such as
                    OMNI's Payment Processor and/or credit agencies, solely for
                    the purposes of checking credit, processing payment to OMNI
                    and servicing Your Lease Agreement. The processing of
                    payments will be subject to the terms, conditions and
                    privacy policies of the Payment Processor in addition to
                    these Paid Services Terms & Conditions. OMNI is not
                    responsible for any error by the Payment Processor. You
                    agree to pay OMNI, through the Payment Processor, for all
                    amounts provided at the prices then in effect in accordance
                    with the applicable payment terms. You authorize OMNI,
                    through the Payment Processor, to charge Your chosen payment
                    provider and method (Your “Payment Method”). You agree to
                    make payment using that selected Payment Method.
                </p>
                <p>
                    The terms of Your payment will be based on Your Payment
                    Method and may be determined by agreements between You and
                    the financial institution, credit card issuer or other
                    provider of Your chosen Payment Method. If OMNI, through the
                    Payment Processor, does not receive payment from You, You
                    agree to pay all amounts due on Your Billing Account upon
                    demand, subject to any Late Payment Fees (defined below).
                </p>
                <p>
                    The payments under an applicable Lease Agreement consist of
                    the monthly payments and other applicable fees & charges
                    detailed in Your Lease Agreement and any additional fees or
                    charges communicated to You by OMNI. You accept
                    responsibility for all recurring charges prior to the
                    termination or expiration of Your Lease Agreement. OMNI may
                    submit the monthly rent charges without further
                    authorization from You.
                </p>
                <p>
                    The amount due for Your initial Property and Services is due
                    and payable on the commencement date listed on Your Lease
                    Agreement, and each subsequent monthly payment is due and
                    payable on each monthly anniversary of the initial delivery
                    date of such Property until the end of Your lease term,
                    unless otherwise specified or if You cancel or modify Your
                    Lease Agreement as described in such Lease Agreement. Note:
                    Rent and other fees and charges may be subject to sales and
                    use tax, which vary by locality.
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
            </div>

            <div className="section-6 pl-5 pr-5 mt-5">
                <h2>Late Payment Fees</h2>
                <p className="mt-3">
                    You will be charged a fee of 500kr (unless restricted by
                    law) for each month that Your monthly rent is not paid in
                    full with Your Payment Method by the monthly payment date
                    listed in Your Lease Agreement (“Late Payment Fee”).
                    Additionally, You will be subject to a monthly interest
                    charge of 1.5% or the maximum rate permitted by applicable
                    law, whichever is lower, on all balances that are more than
                    30 days past due. These fees and charges will be in addition
                    to all other remedies available to OMNI in the event You
                    fail to keep Your Billing Account current. Notwithstanding
                    the foregoing, OMNI reserves the right to unilaterally amend
                    the Late Payment Fee upon 60 days prior written notice to
                    You.
                </p>
            </div>

            <div className="section-7 pl-5 pr-5 mt-5">
                <h2>Taxes/VAT</h2>
                <p className="mt-3">
                    OMNI will deliver and pick-up the Property at the address
                    specified above and on the mutually agreed date confirmed
                    via electronic communications or phone call. You grant OMNI
                    permission to enter and access Your premises for the
                    purposes of delivering and assembly and picking up the
                    Property and will provide OMNI with all necessary or desired
                    assistance in connection with such access. You, or an adult
                    (at least 18 years of age) on your behalf, must be present
                    to sign for and acknowledge the delivery of any Property and
                    the condition of such Property once it is assembled (if
                    applicable) and placed in your office space or residence.
                    This signature confirms that you have received your Property
                    delivery from OMNI and have inspected and acknowledge the
                    condition of such Property upon delivery and assembly (if
                    applicable). OMNI will have no liability for damages
                    resulting from any delay in delivery or pick-up of the
                    Property or as a result of or in connection with the
                    delivery of such Property. The initial delivery and final
                    pickup will be provided at no cost. All other trips will be
                    provided for 995kr/trip.
                </p>
            </div>

            <div className="section-8 pl-5 pr-5 mt-5">
                <h2>Additional Delivery Fee</h2>
                <p className="mt-3">
                    If, through no fault of OMNI, an additional delivery must be
                    made, such as when there are additions, deletions, or
                    modifications to the Property, an additional delivery fee
                    will be due and charged to Your Payment Method. Additional
                    fees may apply, including but not limited to restocking,
                    rescheduling or cancellation fees. Visit our FAQ or contact
                    us for more information.
                </p>
            </div>

            <div className="section-9 pl-5 pr-5 mt-5">
                <h2>Property Additions, Returns, and Modifications</h2>
                <p className="mt-3">
                    After the initial delivery, any additions, returns, or
                    modifications to the Property will be confirmed in writing
                    between You and OMNI and will be subject to the terms and
                    conditions of these Paid Services Terms & Conditions or Your
                    Lease Agreement. Any such additions, returns, or
                    modifications may result in changes to Your monthly rent
                    and/or delivery or pick-up fees.
                </p>
            </div>

            <div className="section-10 pl-5 pr-5 mt-5">
                <h2>Early Termination / Cancellation</h2>
                <p className="mt-3">
                    Early termination of these Paid Services Terms & Conditions
                    or Your Lease Agreement before the 12-month minimum period
                    will result in forfeiting your 3 months deposit plus the
                    cost of pick-up of DKK 1995.
                </p>
            </div>

            <div className="section-11 pl-5 pr-5 mt-5">
                <h2>Termination, Returns, and Changing Products</h2>
                <p className="mt-3">
                    At the end of the initial lease term, one of the following
                    will occur: (a) You and OMNI can agree to renew the Lease
                    Agreement; (b) You may exchange the Products by contacting
                    Your Account Manager, however, such new Products may result
                    in changes to Your monthly rent and/or delivery or pick-up
                    fees or other applicable fees; (c) You may elect to purchase
                    the Products from OMNI in accordance with the applicable
                    terms and conditions based on Your Lease Agreement; or (d)
                    You may return the Products.
                </p>
            </div>

            <div className="section-12 pl-5 pr-5 mt-5">
                <h2>Contact and Communications</h2>
                <p className="mt-3">
                    You agree that OMNI, or its authorized third party service
                    providers on OMNI's behalf, may contact You using any
                    telephone number(s) that You have provided, or that You
                    provide in the future, or that is obtained from another
                    source, even if the number is for a mobile telephone and
                    using the number results in charges to You by Your mobile
                    service provider. You also agree that OMNI, or its
                    authorized third party service providers on OMNI's behalf,
                    may leave an auto dialed or prerecorded message or use other
                    technology to make contact with You. You further agree that
                    if You gave us a mobile phone number in your application, or
                    if You later provide or provided a mobile phone number, or
                    if a mobile phone number for You is obtained from another
                    source, we may contact You by text message on that mobile
                    phone regarding Your account, notwithstanding the fact that
                    there is a possibility that a third party may see the text
                    message to You. You represent that any mobile phone number
                    You have provided or will provide is Your mobile phone
                    number alone. You may cancel this consent by providing us
                    with notice in writing. We reserve the right to access,
                    read, preserve, record, and disclose any information or
                    communications via phone, email, or text message as we
                    reasonably believe is necessary to: satisfy any applicable
                    law, enforce these Terms, enforce the terms of Your Lease
                    Agreement, respond to user support requests; or protect our,
                    our users’ or the public’s rights, property or safety.
                </p>
            </div>

            <div className="section-13 pl-5 pr-5 mt-5">
                <h2>Responsibility for Maintaining the Property</h2>
                <p className="mt-3">
                    OMNI inspects the Property prior to delivery in a manner
                    designed to ensure that it is free of material defects or
                    infestation. You acknowledge and agree that You will inspect
                    the Property prior to taking possession and You will accept
                    delivery of the Property only after You determine that the
                    Property is in good condition. You are responsible for
                    maintaining the Property in good condition, subject to
                    ordinary wear and tear, and for any damage, loss, or
                    destruction to the Property while in Your possession.
                    Whether the Property is damaged, lost, or destroyed will be
                    determined in OMNI's sole and absolute discretion. In the
                    event of any damage, loss, or destruction to the Property,
                    OMNI will charge You its cost of replacing or repairing the
                    Property, including materials, parts and labor, plus any
                    applicable service fees. You will not remove any item of
                    Property from the delivery address without OMNI's prior
                    written approval. If You fail to return the Property as
                    required under these Paid Services Terms & Conditions or
                    Your Lease Agreement, You will be liable to OMNI for an
                    amount up to the retail price of the Property plus handling
                    fees, in addition to all other payments and fees due under
                    these Paid Services Terms & Conditions or Your Lease
                    Agreement.
                </p>
                <p>
                    You agree to indemnify and defend OMNI and its officers,
                    directors, employees and agents from any and all
                    liabilities, claims, suits, losses, damages, costs, and
                    expenses arising from any damage, loss, or destruction of
                    the Property, including but not limited to damage, loss, or
                    destruction due to a claim that the Property is infested
                    with insects or that insect infestation in the Property
                    caused personal injury, or any breach by You of this Lease
                    Agreement. You hereby unconditionally release and discharge
                    OMNI and its officers, directors, employees and agents (and
                    each of their successors and assigns) from any and all
                    claims, demands, or suits and any and all losses, damages,
                    rights, and actions of any kind, including personal
                    injuries, death, and real or personal property damage, that
                    is either directly or indirectly related to or arises from
                    Your use of the Property, including, but not limited to as a
                    result of insect infestation, personal injury caused by
                    insects, or other damage or personal injury caused by the
                    Property.{' '}
                </p>
            </div>

            <div className="section-14 pl-5 pr-5 mt-5">
                <h2>Disclaimer of Warranties</h2>
                <p className="mt-3">
                    OMNI is not the manufacturer of the Property provided under
                    these Paid Services Terms & Conditions or Your Lease
                    Agreement. The property is provided “as is”, “as available”
                    and with all faults. OMNI makes no warranty, expressed,
                    implied, or statutory, with regard to the property
                    including, but not limited to any implied warranties of
                    title, non-infringement, merchantability or fitness for a
                    particular purpose and any warranties implied by any course
                    of performance or usage of trade, all of which are expressly
                    disclaimed.
                </p>

                <h3 className="mt-3">NO ASSIGNMENT</h3>
                <p>
                    These Paid Services Terms & Conditions, and Your rights and
                    obligations under these Paid Services Terms & Conditions,
                    may not be assigned by You in whole or in part, and no
                    portion of the Property may be subleased to any third party,
                    in each case without the prior express written consent of
                    OMNI and any attempted assignment or sublease in violation
                    of the foregoing will be null and void. These Paid Services
                    Terms & Conditions, and any of OMNI's rights and obligations
                    under these Paid Services Terms & Conditions, including the
                    right to receive payments from You, may be freely assigned
                    by OMNI.
                </p>
            </div>

            <div className="section-15 pl-5 pr-5 mt-5">
                <h2>Title</h2>
                <p className="mt-3">
                    It is understood that this transaction is a lease and not a
                    conditional sale or financing agreement. Title and ownership
                    to the Property will remain with OMNI, and You will not
                    grant a security interest of any kind or dispose of any item
                    of Property. You must keep the Property free and clear of
                    all levies, attachments, liens, and encumbrances and must
                    not in any way impair OMNI's title in such Property. OMNI
                    has the right, but not the obligation, to file a financing
                    statement at any time to file notice of its ownership of the
                    Property.
                </p>
            </div>

            <div className="section-16 pl-5 pr-5 mt-5">
                <h2>Default</h2>
                <p className="mt-3">
                    OMNI may terminate these Paid Services Terms & Conditions or
                    Your Lease Agreement at any time and repossess the Property
                    without legal process, notice or demand if: (1) You violate
                    any of the terms or conditions of these Paid Services Terms
                    & Conditions or Your Lease Agreement and fail to cure such
                    violation within 15 days of receiving notice of the
                    violation; (2) You become insolvent or make any assignment
                    for the benefit of Your creditors; or (3) any proceeding is
                    instituted against You under bankruptcy or similar laws for
                    the relief of debtors or a receiver is appointed for any of
                    Your assets. Upon such termination, without notice or
                    demand, You will become immediately liable to OMNI for all
                    of Your obligations under these Paid Services Terms &
                    Conditions or Your Lease Agreement, the termination fee and
                    any costs, expenses and damages resulting from Your
                    violation of any terms or conditions of these Paid Services
                    Terms & Conditions or Your Lease Agreement, including but
                    not limited to costs related to costs incurred by OMNI due
                    to using a collection agency for any outstanding amounts.
                    You will also be liable for all costs, including reasonable
                    attorneys’ fees, which may be incurred by OMNI in enforcing
                    these Paid Services Terms & Conditions or Your Lease
                    Agreement.
                </p>
            </div>

            <div className="section-17 pl-5 pr-5 mt-5 mb-5">
                <h2>Limitation of Liability</h2>
                <p className="mt-3">
                    You understand and agree that in no event shall omni be
                    liable for any loss of profits, revenue or data, indirect,
                    incidental, special, or consequential damages arising out of
                    or in connection with the property whether or not OMNI has
                    been advised of the possibility of such damages, arising out
                    of or in connection with these paid services terms &
                    conditions, the property, or the services, on any theory of
                    liability, whether based on warranty, copyright, contract,
                    tort (including negligence), product liability, or any other
                    legal theory. OMNI’s liability to you for any damages
                    arising from or related to these paid services terms &
                    conditions (for any cause whatsoever and regardless of the
                    form of the action), will at all times be limited to the
                    greater of (a) the total fees paid by you to omni under
                    these paid services terms & conditions or your lease
                    agreement in the 12 months immediately preceding the event
                    giving rise to the claim, and (b) the remedy or penalty
                    imposed by the statute under which such claim arises. The
                    existence of more than one claim will not enlarge this
                    limit. You agree that OMNI’s suppliers will have no
                    liability of any kind arising from or relating to these paid
                    services terms & conditions or your lease agreement. The
                    foregoing limitations on liability shall not apply to the
                    liability of OMNI for (a) death or personal injury caused by
                    its negligence; or for (b) any injury caused by its fraud or
                    fraudulent misrepresentation.
                </p>
                <h3 className="mt-5">
                    DISPUTE RESOLUTION, ARBITRATION, AD CLASS ACTION WAIVER
                </h3>
                <p>
                    Unless otherwise stated in Your Lease Agreement or otherwise
                    in writing, OMNI's Furniture Terms of Use apply to these
                    Paid Services Terms & Conditions
                </p>
                <h3 className="mt-5">MISCELLANEOUS</h3>
                <p>
                    These Paid Services Terms & Conditions and any disputes
                    related to these Paid Services Terms & Conditions is
                    governed by and will be construed in accordance with Danish
                    Law, without regard to conflict of law provisions. Subject
                    to the binding arbitration provisions in the OMNI Furniture
                    Terms of Use or Your Lease Agreement, You agree the Courts
                    of Denmark will be the jurisdiction and legal venue for any
                    claim or dispute that has arisen or may arise from these
                    Paid Services Terms & Conditions, provided that OMNI
                    reserves the right, and You agree to OMNI's right, to bring
                    legal action in whatever jurisdiction from which the
                    Property was rented, whose laws, at the option of OMNI, will
                    govern these Paid Services Terms & Conditions. Any waiver or
                    failure to enforce any provision of these Paid Services
                    Terms & Conditions on one occasion will not be deemed a
                    waiver of any other provision or of such provision on any
                    other occasion. If any portion of these Paid Services Terms
                    & Conditions is held invalid or unenforceable, that portion
                    will be construed in a manner to reflect, as nearly as
                    possible, the original intention of the parties, and the
                    remaining portions will remain in full force and effect.
                    These Paid Services Terms & Conditions, together with any
                    other documents incorporated by reference (including but not
                    limited to Your order email confirmations), constitutes the
                    entire agreement between You and OMNI for the rental or
                    purchase of the Property, supersedes all prior agreements
                    between You and OMNI for the specified Property, whether
                    written or oral and any terms, and may be amended only by a
                    document signed by both parties.
                </p>
            </div>
        </>
    );
};

export default Terms;
