import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;

  span {
    color: #D4AF37;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Col = styled.div`
  flex: 1;
  min-width: 200px;
  padding: 1.5rem;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #ddd;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const Figures = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  margin: 0.5rem 0;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

function ImpressiveFigure() {
  return (
    <Container>
      <Title>
        Impressive <span>Figures</span>
      </Title>
      <Row>
        <Col>
          <Figures>16+</Figures>
          <Text>Years of Experience</Text>
        </Col>
        <Col>
          <Figures>24/7</Figures>
          <Text>Personal Concierge</Text>
        </Col>
        <Col>
          <Figures>20000+</Figures>
          <Text>Customers
          Service par excellence</Text>
        </Col>
        <Col>
          <Figures>100%</Figures>
          <Text>On Ground Support</Text>
        </Col>
      </Row>
    </Container>
  );
}

export default ImpressiveFigure;
