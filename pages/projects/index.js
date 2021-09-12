import { useState } from "react";
import Image from "next/image";
import { pokemon,videogame,weather,movies,marvel,rickandmorty } from "./helper/Images";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Projects = () => {

  const [slider, setSlider] = useState(1)

  let pages = {
    videogames: "https://pi-videogames-black.vercel.app/",
    pokemon: "https://pi-pokemon-murex.vercel.app/",
    marvel: "https://pi-marvel.000webhostapp.com/",
    clima: "https://floresmatias0.github.io/weather-app/",
    movies: "https://floresmatias0.github.io/ombdMovies/",
    rickandmorty: "https://rickandmorty-c69c5.web.app/"
  }

    return (
      <div className='container'>
      <style jsx global>
        {`
        container{
          z-index: 1;
        }
        `}
      </style>
        <h1>Own projects</h1>
          <div className="contentProject">
            { 
              slider === 1 ? <h2>Pokemon</h2> :
              slider === 2 ? <h2>Videogames</h2> :
              slider === 3 ? <h2>Marvel</h2> :
              slider === 4 ? <h2>Weather</h2> :
              slider === 5 ? <h2>Movies</h2> :
              slider === 6 ? <h2>Rick and Morty</h2> :
              ""
            }
            <Carousel showThumbs={false}>
              {slider === 1 ? pokemon.map((el,index) => {
                return (
                  <div key={index} className="imageSlider">
                    <Image src={el.src} alt="prev" width="350" height="100"/>
                  </div>
                )
              }) : slider === 2 ? videogame.map((el,index) => {
                return (
                  <div key={index} className="imageSlider">
                    <Image src={el.src} alt="prev" width="350" height="100"/>
                  </div>
                )
              }) : slider === 3 ? marvel.map((el,index) => {
                return (
                  <div key={index} className="imageSlider">
                    <Image src={el.src} alt="prev" width="350" height="100"/>
                  </div>
                )
              }) : slider === 4 ? weather.map((el,index) => {
                return (
                  <div key={index} className="imageSlider">
                    <Image src={el.src} alt="prev" width="350" height="100"/>
                  </div>
                )
              }) : slider === 5 ? movies.map((el,index) => {
                return (
                  <div key={index} className="imageSlider">
                    <Image src={el.src} alt="prev" width="350" height="100"/>
                  </div>
                )
              }) : slider === 6 ? rickandmorty.map((el,index) => {
                return (
                  <div key={index} className="imageSlider">
                    <Image src={el.src} alt="prev" width="350" height="100"/>
                  </div>
                )
              }) : ""}
            </Carousel>
            <button 
              className="buttonPage" 
              onClick={ 
                slider === 1 ? () => window.location.href=`${pages.pokemon}` :
                slider === 2 ? () => window.location.href=`${pages.videogames}` :
                slider === 3 ? () => window.location.href=`${pages.marvel}` :
                slider === 4 ? () => window.location.href=`${pages.clima}` :
                slider === 5 ? () => window.location.href=`${pages.movies}` :
                slider === 6 ? () => window.location.href=`${pages.rickandmorty}` : ""}>
                  Go page
            </button>
            <div>
              <button className="buttonSelection" onClick={() => setSlider(1)}>1</button>
              <button className="buttonSelection" onClick={() => setSlider(2)}>2</button>
              <button className="buttonSelection" onClick={() => setSlider(3)}>3</button>
              <button className="buttonSelection" onClick={() => setSlider(4)}>4</button>
              <button className="buttonSelection" onClick={() => setSlider(5)}>5</button>
              <button className="buttonSelection" onClick={() => setSlider(6)}>6</button>
            </div>
        </div>
      </div>
    );
  }
  
export default Projects;