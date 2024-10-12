import React from 'react'
import pdf from '../assets/pdf/resume 12209944.pdf'
import hero from '../assets/hero.avif'

const Home = () => {
  return (
    <div className='container home'>
      <div className="left">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quibusdam!</h1>
        <a href={pdf} download="Resume.pdf" className='btn btn-outline-warning'>Download Resume</a>
      </div>
      <div className="right">
        <div className="img">
          <img className="logo" src={hero} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Home
