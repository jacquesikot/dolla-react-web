import React, { useState } from 'react';

import video from '../../videos/video.mp4';
import Button from '../AppButton';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from './HeroElements';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new acount oday and recieve $250 in credit towards
            your next payment
          </HeroP>
          <HeroBtnWrapper>
            <Button
              primary={true}
              dark={true}
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
