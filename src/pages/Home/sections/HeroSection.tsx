import React from 'react';
import styled from 'styled-components';

// Styled components
const Banner = styled.div`
  width: 100%;
  height: 60vh;
  background: url('https://static.wixstatic.com/media/ce4a22_791cf55edff1465b9addedcecb4b6023~mv2.jpg/v1/fill/w_1032,h_585,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tripoly%20Website%20Banner%20.jpg') 
    no-repeat right;
  align-items: center;
  padding-left: 5%;
  color: black;
  position: relative;

  @media (max-width: 768px) {
    height: 400px;
    padding-left: 20px;
  }
`;

const BannerContent = styled.div`
  max-width: 50%;
  height:60vh;
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    padding: 0 10px;
  }
`;

const Heading = styled.h2`
  font-size: 50px;
  padding-top:50px;
  font-family: 'Great Vibes', cursive;
  color: #FF7F00;
 
  @media (max-width: 768px) {
    font-size: 45px;
    font-weight: bold;

  }
`;

const Subheading = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
 
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled.a`
  display: inline-block;
  background: black;
  color: white;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  border: 2px solid black;
  transition: 0.3s ease-in-out;

  &:hover {
    background: white;
    color: black;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const OfferBox = styled.div`
  background: rgb(208, 219, 223);
  padding: 20px;
  display: flex;
  width: 100%;
  margin-top: 20px;
  gap: 50px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    
    padding: 15px; /* Adjust padding */
    border-radius: 20px; /* Reduce border-radius */
  }
`;

const Offer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;
`;

const OfferNumber = styled.div`
  background: black;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
`;

const OfferText = styled.div`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 13px;
    widtyh:100%;
  }
`;

const GreenText = styled.span`
  color: red;
  font-weight: bold;
`;


const Divider = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #888;

  @media (max-width: 768px) {
    display: none;
  }
`;

const EuropeGroupTourBanner: React.FC = () => {
  return (
    <Banner>
      <BannerContent>
        <Heading>Europe Group Tour</Heading>
        <Subheading>Limited-Time Deal</Subheading>
        <Button href="#">PICK YOUR OFFER</Button>
        <OfferBox>
          <Offer>
            <OfferNumber>1</OfferNumber>
            <OfferText>
              <span></span> <GreenText>4.9 Rated</GreenText>
            </OfferText>
          </Offer>
          {/* <Divider>or</Divider> */}
          <Offer>
            <OfferNumber>2</OfferNumber>
            <OfferText>
              <GreenText>95% Visa Success Rate</GreenText>
            </OfferText>
          </Offer>
          {/* <Divider>or</Divider> */}
          <Offer>
            <OfferNumber>3</OfferNumber>
            <OfferText>
              <GreenText>100% Customised </GreenText>
            </OfferText>
          </Offer>
        </OfferBox>
      </BannerContent>
    </Banner>
  );
};

export default EuropeGroupTourBanner;
