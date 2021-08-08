// import animaniac from '../../assets/img/animaniacs.gif'
// import pokemon from '../../assets/img/pokemon.gif'
// import ombdMovies from '../../assets/img/ombdMovies.gif'
// import wheater from '../../assets/img/wheater-app.gif'

// import styles from '../../styles/Projects.module.css'

const Projects = () => {

    // var proyect = [animaniac,pokemon,wheater,ombdMovies]
  
    const animaniacLink = () => window.open('http://104.236.92.12/') 
    const pokemonLink = () => window.open('http://159.89.44.205/') 
    const wheaterLink = () => window.open('https://floresmatias0.github.io/weather-app/')
    const ombdMoviesLink = () => window.open('https://floresmatias0.github.io/ombdMovies/')

  
    return (
      <div className='container'>
        <style jsx>
          {`
            .container{
              width:100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
          <div>
            <ul>
              <li>
                <h2>Projects</h2>
                {/* <img id='slider' src={proyect[0]} alt='gif'/> */}
                <h3   onClick={animaniacLink}></h3>
              </li>
            </ul>
            <ul>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
            </ul>
          </div>
      </div>
    );
  }
  
export default Projects;