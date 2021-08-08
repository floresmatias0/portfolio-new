import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Mati from '../../assets/images/mati.png'

export default function Navbar () {
  let logged
  let router = useRouter()
  
  if (typeof window !== "undefined") {
    logged = localStorage.getItem("name")
  }
  
  const [hidden, setHidden] = useState(false)

  return (
    <>
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
            height: 100vh;
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
          .open li{
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
            <li style={{cursor: "pointer"}} onClick={() => setHidden(hidden ? false : true)}>
              ←
            </li>
            <li>
              <a className={router.pathname === "/about" ? "active" : ""}>
                <Link href='/about'>About me</Link>
              </a>
            </li>
            <li>
              <a className={router.pathname === "/skills" ? "active" : ""}>
                <Link href='/skills'>Skills</Link>
              </a>
            </li>
            <li>
              <a className={router.pathname === "/projects" ? "active" : ""}>
                <Link href='/projects'>Projects</Link>
              </a>
            </li>
            <li>
              <a className={router.pathname === "/certificates" ? "active" : ""}>
                <Link href='/certificates'>Certificates</Link>
              </a>
            </li>
            <li>
              <a className={router.pathname === "/contact" ? "active" : ""}>
                <Link href='contact'>Contact me</Link>
              </a>
            </li>
          </ul>
        ) : (
          <ul className='open'>
            <li onClick={() => setHidden(hidden ? false : true)}> → </li>
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
    </>
  );
};
