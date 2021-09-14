import { useState,useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Mati from '../../assets/images/IMG_8764(edit).jpg'
import backArrow from '../../assets/images/arrow-back.svg'
import nextArrow from '../../assets/images/arrow.svg'

import i18n from '../i18n/i18n'
import { withTranslation } from 'react-i18next'
import portugal from '../../assets/images/portugal_flags.png'
import españa from '../../assets/images/spain_flag.png'
import inglaterra from '../../assets/images/united_kingdom_flag.png'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Swal from 'sweetalert2'

const Navbar = ({t}) => {
  let router = useRouter()

  const [logged, setLogged] = useState(null)
  const [hidden, setHidden] = useState(false)

  const change = (language) =>{
    i18n.changeLanguage(language)
    Swal.fire({
      html: `<p>${t('Change language')}</p>`
    })
  }

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setLogged(localStorage.getItem("name"))
    }
  },[logged])

  return (
    <div>

    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </Head>

    <nav className={logged ? "" : "ocult"}>
      <style jsx>
        {`
          nav{
            width: 2em;
            height: 100%;
          }
          .registered, .open{
            height:100%;
            padding: 0;
            list-style: none;
            display: flex;
            flex-direction: column;
            background-color: #001529;
          }
          .ocult{
            display: none;
          }
          .open{
            width: 2em;
            margin: 0;
            justify-content: center;
            align-items: center;

          }
          .registered{
            width:6em;
            justify-content: space-between;
            margin: 0;
            padding-top: 2em;
            padding-bottom: 2em;
            transition: .4s;
          }
          li{
            width:100%;
            text-align:center;
            color: gray;
            font-family: GothamV2;
            font-size: .7rem;
          }
          .active{
            color: #FFFFFF;
          }
          li:hover{
            color: #FFFFFF;
          }
          .open li, .registered li{
            cursor: pointer;
          }
          .image{
            padding: 0.5em;
          }
        `}
      </style>

      <style jsx global>
          {`
            .test{
              border-radius:50%; 
            }
          `}
      </style>

      {logged ? (
          hidden ? (        
          <ul className='registered animate__animated animate__fadeInLeft'>
            <li className='image'>
              <Image className='test' src={Mati} alt="imgProfile" width={300} height={300} objectFit="cover" placeholder="blur"/>
            </li>
            <li>
              {/* <h2>{t('option language')}</h2> */}
                <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
                  <div onClick={() => change('pr')}>
                    <Image  src={portugal} width={32} height={32}/>
                  </div>
                  <div onClick={() => change('es')}>
                    <Image  src={españa} width={32} height={32}/>
                  </div>
                  <div onClick={() => change('en')}>
                    <Image  src={inglaterra} width={32} height={32}/>
                  </div>
                </Carousel>
            </li>
            
            <li onClick={() => setHidden(hidden ? false : true)}>
              <Image src={backArrow} alt='closeBar' width={20} height={20} />
            </li>
            <li className={router.pathname === "/about" ? "active" : ""}>
                <Link href='/about'>{t('ABOUT ME')}</Link>
            </li>
            <li className={router.pathname === "/skills" ? "active" : ""}>
                <Link href='/skills'>{t('SKILLS')}</Link>
            </li>
            <li className={router.pathname === "/certificates" ? "active" : ""}>
                <Link href='/certificates'>{t('DEGREES')}</Link>
            </li>
            <li className={router.pathname === "/contact" ? "active" : ""}>
                <Link href='contact'>{t('CONTACT')}</Link>
            </li>
            <li className={router.pathname === "/projects" ? "active" : ""}>
                <Link href='/projects'>{t('PROJECTS')}</Link>
            </li>
          </ul>
        ) : (
          <ul className='open'>
            <li onClick={() => setHidden(hidden ? false : true)}> 
              <Image src={nextArrow} alt="openBar" width={20} height={20}/>
            </li>
          </ul>
        )
      ) : ("")}
    </nav>

    </div>
  );
};

export default withTranslation()(Navbar)