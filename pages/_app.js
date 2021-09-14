import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';

import Navbar from '../components/navbar/Navbar'

import '../styles/globals.css'
import '../styles/index.scss';
import '../components/i18n/i18n';

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const [logged,setLogged] = useState(null)

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setLogged(localStorage.getItem("name"))
    }
  },[logged])

  return (
    <div>
      <style jsx>
        {`
          div{
            width:100%;
            display: flex;
            flex-direction: row;
          }
        `}
      </style>
      {
        router && router.pathname !== '/' && logged ? (
        <>
          <Navbar/>
          <Component {...pageProps} /> 
        </>
       ) : router && router.pathname === '/' && logged ? router.push('/home') && (
        <>
          <Navbar/>
          <Component {...pageProps} /> 
        </>
       ) : router && router.pathname === '/' && !logged ? (
          <Component {...pageProps} /> 
       ) :  
        router && router.pathname !== '/' && !logged ? router.push('/') && (
          <Component {...pageProps}/>
        ) : (
          <></>
        )
      }
    </div>
  )
}

export default MyApp
