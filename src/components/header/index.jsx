import React, { useState } from 'react';

import { IoIosGlobe } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import Badge from '@material-ui/core/Badge';

import './style.scss';

import { i18n } from '../../helpers/i18n';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

import { HashLink } from 'react-router-hash-link';
// import useOutsideClick from '../../helpers/useOutsideClick';

const Header = (props) => {
    const { t } = useTranslation();
    const baseUrl = i18n.language === '' ? '' : '/' + i18n.language;
    const [isActive, setIsActive] = useState(false);

    // const ref = useRef();

    const navAnimation = () => {
        const navMenuItems = document.querySelectorAll('.nav-menu li');
        navMenuItems.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = '';
            } else {
                item.style.animation = `0.3s ease-in slideIn forwards ${
                    index * 0.1 + 0.3
                }s`;
            }
        });
    };

    const handleClick = () => {
        setIsActive(!isActive);
        navAnimation();
    };

    // useOutsideClick(ref, () => {
    //     if (isActive) setIsActive(false);
    // });

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);

    function generateUrlSwitch(lang) {
        const location = window.location.pathname;
        if (location.length > 3) {
            const actualPath = location.substr(4, location.length);
            const language = i18n.language === '' ? '' : '' + i18n.language;
            const updatedUrl = `/${language}/${actualPath}`;
            // console.log('this is the url path:', updatedUrl);
            return window.history.replaceState(null, language, updatedUrl);
            // pushState ^
        } else {
            return `/${lang}`;
        }
    }

    function onSelect({ key }) {
        console.log(`${key} selected`);
    }

    function onVisibleChange(visible) {
        console.log(visible);
    }
    const menuCallback = () => (
        <Menu onSelect={onSelect}>
            <MenuItem
                key="1"
                href={generateUrlSwitch('da/')}
                onClick={() => {
                    i18n.changeLanguage('da');
                }}
                rel="alternate"
                hreflang="da"
            >
                <img
                    src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Common/denmark.png"
                    width="25px"
                    alt="danish-flag"
                ></img>
            </MenuItem>
            <Divider />
            <MenuItem
                key="2"
                href={generateUrlSwitch('en/')}
                onClick={() => {
                    i18n.changeLanguage('en');
                }}
                rel="alternate"
                hreflang="en"
            >
                <img
                    src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Common/usa.png"
                    width="25px"
                    alt="american-flag"
                ></img>
            </MenuItem>
        </Menu>
    );

    const clickHandle = (event) => {
        event.preventDefault();
        props.setCartOpen(true);
    };

    return (
        <>
            {/* NAVBAR */}

            <nav
                style={{
                    backgroundColor: navbar ? 'white' : 'transparent',
                    position: 'fixed',
                    zIndex: '9',
                }}
            >
                <div className="logo">
                    <a href={baseUrl + '/'}>
                        <img
                            src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/Common/LogoBlack.png"
                            alt="logo"
                            width="150px"
                        ></img>
                    </a>
                </div>

                <ul className={isActive ? 'nav-menu open' : 'nav-menu'}>
                    <div className="links">
                        <li>
                            <HashLink
                                smooth
                                to={baseUrl + '#hero'}
                                style={{ color: 'black' }}
                            >
                                {t`menu.experience`}
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to={baseUrl + '#products'}
                                style={{ color: 'black' }}
                            >
                                {t`menu.furniture`}
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to={baseUrl + '#cta'}
                                style={{ color: 'black' }}
                            >
                                {t`menu.service`}
                            </HashLink>
                        </li>

                        <li>
                            <HashLink
                                smooth
                                to={baseUrl + '#about'}
                                style={{ color: 'black' }}
                            >
                                {t`menu.omni`}
                            </HashLink>
                        </li>
                    </div>
                    <div className="bottom-links">
                        <Dropdown
                            trigger={['hover']}
                            overlay={menuCallback}
                            animation="slide-up"
                            onVisibleChange={onVisibleChange}
                        >
                            <li className="globe-icon">
                                <span
                                    className="bottom-links__language"
                                    style={{ color: 'black' }}
                                >
                                    {t`menu.language`}
                                </span>

                                <IoIosGlobe />
                            </li>
                        </Dropdown>
                        <li>
                            {/* <button onClick={() => props.setCartOpen(true)}> */}
                            <Badge
                                badgeContent={props.countCartItems}
                                color="error"
                                onClick={clickHandle}
                            >
                                <img
                                    alt="shopping-cart-icon"
                                    src="https://theomnified-media.s3.eu-north-1.amazonaws.com/Images/SVGs/cart.svg"
                                ></img>
                            </Badge>
                            {/* </button> */}
                        </li>
                    </div>
                </ul>

                <div
                    className={isActive ? 'burger active' : 'burger'}
                    onClick={handleClick}
                >
                    <div className="top-line" />
                    <div className="middle-line" />
                    <div className="bottom-line" />
                </div>
            </nav>
        </>
    );
};

export default Header;
