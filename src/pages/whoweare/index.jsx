// import assets
import inpibg from '../../assets/backgrounds/who-inspibg-fr.png';
import valuesbg from '../../assets/backgrounds/who-valuesbg-fr.png';
import risksbg from '../../assets/backgrounds/who-risksbg-fr.png';
// import css
import '../../styles/whoweare.scss';

// Who function
function Whoweare() {
    return (
        <section className='whowe-component'>
            {/* container */}
            <div className='whowe-container'>
                {/* background image */}
                <img src={inpibg} alt='Fond stylisé contenant nos inspirations' className='bg-whowe' />
                {/* paragraph content */}
                <p className='paragraph-content content-ins-1'>Nous sommes, au départ, des joueurs de jeux vidéo. Nous avons par le passé joué à un jeu d'action multijoueur en ligne qui proposait des combats nerveux, variés et équilibrés. Ce jeu a été pendant de nombreuses années un coup de cœur, et qui nous a laissé de bons souvenirs. Cependant, la direction qu'il a pris au fil des ans est devenue pour nous un problème majeur, qui a changé le jeu en profondeur, bien loin de ce qu'il était. Suite à cela, nous avons cherché une alternative, afin de retrouver les mêmes sensations et un style de jeu similaire, sans succès. C'est la recherche de cette expérience qui nous a poussé à développer HS3.</p>
                <p className='paragraph-content content-ins-2'>Pour ce qui est du monde de HS3, vous pourrez retrouver des influences provenant de diverses œuvres de science fiction et de fantasy, telles que world trigger, ghost in the shell, ou monster hunter. Nous avons également intégré des thématiques et des problématiques du monde réel dans l'histoire et l'univers du jeu, comme le climat et l'écologie.</p>
            </div>
            {/* container */}
            <div className='whowe-container'>
                {/* background image */}
                <img src={valuesbg} alt='Fond stylisé contenant nos valeurs' className='bg-whowe' />
                {/* paragraph content */}
                <p className='paragraph-content content-val-1'>Nous voulons construire, aussi bien avec notre future équipe qu'avec notre communauté, une relation forte, qui serait basée sur la confiance et l'entraide. Nous voulons faire en sorte que les divers retours et impressions de la communauté soient pris en compte lors du développement, afin de fournir des aspects de l'expérience HS3 plus équilibrés.</p>
                <p className='paragraph-content content-val-2'>Nous sommes également conscients des enjeux sociétaux que sont l'innovation et l'écologie, et nous souhaitons explorer et discuter de ces thèmes au travers de nos productions.</p>
                <p className='paragraph-content content-val-3'>En dehors de HS3, nous avons différents jeux vidéo en tête, que nous développerons si nous en avons l'occasion et les moyens, tout en mettant régulièrement à jour HS3, que ce soit par du nouveau contenu ou des événements par exemple.</p>
            </div>
            {/* container */}
            <div className='whowe-container'>
                {/* background image */}
                <img src={risksbg} alt='Fond stylisé contenant les risques et défis' className='bg-whowe' />
                {/* paragraph content */}
                <p className='paragraph-content content-ris-1'>Le projet est actuellement à la fin de la conception, donc ce que vous pouvez en voir peut évoluer. C'est-à-dire que nous sommes en train de terminer les derniers détails et nous avons tout le projet de prêt pour son développement. Pour le développement, comme vous le savez, nous faisons une campagne Kickstarter qui complètera l'aide principale venant du CNC. Cependant, le risque principal dans ce procédé est un refus de la part du CNC. Mais nous avons d'autres possibilités pour le financement principal en cas de refus.</p>
                <p className='paragraph-content content-ris-2'>A contrario, l'un des risques actuels n'en est pas un pour nous : la covid-19 n'est pas problématique pour nous. En effet, le télétravail est déjà notre façon de faire. L'évolution de la pandémie, aussi malheureux que cela soit, ne sera pas un obstacle au développement de notre jeu vidéo.</p>
            </div>
        </section>
    );
}
// Export to call it up in index.js
export default Whoweare;