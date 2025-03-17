import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";

// Styled Components
const SliderContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  padding: 40px 20px;
`;

const Section = styled.div`
  background: #e7f8f4;
  padding: 30px 20px;
  border-radius: 20px;
  text-align: center;
  margin: auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  letter-spacing: 1px;
`;

const Highlight = styled.span`
  color: #d9534f;
  font-family: 'Pacifico', cursive;
  font-weight: bold;
`;

const SlideWrapper = styled.div`
  padding: 10px;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const budgetImages = [
  { src: img1, alt: "₹15,000" },
  { src: img2, alt: "₹30,000" },
  { src: img3, alt: "₹50,000" },
  { src: img4, alt: "₹75,000" },
  { src: img5, alt: "₹1,00,000" },
  { src: img6, alt: "₹4,00,000" },
];


const BudgetSection: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <Section>
        <Title>
          Holidays For Every <Highlight>Budget</Highlight>
        </Title>
        <Slider {...sliderSettings}>
          {budgetImages.map((item, index) => (
            <SlideWrapper key={index}>
              <SlideImage src={item.src} alt={item.alt} />
            </SlideWrapper>
          ))}
        </Slider>
      </Section>
    </SliderContainer>
  );
};

export default BudgetSection;
