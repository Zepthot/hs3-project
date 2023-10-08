// import libraries
import { NavLink } from 'react-router-dom';
// import assets
import hbackground from '../assets/header.webp';
import logo from '../assets/logo.webp';
// import components
import HeaderParticles from './particles';
// import css
import '../styles/header.scss';

// Header function with logo and navigation menu
function Header () {
    return (
        <header className="header-component">
            <HeaderParticles />
            {/* background image */}
            <img src={hbackground} alt='Plusieurs hexagones formant un cadrillage avec des interstices' className='header-background' />
            <NavLink to='/' className='header-links'>
                {/* logo hs3 */}
                <img src={logo} alt='Logo en forme de cube avec écrit HS3' className='links-logo' />
            </NavLink>
            {/* navigation menu */}
            <nav className='header-nav'>
                <ul>
                    <li><NavLink to='/about' className='nav-links'>A propos</NavLink></li>
                    <li><NavLink to='/kickstarter' className='nav-links'>Kickstarter</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

// Export to call it up in index.js
export default Header;