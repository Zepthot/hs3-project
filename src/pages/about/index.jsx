// import libraries
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
// import assets
import armes1 from '../../assets/concept-arts/weapon1.webp';
import armes2 from '../../assets/concept-arts/weapon2.webp';
import armes3 from '../../assets/concept-arts/weapon3.webp';
import skill1 from '../../assets/concept-arts/skill1.webp';
import skill2 from '../../assets/concept-arts/skill2.webp';
import carouselbgsativa from '../../assets/backgrounds/carousel-sativabg.webp';
import sativa1 from '../../assets/concept-arts/sativa1.webp';
import sativa2 from '../../assets/concept-arts/sativa2.webp';
import sativa3 from '../../assets/concept-arts/sativa3.webp';
import sativa4 from '../../assets/concept-arts/sativa4.webp';
import sativa5 from '../../assets/concept-arts/sativa5.webp';
import carouselbgplatform from '../../assets/backgrounds/carousel-platformbg.webp';
import platform1 from '../../assets/concept-arts/platform1.webp';
import platform2 from '../../assets/concept-arts/platform2.webp';
import carouselbgdron from '../../assets/backgrounds/carousel-dronesbg.webp';
import dron1 from '../../assets/concept-arts/drone1.webp';
import dron2 from '../../assets/concept-arts/drone2.webp';
import chara1 from '../../assets/concept-arts/chara1.webp';
import chara2 from '../../assets/concept-arts/chara2.webp';
import chara3 from '../../assets/concept-arts/chara3.webp';
import chara4 from '../../assets/concept-arts/chara4.webp';
import chara5 from '../../assets/concept-arts/chara5.webp';
import carouselbgsheidfrana from '../../assets/backgrounds/carousel-sheidfranabg.webp';
import sheidfrana1 from '../../assets/concept-arts/sheidfrana1.webp';
import sheidfrana2 from '../../assets/concept-arts/CityLakeFINAL.jpg';
import sheidfrana3 from '../../assets/concept-arts/CityLake.jpg';
// import css
import '../../styles/about.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// About function
const About = ({isEnglish}) => {

    const {t} = useTranslation();

    return (
        <section className='about-component'>
            {/* features container */}
            <div className='about-container'>
                {/* background image */}
                <img src={`/assets/${isEnglish}/features.webp`} alt={t('about.alt.featuresbg')} className='container' />
                {/* paragraph content */}
                <p className='container-content content-1'><strong>{t('about.features.first.point')}</strong>{t('about.features.first.explain')}</p>
                <p className='container-content content-2'><strong>{t('about.features.second.point')}</strong>{t('about.features.second.explain')}</p>
                <p className='container-content content-3'><strong>{t('about.features.third.point')}</strong>{t('about.features.third.explain')}</p>
                <p className='container-content content-4'><strong>{t('about.features.fourth.point')}</strong>{t('about.features.fourth.explain')}</p>
            </div>
            {/* story container */}
            <div className='about-container'>
                {/* background image */}
                <img src={`/assets/${isEnglish}/story.webp`} alt={t('about.alt.storybg')} className='container' />
                {/* paragraph content */}
                <p className='container-content content-2'>{t('about.story.1.content1')}<strong>{t('about.story.1.content2')}</strong>{t('about.story.1.content3')}<strong>{t('about.story.1.content4')}</strong>{t('about.story.1.content5')}<strong>{t('about.story.1.content6')}</strong></p>
                <p className='container-content content-3'>{t('about.story.2.content1')}<strong>{t('about.story.2.content2')}</strong>{t('about.story.2.content3')}</p>
            </div>
            {/* weapons carousel */}
            <div className='about-carousel'>
                {/* background image */}
                <img src={`/assets/${isEnglish}/carousel-weaponbg.webp`} alt={t('about.alt.carousel.weapons')} />
                {/* carousel component */}
                <Carousel>
                    <div>
                        <img src={armes1} alt={t('about.carousel.weapons.legend1')} />
                        <p className='legend'>{t('about.carousel.weapons.legend1')}</p>
                    </div>
                    <div>
                        <img src={armes2} alt={t('about.carousel.weapons.legend2')} />
                        <p className='legend'>{t('about.carousel.weapons.legend2')}</p>
                    </div>
                    <div>
                        <img src={armes3} alt={t('about.carousel.weapons.legend3')} />
                        <p className='legend'>{t('about.carousel.weapons.legend3')}</p>
                    </div>
                </Carousel>
            </div>
            {/* skills carousel */}
            <div className='about-carousel'>
                {/* background image */}
                <img src={`/assets/${isEnglish}/carousel-skillsbg.webp`} alt={t('about.alt.carousel.skills')} />
                {/* carousel component */}
                <Carousel>
                    <div>
                        <img src={skill1} alt={t('about.carousel.skills.legend1')} />
                        <p className='legend'>{t('about.carousel.skills.legend1')}</p>
                    </div>
                    <div>
                        <img src={skill2} alt={t('about.carousel.skills.legend2')} />
                        <p className='legend'>{t('about.carousel.skills.legend2')}</p>
                    </div>
                </Carousel>
            </div>
            {/* sativa map carousel */}
            <div className='about-carousel'>
                {/* background image */}
                <img src={carouselbgsativa} alt={t('about.alt.carousel.sativa')} />
                {/* carousel component */}
                <Carousel>
                    <div>
                        <img src={sativa1} alt={t('about.carousel.sativa.legend1')} />
                        <p className='legend'>{t('about.carousel.sativa.legend1')}</p>
                    </div>
                    <div>
                        <img src={sativa2} alt={t('about.carousel.sativa.legend2')} />
                        <p className='legend'>{t('about.carousel.sativa.legend2')}</p>
                    </div>
                    <div>
                        <img src={sativa3} alt={t('about.carousel.sativa.legend2')} />
                        <p className='legend'>{t('about.carousel.sativa.legend2')}</p>
                    </div>
                    <div>
                        <img src={sativa4} alt={t('about.carousel.sativa.legend3')} />
                        <p className='legend'>{t('about.carousel.sativa.legend3')}</p>
                    </div>
                    <div>
                        <img src={sativa5} alt={t('about.carousel.sativa.legend4')} />
                        <p className='legend'>{t('about.carousel.sativa.legend4')}</p>
                    </div>
                </Carousel>
            </div>
            {/* platform map carousel */}
            <div className='about-carousel'>
                {/* background image */}
                <img src={carouselbgplatform} alt={t('about.alt.carousel.platform')} />
                {/* carousel component */}
                <Carousel>
                    <div>
                        <img src={platform1} alt={t('about.carousel.platform.legend1')} />
                        <p className='legend'>{t('about.carousel.platform.legend1')}</p>
                    </div>
                    <div>
                        <img src={platform2} alt={t('about.carousel.platform.legend2')} />
                        <p className='legend'>{t('about.carousel.platform.legend2')}</p>
                    </div>
                </Carousel>
            </div>
            {/* drone carousel */}
            <div className='about-carousel'>
                {/* background image */}
                <img src={carouselbgdron} alt={t('about.alt.carousel.drones')} />
                {/* carousel component */}
                <Carousel>
                    <div>
                        <img src={dron1} alt={t('about.carousel.drones.legend1')} />
                        <p className='legend'>{t('about.carousel.drones.legend1')}</p>
                    </div>
                    <div>
                        <img src={dron2} alt={t('about.carousel.drones.legend2')} />
                        <p className='legend'>{t('about.carousel.drones.legend2')}</p>
                    </div>
                </Carousel>
            </div>
            {/* chara design carousel */}
            <div className='about-carousel'>
                {/* background image */}
                <img src={`/assets/${isEnglish}/carousel-charabg.webp`} alt={t('about.alt.carousel.chara')} />
                {/* carousel component */}
                <Carousel>
                    <div>
                        <img src={chara1} alt={t('about.carousel.chara.legend1')} />
                        <p className='legend'>{t('about.carousel.chara.legend1')}</p>
                    </div>
                    <div>
                        <img src={chara2} alt={t('about.carousel.chara.legend2')} />
                        <p className='legend'>{t('about.carousel.chara.legend2')}</p>
                    </div>
                    <div>
                        <img src={chara3} alt={t('about.carousel.chara.legend3')} />
                        <p className='legend'>{t('about.carousel.chara.legend3')}</p>
                    </div>
                    <div>
                        <img src={chara4} alt={t('about.carousel.chara.legend4')} />
                        <p className='legend'>{t('about.carousel.chara.legend4')}</p>
                    </div>
                    <div>
                        <img src={chara5} alt={t('about.carousel.chara.legend5')} />
                        <p className='legend'>{t('about.carousel.chara.legend5')}</p>
                    </div>
                </Carousel>
            </div>
            {/* sheid frana carousel */}
            <div className='about-carousel'>
                {/* background image */}
                <img src={carouselbgsheidfrana} alt={t('about.alt.carousel.sheidfrana')} />
                {/* carousel component */}
                <Carousel>
                    <div>
                        <img src={sheidfrana1} alt={t('about.carousel.sheidfrana.legend1')} />
                        <p className='legend'>{t('about.carousel.sheidfrana.legend1')}</p>
                    </div>
                    <div>
                        <img src={sheidfrana2} alt={t('about.carousel.sheidfrana.legend2')} />
                        <p className='legend'>{t('about.carousel.sheidfrana.legend2')}</p>
                    </div>
                    <div>
                        <img src={sheidfrana3} alt={t('about.carousel.sheidfrana.legend3')} />
                        <p className='legend'>{t('about.carousel.sheidfrana.legend3')}</p>
                    </div>
                </Carousel>
            </div>
            <p className='artwork-credit'>{t('about.artwork-credit')}<a href='https://qenus.artstation.com/' target='_blank' rel='noreferrer'>Quentin Dognon</a></p>
        </section>
    );
}
// Export to call it
export default About;