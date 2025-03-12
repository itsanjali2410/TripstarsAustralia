import React from "react";
import styled from "styled-components";

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(""); /* Example travel image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  padding: 20px;
  color: white;
`;


const Title = styled.h1`
  font-size: 36px;
  color: gold;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
`;

const HomeButton = styled.a`
  padding: 10px 20px;
  background:rgb(9, 9, 17);
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
      <Message>Email sent successfully to Admin!</Message>
      <HomeButton href="/">Go Back to Home</HomeButton>
    </ThankYouContainer>
  );
};

export default ThankYou;
