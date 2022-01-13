import React, { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';

import { FiCoffee } from 'react-icons/fi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { VscPlug } from 'react-icons/vsc';
import { BsBuilding } from 'react-icons/bs';
import { BsPen } from 'react-icons/bs';
import { FaBroom } from 'react-icons/fa';

import { i18n } from '../../helpers/i18n';
// import Cookies from 'universal-cookie';

import './style.scss';

const Calculator = () => {
    const baseUrl = i18n.language === '' ? '' : '/' + i18n.language;

    const { t } = useTranslation();

    const [count, setCount] = useState(0);
    const [employees, setEmployees] = useState(0);
    const [employeeInvestment, setEmployeeInvestment] = useState(0);

    const [checkedCoffee, setCheckedCoffee] = useState(true);
    const [coffee, setCoffee] = useState(0);

    const [checkedLunch, setCheckedLunch] = useState(true);
    const [lunch, setLunch] = useState(0);

    const [checkedElectricity, setCheckedElectricity] = useState(true);
    const [electricity, setElectricity] = useState(0);

    const [checkedOfficeSpace, setCheckedOfficeSpace] = useState(true);
    const [officeSpace, setOfficeSpace] = useState(0);

    const [checkedOfficeUtilities, setCheckedOfficeUtilities] = useState(true);
    const [officeUtilities, setOfficeUtilities] = useState(0);

    const [checkedLastItem, setCheckedLastItem] = useState(true);
    const [lastItem, setLastItem] = useState(0);

    const [roiPercentage, setRoiPercentage] = useState(0);
    const [roiDKK, setRoiDKK] = useState(0);

    const [savings, setSavings] = useState(0);

    const handleRoi = (event) => {
        setRoiDKK(event.target.value);
        setRoiPercentage(event.target.value);
    };

    const [days, setDays] = useState('5');

    useEffect(() => {
        if (days === '5') {
            if (checkedCoffee) {
                setCoffee(employees * 40);
            } else {
                setCoffee(0);
            }
            if (checkedLunch) {
                setLunch(employees * 500);
            } else {
                setLunch(0);
            }
            if (checkedElectricity) {
                setElectricity(employees * 50);
            } else {
                setElectricity(0);
            }
            if (checkedOfficeSpace) {
                setOfficeSpace(employees * 1000);
            } else {
                setOfficeSpace(0);
            }
            if (checkedOfficeUtilities) {
                setOfficeUtilities(employees * 25);
            } else {
                setOfficeUtilities(0);
            }
            if (checkedLastItem) {
                setLastItem(employees * 150);
            } else {
                setLastItem(0);
            }
            setSavings(
                coffee +
                    lunch +
                    electricity +
                    officeSpace +
                    officeUtilities +
                    lastItem
            );
        }
    }, [
        employees,
        employeeInvestment,
        officeSpace,
        checkedCoffee,
        checkedLunch,
        checkedElectricity,
        checkedOfficeSpace,
        checkedOfficeUtilities,
        checkedLastItem,
    ]);

    const handleDivision = () => {
        setDays('2-3');

        setCoffee(coffee / 2);
        setLunch(lunch / 2);
        setElectricity(electricity / 2);
        setOfficeUtilities(officeUtilities / 2);
        setLastItem(lastItem / 2);
        setSavings(savings / 2);
        setRoiDKK(savings / 2);
    };

    useEffect(() => {
        setEmployeeInvestment(count * employees);
        if (employees === 0) {
            setRoiPercentage(0);
        } else {
            setRoiPercentage(((roiDKK - count) / (savings * 2)) * 100);
        }

        console.log('my savings:', savings);
    }, [count, roiDKK, employees, savings]);

    const handleRevert = () => {
        setDays('5');
        if (checkedCoffee) {
            setCoffee(coffee * 2);
        }
        setLunch(lunch * 2);
        setElectricity(electricity * 2);
        setOfficeUtilities(officeUtilities * 2);
        setLastItem(lastItem * 2);
        setSavings(savings * 2);

        if (count === 0) {
            setRoiDKK(savings * 2);
        }
    };

    // CODE TO APPEND COOKIE VALUE DOWN BELOW

    // const cookies = new Cookies();

    // cookies.set('contribution', count);

    // const handleCount = (event) => {
    //     setCount(event.target.value);
    //     cookies.set('contribution', count);
    // };

    // function getCookie(name) {
    //     var re = new RegExp(name + '=([^;]+)');
    //     var value = re.exec(document.cookie);
    //     console.log(value);
    //     return value != null ? unescape(value[1]) : null;
    // }

    // const contribution = getCookie('contribution');

    // const cookies = new Cookies();

    const handleEmployees = (changeEvent) => {
        setEmployees(changeEvent.target.value);
        // cookies.set('employees', employees);
    };
    // function getCookie(name) {
    //     var re = new RegExp(name + '=([^;]+)'); // name + employees ??
    //     var value = re.exec(document.cookie);
    //     console.log(value);
    //     return value != null ? unescape(value[1]) : null;
    // }
    // const getEmployee = getCookie('employees', employees);
    // console.log('number of employees', getEmployee);

    useEffect(() => {
        let url = new URL(window.location);
        let params = new URLSearchParams(url.search);

        params.append('contribution', count);
        localStorage.setItem('contribution', count);

        params.append('employees', employees);
        localStorage.setItem('employees', employees);

        params.append('savings', savings);
        localStorage.setItem('savings', savings);

        window.history.replaceState(
            null,
            null,
            `${baseUrl}/calculator/` + params
        );
    }, [count, employees, savings, baseUrl]);

    const style = {
        color: 'black',
        width: '3rem',
        height: '3rem',
    };

    return (
        <>
            <Container
                fluid
                className="calculator"
                style={{ marginTop: '5rem' }}
                id="calculator"
            >
                <Row className="m-0">
                    <Col sm={6} className="calc-inputs">
                        <label htmlFor="basic-url">
                            {t`calculator.input2`}
                        </label>
                        <InputGroup className="mb-3">
                            <FormControl
                                type="number"
                                aria-label=""
                                onChange={handleEmployees}
                            />
                        </InputGroup>
                    </Col>
                    <Col sm={6} className="calc-inputs">
                        <p>
                            {t`calculator.input4`} {days}{' '}
                            {t`calculator.input4extra`}{' '}
                        </p>
                        <p
                            onChange={(changeEvent) =>
                                setSavings(changeEvent.target.value)
                            }
                        >
                            <strong>{savings}</strong>
                            <span className="float-right">{t`calculator.extra`}</span>
                        </p>
                    </Col>
                </Row>
                <div className="calculator-title">
                    {days === '5' && (
                        <button
                            onClick={() => {
                                handleDivision();
                            }}
                        >
                            GO 50% HYBRID
                            {/* <h1>{t`calculator.title`}</h1> */}
                        </button>
                    )}
                    {days === '2-3' && (
                        <button
                            onClick={() => {
                                handleRevert();
                            }}
                        >
                            GO BACK
                            {/* <h1>{t`calculator.title`}</h1> */}
                        </button>
                    )}
                </div>
                <Row className="m-0">
                    <Col sm={6} className="calc-inputs">
                        <label htmlFor="basic-url">
                            {t`calculator.input1`}
                        </label>
                        <InputGroup className="mb-3">
                            <FormControl
                                type="number"
                                aria-label=""
                                onChange={(event) =>
                                    setCount(event.target.value)
                                }
                            />
                        </InputGroup>
                    </Col>
                    <Col sm={6} className="calc-inputs">
                        <p>
                            {t`calculator.input3`} ({t`calculator.extra`})
                        </p>
                        <p
                            onChange={(event) =>
                                setEmployeeInvestment(event.target.value)
                            }
                        >
                            <strong>{employeeInvestment}</strong>
                            <span className="float-right">{t`calculator.extra`}</span>
                        </p>
                    </Col>
                </Row>
                <div className="roi text-center">
                    <h3 onChange={handleRoi} style={{ fontWeight: 'bold' }}>
                        {t`calculator.resultFirst`} {roiDKK} DKK{' '}
                        {t`calculator.resultSecond`} {Math.round(roiPercentage)}{' '}
                        %
                    </h3>
                </div>

                <div className="text-center items">
                    <Row>
                        <Col sm={4} className="calculator-col">
                            <h2>{t`calculator.coffee.title`}</h2>
                            <FiCoffee
                                className="calculator-icon"
                                style={style}
                            />
                            <h6>
                                <strong>{coffee} </strong>
                                {t`calculator.extra`}
                            </h6>
                            <div class="overlay">
                                <div class="text">
                                    {t`calculator.coffee.text`}
                                </div>
                                <div class="button">
                                    <Form.Check
                                        className="calc-check"
                                        type="checkbox"
                                        aria-label="coffee"
                                        label="Coffee"
                                        inline
                                        checked={checkedCoffee}
                                        value={coffee}
                                        onChange={(event) =>
                                            setCheckedCoffee(
                                                event.target.checked
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} className="calculator-col">
                            <h2>{t`calculator.lunch.title`}</h2>
                            <IoFastFoodOutline
                                className="calculator-icon"
                                style={style}
                            />
                            <h6>
                                {' '}
                                <strong>{lunch} </strong>
                                {t`calculator.extra`}
                            </h6>
                            <div class="overlay">
                                <div class="text">
                                    {t`calculator.lunch.text`}
                                </div>
                                <div class="button">
                                    <Form.Check
                                        aria-label="lunch"
                                        label="Lunch"
                                        inline
                                        checked={checkedLunch}
                                        value={lunch}
                                        onChange={(event) =>
                                            setCheckedLunch(
                                                event.target.checked
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} className="calculator-col">
                            <h2>{t`calculator.electricity.title`}</h2>
                            <VscPlug
                                className="calculator-icon"
                                style={style}
                            />
                            <h6>
                                <strong>{electricity} </strong>
                                {t`calculator.extra`}
                            </h6>
                            <div class="overlay">
                                <div class="text">
                                    {t`calculator.electricity.text`}
                                </div>
                                <div class="button">
                                    <Form.Check
                                        aria-label="electricity"
                                        label="Electricity"
                                        inline
                                        checked={checkedElectricity}
                                        value={electricity}
                                        onChange={(event) =>
                                            setCheckedElectricity(
                                                event.target.checked
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} className="calculator-col">
                            <h2>{t`calculator.officeRent.title`}</h2>
                            <BsBuilding
                                className="calculator-icon"
                                style={style}
                            />
                            <h6>
                                <strong>{officeSpace} </strong>
                                {t`calculator.extra`}
                            </h6>
                            <div class="overlay">
                                <div class="text">
                                    {t`calculator.officeRent.text`}
                                </div>
                                <div class="button">
                                    <Form.Check
                                        aria-label="officeSpace"
                                        label="Office Rent"
                                        inline
                                        checked={checkedOfficeSpace}
                                        value={officeSpace}
                                        onChange={(event) =>
                                            setCheckedOfficeSpace(
                                                event.target.checked
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} className="calculator-col">
                            <h2>{t`calculator.officeUtilities.title`}</h2>
                            <BsPen className="calculator-icon" style={style} />
                            <h6>
                                <strong>{officeUtilities} </strong>
                                {t`calculator.extra`}
                            </h6>
                            <div class="overlay">
                                <div class="text">
                                    {t`calculator.officeUtilities.text`}
                                </div>
                                <div class="button">
                                    <Form.Check
                                        aria-label="officeUtilities"
                                        label="Office Utilities"
                                        inline
                                        checked={checkedOfficeUtilities}
                                        value={officeUtilities}
                                        onChange={(event) =>
                                            setCheckedOfficeUtilities(
                                                event.target.checked
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} className="calculator-col">
                            <h2>{t`calculator.maintenance.title`}</h2>
                            <FaBroom
                                className="calculator-icon"
                                style={style}
                            />
                            <h6>
                                <strong>{lastItem} </strong>
                                {t`calculator.extra`}
                            </h6>
                            <div class="overlay">
                                <div class="text">
                                    {t`calculator.maintenance.text`}
                                </div>
                                <div class="button">
                                    <Form.Check
                                        aria-label="lastitem"
                                        label="Maintenance"
                                        inline
                                        checked={checkedLastItem}
                                        value={lastItem}
                                        onChange={(event) =>
                                            setCheckedLastItem(
                                                event.target.checked
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default Calculator;
