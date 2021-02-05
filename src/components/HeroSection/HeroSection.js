import React from "react";
import image from "../../assets/images/screen1.png";
import {
  HeroContainer,
  RightColumn,
  LeftColumn,
  HeroH3,
  HeroP,
  DownloadContainer,
  DownloadButton,
  DownloadIcon,
  DownloadText,
  HeroImage,
} from "./HeroSectionElements";

const buttonStyle = {
  fontSize: "1rem",
};

const HeroSection = () => {
  return (
    <HeroContainer>
      <RightColumn>
        <HeroH3>Discover new anime from all around the world</HeroH3>
        <HeroP>
          Best android app for every anime fans to enjoy streaming without any
          hassle and mainly without any ads!
        </HeroP>
        <DownloadContainer>
          <DownloadButton>
            <DownloadIcon />
            <DownloadText>Download App</DownloadText>
          </DownloadButton>
        </DownloadContainer>
      </RightColumn>
      <LeftColumn>
        <HeroImage img={image} />
      </LeftColumn>
    </HeroContainer>
  );
};

export default HeroSection;
