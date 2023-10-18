// import libraries
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import assets
import hbackground from '../assets//backgrounds/header.webp';
import logo from '../assets/icons/logo.webp';
import flagbg from '../assets/backgrounds/flagbg.webp';
import flagfr from '../assets/icons/flag-fr.webp';
import flagen from '../assets/icons/flag-en.webp';
// import components
import HeaderParticles from './particles';
// import css
import '../styles/header.scss';

// Header with language param
const Header = ({ isEnglish, setEnglish }) => {

    // change button-flag bottom depending on footer distance
    useEffect(() => {
        const footerHeight = document.getElementById('footer').offsetHeight;
        const button = document.getElementById('button');

        const handleScroll = () => {
            const visibleWindowHeight = window.innerHeight + window.scrollY;
            const visibleFooterHeight = document.body.scrollHeight;

            if (visibleWindowHeight + 35 > visibleFooterHeight) {
                button.style.bottom = `${footerHeight + 20}px`;
            } else if (visibleWindowHeight > visibleFooterHeight - footerHeight) {
                button.style.bottom = '80px';
            } else {
                button.style.bottom = '50px';
            }
        };

            window.addEventListener('scroll', handleScroll);

            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
    }, []);
    // state to change active class
    const [isActive, setActive] = useState('logo');
    
    const toggleClass = (page) => {
        if (page === 'about') {
            setActive('about')
        } else if (page === 'ks') {
            setActive('ks')
        } else if (page === 'whowe') {
            setActive('whowe')
        } else {
            setActive('logo')
        }
    };
    // Translation language function
    const {i18n} = useTranslation();

    function handleLanguageChange() {
        if (isEnglish === 'fr') {
            setEnglish('en');
            i18n.changeLanguage('en');
            document.documentElement.lang = "en";
            document.querySelector('meta[name=description]').setAttribute('content', "HS3 project presentation page");
        } else {
            setEnglish('fr');
            i18n.changeLanguage('fr');
            document.documentElement.lang = "fr";
            document.querySelector('meta[name=description]').setAttribute('content', "Page de présentation du projet HS3");
        }
    };

    const {t} = useTranslation();   

    return (
        <header className="header-component">
            <HeaderParticles />
            {/* background image */}
            <img src={hbackground} alt={t('header-title.alt.headerbg')} className='header-background' />
            <NavLink to='/' onClick={() => toggleClass('logo')} className={isActive === 'logo'? 'header-links active-header' : 'header-links'}>
                {/* logo hs3 */}
                <img src={logo} alt={t('header-title.alt.logo')} className='links-logo' />
            </NavLink>
            {/* navigation menu */}
            <nav className='header-nav'>
                <ul>
                    <li><NavLink to='/about' onClick={() => toggleClass('about')} className={isActive === 'about'? 'nav-links active-links' : 'nav-links'}>{t('header-title.about')}</NavLink></li>
                    <li><NavLink to='/kickstarter' onClick={() => toggleClass('ks')} className={isActive === 'ks'? 'nav-links active-links' : 'nav-links'}>Kickstarter</NavLink></li>
                    <li><NavLink to='/whoweare' onClick={() => toggleClass('whowe')} className={isActive === 'whowe'? 'nav-links active-links' : 'nav-links'}>{t('header-title.whoweare')}</NavLink></li>
                </ul>
            </nav>
            {/* button container */}
            <button id='button' className='button-flags' onClick={handleLanguageChange}>
                {/* background image */}
                <img src={flagbg} alt={t('header-title.alt.flagbg')} className='flagbg' />
                {/* flag image depends on language */}
                {isEnglish === 'en' ? <img src={flagfr} alt={t('header-title.alt.flagfr')} className='flags' /> : <img src={flagen} alt={t('header-title.alt.flagen')} className='flags' />}
            </button>
        </header>
    );
}
// Export to call it up in index.js
export default Header;