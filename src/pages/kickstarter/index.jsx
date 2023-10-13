// import assets
import kickbgfr from '../../assets/backgrounds/kickstarterbg-fr.webp';
import kickpledgesbgfr from '../../assets/backgrounds/ks-pledgesbg-fr.png';
import kickgoalsbg from '../../assets/backgrounds/ks-goalsbg.webp';
import kickbudgetbg from '../../assets/backgrounds/ks-budgetbg.webp';
import kickplanbg from '../../assets/backgrounds/ks-planbg.webp';
// import css
import '../../styles/kickstarter.scss';

// Kickstarter function
function Kickstarter() {
    return (
        <section className='kickstarter-component'>
            {/* why kickstater container */}
            <div className='ks-container'>
                {/* background image */}
                <img src={kickbgfr} alt='Fond stylisé contenant le pourquoi kickstarter' className='container-why' />
                {/* paragraph content */}
                <p className='container-content content-1'>Nous nous sommes tournés vers le financement participatif car nous souhaitons être aussi <strong>indépendants</strong> que possible. Nous ne voulons pas compromettre la vision que nous avons pour HS3. Nous aimerions garder cet aspect « par et pour des joueurs ».</p>
                <p className='container-content content-2'>Nous voulons également utiliser Kickstarter comme une plateforme pour rassembler <strong>une première communauté</strong>, avec laquelle les retours et échanges se feraient plus naturellement que si nous nous étions lancés par d'autres biais.</p>
                <p className='container-content content-3'>Pour ce qui est du montant du financement, il nous faudrait 200 000 euros, mais nous entamons une procédure avec le CNC, le Centre National du Cinéma et de l'image animée, pour obtenir une aide de 100 000 euros, ce qui diminuerait d'autant ce qu'il nous faut pour un développement complet. C'est pourquoi nous avons défini un objectif de financement initial de 120 800 euros, afin d’intégrer les frais de Kickstarter. Une fois cet objectif atteint, tout argent supplémentaire nous permettrait d'investir plus de moyens afin de développer du contenu supplémentaire, qui sera ajouté après la sortie du jeu, sous forme de modes de jeu, d'événements ou de tournois par exemple.</p>
            </div>
            {/* pledges container */}
            <div className='ks-container'>
                {/* background image */}
                <img src={kickpledgesbgfr} alt='Fond stylisé contenant les contributions' className='container-build' />
                {/* list content with custom bulletpoint */}
                <ul className='container-content container-li'>
                    <li>5 € = Ajout du nom/pseudo dans les « crédits » partie remerciement</li>
                    <li>10 € = + Titre/icône pour participation (pionnier/fondateur)</li>
                    <li>20 € = + Accès à la bêta fermée</li>
                    <li>30 € = + Skin exclusif de l'ATH</li>
                    <li>50 € [60 €]* limité à 500 = + Arme permanente du skin exclusif</li>
                    <li>75 € [85 €]* limité à 500 = + Set entier du skin exclusif</li>
                    <li>90 € [100 €]* limité à 100 = + Pack de chromas pour l'arme et le set (chromas or, argent, bronze et inversion)</li>
                    <li>125 € = + Digital Artbook + OST + version digitale d'un package d'archives</li>
                    <li>250 € limité à 10 = Écriture d'une ligne de dialogue que nous devons inclure dans l'histoire, sans pertuber la conversation</li>
                    <li>500 € limité à 5 = + Questions réponses en privé pendant environ 1h et enregistrement pour vidéo diffusable</li>
                    <li>1.000 € limité à 2 = + Participation à la création d'un skin d'ATH</li>
                    <li>1.500 € limité à 2 = Pack à 500 €<br></br>+ Participation à la création d'un set</li>
                    <li>2.500 € limité à 2 = Pack à 500 €<br></br>+ Participation à la création d'une arme</li>
                    <li>5.000 € limité à 1 = Pack à 500 €<br></br>+ Participation à la création d'une carte</li>
                    <li>7.500 € limité à 1 = Pack à 500 €<br></br>+ Participation à la création d'un mode de jeu</li>
                    <p>* Le prix entre crochets correspond au prix sans la remise en quantité limitée « early bird ». Une fois les quantités épuisées, le prix de la contribution passera au prix entre crochets.</p>
                </ul>
            </div>
            {/* stretch goals container */}
            <div className='ks-container'>
                {/* background image */}
                <img src={kickgoalsbg} alt='Fond stylisé contenant les strech goals' className='container-build' />
                {/* list content with custom bulletpoint */}
                <ul className='container-content container-li li-goals'>
                    <li>130.000 € = Ajout d'une carte pour 4 modes</li>
                    <li>140.000 € = Ajout d'un mode de jeu supplémentaire</li>
                    <li>150.000 € = Ajout d'un système de « clan »</li>
                    <li>160.000 € = Lobby Personnalisable</li>
                    <li>170.000 € = Ajout d'un système de classement</li>
                    <li>1.000.000 € = Implémentation d'un éditeur de carte</li>
                </ul>
            </div>
            {/* budget container */}
            <div className='ks-container'>
                {/* background image */}
                <img src={kickbudgetbg} alt='Fond stylisé contenant le budget en forme de bar de progression hachurée' className='container-build' />
                {/* paragraph content with custom place */}
                <p className='container-content content-budg budg-pub'>Publicité</p>
                <p className='container-content content-budg budg-adm'>Administration/Frais d'entreprise</p>
                <p className='container-content content-budg budg-ks'>Frais Kickstarter</p>
                <p className='container-content content-budg budg-dev'>Développement</p>
            </div>
            {/* planning container */}
            <div className='ks-container'>
                {/* background image */}
                <img src={kickplanbg} alt='Fond stylisé contenant le planning' className='container-build' />
                {/* list content with custom bulletpoint */}
                <ul className='container-content container-li li-plan'>
                    <li>Alpha (2 mois) : Lanceur, menu, base du gameplay, mouvements, 2 modes de jeu, 2 arènes, 5 armes, 6 compétences.<br></br>Accès interne uniquement.</li>
                    <li>Bêta (1 mois) : 9 armes, 8 compétences, 2 modes de jeu, 1 arène, boutique.<br></br>Accès interne et contributeurs supérieur à 20€</li>
                    <li>Accès anticipé (3 semaines) : 4 armes, 7 compétences, mise en place de quelques évènements.<br></br>Jeu accessible à tous.</li>
                    <li>Version 1 (2 mois) : 8 armes, 2 modes de jeu, 1 arène.<br></br>Ouverture complète du jeu.</li>
                    <p>Phase (durée estimée) : contenu ajouté. Accès.<br></br>Strech goals non inclus dans l'estimation</p>
                </ul>
            </div>
        </section>
    );
}
// Export to call it up in index.js
export default Kickstarter;