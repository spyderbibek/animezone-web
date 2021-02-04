import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: red; */
  padding: 0 50px;
  height: 70vh;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    height: 100vh;
    flex-direction: column;
  }
`;

export const RightColumn = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 30vh;
  }
`;

export const HeroH1 = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  text-align: start;
  padding-bottom: 20px;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const HeroP = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-align: start;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const LeftColumn = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  /* background-color: red; */

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40vh;
  }
`;

export const HeroImage = styled.img`
  -o-object-fit: contain;
  object-fit: contain;
  height: 512px;
  max-width: 100%;
  margin: auto;
  display: block;
  z-index: 1;
`;
