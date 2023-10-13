// import libraries
import { Carousel } from 'react-responsive-carousel';
// import assets
import featuresfr from '../../assets/backgrounds/features-fr.webp';
import storyfr from '../../assets/backgrounds/story-fr.webp';
import carouselbgweaponfr from '../../assets/backgrounds/carousel-bg-weapon-fr.webp';
import armes1 from '../../assets/concept-arts/armes copy.jpg';
import armes2 from '../../assets/concept-arts/armes copy2.jpg';
import armes3 from '../../assets/concept-arts/armesbouclar.jpg';
import carouselbgskillsfr from '../../assets/backgrounds/carousel-bg-skills-fr.webp';
import skill1 from '../../assets/concept-arts/compet1.jpg';
import skill2 from '../../assets/concept-arts/compet2.jpg';
import carouselbgsativa from '../../assets/backgrounds/carousel-bg-sativa.webp';
import sativa1 from '../../assets/concept-arts/SativaConcept copy3name.jpg';
import sativa2 from '../../assets/concept-arts/SativaBuilding.jpg';
import sativa3 from '../../assets/concept-arts/SativaBuilding2.jpg';
import sativa4 from '../../assets/concept-arts/SativaElements.jpg';
import sativa5 from '../../assets/concept-arts/unknown.png';
import carouselbgplatform from '../../assets/backgrounds/carousel-bg-platform.webp';
import platform1 from '../../assets/concept-arts/PlatformConcept copy.jpg';
import platform2 from '../../assets/concept-arts/BuildingpLATFORM (2).jpg';
import carouselbgdron from '../../assets/backgrounds/carousel-bg-drones.webp';
import dron1 from '../../assets/concept-arts/Bigdrone2.jpg';
import dron2 from '../../assets/concept-arts/Bigdrone.jpg';
import carouselbgcharafr from '../../assets/backgrounds/carousel-bg-chara-fr.webp';
import chara1 from '../../assets/concept-arts/Charadesign 01.jpg';
import chara2 from '../../assets/concept-arts/Charadesign 02.jpg';
import chara3 from '../../assets/concept-arts/Charadesign KICKSTARTER black.jpg';
import chara4 from '../../assets/concept-arts/Charadesign KICKSTARTER.jpg';
import chara5 from '../../assets/concept-arts/hairsdesign copy.jpg';
import carouselbgsheidfrana from '../../assets/backgrounds/carousel-bg-sheidfrana.webp';
import sheidfrana1 from '../../assets/concept-arts/CityLakeFINAL2.jpg';
import sheidfrana2 from '../../assets/concept-arts/CityLakeFINAL.jpg';
import sheidfrana3 from '../../assets/concept-arts/CityLake.jpg';
// import css
import '../../styles/about.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// About function
function About() {
    return (
        <section className='about-component'>
            {/* features container */}
            <div className='about-container'>
                {/* background image */}
                <img src={featuresfr} alt='Fond stylisé contenant les fonctionnalités' className='container' />
                {/* paragraph content */}
                <p className='container-content content-1'><strong>Un dynamisme unique :</strong> Que vous utilisiez une compétence spéciale ou non, profitez du panel de mouvements possibles pour surprendre l'adversaire, atteindre des endroits surélevés ou vous hâter vers votre objectif. Courez sur les murs, prenez appui sur un poteau pour changer de direction ou créez un mur pour l'utiliser comme plateforme, les possibilités de mouvements sont nombreuses pour traverser votre environnement.</p>
                <p className='container-content content-2'><strong>Une grande variété d'armes et de compétences :</strong> Que vous soyez en faveur d'armes classiques ou expérimentales, des simples mitraillettes aux fusils lasers spéciaux, larsenal vous fournira de nombreuses options pour surpasser vos opposants ou aider vos alliés. Les compétences, quant à elles, vont de la simple augmentation de vie ou l'invisibilité, à la bulle temporelle et la lévitation, et vous apporteront ce qu'il vous faut pour renforcer votre style de jeu.</p>
                <p className='container-content content-3'><strong>Des modes de jeu classiques et originaux :</strong> Découvrez des modes tels que le mode TouchDown, dérivé du football américain, ou encore le mode Hunter, durant lequel un joueur choisi au hasard aura un temps limité pour traquer et abattre les autres joueurs de la partie. Si vous êtes plus friand de modes de jeu simples, vous trouverez votre bonheur avec les modes DeathMatch, un match à mort en chacun pour soi, et TeamBattle, un match à mort par équipe.</p>
                <p className='container-content content-4'><strong>Une garde robe à votre goût :</strong> Personnalisez l'apparence de vos personnage en choisissant un ensemble de vêtements, ou en combinant des éléments provenant de tenues différentes pour faire vos compositions. Avec une collection en constante évolution, et des styles allant des plus simples aux plus extravagants, vous avez l'embarras du choix pour vous démarquer de vos pairs.</p>
            </div>
            {/* story container */}
            <div className='about-container'>
                {/* background image */}
                <img src={storyfr} alt="Fond stylisé contenant l'histoire" className='container' />
                {/* paragraph content */}
                <p className='container-content content-2'>Après quelques milliers d'années, la planète Xolora s'est remise de l'ancienne civilisation qui a failli l'anéantir. Suite à ces évènements, les restes de cette civilisation se sont mis d'accord pour préserver leurs écosystèmes respectifs.</p>
                <p className='container-content content-3'>Au fil des années, les pays se réunissent pour faire avancer le monde. Ils utilisent un événement sportif holographique, Xolora Tournament, pour mettre en avant leurs progrès technologiques, leurs performances et asseoir leurs positions, si leurs performances sont meilleures que les autres nations.</p>
            </div>
            {/* weapons carousel */}
            <div className='about-carousel'>
                {/* background image */}
                <img src={carouselbgweaponfr} alt='Fond stylisé pour le carousel contenant les armes' />
                {/* carousel component */}
                <Carousel>
                    <div>
                        <img src={armes1} alt='3 Prototypes de Mousquets' />
                        <p className='legend'>3 Prototypes de Mousquets</p>
                    </div>
                    <div>
                        <img src={armes2} alt='Retravaille du premier prototype' />
                        <p className='legend'>Retravaille du premier prototype</p>
                    </div>
                    <div>
                        <img src={armes3} alt='2 Prototypes de Bouclier offensifs' />
                        <p className='legend'>2 Prototypes de Bouclier offensifs</p>
                    </div>
                </Carousel>
            </div>
            {/* skills carousel */}
            <div className='about-carousel'>
                {/* background image */}
                <img src={carouselbgskillsfr} alt='Fond stylisé pour le carousel contenant les compétences' />
                {/* carousel component */}
                <Carousel>
                    <div>
                        <img src={skill1} alt='Prototype de boulier énergétique en forme de mur' />
                        <p className='legend'>Prototype de boulier énergétique en forme de mur</p>
                    </div>
                    <div>
                        <img src={skill2} alt='Prototype de boulier énergétique en forme de bulle' />
                        <p className='legend'>Prototype de boulier énergétique en forme de bulle</p>
                    </div>
                </Carousel>
            </div>
            {/* sativa map carousel */}
            <div className='about-carousel'>
                {/* background image */}
                <img src={carouselbgsativa} alt='Fond stylisé pour le carousel contenant la carte sativa' />
                {/* carousel component */}
                <Carousel>
                    <div>
                        <img src={sativa1} alt='Concept art de la carte Sativa' />
                        <p className='legend'>Concept art de la carte Sativa</p>
                    </div>
                    <div>
                        <img src={sativa2} alt="Esquisse d'une grue et d'une usine à drones" />
                        <p className='legend'>Esquisse d'une grue et d'une usine à drones</p>
                    </div>
                    <div>
                        <img src={sativa3} alt="Esquisse d'une grue et d'une usine à drones" />
                        <p className='legend'>Esquisse d'une grue et d'une usine à drones</p>
                    </div>
                    <div>
                        <img src={sativa4} alt='Esquisse des piles énergétiques et des containers anti-grav' />
                        <p className='legend'>Esquisse des piles énergétiques et des containers anti-grav</p>
                    </div>
                    <div>
                        <img src={sativa5} alt='Container anti-grav plus détaillé' />
                        <p className='legend'>Container anti-grav plus détaillé</p>
                    </div>
                </Carousel>
            </div>
            {/* platform map carousel */}
            <div className='about-carousel'>
                {/* background image */}
                <img src={carouselbgplatform} alt='Fond stylisé pour le carousel contenant la carte platform' />
                {/* carousel component */}
                <Carousel>
                    <div>
                        <img src={platform1} alt='Concept art de la carte Platform' />
                        <p className='legend'>Concept art de la carte Platform</p>
                    </div>
                    <div>
                        <img src={platform2} alt='Esquisse de la carte, dessus et dessous' />
                        <p className='legend'>Esquisse de la carte, dessus et dessous</p>
                    </div>
                </Carousel>
            </div>
            {/* drone carousel */}
            <div className='about-carousel'>
                {/* background image */}
                <img src={carouselbgdron} alt='Fond stylisé pour le carousel contenant les drones' />
                {/* carousel component */}
                <Carousel>
                    <div>
                        <img src={dron1} alt='Esquisse des drones et de leurs propulseurs' />
                        <p className='legend'>Esquisse des drones et de leurs propulseurs</p>
                    </div>
                    <div>
                        <img src={dron2} alt='Recherches artistiques sur les drones' />
                        <p className='legend'>Recherches artistiques sur les drones</p>
                    </div>
                </Carousel>
            </div>
            {/* chara design carousel */}
            <div className='about-carousel'>
                {/* background image */}
                <img src={carouselbgcharafr} alt='Fond stylisé pour le carousel contenant les personnages' />
                {/* carousel component */}
                <Carousel>
                    <div>
                        <img src={chara1} alt='Concept art du personnage féminin' />
                        <p className='legend'>Concept art du personnage féminin</p>
                    </div>
                    <div>
                        <img src={chara2} alt='Concept art du personnage masculin' />
                        <p className='legend'>Concept art du personnage masculin</p>
                    </div>
                    <div>
                        <img src={chara3} alt='Esquisse de la tenue foncé lié au Kickstarter' />
                        <p className='legend'>Esquisse de la tenue foncé lié au Kickstarter</p>
                    </div>
                    <div>
                        <img src={chara4} alt='Esquisse de la tenue claire lié au Kickstarter' />
                        <p className='legend'>Esquisse de la tenue claire lié au Kickstarter</p>
                    </div>
                    <div>
                        <img src={chara5} alt='Esquisse des coupes de cheveux' />
                        <p className='legend'>Esquisse des coupes de cheveux</p>
                    </div>
                </Carousel>
            </div>
            {/* sheid frana carousel */}
            <div className='about-carousel'>
                {/* background image */}
                <img src={carouselbgsheidfrana} alt='Fond stylisé pour le carousel contenant sheid frana' />
                {/* carousel component */}
                <Carousel>
                    <div>
                        <img src={sheidfrana1} alt='Artwork de Sheid Frana, la capitale' />
                        <p className='legend'>Artwork de Sheid Frana, la capitale</p>
                    </div>
                    <div>
                        <img src={sheidfrana2} alt='Esquisse de Sheid Frana' />
                        <p className='legend'>Esquisse de Sheid Frana</p>
                    </div>
                    <div>
                        <img src={sheidfrana3} alt='Recherche autour de la vue et de la tour pour la capitale' />
                        <p className='legend'>Recherche autour de la vue et de la tour pour la capitale</p>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
// Export to call it up in index.js
export default About;