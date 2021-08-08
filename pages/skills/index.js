import Image from "next/image"

import css from "../../assets/images/css.png"
import express from "../../assets/images/express.png"
import html from "../../assets/images/html.png"
import javascript from "../../assets/images/javascript.png"
import nodejs from "../../assets/images/nodejs.png"
import postgresql from "../../assets/images/postgresql.png"
import react from "../../assets/images/react.png"
import sequelize from "../../assets/images/sequelize.png"
import nextjs from '../../assets/images/nextjs.png'
import sqlServer from '../../assets/images/microsoft_sqlserver.png'

const Skills = () => {
  return (
    <div className='container'>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          ul{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding: 0;
          }
          .contentCards{
            width: 40em;
          }
        `}
      </style>
      <h1>Skills</h1>
      <div className='contentCards'>
        <ul>
          <Image src={react} alt="react" width={90} height={90} />
          <Image src={express} alt="express" width={90} height={90} />
          <Image src={nodejs} alt="nodejs" width={90} height={90} />
          <Image src={sequelize} alt="sequelize" width={90} height={90} />
          <Image src={nextjs} alt='nextjs' width={90} height={90} objectFit='cover'/>
        </ul>
        <ul>
          <Image src={javascript} alt="javascript" width={90} height={90} />
          <Image src={css} alt="css" width={90} height={90} />
          <Image src={html} alt="html" width={90} height={90} />
          <Image src={postgresql} alt="postgresql" width={90} height={90} />
          <Image src={sqlServer} alt='sql-server' width={90} height={90} objectFit='cover' objectPosition='50% 50%'/>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
