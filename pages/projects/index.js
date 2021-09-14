import { useState } from "react";
import { pokemon,videogame,weather,movies,marvel,rickandmorty } from "../../helper/Images";
import { withTranslation } from "react-i18next";
import Slider from '../../components/slider/Slider'


const Projects = ({t}) => {

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
        <h1>{t('Own projects')}</h1>
          <div className="contentProject">
            { 
              slider === 1 ? <h2 style={{background: "none",marginBottom: ".5em"}}>Pokemon</h2> :
              slider === 2 ? <h2 style={{background: "none",marginBottom: ".5em"}}>Videogames</h2> :
              slider === 3 ? <h2 style={{background: "none",marginBottom: ".5em"}}>Marvel</h2> :
              slider === 4 ? <h2 style={{background: "none",marginBottom: ".5em"}}>Weather</h2> :
              slider === 5 ? <h2 style={{background: "none",marginBottom: ".5em"}}>Movies</h2> :
              slider === 6 ? <h2 style={{background: "none",marginBottom: ".5em"}}>Rick and Morty</h2> :
              ""
            }
            {
              slider === 1 ? <Slider props={pokemon}/> :
              slider === 2 ? <Slider props={videogame}/> : 
              slider === 3 ? <Slider props={marvel}/> : 
              slider === 4 ? <Slider props={weather}/> : 
              slider === 5 ? <Slider props={movies}/> : 
              slider === 6 ? <Slider props={rickandmorty}/> : 
              ""
            }
            <button 
              className="buttonPage" 
              onClick={ 
                slider === 1 ? () => window.open(`${pages.pokemon}`) :
                slider === 2 ? () => window.open(`${pages.videogames}`) :
                slider === 3 ? () => window.open(`${pages.marvel}`) :
                slider === 4 ? () => window.open(`${pages.clima}`) :
                slider === 5 ? () => window.open(`${pages.movies}`) :
                slider === 6 ? () => window.open(`${pages.rickandmorty}`) : ""}>
                  {t('Go page')}
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
  
export default withTranslation()(Projects);