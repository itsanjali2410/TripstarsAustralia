import React, { useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import SearchBar from "./SearchBar";
import RatingBar from "./RatingBar";

// Importing images for mobile and desktop
import australia from "../../../assets/banner/europe.webp";
// import bali from "../../../assets/banner/turkey.webp";
import europe from "../../../assets/banner/australia.webp";
import hongKong from "../../../assets/banner/hong-kong.webp";
import vietnam from "../../../assets/banner/vietnam.webp";

// Mobile images
import australiaMobile from "../../../assets/banner/mobile web banner/australia.webp";
import baliMobile from "../../../assets/banner/mobile web banner/bali.webp";
import europeMobile from "../../../assets/banner/mobile web banner/europe.webp";
// import hongKongMobile from "../../../assets/banner/mobile web banner/hong-kong.webp";
import vietnamMobile from "../../../assets/banner/mobile web banner/vietnam.webp";

// Define types for styled component props
type SlideProps = {
  bgImage: string;
  active: boolean;
};

// Styled Components
const SliderContainer = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;

  @media (max-width: 768px) {

  }

  @media (max-width: 360px) { /* iPhone SE */
    height: 45vh;
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

// Wrapper for search bar and text
// Adjusted Search Bar Wrapper
const SearchBarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;
  width: 80%;

  @media (max-width: 768px) {
    top: 52%;
    width: 90%;
  }

  @media (max-width: 375px) { /* iPhone SE */
    top: 52%;
    width: 85%;
  }
  @media (max-width: 375px) {
  display: flex;
  flex-direction: column; /* Stack elements instead of squeezing */
  align-items: center;
}

`;

// Adjusted HeroText (if text looks too big)
const HeroText = styled.h1`
  font-size: 5rem;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;
const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  max-width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 480px) { /* Samsung Galaxy */
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Force 2 items per row */
    gap: 10px;
    max-width: 80%;
  }

@media (max-width: 375px) { /* iPhone SE */
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); /* Ensures each item stays readable */
  gap: 6px;
  max-width: 95%;
}

`;

const RatingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 1rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.6); /* Dark transparent background */
  padding: 8px 14px;
  border-radius: 8px;
  min-width: 140px;
  text-align: center;

@media (max-width: 375px) { /* iPhone SE */
  font-size: 0.9rem;
  padding: 6px 10px;
  min-width: 120px; /* Prevent collapse */
  width: auto; /* Avoid stretching */
}

`;

const HeroSection: React.FC = () => {
  // Updated desktop images with the new URLs (larger images for desktop)
  const desktopImages = [
    "https://media1.thrillophilia.com/filestore/pfkfv6qfobdvdyi4ry5jvqetvbtd_576434519-shutterstock_2360921289.jpg", // Larger image
    "https://media1.thrillophilia.com/filestore/ltvaqcm5l2s9xzgueqme71bk922h_shutterstock_2131706207.jpg?w=340&dpr=2", // Medium image
    "https://media.easemytrip.com/media/Deal/DL638739122186568950/SightSeeing/SightSeeingFil0Os.png", // Medium image
    "https://media.easemytrip.com/media/Deal/DL638557908991826204/SightSeeing/SightSeeing3L1E8U.jpg", // Medium image
    "https://media1.thrillophilia.com/filestore/raf6suoqxtabzfuyrnc1o0bmoocm_shutterstock_2324082951.jpg?w=1920&dpr=1", // Large image
    "https://media.easemytrip.com/media/Deal/DL638676942969235947/SightSeeing/SightSeeing3JmQ7i.jpg", // Medium image
    "https://media1.thrillophilia.com/filestore/lwnmyjtny42stcmk2iw237a1oe4r_shutterstock_2385561217.jpg?w=1920&dpr=1", // Large image
    "https://media1.thrillophilia.com/filestore/az36j4igu7ptnvvz6ezrxx2oqzd1_shutterstock_2068557497.jpg?w=1440&dpr=2", // Large image
    "https://media1.thrillophilia.com/filestore/2wjxo4jwhi79km0hmiz0hmo1vn5a_shutterstock_155068436.jpg?w=1440&dpr=2", // Large image
    "https://images.wanderon.in/gallery/new/2025/01/20/golden-hands-bridge.avif" // New large desktop image
  ];

  // Updated mobile images with the new URLs (smaller images for mobile)
  const mobileImages = [
    "https://media1.thrillophilia.com/filestore/pfkfv6qfobdvdyi4ry5jvqetvbtd_576434519-shutterstock_2360921289.jpg", // Larger image, but good for mobile
    "https://media1.thrillophilia.com/filestore/ltvaqcm5l2s9xzgueqme71bk922h_shutterstock_2131706207.jpg?w=340&dpr=2", // Medium image
    "https://media.easemytrip.com/media/Deal/DL638739122186568950/SightSeeing/SightSeeingFil0Os.png", // Medium image
    "https://media.easemytrip.com/media/Deal/DL638557908991826204/SightSeeing/SightSeeing3L1E8U.jpg", // Medium image
    "https://media1.thrillophilia.com/filestore/raf6suoqxtabzfuyrnc1o0bmoocm_shutterstock_2324082951.jpg?w=1920&dpr=1", // Larger image
    "https://media.easemytrip.com/media/Deal/DL638676942969235947/SightSeeing/SightSeeing3JmQ7i.jpg", // Medium image
    "https://media1.thrillophilia.com/filestore/lwnmyjtny42stcmk2iw237a1oe4r_shutterstock_2385561217.jpg?w=1920&dpr=1", // Larger image
    "https://media1.thrillophilia.com/filestore/az36j4igu7ptnvvz6ezrxx2oqzd1_shutterstock_2068557497.jpg?w=1440&dpr=2", // Large image, good for mobile
    "https://media1.thrillophilia.com/filestore/2wjxo4jwhi79km0hmiz0hmo1vn5a_shutterstock_155068436.jpg?w=1440&dpr=2", // Large image
    "https://media1.thrillophilia.com/filestore/j9vu3zxlc4vlp7uc4ugm2ao6yt4j_dhowboat.jpg?w=240&dpr=2", // Small mobile image
    "https://media1.thrillophilia.com/filestore/gnwumrnh0t3r4uinkisyyxfmgl1p_shutterstock_2338075347.jpg?w=340&dpr=2", // Smaller mobile image
    "https://media1.thrillophilia.com/filestore/ngxbozm452mtzlm7g0lu9fqiiv3u_576435387-shutterstock_2359094599.jpg?w=1440&dpr=2", // Larger image
    "https://media1.thrillophilia.com/filestore/50lnyp1577qlyziezocuk370rlmk_shutterstock_2335189457.jpg?w=340&dpr=2", // Medium image
    "https://media.easemytrip.com/media/Deal/DL638735946501335115/SightSeeing/SightSeeing459dzv.png", // Medium image
    "https://images.wanderon.in/gallery/new/2024/12/16/vietnam-honeymoon-tour-package-with-flights-5n-6d-new.avif" // New mobile image
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? desktopImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === desktopImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventScrollOnSwipe: true,
    trackMouse: true, // Optional: Enables swipe on desktop using mouse drag
  });

  // Detect screen size to decide which image set to use
  const isMobile = window.innerWidth <= 768;
  const images = isMobile ? mobileImages : desktopImages;

  return (
    <SliderContainer {...swipeHandlers}>
      {images.map((image, index) => (
        <Slide key={index} bgImage={image} active={index === currentIndex} />
      ))}

      {/* Overlay text and SearchBar */}
      <SearchBarWrapper>
        <HeroText>Find Your Dream Destination</HeroText>
        {/* <SearchBar /> */}
      </SearchBarWrapper>

      <RatingBar />
    </SliderContainer>
  );
};

export default HeroSection;
