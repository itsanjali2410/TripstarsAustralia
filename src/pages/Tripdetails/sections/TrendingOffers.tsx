import styled from "styled-components";
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import VietnamImage from '../../../assets/tranding-offers/Vietnam.png';
import TurkeyImage from '../../../assets/tranding-offers/Turkey.jpg';
import ThailandImage from '../../../assets/tranding-offers/Thailand.jpeg';
import MauritiusImage from '../../../assets/tranding-offers/Mauritius.png';
import MaldivesImage from '../../../assets/tranding-offers/Maldives.jpg';
import EuropeImage from '../../../assets/tranding-offers/Europe 1.jpg';
import DubaiImage from '../../../assets/tranding-offers/Dubai.jpg';
import BaliImage from '../../../assets/tranding-offers/Bali.jpg';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 15rem;
  margin-bottom:20px;
  @media (max-width: 1340px) {
    margin: 0 5rem;
    margin-bottom:20px;
  }
  @media (max-width: 1080px) {
    margin: 0 3rem;
    margin-bottom:20px;
  }
  @media (max-width: 768px) {
    margin: 0 1rem;
    margin-bottom:20px;
  }
`;

const Card = styled.div`
  flex: 1 0 auto;
  margin: 0.5%;
  height: 380px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  position: relative;
  @media (max-width: 768px) { 
    height: 320px; /* Adjust height for mobile devices */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
`;

const PricingTag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffd700;
  color: #000;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1rem;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
    @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

const NavIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  .left_btn,
  button {
    cursor: pointer;
    border: 1px solid #000;
    /* background-color: #000; */
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 0.8rem;
      path {
        fill: #000;
      }
    }
  }
`;

const SectionTitle = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 1340px) {
    padding-top: 4rem;
    padding-bottom: 1rem;
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
    padding-top: 0;
      padding-bottom: 1rem;
       margin-top: 0;

  }
`;

const TitileHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: 1080px) {
    font-size: 2.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(rgba(0, 0, 0, 0) 1%, rgb(0, 0, 0) 76.21%);
  color: white;
  text-align: left;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin-right: 10px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-right: 5px;
  }
`;

const Icon = styled.span<{ backgroundImage: string }>`
  height: 18px;
  width: 18px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 5px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  filter: brightness(0) invert(1); /* Converts icons to white */

  @media (max-width: 768px) {
    height: 14px;
    width: 14px;
    margin-right: 3px;
  }

  ${({ backgroundImage }) =>
    backgroundImage.includes("airplane-mode-on.png") && "transform: rotate(-90deg);"}
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-top: 10px;
  justify-content: space-between;
  gap: 50px /* Add spacing between items */

  @media (max-width: 768px) {
    gap: 25px; /* Reduce spacing for mobile */
  }
`;


interface TrendingOffersProps {
  title: string;
  cards: {
    title: string;
    image: string;
    pricing: string;
    info: { icon: string; text: string }[];
  }[];
}

const TrendingOffers: React.FC<TrendingOffersProps> = ({ title, cards }) => {
  const navigate = useNavigate();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const swiperElement = document.querySelector(
      ".swiper.trending-offers-slider"
    ) as HTMLElement & { swiper?: any };

    if (swiperElement?.swiper) {
      const swiperInstance = swiperElement.swiper;

      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  // Add a function to handle card click navigation
  // Add a function to handle card click navigation
const handleCardClick = (title: string) => {
  // Mapping card title to a dynamic path
  const destination = title.toLowerCase(); // Convert title to lowercase for matching path (e.g., "andaman" or "ladakh")
  navigate(`/${destination}`);
};

  return (
    <SliderContainer>
      <SectionTitle>
        <TitileHeading>{title}</TitileHeading>
        {/* <NavIcons> */}
          <button ref={prevRef}>
            {/* Your SVG code for the left arrow */}
          </button>
          <button ref={nextRef}>
            {/* Your SVG code for the right arrow */}          </button>
        {/* </NavIcons> */}
      </SectionTitle>
      <Swiper
        className="trending-offers-slider"
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          1080: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
          400: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 2,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card onClick={() => handleCardClick(card.title)}>
              <PricingTag>{card.pricing}</PricingTag>
              <CardImage src={card.image} alt={card.title} />
              <CardOverlay>
                <Title>{card.title}</Title>
                <Info>
                  {card.info.map((item, idx) => (
                    <InfoItem key={idx}>
                      <Icon backgroundImage={item.icon} />
                      {item.text === "Flight" ? (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            lineHeight: "1.1",
                          }}
                        >
                          <span style={{ fontSize: "0.8rem" }}>with</span>
                          <span
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: "bold",
                            }}
                          >
                            Flight
                          </span>
                        </div>
                      ) : (
                        <span style={{ fontSize: "0.8rem" }}>{item.text}</span>
                      )}
                    </InfoItem>
                  ))}
                </Info>
              </CardOverlay>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default TrendingOffers;