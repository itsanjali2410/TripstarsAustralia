import React from "react";
import styled from "styled-components";

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f4f4;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #0a0a52;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
`;

const HomeButton = styled.a`
  padding: 10px 20px;
  background: #0a0a52;
  color: white;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: gold;
  }
`;

const ThankYou: React.FC = () => {
  return (
    <ThankYouContainer>
      <Title>🎉 Thank You!</Title>
      <Message>Your submission was successful. We will get back to you shortly.</Message>
      <HomeButton href="/">Go Back to Home</HomeButton>
    </ThankYouContainer>
  );
};

export default ThankYou;
