import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
/* import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase'; */

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([
    {
      image: 'https://i.imgur.com/I4ByOKx.png',
      name: 'Spice Guys',
      description:
        'This is the first project that we did in small groups during the course! Here is a link for a figma demo:https://www.figma.com/proto/sTpiVTAuMYFUtQYGvINxFJ/Spice-Guys--Artsy-Portfolio-Template?node-id=29%3A100&scaling=min-zoom&page-id=24%3A396&starting-point-node-id=29%3A100&show-proto-sidebar=1'
    },
    {
      image: 'https://imgur.com/lJQIH07.png',
      name: 'Astro Boys',
      description:
        'This is the second project that we did in small groups during the course',
    },
    {
      image: 'https://imgur.com/PSsH5nD.png',
      name: 'find rubbish',
      description:
        'it was a Hackathon project that we implemented in a short time',
    },
  ])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    clearTimeout(timer)
  })

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          console.log(port)
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                {
                  <button className="btn" onClick={() => window.open(port.url)}>
                    View
                  </button>
                }
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
