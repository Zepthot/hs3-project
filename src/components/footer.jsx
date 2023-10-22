// import libraries
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import assets
import fbackground from '../assets/backgrounds/header.webp';
import contentbg from '../assets/backgrounds/title-background.webp';
import networkbg from '../assets/icons/hexa.webp';
import fbicon from '../assets/icons/facebook.webp';
import xicon from '../assets/icons/twitter.webp';
import discordicon from '../assets/icons/discord.webp';
import ksicon from '../assets/icons/kickstarter.webp';
// import css
import '../styles/footer.scss';

// Footer function with subscribe form and social networks
function Footer () {

    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        console.log('submit function');
        e.preventDefault();

        const data = { email };
        console.log(data);

        const response = await fetch('http://localhost:4000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .catch(error => console.error('error = ', error));

        console.log(response);
    };

    const {t} = useTranslation();

    return (
        <footer id='footer' onSubmit={handleSubmit} className="footer-component">
            {/* background image */}
            <img src={fbackground} alt={t('footer.alt.footerbg')} className='footer-background' />
            <div className='footer-container-form'>
                {/* background image for content */}
                <img src={contentbg} alt={t('footer.alt.formcontainer')} className='container-subscribe-ban' />
                {/* subscription form */}
                <form className='container-form'>
                    <label htmlFor='email_id' className='form-label'>{t('footer.form.label')}</label>
                    <div className='container-sub-field'>
                        <input id='email_id' type='email' name='user_email' placeholder={t('footer.form.placeholder')} required onChange={(e) => setEmail(e.target.value)} className='form-input' />
                        <button type='submit' className='form-button'>{t('footer.form.button')}</button>
                    </div>
                </form>
            </div>
            {/* social network container */}
            <div className='footer-container-social'>
                {/* facebook and twitter container */}
                <div className='container-containers links-1'>
                    {/* facebook container */}
                    <div className='container-link-img'>
                        <img src={networkbg} alt={t('footer.alt.hexagon')} className='hexagon' />
                        <a href='https://www.facebook.com/HologramStylishShooterEsports' target='_blank' rel='noreferrer' className='link-icon icon-fb'> 
                            <img src={fbicon} alt={t('footer.alt.iconfb')} className='icon' />
                        </a>
                    </div>
                    {/* twitter container */}
                    <div className='container-link-img'>
                        <img src={networkbg} alt={t('footer.alt.hexagon')} className='hexagon' />
                        <a href='https://twitter.com/KY_HS3' target='_blank' rel='noreferrer' className='link-icon icon-twt'> 
                            <img src={xicon} alt={t('footer.alt.icontwt')} className='icon' />
                        </a>
                    </div>
                </div>
                {/* discord and kickstarter container */}
                <div className='container-containers links-2'>
                    {/* discord container */}
                    <div className='container-link-img'>
                        <img src={networkbg} alt={t('footer.alt.hexagon')} className='hexagon' />
                        <a href='https://discord.gg/XWN9kVSKdY' target='_blank' rel='noreferrer' className='link-icon icon-disc'> 
                            <img src={discordicon} alt={t('footer.alt.icondisc')} className='icon' />
                        </a>
                    </div>
                    {/* kickstarter container */}
                    <div className='container-link-img'>
                        <img src={networkbg} alt={t('footer.alt.hexagon')} className='hexagon' />
                        <a href='https://www.kickstarter.com/projects/kompagnygames/hs3-hologram-stylish-shooter-esports' target='_blank' rel='noreferrer' className='link-icon icon-ks'> 
                            <img src={ksicon} alt={t('footer.alt.iconks')} className='icon' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
// Export to call it up in index.js
export default Footer;