import React from "react";
import { Title } from "./SectionTitleElements.js";

const SectionTitle = ({ firstTitle, secondTitle }) => {
  return (
    <Title>
      {firstTitle}
      <span style={{ color: "#ff5722", fontFamily: "Logo" }}>
        {secondTitle}
      </span>
    </Title>
  );
};

export default SectionTitle;
