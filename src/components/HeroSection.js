import React from 'react';
import '../App.css';
import { Button } from './Button1';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>MARK NAGIEB</h1>
      <p>Software Engineer</p>
      <div className='hero-btns'>
      <a href='https://www.linkedin.com/in/mark-nagieb-165872226/' target="_blank" rel="noreferrer">
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          LinkedIn
        </Button>
        </a>
        <a href='https://github.com/marknagieb' target="_blank" rel="noreferrer">
        <Button
          
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          
          GitHub
        </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
