import React from 'react';
import { Stack } from '@chakra-ui/react';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { GrCircleInformation } from 'react-icons/gr';

import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

import { FiChevronDown } from 'react-icons/fi';

const PlanSelection = ({
    setPlan,
    setPrice,
    setMonths,
    item,
    plan,
    months,
    selectedData,
}) => {
    function handleSubsribe() {
        setPlan('Subsribe Only');
        setPrice(item.price);
        setMonths('24+');
    }

    function handlePay() {
        setPlan('Pay to Own');
        setPrice(item.pay);
        setMonths('12-24');
    }

    function onSelect({ key }) {
        console.log(`${key} selected`);
    }

    function onVisibleChange(visible) {
        console.log(visible);
    }

    const menuSubsribe = () => (
        <Menu onSelect={onSelect}>
            <MenuItem
                key="0"
                onClick={() => {
                    setPrice(selectedData.sixMonth);
                    setMonths('6');
                }}
            >
                6 months
            </MenuItem>
            <MenuItem
                key="1"
                onClick={() => {
                    setPrice(selectedData.price);
                    setMonths('24+');
                }}
            >
                24+ months
            </MenuItem>
        </Menu>
    );

    const menuPay = () => (
        <Menu onSelect={onSelect}>
            <MenuItem
                key="2"
                onClick={() => {
                    setPrice(selectedData.pay);
                    setMonths('12-24');
                }}
            >
                12-24 months
            </MenuItem>
        </Menu>
    );
    return (
        <>
            <Stack direction={'row'} align={'center'}>
                <button
                    className="boheme-light"
                    onClick={handleSubsribe}
                    style={{
                        width: '100%',
                        backgroundColor:
                            plan === 'Subsribe Only' ? 'black' : '#e6e4e1',
                        color: plan === 'Subsribe Only' ? 'white' : 'black',
                        fontSize: '14px',
                    }}
                >
                    Subscribe Only
                </button>

                <button
                    className="boheme-black"
                    onClick={handlePay}
                    style={{
                        width: '100%',
                        backgroundColor:
                            plan === 'Pay to Own' ? 'black' : '#e6e4e1',
                        color: plan === 'Pay to Own' ? 'white' : 'black',
                        fontSize: '14px',
                    }}
                >
                    Pay to Own
                </button>
            </Stack>
            <Stack direction={'row'} align={'center'}>
                <p className="mr-2">Choose plan</p>

                {plan === 'Subsribe Only' && (
                    <Dropdown
                        trigger={['click']}
                        overlay={menuSubsribe}
                        animation="slide-up"
                        onVisibleChange={onVisibleChange}
                    >
                        <div
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            <p>
                                <strong>
                                    {months} months
                                    <FiChevronDown
                                        style={{
                                            display: 'inline-block',
                                        }}
                                    />
                                </strong>
                            </p>
                            <hr
                                style={{
                                    backgroundColor: 'black',
                                }}
                            />
                        </div>
                    </Dropdown>
                )}

                {plan === 'Pay to Own' && (
                    <Dropdown
                        trigger={['click']}
                        overlay={menuPay}
                        animation="slide-up"
                        onVisibleChange={onVisibleChange}
                    >
                        <div
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            <p>
                                <strong>
                                    {months} months
                                    <FiChevronDown
                                        style={{
                                            display: 'inline-block',
                                        }}
                                    />
                                </strong>
                            </p>
                            <hr
                                style={{
                                    backgroundColor: 'black',
                                }}
                            />
                        </div>
                    </Dropdown>
                )}
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id="button-tooltip-2">
                            {months === '6' ? (
                                <>*Requires 3 months deposit.</>
                            ) : null}
                            {months === '24+' ? (
                                <>
                                    *Prices are tax deductible and subject to
                                    yearly billing (great for gross pay or
                                    company-paid plans).
                                </>
                            ) : null}
                            {months === '12-24' ? (
                                <>
                                    *Pay 75kr/mo, and your monthly fee will go
                                    towards ownership.
                                </>
                            ) : null}
                        </Tooltip>
                    }
                >
                    {({ ref, ...triggerHandler }) => (
                        <button
                            {...triggerHandler}
                            className="d-inline-flex align-items-center"
                        >
                            <div ref={ref}>
                                <GrCircleInformation
                                    style={{
                                        fontSize: '10px',
                                    }}
                                />
                            </div>
                        </button>
                    )}
                </OverlayTrigger>
            </Stack>
        </>
    );
};

export default PlanSelection;
