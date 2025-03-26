
import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border-radius: 8px;
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;

  }
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const PlacesToVisit = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;


  img {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const PackageIncludesWrapper = styled.div`
  position: relative;
  margin: 20px 0;
  text-align: center;
`;

const Divider = styled.hr`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  border: none;
  border-top: 1px solid #ddd;
  z-index: 0; /* Place behind the button text */
`;


const IconsWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {

  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #555;
  margin: 10px;

  img {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }

  span {
    font-size: 13px;
    color: #333;
  }

  @media (max-width: 768px) {
    font-size: 11px;

    img {
      width: 35px;
      height: 35px;
    }
  }
`;
export default function PackageInclude() {
    return (
      <CardWrapper>
        <PackageIncludesWrapper>
          <Divider />
        </PackageIncludesWrapper>
        <IconsWrapper>
          <IconContainer>
            <img
              src="https://www.easemytrip.com/holidays/Content/customize/img/hotel-1.svg"
              alt="Hotel"
            />
            <span>Hotel</span>
          </IconContainer>
          <IconContainer>
            <img
              src="https://www.easemytrip.com/holidays/Content/customize/img/sightseeing-1.svg"
              alt="Sightseeing"
            />
            <span>Sightseeing</span>
          </IconContainer>
          <IconContainer>
            <img
              src="https://www.easemytrip.com/holidays/Content/customize/img/transfer-1.svg"
              alt="Transfer"
            />
            <span>Transfer</span>
          </IconContainer>
          <IconContainer>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3313/3313509.png"
              alt="Meal"
            />
            <span>Meal</span>
          </IconContainer>
        </IconsWrapper>
      </CardWrapper>
    );
  }
  