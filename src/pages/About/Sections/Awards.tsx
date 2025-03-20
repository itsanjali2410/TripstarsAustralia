import React from "react";
import styled from "styled-components";
import team from "../../../assets/aboutus/Team.png";

// Styled Components
const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 1rem;



  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  
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

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
  color: #333;
  font-size: 1rem;

`;

const Link = styled.a`
  color: #C8A466;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
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

export default Awards;
