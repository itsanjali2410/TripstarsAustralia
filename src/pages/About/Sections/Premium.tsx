import React from "react";
import styled from "styled-components";
import img1 from "../../../assets/aboutus/premium/16 years of experience.png";
import img2 from "../../../assets/aboutus/premium/20k+ customers.png";
import img3 from "../../../assets/aboutus/premium/Destination guide.png";
import img4 from "../../../assets/aboutus/premium/customer service (1).png";
import img5 from "../../../assets/aboutus/premium/indian meals.png";
import img6 from "../../../assets/aboutus/premium/managed HNIs & celebrities.png";


const PremiumContainer = styled.div`

`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #333;

  span {
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #666;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const PremiumImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;
const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f5f5f5;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    border-radius: 12px;
  }
`;

const IconText = styled.p`
  margin-top: 0.25rem;
  font-size: 0.9rem;
  color: #333;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   &.hide-desktop {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;
function Premium() {
  return (
    <PremiumContainer>
      <Row>
        <Column>
          <IconContainer>
            <Image src={img1} alt="16 years of experience" />
          </IconContainer>
          <IconText>16 Years of Experience</IconText>
        </Column>
        <Column>
          <IconContainer>
            <Image src={img2} alt="20k+ customers" />
          </IconContainer>
          <IconText>20K+ Customers</IconText>
        </Column>
        <Column>
          <IconContainer>
            <Image src={img3} alt="Destination guide" />
          </IconContainer>
          <IconText>Destination Guide</IconText>
        </Column>
        <Column>
          <IconContainer>
            <Image src={img4} alt="Customer service" />
          </IconContainer>
          <IconText>Customer Service</IconText>
        </Column>
        <Column className="hide-desktop">
          <IconContainer>
            <Image src={img5} alt="Indian meals" />
          </IconContainer>
          <IconText>Indian Meals</IconText>
        </Column>
        <Column className="hide-desktop">
          <IconContainer>
            <Image src={img6} alt="Managed HNIs & celebrities" />
          </IconContainer>
          <IconText>Managed HNIs & Celebrities</IconText>
        </Column>
      </Row>
    </PremiumContainer>
  );
}


export default Premium;
