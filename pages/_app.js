import '../styles/globals.css'
import Navbar from '../components/navbar/Navbar'
import Init from '../pages/index'

function MyApp({ Component, pageProps }) {

  let logged

  if (typeof window !== "undefined") {
    logged = localStorage.getItem("name")
  }

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
      {logged ? (
        <Component {...pageProps} />
      ):(
        <Init/>
      )}
      
    </div>
  )
}

export default MyApp
