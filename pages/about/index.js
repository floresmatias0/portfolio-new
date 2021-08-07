import { useEffect } from 'react'
import { useRouter } from 'next/router'

// import styles from '../../styles/About.module.css'

const About = () => {

    const router = useRouter()
    
    useEffect(()=>{
      var storage = localStorage.getItem('name')
      if(!storage){
        return router.push('/')
      } 
    },[])

    return (
        <div>
            <h1>About me</h1>
            <div>
                <p>lorem ipsum</p>  
            </div>
            
        </div>
    )
}

export default About;