import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import Popup from "../../../components/common/Popup";

const Container = styled.div`
  padding: 0 15rem;
  @media (max-width: 1340px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Card = styled.div`
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NameWrapper = styled.div`
  margin-top: 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: #333;
  text-transform: capitalize;
  white-space: nowrap;
`;

const SectionTitle = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  @media (max-width: 768px) {
    padding-top: 0;
    margin-top: 0;
  }
`;

const TitleHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const HighlightedWord = styled.span`
  color: gold;
  font-weight: 700;
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
    background: white;
    &:hover {
      background: black;
      svg path {
        fill: white;
      }
    }
    svg {
      width: 1rem;
      height: 1rem;
      path {
        fill: black;
      }
    }
  }
`;

type DestinationProps = {
  title: string;
  highlightWord: string;
  thingsToDo: { name: string; image: string }[];
};

export default function PopularDestinations({ title, highlightWord, thingsToDo }: DestinationProps) {
  const [selectedThing, setSelectedThing] = useState<{ name: string; image: string } | null>(null);
  const [selectedCard, setSelectedCard] = useState<DestinationProps["thingsToDo"][0] | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();

  const handleCardClick = (card: DestinationProps["thingsToDo"][0]) => {
    setSelectedCard(null); // Reset the selected card first

    // Use a short delay to allow state reset and force re-render
    setTimeout(() => {
      setSelectedCard(card);
    }, 0);
  };

  const handleThingClick = (thing: { name: string; image: string }) => {
    setSelectedThing(thing);
  };

  const handleClosePopup = () => {
    setSelectedThing(null);
  };
  return (
    <Container>
      <SectionTitle>
        <TitleHeading>
          {title} <HighlightedWord>{highlightWord}</HighlightedWord>
        </TitleHeading>
      </SectionTitle>
      <CardsWrapper>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2.2}
          breakpoints={{
            1080: { slidesPerView: 6 },
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
          {thingsToDo.map((item, index) => (
            <SwiperSlide key={index}>
              <Card onClick={() => handleThingClick(item)}>
                <ImageWrapper>
                  <img src={item.image} alt={item.name} />
                </ImageWrapper>
                <NameWrapper>{item.name}</NameWrapper>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        {selectedThing && (
          <Popup
            title={selectedThing.name}
            image={selectedThing.image}
            onClose={handleClosePopup} pricing={""} info={[]}          />
        )}
      </CardsWrapper>
    </Container>
  );
}
