import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Finaldata from "./sections/finaldata2"; // Import package data
import PriceCard from "./sections/PriceCard";
import PackageCard from "./sections/PackageCard";
import HelpCard from "../ThirdPage/sections/HelpCard";
import InclusionsExclusions from "./sections/InclusionsExclusions";
import TermsAndConditions from "./sections/TermsAndConditions";
import Itinerary from "./sections/Itinerary";
import TabbedTable from "./sections/TabbedTable";
import PackageOverview from "./sections/PackageOverview";
import PackageInclude from "../ThirdPage/sections/packageincludes";
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

  @media (max-width: 768px) {
    width: 100%;
    position: static;
    height: auto;
  }
`;
const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 14px;
`;

const IconImage = styled.img`
  width: 40px;
  height: 40px;
`;

type RouteParams = {
  destination?: string;
  packageName?: string;
};

// Normalize package names for URL-safe comparison
const normalizeString = (str: string): string =>
  str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");

export default function ThirdPage() {
  const { destination, packageName } = useParams<RouteParams>();

  if (!destination || !packageName) {
    return (
      <Container>
        <LeftSection>
          <h3>Invalid URL</h3>
          <p>Destination or package name is missing in the URL.</p>
        </LeftSection>
      </Container>
    );
  }

  if (!(destination in Finaldata)) {
    return (
      <Container>
        <LeftSection>
          <h1>Invalid Destination</h1>
          <p>The selected destination does not exist.</p>
        </LeftSection>
      </Container>
    );
  }

  const destinationData = Finaldata[destination];

  const normalizedPackageName = normalizeString(decodeURIComponent(packageName));

  const packageData = Object.values(destinationData).find(
    (pkg) => normalizeString(pkg.packageName) === normalizedPackageName
  );

  if (!packageData) {
    return (
      <Container>
        <LeftSection>
          <h1>Package Not Found</h1>
          <p>The requested package does not exist. Please check the URL.</p>
        </LeftSection>
      </Container>
    );
  }

  return (
    <Container>
      {/* Left Section - Package Details */}
      <LeftSection>
        <h1>{packageData.packageName}</h1>
        <img
          src={packageData.packageImage}
          alt={packageData.packageName}
          style={{ width: "100%", borderRadius: "10px", height: "200px", objectFit: "cover"}}
        />
        <PackageOverview
          title={packageData.overviewData.title}
          content={packageData.overviewData.content}
        />
        {/* ✅ Dynamic Package Inclusions with Icons */}
        
        {packageData.includes && (
          <IconContainer>
            {packageData.includes.map((item, index) => (
              <IconWrapper key={index}>
                <IconImage src={item.iconUrl} alt={item.name} />
                <span>{item.name}</span>
              </IconWrapper>
            ))}
          </IconContainer>
        )}

        {/* <p><strong>Destination:</strong> {packageData.destinationCovered}</p>
          <p><strong>Total Price:</strong> {packageData.totalPackagePrice}</p> */}

        {/* ✅ Conditionally render "Price Per Adult" */}
        {packageData.pricePerAdult && (
          <p><strong>Price Per Adult:</strong> {packageData.pricePerAdult}</p>
        )}

        {/* Pass Itinerary Data */}
        <Itinerary itinerary={packageData.itinerary} />
        {/* Pass Dynamic Data */}
        <TermsAndConditions />
        {/* ✅ Render the tabbed table only if tableData exists */}
        {packageData.tableData && <TabbedTable tableData={packageData.tableData} />}

        <InclusionsExclusions inclusions={packageData.inclusions} exclusions={packageData.exclusions} />
      </LeftSection>

      {/* Right Section - Pricing, Help, and Package Summary */}
      <RightSection>
        <PriceCard
          totalPackagePrice={parseFloat(packageData.totalPackagePrice.replace(/[^0-9.]/g, ""))}
          nights={packageData.nights}
          emiPrice={3590}
          emiLink="/emi-options"
          // ✅ Only pass pricePerAdult if it exists
          {...(packageData.pricePerAdult && { pricePerAdult: parseFloat(packageData.pricePerAdult.replace(/[^0-9.]/g, "")) })}
        />

        <PackageCard
          nights={packageData.nights}
          days={packageData.days}
          destinationCovered={packageData.destinationCovered}
        />


        <HelpCard />
      </RightSection>
    </Container>
  );
}
