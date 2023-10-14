// import libraries
import { useTranslation } from 'react-i18next';
// import assets
import kickgoalsbg from '../../assets/backgrounds/ks-goalsbg.webp';
import kickbudgetbg from '../../assets/backgrounds/ks-budgetbg.webp';
import kickplanbg from '../../assets/backgrounds/ks-planbg.webp';
// import css
import '../../styles/kickstarter.scss';

// Kickstarter function
const Kickstarter = ({isEnglish}) => {

    const {t} = useTranslation();

    return (
        <section className='kickstarter-component'>
            {/* why kickstater container */}
            <div className='ks-container'>
                {/* background image */}
                <img src={`/assets/${isEnglish}/kickstarterbg.webp`} alt={t('ks.alt.kickbg')} className='container-why' />
                {/* paragraph content */}
                <p className='container-content content-1'>{t('ks.why.1.content1')}<strong>{t('ks.why.1.content2')}</strong>{t('ks.why.1.content3')}</p>
                <p className='container-content content-2'>{t('ks.why.2.content1')}<strong>{t('ks.why.2.content2')}</strong>{t('ks.why.2.content3')}</p>
                <p className='container-content content-3'>{t('ks.why.3')}</p>
            </div>
            {/* pledges container */}
            <div className='ks-container'>
                {/* background image */}
                <img src={`/assets/${isEnglish}/ks-pledgesbg.webp`} alt={t('ks.alt.pledgesbg')} className='container-build' />
                {/* list content with custom bulletpoint */}
                <ul className='container-content container-li'>
                    <li>{t('ks.pledges.1')}</li>
                    <li>{t('ks.pledges.2')}</li>
                    <li>{t('ks.pledges.3')}</li>
                    <li>{t('ks.pledges.4')}</li>
                    <li>{t('ks.pledges.5')}</li>
                    <li>{t('ks.pledges.6')}</li>
                    <li>{t('ks.pledges.7')}</li>
                    <li>{t('ks.pledges.8')}</li>
                    <li>{t('ks.pledges.9')}</li>
                    <li>{t('ks.pledges.10')}</li>
                    <li>{t('ks.pledges.11')}</li>
                    <li>{t('ks.pledges.12.1')}<br></br>{t('ks.pledges.12.2')}</li>
                    <li>{t('ks.pledges.13.1')}<br></br>{t('ks.pledges.13.2')}</li>
                    <li>{t('ks.pledges.14.1')}<br></br>{t('ks.pledges.14.2')}</li>
                    <li>{t('ks.pledges.15.1')}<br></br>{t('ks.pledges.15.2')}</li>
                    <p>{t('ks.pledges.star')}</p>
                </ul>
            </div>
            {/* stretch goals container */}
            <div className='ks-container'>
                {/* background image */}
                <img src={kickgoalsbg} alt={t('ks.alt.goalsbg')} className='container-build' />
                {/* list content with custom bulletpoint */}
                <ul className='container-content container-li li-goals'>
                    <li>{t('ks.goals.1')}</li>
                    <li>{t('ks.goals.2')}</li>
                    <li>{t('ks.goals.3')}</li>
                    <li>{t('ks.goals.4')}</li>
                    <li>{t('ks.goals.5')}</li>
                    <li>{t('ks.goals.6')}</li>
                </ul>
            </div>
            {/* budget container */}
            <div className='ks-container'>
                {/* background image */}
                <img src={kickbudgetbg} alt={t('ks.alt.budgetbg')} className='container-build' />
                {/* paragraph content with custom place */}
                <p className='container-content content-budg budg-pub'>{t('ks.budget.1')}</p>
                <p className='container-content content-budg budg-adm'>{t('ks.budget.2')}</p>
                <p className='container-content content-budg budg-ks'>{t('ks.budget.3')}</p>
                <p className='container-content content-budg budg-dev'>{t('ks.budget.4')}</p>
            </div>
            {/* planning container */}
            <div className='ks-container'>
                {/* background image */}
                <img src={kickplanbg} alt={t('ks.alt.planbg')} className='container-build' />
                {/* list content with custom bulletpoint */}
                <ul className='container-content container-li li-plan'>
                    <li>{t('ks.plan.1.title')}<br></br>{t('ks.plan.1.access')}</li>
                    <li>{t('ks.plan.2.title')}<br></br>{t('ks.plan.2.access')}</li>
                    <li>{t('ks.plan.3.title')}<br></br>{t('ks.plan.3.access')}</li>
                    <li>{t('ks.plan.4.title')}<br></br>{t('ks.plan.4.access')}</li>
                    <p>{t('ks.plan.star.1')}<br></br>{t('ks.plan.star.2')}</p>
                </ul>
            </div>
        </section>
    );
}
// Export to call it up in index.js
export default Kickstarter;