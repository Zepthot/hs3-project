// import libraries
import React from 'react';
// import assets
import hs3header from '../../assets/hs3-header.webp';
import hs3intro from '../../assets/backgrounds/hs3-intro.webp';
import youtubebg from '../../assets/backgrounds/youtube-bg.webp';
// import components
import YoutubeEmbed from "../../components/youtube-embed";
// import css
import '../../styles/home.scss';

// Core function for homepage
function Core() {
    return (
        <section className='homepage'>
            {/* HS3 header image */}
            <img src={hs3header} alt='Contenant le logo et le nom complet stylisés' className='homepage-hs3header' />
            {/* introduction content container*/}
            <div className='homepage-intro-container'>
                {/* introduction background */}
                <img src={hs3intro} alt="Fond stylisé contenant l'introduction" className='intro-background' />
                {/* paragraph content */}
                <p className='intro-content content-1'><strong>Hologram Stylish Shooter eSports</strong>, ou <strong>HS3</strong>, est un jeu d'action à la troisième personne nerveux et dynamique,fait par des joueurs pour des joueurs. Que vous soyez joueur occasionnel ou de nature compétitive, motivé par des duels au corps à corps palpitants ou par des combats à distance enflammés, <strong>vous ne serez pas en manque d'action</strong>. Définissez <strong>votre propre style de jeu</strong> à l'aide d'armes uniques et de compétences spéciales, et affrontez d'autres joueurs dans des modes de jeu aussi bien classiques qu'originaux.</p>
                <p className='intro-content content-2'>Le jeu sera initialement disponible <strong>gratuitement</strong>, sur PC pour Windows, en français et en anglais. Il est possible que l'on développe la version linux, et que l'on ajoute l'allemand, l'espagnol et le portugais dans le futur.</p>
            </div>
            {/* youtube video container */}
            <div className='homepage-video-container'>
                {/* background image */}
                <img src={youtubebg} alt='Fond stylisé contenant le trailer youtube' className='video-background' />
                {/* youtube component */}
                <YoutubeEmbed embedId="X_3mOh7VJeU" />
            </div>
        </section>
    );
}
// Export to call it up in index.js
export default Core;
