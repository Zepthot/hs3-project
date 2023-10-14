// import libraries
import React from 'react';
import { useTranslation } from 'react-i18next';
// import assets
import hs3header from '../../assets/hs3-header.webp';
import hs3intro from '../../assets/backgrounds/hs3-intro.webp';
import youtubebg from '../../assets/backgrounds/youtube-bg.webp';
// import components
import YoutubeEmbed from "../../components/youtube-embed";
// import css
import '../../styles/home.scss';

// Homepage function
function Homepage() {

    const {t} = useTranslation();   

    return (
        <section className='homepage'>
            {/* HS3 header image */}
            <img src={hs3header} alt={t('homepage.alt.hs3header')} className='homepage-hs3header' />
            {/* introduction content container*/}
            <div className='homepage-intro-container'>
                {/* introduction background */}
                <img src={hs3intro} alt={t('homepage.alt.introbg')} className='intro-background' />
                {/* paragraph content */}
                <p className='intro-content content-1'><strong>Hologram Stylish Shooter eSports</strong>{t('homepage.paragraph1.content1')}<strong>HS3</strong>{t('homepage.paragraph1.content2')}<strong>{t('homepage.paragraph1.content3')}</strong>{t('homepage.paragraph1.content4')}<strong>{t('homepage.paragraph1.content5')}</strong>{t('homepage.paragraph1.content6')}</p>
                <p className='intro-content content-2'>{t('homepage.paragraph2.content1')}<strong>{t('homepage.paragraph2.content2')}</strong>{t('homepage.paragraph2.content3')}</p>
            </div>
            {/* youtube video container */}
            <div className='homepage-video-container'>
                {/* background image */}
                <img src={youtubebg} alt={t('homepage.alt.youtubebg')} className='video-background' />
                {/* youtube component */}
                <YoutubeEmbed embedId="X_3mOh7VJeU" />
                {/* video credit */}
                <p className='video-credit'>{t('homepage.video-credit')}<a href='https://www.motionalien.com/' target='_blank' rel='noreferrer'>Motionalien Studio</a></p>
            </div>
        </section>
    );
}
// Export to call it
export default Homepage;
