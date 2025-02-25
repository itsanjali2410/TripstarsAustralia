import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Styled-components for styling
const Container = styled.div`
  width: 100%;
  padding: 0 15rem;

  @media (max-width: 1340px) {
    padding: 1rem 0 5rem;
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
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 1rem;
    
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;

  img {
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    object-fit: cover;
  }

  @media (max-width: 1080px) {
    img {
      width: 6rem;
      height: 6rem;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 4rem;
      height: 4rem;
    }
  }
`;

const SectionTitle = styled.h2`
  padding: 2rem 0 1rem;
 text-align: left;
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

const CardTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Card Data
const cardData = [
  { name: "Austria", image: "https://images.pickyourtrail.com/austria_min_3bcfd0c970.png?w=99&h=99&format=auto&dpr=1&q=40" },
  { name: "Finland", image: "https://images.pickyourtrail.com/finland_min_6b2b83ba7b.png?w=99&h=99&format=auto&dpr=1&q=40" },
  { name: "Norway", image: "https://images.pickyourtrail.com/norway_min_b6c1dbb1da.png?w=99&h=99&format=auto&dpr=1&q=40" },
  { name: "Italy", image: "https://images.pickyourtrail.com/italy_min_6b0dbc2ad0.png?w=99&h=99&format=auto&dpr=1&q=40" },
  { name: "Switzerland", image: "https://images.pickyourtrail.com/switzerland_min_523a70365c.png?w=99&h=99&format=auto&dpr=1&q=40" },
  { name: "France", image: "https://images.pickyourtrail.com/france_min_3510647d1e.png?w=99&h=99&format=auto&dpr=1&q=40" },
  { name: "United Kingdom", image: "https://images.pickyourtrail.com/uk_min_32ffe790a9.png?w=99&h=99&format=auto&dpr=1&q=40" },
  { name: "Turkey", image: "https://images.pickyourtrail.com/turkey_min_2529e81509.png?w=99&h=99&format=auto&dpr=1&q=40" },
  { name: "Spain", image: "https://images.pickyourtrail.com/spain_min_b811280a6a.png?w=99&h=99&format=auto&dpr=1&q=40" },
];

// ExploreEurope Component
const ExploreEurope: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (name: string) => {
    navigate(`/destination/${name.toLowerCase()}`);
  };

  return (
    <Container>
      <SectionTitle >Explore Europe</SectionTitle>
      <CardsWrapper>
        <Swiper
          loop
          speed={1300}
          autoplay={{ delay: 1800 }}
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={20}
          breakpoints={{
            1080: { slidesPerView: 7, spaceBetween: 60 },
            768: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {cardData.map((item, index) => (
            <SwiperSlide key={index} onClick={() => handleCardClick(item.name)} style={{ cursor: "pointer" }}>
              <ImageWrapper>
                <img src={item.image} alt={item.name} loading="lazy" />
                <CardTitle>{item.name}</CardTitle>
              </ImageWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsWrapper>
    </Container>
  );
};

export default ExploreEurope;
