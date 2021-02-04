import React from "react";
import {
  HeroContainer,
  RightColumn,
  LeftColumn,
  HeroH1,
  HeroP,
  ImageWrapper,
  HeroImage,
} from "./HeroSectionElements";

import image from "../../assets/images/screen1.png";

const HeroSection = () => {
  return (
    <HeroContainer>
      <RightColumn>
        <HeroH1>Discover new anime from all around the world</HeroH1>
        <HeroP>
          Best android app for every anime fans to enjoy streaming without any
          hassle and mainly without any ads!
        </HeroP>
      </RightColumn>
      <LeftColumn>
        <HeroImage src={image} alt="AnimeZone App"></HeroImage>
      </LeftColumn>
    </HeroContainer>
  );
};

export default HeroSection;
