import Image from "next/image"

import { useState } from 'react'

import css from '../../assets/images/css.png'
import express from '../../assets/images/express.png'
import html from '../../assets/images/html.png'
import javascript from '../../assets/images/javascript.png'
import nodejs from '../../assets/images/nodejs.png'
import postgresql from '../../assets/images/postgresql.png'
import react from '../../assets/images/react.png'
import sequelize from '../../assets/images/sequelize.png'
import nextjs from '../../assets/images/nextjs.png'
import sqlServer from '../../assets/images/microsoft_sqlserver.png'
import interrogacion from '../../assets/images/interrogacion-img.png'

import { handleChange } from './helper/switchSkills'

const Skills = () => {

  const [cards, setCards] = useState({
    react: false,
    express: false,
    node: false,
    sequelize: false,
    next: false,
    javascript: false,
    css: false,
    html: false,
    postgres: false,
    server: false
  })

  return (
    <div className='container'>
      <h1>Learned skills</h1>
      <div className='contentCards'>
        <ul className="cardsUp">
          <li onClick={() => handleChange('react', cards, setCards)} className={cards.react ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className='image' src={cards.react ? react : interrogacion} alt="react" />
          </li>
          <li onClick={() => handleChange('express', cards, setCards)} className={cards.express ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className='image' src={cards.express ? express : interrogacion} alt="express" />
          </li>
          <li onClick={() => handleChange('node', cards, setCards)} className={cards.node ? ` animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className='image' src={cards.node ? nodejs : interrogacion} alt="nodejs" />
          </li>
          <li onClick={() => handleChange('sequelize', cards, setCards)} className={cards.sequelize ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className='image' src={cards.sequelize ? sequelize : interrogacion} alt="sequelize" />
          </li>
          <li onClick={() => handleChange('next', cards, setCards)} className={cards.next ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className='image' src={cards.next ? nextjs : interrogacion} alt='nextjs' />
          </li>
        </ul>
        <ul className="cardsDown">
          <li onClick={() => handleChange('javascript', cards, setCards)} className={cards.javascript ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className='image' src={cards.javascript ? javascript : interrogacion} alt="javascript" />
          </li>
          <li onClick={() => handleChange('css', cards, setCards)} className={cards.css ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className='image' src={cards.css ? css : interrogacion} alt="css" />
          </li>
          <li onClick={() => handleChange('html', cards, setCards)} className={cards.html ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className='image' src={cards.html ? html : interrogacion} alt="html" />
          </li>
          <li onClick={() => handleChange('postgres', cards, setCards)} className={cards.postgres ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className='image' src={cards.postgres ? postgresql : interrogacion} alt="postgresql" />
          </li>
          <li onClick={() => handleChange('server', cards, setCards)} className={cards.server ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className='image' src={cards.server ? sqlServer : interrogacion} alt='sql-server' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
