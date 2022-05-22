import { Button } from "@mui/material";
import {  React, useState } from "react";
import Video from "../video/video.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroH1,
  HeroP,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HomeElements";
// import { Button } from "../ButtonElements";

const Home = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };



  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video.mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>ברוכים הבאים לאתר הצמח שלי</HeroH1>
        <HeroP>
          בואו למצוא את הצמח המתאים היותר עבורכם על ידי שאלון ההתאמה שלנו
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="questionnaire"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            {hover ? <ArrowForward /> : <ArrowRight />} בואו נתחיל
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Home;
