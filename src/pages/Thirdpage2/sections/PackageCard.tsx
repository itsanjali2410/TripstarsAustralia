import React from "react";
import styled from "styled-components";

// Styled Components
const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
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
`;

const PlacesToVisit = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  margin-bottom: 15px;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

// ✅ **Define Props Interface**
interface PackageCardProps {
    nights: number;
    days: number;
    destinationCovered: string;
  }

// ✅ **Use the Props in Functional Component**
const PackageCard: React.FC<PackageCardProps> = ({ nights, days, destinationCovered }) => {
  return (
    <CardWrapper>
      <Duration>
        <img
          src="https://www.easemytrip.com/holidays/Detailcss/newcss/img/clock-holiday-v1.svg"
          alt="Duration"
        />
        <strong> Duration: </strong> {nights} Nights & {days} Days
      </Duration>
      <PlacesToVisit>
        <img
          src="https://www.easemytrip.com/holidays/Detailcss/newcss/img/location-holiday.svg"
          alt="Location"
        />
        <strong>Destination:</strong> {destinationCovered}
      </PlacesToVisit>
    </CardWrapper>
  );
};

export default PackageCard;
