import React from "react";
import styled from "styled-components";
import team from "../../../assets/aboutus/Team.png";

// Styled Components
const Container = styled.div`
  margin-top: 5rem;
  padding: 0 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;


  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;

  span {
    color: #d4af37;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 0.5rem;
  }
`;

const Link = styled.a`
  color: #d4af37;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  span {
    font-weight: bold;
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
          <p>
            <Link href="#">
              <span>Click Here</span>
            </Link>{" "}
            to know about more achievements and awards
          </p>
        </Column>
      </Row>
    </Container>
  );
}

export default Awards;
