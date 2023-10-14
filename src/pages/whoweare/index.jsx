// import libraries
import { useTranslation } from 'react-i18next';
// import css
import '../../styles/whoweare.scss';

// Whoweare function
const Whoweare = ({isEnglish}) => {

    const {t} = useTranslation();

    return (
        <section className='whowe-component'>
            {/* container */}
            <div className='whowe-container'>
                {/* background image */}
                <img src={`/assets/${isEnglish}/who-inspibg.webp`} alt={t('whoweare.alt.inspi')} className='bg-whowe' />
                {/* paragraph content */}
                <p className='paragraph-content content-ins-1'>{t('whoweare.inspi.content1')}</p>
                <p className='paragraph-content content-ins-2'>{t('whoweare.inspi.content2')}</p>
            </div>
            {/* container */}
            <div className='whowe-container'>
                {/* background image */}
                <img src={`/assets/${isEnglish}/who-valuesbg.webp`} alt={t('whoweare.alt.values')} className='bg-whowe' />
                {/* paragraph content */}
                <p className='paragraph-content content-val-1'>{t('whoweare.values.content1')}</p>
                <p className='paragraph-content content-val-2'>{t('whoweare.values.content2')}</p>
                <p className='paragraph-content content-val-3'>{t('whoweare.values.content3')}</p>
            </div>
            {/* container */}
            <div className='whowe-container'>
                {/* background image */}
                <img src={`/assets/${isEnglish}/who-risksbg.webp`} alt={t('whoweare.alt.risks')} className='bg-whowe' />
                {/* paragraph content */}
                <p className='paragraph-content content-ris-1'>{t('whoweare.risks.content1')}</p>
                <p className='paragraph-content content-ris-2'>{t('whoweare.risks.content2')}</p>
            </div>
        </section>
    );
}
// Export to call it
export default Whoweare;