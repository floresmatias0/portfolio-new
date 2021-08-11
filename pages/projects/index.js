const Projects = () => {
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