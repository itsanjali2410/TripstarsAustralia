import React from "react";
import styled from "styled-components";
import team from "../../../assets/aboutus/Team.png";
import achievement from "../../../assets/aboutus/Tripstarsahemdabad.jpg";

// Styled Components
const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 1rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000;
  font-weight: bold;

  span {
    color: #C8A466;
  }
`;

const Subtitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #555;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #555;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
  color: #333;
  font-size: 1rem;
`;

const Image = styled.img`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  display: block;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function Awards() {
  return (
    <Container>
      <Row>
        <Column>
          <Image src={team} alt="Awards" />
        </Column>
        <Column>
          <Title>
            Why Choose <span>TripStars Holidays</span>
          </Title>
          <List>
            <li>Leading Travel Company in India known for delivering personalized and exceptional travel experiences.</li>
            <li>Expertly curated domestic and international tour packages with transparent pricing and no hidden costs.</li>
            <li>Driven by innovation, leveraging cutting-edge technology to enhance customer satisfaction.</li>
            <li>Renowned for 24/7 customer support and a commitment to quality at every touchpoint.</li>
            <li>A trusted partner for unforgettable journeys, with a passion for creating lifelong memories.</li>
          </List>
        </Column>
      </Row>
    </Container>
  );
}
export { Awards};