import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import SearchBar from "./SearchBar";
import RatingBar from "./RatingBar";

// Import local images
import image2 from "../../../assets/banner/banner 5.png";
import image2Mobile from "../../../assets/banner/Mobile banner.jpg"; // Mobile version of the image

// Define types for styled component props
type SlideProps = {
  bgImage: string;
  active: boolean;
};

// Styled Components
const SliderContainer = styled.section`
  position: relative;
  width: 100%;
  height: 80vh;
  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const Slide = styled.div<SlideProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
`;

const SearchBarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    top: 60%;
    width: 90%;
  }
`;

const HeroText = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

// HeroSection Component
const HeroSection: React.FC = () => {
  const images = [image2, image2Mobile]; // Add the mobile version of the image to the array

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Handle window resizing to set mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if the screen width is 768px or less
    };

    handleResize(); // Run on initial render
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => window.removeEventListener("resize", handleResize); // Clean up on component unmount
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <SliderContainer {...swipeHandlers}>
      {images.map((image, index) => (
        <Slide
          key={index}
          bgImage={isMobile && index === 1 ? image2Mobile : image2} // Use mobile image for index 1 on small screens
          active={index === currentIndex}
        />
      ))}

      {/* Overlay text and SearchBar */}
      <SearchBarWrapper>
        {/* <HeroText>Find Your Dream Destination</HeroText> */}
        {/* <SearchBar /> */}
      </SearchBarWrapper>

      {/* <RatingBar /> */}
    </SliderContainer>
  );
};

export default HeroSection;
