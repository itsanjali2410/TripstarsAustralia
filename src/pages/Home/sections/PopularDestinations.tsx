import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import Popup from "../../../components/common/Popup"; // Import Popup component
// Import your images
import Dubai from "../../../assets/PopularDestination/Dubai.webp";
import Thailand from "../../../assets/PopularDestination/Thailand.webp";
import Singapore from "../../../assets/PopularDestination/Singapore.webp";
import Malaysia from "../../../assets/PopularDestination/Malaysia.webp";
import Bali from "../../../assets/PopularDestination/Bali.webp";
import HongKong from "../../../assets/PopularDestination/Hong kong.webp";
import Europe from "../../../assets/PopularDestination/Europe.webp";
import Vietnam from "../../../assets/PopularDestination/Vietnam.webp";
import Australia from "../../../assets/PopularDestination/Australia.webp";

// Styled components
const Container = styled.div`
  padding: 0 15rem;
  @media (max-width: 1340px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Card = styled.div`
  height: 100%;
  cursor: pointer; /* Make the cards clickable */
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SectionTitle = styled.div`
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 1340px) {
    padding-top: 4rem;
    padding-bottom: 1rem;
  }
  @media (max-width: 768px) {
    margin-top: 2 rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
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

const NavIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  button {
    cursor: pointer;
    border: 1px solid #000;
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
type Destination = {
  name: string;
  imgUrl: string;
};

// Type definition for destinations
type PopularDestinationsProps = {
  showPopup?: boolean; // Define the prop properly
};


// Destination data
const popularDestinationsData: Destination[] = [
  { name: "Dubai", imgUrl: Dubai },
  { name: "Thailand", imgUrl: Thailand },
  { name: "Singapore", imgUrl: Singapore },
  { name: "Malaysia", imgUrl: Malaysia },
  { name: "Bali", imgUrl: Bali },
  { name: "Hong Kong", imgUrl: HongKong },
  { name: "Europe", imgUrl: Europe },
  { name: "Vietnam", imgUrl: Vietnam },
  { name: "Australia", imgUrl: Australia },
]

export default function PopularDestinations({ showPopup = false }: PopularDestinationsProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const handleClick = (destination: string) => {
    if (showPopup) {
      setSelectedDestination(destination);
      setIsPopupOpen(true);
    } else {
      navigate(`/${destination.toLowerCase()}`);
    }
  };

  return (
    <Container>
      <SectionTitle>
        <TitileHeading>Popular Destinations</TitileHeading>
        {/* <NavIcons>
          <button ref={prevRef}>{"<"}</button>
          <button ref={nextRef}>{">"}</button>
        </NavIcons> */}
      </SectionTitle>
      <CardsWrapper>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.8}
          breakpoints={{ 1080: { slidesPerView: 4.8 }, 768: { slidesPerView: 4 }, 400: { slidesPerView: 2 } }}
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
              <Card onClick={() => handleClick(item.name)}>
                <ImageWrapper>
                  <img src={item.imgUrl} alt={item.name} loading="lazy" />
                </ImageWrapper>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsWrapper>

      {/* Popup */}
      {/* {isPopupOpen && (
  <Popup onClose={() => setIsPopupOpen(false)}>
  <h2>Enquiry Form for {selectedDestination}</h2> */}
  {/* Add your form content here */}
{/* </Popup> */}

{/* )} */}
    </Container>
  );
}