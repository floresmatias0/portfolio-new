import { useState } from "react";
import Slider from "react-slick";
import { pokemon,videogame,weather,movies,marvel,rickandmorty } from "./helper/Images";
import Head from "next/head";


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

  let settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    return (
      <div className='container'>
        <Head>
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <h1>Own projects</h1>
          <div className="contentSlider">
            {slider && slider === 1 ? (
              <div className="contentProject">
              <h3>Pokemon</h3>
              <button className="buttonPage" onClick={() => window.location.href=`${pages.pokemon}`}>Go page</button>
              <Slider {...settings}>
                {pokemon.map((el,index) => {
                  return (
                    <div key={index}>
                      <img className="imageSlider" src={el.src} alt="prev"/>
                    </div>
                  )
                })}
              </Slider>
              <div className="skills">
                <ul>
                  <li>ReactJS</li>
                  <li>React-Redux</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>Sequelize</li>
                  <li>CSS modules</li>
                </ul>
              </div>
              </div>   
            ) : slider === 2 ? (
              <div className="contentProject">
              <h3>Videogames</h3>
              <button className="buttonPage" onClick={() => window.location.href=`${pages.videogames}`}>Go page</button>
              <Slider {...settings}>
                {videogame.map((el,index) => {
                  return (
                    <div key={index}>
                      <img className="imageSlider" src={el.src} alt="prev"/>
                    </div>
                  )
                })}
              </Slider> 
              <div className="skills">
                <ul>
                  <li>ReactJS</li>
                  <li>React-Redux</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>Sequelize</li>
                  <li>CSS modules</li>
                </ul>
              </div>
              </div>
            ) : slider === 3 ? (
              <div className="contentProject">
              <h3>Weather</h3>
              <button className="buttonPage" onClick={() => window.location.href=`${pages.clima}`}>Go page</button>
              <Slider {...settings}>
                {weather.map((el,index) => {
                  return (
                    <div key={index}>
                      <img className="imageSlider" src={el.src} alt="prev"/>
                    </div>
                  )
                })}
              </Slider> 
              <div className="skills">
                <ul>
                  <li>ReactJS</li>
                  <li>React-Redux</li>
                  <li>CSS</li>
                </ul>
              </div>
              </div>
            ): slider === 4 ? (
              <div className="contentProject">
              <h3>Movies</h3>
              <button className="buttonPage" onClick={() => window.location.href=`${pages.movies}`}>Go page</button>
              <Slider {...settings}>
                {movies.map((el,index) => {
                  return (
                    <div key={index}>
                      <img className="imageSlider" src={el.src} alt="prev"/>
                    </div>
                  )
                })}
              </Slider> 
              <div className="skills">
                <ul>
                  <li>ReactJS</li>
                  <li>React-Redux</li>
                  <li>CSS</li>
                </ul>
              </div>
              </div>
            ): slider === 5 ? (
              <div className="contentProject">
              <h3>Marvel</h3>
              <button className="buttonPage" onClick={() => window.location.href=`${pages.marvel}`}>Go page</button>
              <Slider {...settings}>
                {marvel.map((el,index) => {
                  return (
                    <div key={index}>
                      <img className="imageSlider" src={el.src} alt="prev"/>
                    </div>
                  )
                })}
              </Slider> 
              <div className="skills">
                <ul>
                  <li>HTML</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                </ul>
              </div>
              </div>
            ): slider === 6 ? (
              <div className="contentProject">
              <h3>Rick and Morty</h3>
              <button className="buttonPage" onClick={() => window.location.href=`${pages.rickandmorty}`}>Go page</button>
              <Slider {...settings}>
                {rickandmorty.map((el,index) => {
                  return (
                    <div key={index}>
                      <img className="imageSlider" src={el.src} alt="prev"/>
                    </div>
                  )
                })}
              </Slider> 
              <div className="skills">
                <ul>
                  <li>ReactJS</li>
                  <li>React-Redux</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>GraphQL</li>
                  <li>Firebase</li>
                  <li>CSS</li>
                </ul>
              </div>
              </div>
            ):(<></>)}
            
          </div>
          <div className="buttonSlider">
            <button className="buttonSelection" onClick={() => setSlider(1)}>1</button>
            <button className="buttonSelection" onClick={() => setSlider(2)}>2</button>
            <button className="buttonSelection" onClick={() => setSlider(3)}>3</button>
            <button className="buttonSelection" onClick={() => setSlider(4)}>4</button>
            <button className="buttonSelection" onClick={() => setSlider(5)}>5</button>
            <button className="buttonSelection" onClick={() => setSlider(6)}>6</button>
          </div>

      </div>
    );
  }
  
export default Projects;