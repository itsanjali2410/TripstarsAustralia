import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DestinationDetails from "./sections/DestinationDetails.tsx";
import PackageInclude from "./sections/packageincludes.tsx";
import TravelItinerary from "./sections/TravelItinerary.tsx";
import BaliItinerary from "./sections/BaliItinerary.tsx"
import TabbedTable from "./sections/TabbedTable.tsx";
import TermsAndConditions from "./sections/TermsAndConditions.tsx";
import InclusionsExclusions from "./sections/InclusionsExclusions.tsx";
import PriceCard from "./sections/PriceCard.tsx";
import PackageCard from "./sections/PackageCard.tsx";
import HelpCard from "./sections/HelpCard.tsx";

// Styled Components
const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  width: 70%;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightSection = styled.div`
  width: 30%;
  padding: 20px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    position: static;
    height: auto;
  }
`;

type DestinationKey = "bali" | "vietnam";

export default function ThirdPage() {
  const { destination } = useParams<{ destination: DestinationKey }>();
  const selectedDestination: DestinationKey = destination === "vietnam" ? "vietnam" : "bali"; // Default to "bali"

  return (
    <Container>
      {/* Left Section */}
      <LeftSection>
        <DestinationDetails selectedDestination={selectedDestination} />
        <BaliItinerary />
        <TabbedTable />
        <TermsAndConditions />
        <InclusionsExclusions />
      </LeftSection>

      {/* Right Section */}
      <RightSection>
        <PriceCard price={16999} emiPrice={3590} emiLink="/emi-options" />
        <PackageCard />
        <HelpCard />
      </RightSection>
    </Container>
  );
}
