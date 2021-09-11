import '../styles/globals.css'
import Navbar from '../components/navbar/Navbar'
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {

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
      <Navbar/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
