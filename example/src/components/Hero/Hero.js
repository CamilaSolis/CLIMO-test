import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Hero.scss';


    const slideImages = [
        'https://i.imgur.com/Ltu283p.png',
        'https://i.imgur.com/BflJkhO.png',
        'https://i.imgur.com/c9uPEww.png'
    ];

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: false
    }

    const Hero = () => {
        return (
            <div>
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              </div>
            </div>
          </Slide>
          </div>
        )
    }

export default Hero;