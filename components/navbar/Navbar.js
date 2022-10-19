import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Mati from '../../assets/images/IMG_8764(edit).jpg';
import backArrow from '../../assets/images/arrow-back.svg';
import nextArrow from '../../assets/images/arrow.svg';

import { withTranslation } from 'react-i18next';

import Swal from 'sweetalert2';

const Navbar = ({t}) => {
  let router = useRouter()

  const [logged, setLogged] = useState(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setLogged(localStorage.getItem("name"))
    }
  },[logged])

  const deleteName = () => {
    let timerInterval

    if(logged){
      localStorage.clear()
      
      Swal.fire({
        html: 'Seras redirigido en... <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then(() => {
        return router.reload()
      })
    }
  }
  return (
    <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </Head>

    <nav className={logged ? "" : "ocult"}>
      <style jsx global>
          {`
            .test{
              border-radius:50%; 
            }
          `}
      </style>

      {logged && (
        <ul className={`${hidden ? 'registered' : 'open'}`} data-show={hidden}>
          {/* ICON OPEN/CLOSE */}
          <li onClick={() => setHidden(hidden ? false : true)}>
            <Image src={hidden ? backArrow : nextArrow} alt='closeBar' width={25} height={25} />
          </li>
          {/* IMAGE AVATAR */}
          <li className='image'>
            <Image className='test' src={Mati} alt="imgProfile" width={400} height={400} objectFit="cover" placeholder="blur"/>
          </li>
          {/* ROUTES */}
          <li>
            <ul>
              <li className={router.pathname === "/home" ? "route active" : "route"}>
                  <Link href='/home'>{t('HOME')}</Link>
              </li>
              <li className={router.pathname === "/about" ? "route active" : "route"}>
                  <Link href='/about'>{t('ABOUT ME')}</Link>
              </li>
              <li className={router.pathname === "/skills" ? "route active" : "route"}>
                  <Link href='/skills'>{t('SKILLS')}</Link>
              </li>
              <li className={router.pathname === "/certificates" ? "route active" : "route"}>
                  <Link href='/certificates'>{t('DEGREES')}</Link>
              </li>
              <li className={router.pathname === "/contact" ? "route active" : "route"}>
                  <Link href='contact'>{t('CONTACT')}</Link>
              </li>
              <li className={router.pathname === "/projects" ? "route active" : "route"}>
                  <Link href='/projects'>{t('PROJECTS')}</Link>
              </li>
              {/* EXIT */}
              <li className='exit' onClick={deleteName}>
                {t('EXIT')}
              </li>
            </ul>
          </li>
        </ul>
      )}
    </nav>

    </div>
  );
};

export default withTranslation()(Navbar)