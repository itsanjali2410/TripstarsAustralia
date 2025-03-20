import React from "react";
import styled from "styled-components";
import abouthistory from "../../../assets/aboutus/AboutHistory.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  img {
    width: 100%;
    max-width: 500px;

  }
`;

const TextWrapper = styled.div`
  flex: 1;
  text-align: center;
  padding: 1rem;

  @media (min-width: 768px) {
    text-align: left;
    padding-left: 2rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
    font-weight: bold;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    color: #444;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.2rem;
    line-height: 1.7;
    color: #555;
  }
`;

function AboutHistory() {
  return (
    <Container>
      <ImageWrapper>
        <img src={abouthistory} alt="About History" />
      </ImageWrapper>
      <TextWrapper>
        <h1>A Little About Us</h1>
        <h2>LEADING TRAVEL WEBSITE</h2>
        <p>
          Welcome to Tripstars! We are a leading travel website dedicated to helping you plan the perfect vacation.
          Our team is passionate about travel and is here to help you every step of the way.
        </p>
        {/* <h2>VARIETY OF DESTINATIONS</h2>
        <p>
          With a wide variety of destinations to choose from and top-notch customer service, we make it easy for you
          to book your dream trip. Whether you’re looking for a beach getaway, a cultural adventure, or a romantic escape,
          we have something that will fit the bill.
        </p> */}
        <h2>BEST TRAVEL EXPERIENCE</h2>
        <p>
          At Tripstars, we are committed to providing the best possible travel experience for our customers. From the
          moment you start planning your trip to the moment you return home, we are here to assist you and make sure
          everything goes smoothly.
        </p>
      </TextWrapper>
    </Container>
  );
}

export default AboutHistory;
