import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import logoTitle from '../../assets/images/logo-s.png'
import logo from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [
    'N',
    'a',
    'g',
    'y',
    <img
      src={logoTitle}
      style={{ paddingLeft: -10 }}
      alt="JavaScript Developer Name, Web Developer Name"
    />,
    'o',
    'l',
    'y',
    'm',
    'o',
    's',
    'i',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>{' '}
            <span className={`${letterClass} _13`}>A</span>
            <span className={`${letterClass} _14`}>n</span>
            <span className={`${letterClass} _13`}>d</span>
            <span className={`${letterClass} _14`}>r</span>
            <span className={`${letterClass} _15`}>a</span>
            <span className={`${letterClass} _14`}>s</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / Junior Javascript Developer </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
