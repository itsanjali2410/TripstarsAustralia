import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { useState } from "react";

// Importing images
import family from "../../../assets/travelstyle/family 1.jpg";
import couple from "../../../assets/travelstyle/couple.webp";
import group from "../../../assets/travelstyle/group.webp";
import honeymoon from "../../../assets/travelstyle/honeymoon.webp";
import adventure from "../../../assets/travelstyle/adventure.webp";
import beach from "../../../assets/travelstyle/beach.webp";
// Importing golden icons
import familyIcon from "../../../assets/icons/family.svg";
import coupleIcon from "../../../assets/icons/couple.svg";
import groupIcon from "../../../assets/icons/group.svg";
import honeymoonIcon from "../../../assets/icons/honeymoon.svg";
import adventureIcon from "../../../assets/icons/adventure.svg";
import beachIcon from "../../../assets/icons/beach.svg";

import Popup from "../../../components/common/Popup";
// Styled components
const Container = styled.div`
  padding: 0 15rem;
  text-align: left;

  @media (max-width: 1340px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

// Title Wrapper
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  margin-top: 5%;
  text-align : center;
`;

// Styled "Travel Style" with gold linear gradient and cursive font
const TravelStyleText = styled.span`
  font-family:  cursive; /* Ensure this font is available */
  background: linear-gradient(to right,rgba(253, 215, 0, 0.82),rgb(255, 166, 0)); /* Gold gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
`;

// Cards Wrapper
const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

// Swiper Card Styling
const Card = styled.div`
  height: 100%;
  cursor: pointer;
  position: relative;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

// Image Wrapper
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Dark gradient overlay
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), transparent);
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

// Icon styling
const Icon = styled.img`
  width: 72px !important;
  height: 80px !important;
`;

// Category Name - Removed underline
const CategoryName = styled.span`
  color: white;
  font-family:'Dancing Script';
  font-size: 1.2rem;

`;

// Type definition for destinations
type Destination = {
  name: string;
  imgUrl: string;
  icon: string;
};

// Adding icons to destinations
const popularDestinationsData: Destination[] = [
  { name: "Family", imgUrl: family, icon: familyIcon },
 
  { name: "Group", imgUrl: group, icon: groupIcon },
  { name: "Honeymoon", imgUrl: honeymoon, icon: honeymoonIcon },
  { name: "Adventure", imgUrl: adventure, icon: adventureIcon },
  { name: "Beach", imgUrl: beach, icon: beachIcon },
  { name: "Couple", imgUrl: couple, icon: coupleIcon },
];

export default function ChooseYour() {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();
  // Handle card click
const handleCardClick = (destination: string) => {
  setSelectedDestination(null); // Reset first to force a state change
  setTimeout(() => setSelectedDestination(destination), 0); // Set the destination after a tiny delay
};

  
  // Close popup
  const closePopup = () => {
    setSelectedDestination(null); // Close the popup
  };

  return (
    <Container>
      <Title style={{ textAlign: "left" }}>
        Choose Your <TravelStyleText>Travel Style</TravelStyleText>
      </Title>

      <CardsWrapper>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.8}
          breakpoints={{
            1080: { slidesPerView: 4.8 },
            768: { slidesPerView: 4 },
            400: { slidesPerView: 2 },
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {popularDestinationsData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card onClick={() => handleCardClick(item.name)}>
                <ImageWrapper>
                  <img src={item.imgUrl} alt={item.name} />
                  <Overlay>
                    <Icon src={item.icon} alt={`${item.name} icon`} />
                    <CategoryName>{item.name}</CategoryName>
                  </Overlay>
                </ImageWrapper>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsWrapper>

      {/* Render the popup if a destination is selected */}
{/* Render the popup if a destination is selected */}
{selectedDestination && (
  <Popup
    title={selectedDestination}
    image={popularDestinationsData.find((item) => item.name === selectedDestination)?.imgUrl}
    pricing="Starting from $499"  // Example placeholder pricing

    onClose={closePopup}
  />
)}

    </Container>
  );
}
