import { useEffect,useState } from "react"
import Image from 'next/image'

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = ({props}) => {
    
    const [images, setImages] = useState()

    useEffect(() => {
        if(props){
            setImages(props)
        }
    },[images,props])

    return (
        <Carousel showThumbs={false}>
            {images && images.length > 0 ? images.map((el,index) => {
                return (
                    <div key={index} className="imageSlider">
                        <Image src={el.src} alt="prev" width="350" height="100"/>
                    </div>
                )
            }) : ""}
        </Carousel>
    )

}

export default Slider