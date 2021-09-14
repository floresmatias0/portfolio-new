import { withTranslation } from 'react-i18next';

const About = ({t}) => {

  return (
    <div className="container">
      <h1>{t('About')}</h1>
      <div className='contentAbout'>
        <p>{t('Text about')}</p>
      </div>
    </div>
  );
};

export default withTranslation()(About);
