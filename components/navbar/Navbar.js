import { useState,useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Mati from '../../assets/images/IMG_8764(edit).jpg'
import backArrow from '../../assets/images/back-arrow.png'
import nextArrow from '../../assets/images/next-arrow.png'

export default function Navbar () {
  let router = useRouter()

  const [logged, setLogged] = useState("")
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setLogged(localStorage.getItem("name"))
    }
  },[])

  return (
    <div>

    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </Head>

    <nav>

      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
          nav{
            width: 2em;
            height: 100%;
          }
          .registered, .home, .open{
            height:100%;
            padding: 0;
            list-style: none;
            display: flex;
            flex-direction: column;
            background-color: #001529;
          }
          .open, .home{
            width: 2em;
            margin: 0;
          }
          .open{
            justify-content: center;
            align-items: center;
          }
          .registered{
            width:6em;
            justify-content: space-between;
            font-family: 'Lobster', cursive;
            transition-duration: 250ms;
            margin: 0;
            padding-top: 2em;
            padding-bottom: 2em;
          }
          li{
            width:100%;
            text-align:center;
            color: gray;
          }
          .active{
            color: #FFFFFF;
            text-decoration: underline #FFFFFF;
          }
          li:hover{
            color: #FFFFFF;
          }
          .open li, .registered li{
            cursor: pointer;
          }
          .home{
            justify-content: space-around;
            font-family: 'Lobster', cursive;
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
            <li onClick={() => setHidden(hidden ? false : true)}>
              <Image src={backArrow} alt='closeBar' width={20} height={20} />
            </li>
            <li className={router.pathname === "/about" ? "active" : ""}>
                <Link href='/about'>About me</Link>
            </li>
            <li className={router.pathname === "/skills" ? "active" : ""}>
                <Link href='/skills'>Skills</Link>
            </li>
            <li className={router.pathname === "/projects" ? "active" : ""}>
                <Link href='/projects'>Projects</Link>
            </li>
            <li className={router.pathname === "/certificates" ? "active" : ""}>
                <Link href='/certificates'>Certificates</Link>
            </li>
            <li className={router.pathname === "/contact" ? "active" : ""}>
                <Link href='contact'>Contact me</Link>
            </li>
          </ul>
        ) : (
          <ul className='open'>
            <li onClick={() => setHidden(hidden ? false : true)}> 
              <Image src={nextArrow} alt="openBar" width={20} height={20}/>
            </li>
          </ul>
        )
      ) : (
        <ul className='home'>
          <li>H</li>
          <li>O</li>
          <li>M</li>
          <li>E</li>
        </ul>
      )}
    </nav>

    </div>
  );
};
