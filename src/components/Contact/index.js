import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const submit = (e) => {
    e.preventDefault()
    console.log(form)
    fetch(`https://hooks.zapier.com/hooks/catch/13042658/bq4du1z/`, {
      method: 'POST',
      body: JSON.stringify({ name, email, subject, message }),
    })
    document.getElementById('form').reset()
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in front-end developer opportunities - however, I
            also would be eager to learn and work more on the back-end part. If
            you have other request or questions, don't hesitate to contact me
            using the contact form below or reach out to me directly via Email.
          </p>
          <div className="contact-form">
            <form onSubmit={submit} ref={form} id="form">
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    required
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                    onChange={(e) => {
                      setSubject(e.target.value)
                    }}
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    onChange={(e) => {
                      setMessage(e.target.value)
                    }}
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Andras Nagysolymosi,
          <br />
          Germany,
          <br />
          Berlin <br />
          <br />
          <span>endru0317@gmail.com</span>
        </div>
        <div className="map-wrap">
          {/*         <MapContainer center={[52.55278, 14.3588225]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[52.55278, 13.3588225]}>
              <Popup>Andras lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer> */}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
