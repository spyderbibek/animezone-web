import React, { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  padding: 0 15px;
  flex-direction: column;
  align-items: center;
  background-color: #11161e;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PageContainer>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}

      <HeroSection />
      <div style={{ width: "100%", height: "1000px" }}></div>
    </PageContainer>
  );
};

export default Home;
