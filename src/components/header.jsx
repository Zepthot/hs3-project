import hbackground from '../assets/header.webp';
import logo from '../assets/logo.webp';
import HeaderParticles from './particles';
import '../styles/header.scss';

// Header function with logo and navigation menu
function Header () {
    return (
        <header className="header-component">
            <HeaderParticles />
            {/* background image */}
            <img src={hbackground} alt='Plusieurs hexagones formant un cadrillage avec des interstices' className='header-background' />
            {/* logo hs3 */}
            <img src={logo} alt='Logo en forme de cube avec écrit HS3' className='header-logo' />
            {/* navigation menu */}
            <nav className='header-nav'>
                <ul>
                    <li>A propos</li>
                    <li>Kickstarter</li>
                </ul>
            </nav>
        </header>
    );
}

// Export to call it up in index.js
export default Header;