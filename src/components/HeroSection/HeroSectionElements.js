import styled from "styled-components";
import { Theme } from "../../theme";
import { FaDownload } from "react-icons/fa";
//
export const HeroContainer = styled.div`
  width: 90%;
  height: 100vh;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RightColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: green; */
`;

export const HeroH3 = styled.h3`
  color: white;
  font-size: 3.8vh;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const HeroP = styled.p`
  color: white;
  font-size: 2.5vh;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const DownloadContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DownloadButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
  background-color: ${Theme.accentColor};
  border-radius: 30px;
`;
export const DownloadIcon = styled(FaDownload)`
  font-size: 2vh;
  color: white;
  margin-right: 10px;
`;

export const DownloadText = styled.p`
  color: white;
  font-size: 2vh;
`;

export const LeftColumn = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  position: relative;
  height: 100%;
  /* background-color: red; */
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/screen1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
`;
