import React from "react";
import styled from "styled-components";
import team from "../../../assets/aboutus/Tripstarsahemdabad.jpg";
// Styled Components
const Container = styled.div`
  padding: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 768px) {
    text-align: center;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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

function TechAchievment() {
  return (
    <Container>
      <Row>
        <Column>
          <Title>Technological Advancement</Title>
          <Paragraph>
            Today, the company has a dedicated in-house technology and a customer support team that is focused on developing a secure, advanced, and scalable technology infrastructure and software to enable a quick response time and ensure efficient services.
          </Paragraph>
          {/* <Title>Unicorn Status and Beyond</Title>
          <Paragraph>
            EaseMyTrip also joined the elite club of India’s first-ever 100 unicorns and remained India’s only company delivering consistent profits among all listed new-age tech businesses. Now, EaseMyTrip is strategically expanding its international presence and diversifying its offerings beyond air travel to include hotels and holidays. Additionally, we are banking on a franchise model to improve service accessibility for offline customers. Currently, overseeing a network of 13 franchise stores nationwide.
            <br />
            *In terms of air ticket bookings, based on the Crisil Report-Assessment of the OTA Industry in India, February 2021.
          </Paragraph> */}
        </Column>
        <Column>
          <Image src={team} alt="Tech Achievement" />
        </Column>
      </Row>
    </Container>
  );
}

export default TechAchievment;
