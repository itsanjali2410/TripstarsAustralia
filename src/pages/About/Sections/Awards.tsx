import React from "react";
import styled from "styled-components";
import team from "../../../assets/aboutus/Team.png";

// Styled Components
const Container = styled.div`
  padding: 2rem;
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
  font-size: 1.1rem;

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
            Awards and <span>Achievements</span>
          </Title>
          <p>Some of the recent awards and achievements are:</p>
          <List>
            <li>Best Online Travel Agency – Veta 2024</li>
            <li>Online Travel Agent of the Year - SATTE Awards 2024</li>
            <li>Game changer award – India Travel Awards, North, 2023</li>
            <li>Bootstrapped Entrepreneur of the Year – HURUN India 2022</li>
            <li>Best Travel Portal of the Year – Entrepreneur India 2022</li>
          </List>

        </Column>
      </Row>
    </Container>
  );
}

export default Awards;
