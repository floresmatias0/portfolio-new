import { useEffect, useState } from 'react'
import { withTranslation } from 'react-i18next'

const Home = ({t}) => {
    
    const [logged,setLogged] = useState("")

    useEffect(() => {
      if (localStorage.getItem("name")) {
        setLogged(localStorage.getItem("name"))
      }
    },[logged])

    return (
      <div className="container">
        <style jsx>
          {`
            h1 {
              margin: 0;
            }
          `}
        </style>
        {logged ? (
          <h1>
            {t("Hi")} {logged}!!
          </h1>
        ) : (
          ""
        )}
        <div className='contentAbout'>
          <p>
            {t('text principal')}
          </p>
        </div> 
      </div>
    );
}

export default withTranslation()(Home);