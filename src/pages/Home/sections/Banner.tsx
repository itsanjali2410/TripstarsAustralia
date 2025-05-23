import React from "react";
import styled from "styled-components";

// Styled Component for Banner
const BannerContainer = styled.div`
  text-align: center;
`;

const BannerImage = styled.img`
  width: 100%; /* Full width */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Ensures image fits properly */
  display: block; /* Prevents inline spacing */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adds shadow effect */
  background-color: #fff; /* Background color for visibility */

  /* Responsive Styling */
  @media (max-width: 768px) {
    height: 30%; /* Fixed height on smaller screens */
    padding: 5px;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 15rem;
  margin-top: 10px;

  @media (max-width: 1340px) {
    margin: 0 5rem;
  }
  @media (max-width: 1080px) {
    margin: 0 3rem;
  }
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const Banner: React.FC = () => {
  return (
    <SliderContainer>
      <BannerContainer>
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://www.tripzygo.in/images/a/processmobile.jpg"
          />
          <source
            media="(min-width: 769px)"
            srcSet="https://www.tripzygo.in/images/a/process.jpg"
          />
          <BannerImage
            src="https://www.tripzygo.in/images/a/process.jpg"
            alt="Banner"
          />
        </picture>
      </BannerContainer>
    </SliderContainer>
  );
};

export default Banner;
