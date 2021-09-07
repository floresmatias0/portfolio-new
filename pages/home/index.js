import { useEffect, useState } from 'react'

const Home = () => {
    
    const [logged,setLogged] = useState("")

    useEffect(() => {
      if (localStorage.getItem("name")) {
        setLogged(localStorage.getItem("name"))
      }
    },[])

    return (
        <div className="container">
            <style jsx>
                {`
                    h1{
                      margin: 0;  
                    } 
                `}
            </style>
            {logged ? <h1>Hi {logged}!!</h1> : ""}
        </div>
        
    )
}

export default Home;