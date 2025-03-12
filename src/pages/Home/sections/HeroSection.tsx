import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import SearchBar from "./SearchBar";
import RatingBar from "./RatingBar";

// Import local images
import image1 from "../../../assets/banner/bali.webp";
import image2 from "../../../assets/banner/vietnam.webp";
import image3 from "../../../assets/banner/dubai.webp";
import image4 from "../../../assets/banner/maldives.webp";
import image5 from "../../../assets/banner/singapore.webp";
import image6 from "../../../assets/banner/europe.webp";
import image7 from "../../../assets/banner/thailand.webp";
import image1Mobile from "../../../assets/banner/Mobile banner/bali.webp";
import image2Mobile from "../../../assets/banner/Mobile banner/vietnam.webp";
import image3Mobile from "../../../assets/banner/Mobile banner/vietnam.webp";
import image4Mobile from "../../../assets/banner/Mobile banner/dubai.webp";
import image5Mobile from "../../../assets/banner/Mobile banner/maldives.webp";
import image6Mobile from "../../../assets/banner/Mobile banner/singapore.webp";
import image7Mobile from "../../../assets/banner/Mobile banner/thailand.webp";

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
  overflow: hidden;

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
  const desktopImages = [image1, image2, image3, image4, image5, image6,image7];
  const mobileImages = [image1Mobile, image2Mobile, image3Mobile, image4Mobile,image5Mobile,image6Mobile,image7Mobile];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [images, setImages] = useState<string[]>(isMobile ? mobileImages : desktopImages);
  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Change slide every 1 second
    return () => clearInterval(interval);
  }, [images]);
  // Update images when resizing
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setImages(mobile ? mobileImages : desktopImages);
      console.log("Resized to:", mobile ? "Mobile" : "Desktop");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventScrollOnSwipe: true,
    trackMouse: true, // Support mouse swiping as well
    delta: 10,       // Minimum distance to trigger swipe
  });

  return (
    <SliderContainer {...swipeHandlers}>
      {images.map((image, index) => (
        <Slide key={index} bgImage={image} active={index === currentIndex} />
      ))}

      {/* Overlay text and SearchBar */}
      <SearchBarWrapper>
        {/* <HeroText>Find Your Dream Destination</HeroText>
        <SearchBar />
        <RatingBar /> */}
      </SearchBarWrapper>
    </SliderContainer>
  );
};

export default HeroSection;
