import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const CarouselContainer = styled.div`
  background: linear-gradient(135deg,rgb(255, 255, 255) 0%, #e5e7eb 100%);
  padding: 4rem 1rem;
  text-align: center;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  color: #d4af37;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 2rem;
//   margin: 0 1rem;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const Year = styled.h3`
  font-size: 2rem;
  color: #d4af37;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

function JourneySoFarCarousel() {
  return (
    <CarouselContainer>
      <Title>Our Journey So Far</Title>
      <Slider {...settings}>
        <Slide>
          <Year>1995</Year>
          <Description>
            Started a family-based travel agency by my father <b>Saikruise Tour & Travels</b>.
          </Description>
        </Slide>
        <Slide>
          <Year>2013</Year>
          <Description>
            Joined hands in partnership with a European brand <b>TUI</b>.
          </Description>
        </Slide>
        <Slide>
          <Year>2015</Year>
          <Description>
            Joined an Australian DMC <b>Turtle Down Under</b> as a Business Head.
          </Description>
        </Slide>
        <Slide>
          <Year>2020</Year>
          <Description>
            Successfully led repatriation operations between India and Australia during COVID, operating <b>102 Charter Flights</b> and reuniting <b>20,000+ families</b>.
          </Description>
        </Slide>
        <Slide>
          <Year>2021</Year>
          <Description>
            Opened <b>Tripstars Holidays</b> offices in Ahmedabad and Mumbai.
          </Description>
        </Slide>
      </Slider>
    </CarouselContainer>
  );
}

export default JourneySoFarCarousel;
