import { useEffect } from 'react'
import { useRouter } from 'next/router'
// import henry from '../../assets/img/henry-certificate.png'
// import efset from '../../assets/img/efset-certificate.png'
// import utn from '../../assets/img/utn-certicate.png'

const Certificates = () => {
    const router = useRouter()
    
    useEffect(()=>{
      var storage = localStorage.getItem('name')
      if(!storage){
        return router.push('/')
      } 
    },[])

    // const goCertificateEfset = () => {
    //     window.open('https://www.efset.org/cert/vCMdaz')
    // }

    // const goCertificateUtn = () => {
    //     window.open('https://res.cloudinary.com/djnhaprmj/image/upload/v1619947730/utn-certicate_hdzya1.png')
    // }

    // const goCertificateHenry = () => {
    //     window.open('https://certificates.soyhenry.com/cert?id=797fa144-b34c-4383-b58c-05b1a4db28ea')
    // }

    return (
        <div>
            <div >
                <div>
                    {/* <img src={henry} alt='henry-certificate' /> */}
                    <button >view certicate</button>
                </div>
                <div>
                    {/* <img src={utn} alt='utn-certificate' /> */}
                    <button >view certicate</button>
                </div>
                <div>
                    {/* <img src={efset} alt='efset-certificate' /> */}
                    <button >view certicate</button>
                </div> 
            </div>

        </div>
    )
}

export default Certificates;