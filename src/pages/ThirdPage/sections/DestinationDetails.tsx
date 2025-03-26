import React from "react";
import styled from "styled-components";
import { destinations } from "../data";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import PackageInclude from "../sections/packageincludes"; // Importing the PackageInclude component

// Styled Components
const Container = styled.div`
  padding: 15px;
  @media (max-width: 768px) {
    padding:0px;
  }
`;

const HeadingSmall = styled.h4`
  font-size: 12px;
  color: #666;
`;

const HeadingMedium = styled.h2`
  font-size: 16px;
  font-weight: bold;
`;

const HeadingSemiMedium = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;

const DetailsWrapper = styled.div`
  font-size: 16px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DestinationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
const P = styled.p`
    font-size: 13px;
`;
const PackageWrapper = styled.div`
  flex-shrink: 0;
`;

type DestinationKey = keyof typeof destinations;

interface DestinationDetailsProps {
  selectedDestination: DestinationKey;
}

const DestinationDetails: React.FC<DestinationDetailsProps> = ({ selectedDestination }) => {
  const destination = destinations[selectedDestination];

  if (!destination) return <p>Destination not found</p>;

  return (
    <Container>
      {/* Heading Section */}
      <HeadingMedium>{destination.headingData.line2}</HeadingMedium>
      <HeadingSemiMedium>{destination.headingData.line3}</HeadingSemiMedium>

      {/* Image Slider Placeholder */}
      {destination.images.length > 0 ? (
        <div>
          {destination.images.map((img: string, index: number) => (
            <img key={index} src={img} alt={`Destination ${index}`} style={{ height: "180px", width: "100%", objectFit: "cover",borderRadius: "8px" }}  />
          ))}
        </div>
      ) : (
        <p>No images available</p>
      )}

      {/* Overview Section */}
      <h3>{destination.overviewData.title}</h3>
      <p>{destination.overviewData.content}</p>

      {/* Destination Info & Package Include Section */}
      <DetailsWrapper>
        {/* Destination Details */}
        <DestinationInfo>
          <span><FaRegCalendarAlt /> <b>{destination.duration}</b></span>
          <span><GiWorld /> <b>{destination.country}</b> </span>
          <span><MdLocationPin /> <b>{destination.cities}</b></span>
        </DestinationInfo>

        {/* Package Include Section */}
        <PackageWrapper>
          <PackageInclude />
        </PackageWrapper>
      </DetailsWrapper>
    </Container>
  );
};

export default DestinationDetails;
