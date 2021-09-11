import Image from "next/image"

import { useState,useEffect } from 'react'

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
import toBeContinue from '../../assets/images/continue.jpg'
import power from '../../assets/images/PowerBI.jpg'

import { handleChange } from './helper/switchSkills'
import Swal from "sweetalert2"

const Skills = () => {

  const [allCards, setAllCards] = useState(false)
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
    server: false,
    continue: false,
    powerBi: false
  })

  useEffect(() => {
        cards.react &&
        cards.express &&
        cards.node &&
        cards.sequelize &&
        cards.next &&
        cards.javascript &&
        cards.css &&
        cards.html &&
        cards.postgres &&
        cards.server &&
        cards.continue &&
        cards.powerBi ?
        setAllCards(true) :
        setAllCards(false)

    if(allCards){
      Swal.fire({
        imageUrl: 'https://c.tenor.com/O9FAhLpdUqIAAAAC/congrats-fairly-odd-parents.gif'
      })
    }
  },[allCards,cards])

  return (
    <div className='container'>
      <h1>Learned skills</h1>
      <div className='contentCards'>
        <ul className="cardsUp">
          <li onClick={() => handleChange('react', cards, setCards)} className={cards.react ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className={cards.react  ? 'image' : 'animate__animated animate__heartBeat animate__infinite animate__slow'}  src={cards.react ? react : interrogacion} alt="react" />
          </li>
          <li onClick={() => handleChange('express', cards, setCards)} className={cards.express ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className={cards.express ? 'image' : 'animate__animated animate__heartBeat animate__infinite animate__slow'}  src={cards.express ? express : interrogacion} alt="express" />
          </li>
          <li onClick={() => handleChange('node', cards, setCards)} className={cards.node ? ` animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className={cards.node ? 'image' : 'animate__animated animate__heartBeat animate__infinite animate__slow'}  src={cards.node ? nodejs : interrogacion} alt="nodejs" />
          </li>
        </ul>
        <ul className="cardsUp">
          <li onClick={() => handleChange('javascript', cards, setCards)} className={cards.javascript ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className={cards.javascript ? 'image' : 'animate__animated animate__heartBeat animate__infinite animate__slow'}  src={cards.javascript ? javascript : interrogacion} alt="javascript" />
          </li>
          <li onClick={() => handleChange('css', cards, setCards)} className={cards.css ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className={cards.css ? 'image' : 'animate__animated animate__heartBeat animate__infinite animate__slow'}  src={cards.css ? css : interrogacion} alt="css" />
          </li>
          <li onClick={() => handleChange('html', cards, setCards)} className={cards.html ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className={cards.html ? 'image' : 'animate__animated animate__heartBeat animate__infinite animate__slow'} src={cards.html ? html : interrogacion} alt="html" />
          </li>
        </ul>
        <ul className="cardsDown">
          <li onClick={() => handleChange('postgres', cards, setCards)} className={cards.postgres ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className={cards.postgres ? 'image' : 'animate__animated animate__heartBeat animate__infinite animate__slow'} src={cards.postgres ? postgresql : interrogacion} alt="postgresql" />
          </li>
          <li onClick={() => handleChange('server', cards, setCards)} className={cards.server ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className={cards.server ? 'image' : 'animate__animated animate__heartBeat animate__infinite animate__slow'} src={cards.server ? sqlServer : interrogacion} alt='sql-server' />
          </li>
          <li onClick={() => handleChange('sequelize', cards, setCards)} className={cards.sequelize ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className={cards.sequelize ? 'image' : 'animate__animated animate__heartBeat animate__infinite animate__slow'} src={cards.sequelize ? sequelize : interrogacion} alt="sequelize" />
          </li>
        </ul>
        <ul className="cardsDown">
          <li onClick={() => handleChange('next', cards, setCards)} className={cards.next ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className={cards.next ? 'image' : 'animate__animated animate__heartBeat animate__infinite animate__slow'} src={cards.next ? nextjs : interrogacion} alt='nextjs' />
          </li>
          <li onClick={() => handleChange('powerBi', cards, setCards)} className={cards.powerBi ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className={cards.powerBi ? 'image' : 'animate__animated animate__heartBeat animate__infinite animate__slow'} src={cards.powerBi ? power : interrogacion} alt='power-Bi' />
          </li>
          <li onClick={() => handleChange('continue', cards, setCards)} className={cards.continue ? `animate__animated animate__flipInY animate__slow	2s` : ''}>
            <Image className={cards.continue ? 'image' : 'animate__animated animate__heartBeat animate__infinite animate__slow'} src={cards.continue ? toBeContinue : interrogacion} alt='toBeContinue...' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
