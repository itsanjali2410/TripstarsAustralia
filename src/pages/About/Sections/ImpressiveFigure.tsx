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
    color: #007bff;
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
          <Figures>99%</Figures>
          <Text>Booking Success Rate</Text>
        </Col>
        <Col>
          <Figures>3.44%</Figures>
          <Text>Look-To-Book Ratio</Text>
        </Col>
        <Col>
          <Figures>25 Million +</Figures>
          <Text>Registered Users</Text>
        </Col>
        <Col>
          <Figures>5 M+</Figures>
          <Text>Android App Downloads</Text>
        </Col>
      </Row>
    </Container>
  );
}

export default ImpressiveFigure;
