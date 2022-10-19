import { useState } from 'react';
import Image from 'next/image';
import portugal from '../../assets/images/portugal_flags.png';
import españa from '../../assets/images/spain_flag.png';
import inglaterra from '../../assets/images/united_kingdom_flag.png';
import mundo from '../../assets/images/globo.png'
import i18n from '../i18n/i18n';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const Language = () => {
    const { t } = useTranslation();

    const [showLang, setShowLang] = useState(false);

    const change = (language) =>{
        i18n.changeLanguage(language)
        Swal.fire({
          icon: 'success',
          html: `<p>${t('Change language')}</p>`
        })
    };

    return (
        <div className='container_language'>
            <ul className='lang_list'>
                <li className='content_icon_world' onClick={() => setShowLang(!showLang)}>
                    <Image className='icon_world' src={mundo} alt="mundo-icon" width={50} height={50}/>
                </li>
                {showLang && (
                    <>
                        <li className='content_flag_england animate__animated animate__fadeInDown'  onClick={() => change('en')}>
                            {/* <span>ENGLISH</span> */}
                            <Image className='flag_england' src={inglaterra} alt="flag-england" width={40} height={40}/>
                        </li>
                        <li className='content_flag_españa animate__animated animate__fadeInDown' onClick={() => change('es')}>
                            {/* <span>ESPAÑOL</span> */}
                            <Image className='flag_españa' src={españa} alt="flag-españa" width={40} height={40}/>
                        </li>
                        <li className='content_flag_portugal animate__animated animate__fadeInDown' onClick={() => change('pr')}>
                            {/* <span>PORTUGAIS</span> */}
                            <Image className='flag_portugal' src={portugal} alt="flag-portugal" width={40} height={40}/>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );

}

export default Language;