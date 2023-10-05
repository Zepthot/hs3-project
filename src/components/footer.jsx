// import assets
import fbackground from '../assets/header.webp';
import contentbg from '../assets/title-background.webp';
import networkbg from '../assets/hexa.webp';
import fbicon from '../assets/facebook.webp';
import xicon from '../assets/twitter.webp';
import discordicon from '../assets/discord.webp';
import ksicon from '../assets/kickstarter.webp';
// import css
import '../styles/footer.scss';

// Header function with logo and navigation menu
function Footer () {
    return (
        <footer className="footer-component">
            {/* background image */}
            <img src={fbackground} alt='Plusieurs hexagones formant un cadrillage avec des interstices' className='footer-background' />
            <div className='footer-container-form'>
                {/* background image for content */}
                <img src={contentbg} alt='Banderole contenant le champs de souscription aux news' className='container-subscribe-ban' />
                {/* subscription form */}
                <form className='container-form'>
                    <label htmlFor='email_id' className='form-label'>Abonnez-vous à la newsletter !</label>
                    <div className='container-sub-field'>
                        <input id='email_id' type='email' name='user_email' placeholder='Ton adresse email' required className='form-input' />
                        <button type='submit' className='form-button'>Souscrire</button>
                    </div>
                </form>
            </div>
            {/* social network container */}
            <div className='footer-container-social'>
                {/* facebook and twitter container */}
                <div className='container-containers links-1'>
                    {/* facebook container */}
                    <div className='container-link-img'>
                        <img src={networkbg} alt='test1' className='hexagon' />
                        <a href='https://www.facebook.com/HologramStylishShooterEsports' target='_blank' rel='noreferrer' className='link-icon'> 
                            <img src={fbicon} alt='testfb' className='icon' />
                        </a>
                    </div>
                    {/* twitter container */}
                    <div className='container-link-img'>
                        <img src={networkbg} alt='test1' className='hexagon' />
                        <a href='https://twitter.com/KY_HS3' target='_blank' rel='noreferrer' className='link-icon'> 
                            <img src={xicon} alt='testx' className='icon' />
                        </a>
                    </div>
                </div>
                {/* discord and kickstarter container */}
                <div className='container-containers links-2'>
                    {/* discord container */}
                    <div className='container-link-img'>
                        <img src={networkbg} alt='test1' className='hexagon' />
                        <a href='https://discord.gg/XWN9kVSKdY' target='_blank' rel='noreferrer' className='link-icon'> 
                            <img src={discordicon} alt='testdiscord' className='icon' />
                        </a>
                    </div>
                    {/* kickstarter container */}
                    <div className='container-link-img'>
                        <img src={networkbg} alt='test1' className='hexagon' />
                        <a href='https://www.kickstarter.com/projects/kompagnygames/hs3-hologram-stylish-shooter-esports' target='_blank' rel='noreferrer' className='link-icon'> 
                            <img src={ksicon} alt='testks' className='icon' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Export to call it up in index.js
export default Footer;