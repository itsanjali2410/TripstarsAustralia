import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Finaldata from "./sections/finaldata2";
import PriceCard from "./sections/PriceCard";
import PackageCard from "./sections/PackageCard";
import HelpCard from "../ThirdPage/sections/HelpCard";
import InclusionsExclusions from "./sections/InclusionsExclusions";
import TermsAndConditions from "./sections/TermsAndConditions";
import Itinerary from "./sections/Itinerary";
import TabbedTable from "./sections/TabbedTable";
import PackageOverview from "./sections/PackageOverview";
import Tourdetails from "./sections/Tourdetails";
import TravelInclude from "./sections/TravelInclude"
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

const PackageName = styled.span`
  font-size: 19px;  
  font-weight: 500; 
  color: #333; 
`;

const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
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

const normalizeString = (str: string): string =>
  str.toLowerCase().trim().replace(/\s+/g, "-");

export default function ThirdPage() {
  const params = useParams();
  const destination = params.destination;
  const packageName = params.packageName;

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

  const destinationData = Finaldata[destination] || {};

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

  const totalPackagePrice = parseFloat(packageData?.totalPackagePrice?.replace(/[^0-9.]/g, "") || "0");

  return (
    <Container>
      <LeftSection>
        <h1><PackageName>{packageData.packageName}</PackageName></h1>
        <img
          src={packageData.packageImage}
          alt={packageData.packageName}
          style={{ width: "100%", borderRadius: "10px", height: "400px", objectFit: "cover" }}
        />

        {packageData.overviewData && (
          <PackageOverview
            title={packageData.overviewData.title}
            content={packageData.overviewData.content}
          />
        )}

        {packageData && (
         <Tourdetails
         nights={packageData.nights}
         days={packageData.days}
         highlights={Array.isArray(packageData.highlights) ? packageData.highlights : [packageData.highlights]} // ✅ Ensure array
         destinationCovered={packageData.destinationCovered}
         totalPackagePrice={packageData.totalPackagePrice}
         theme={packageData.theme}
       />
       
        )}

        {packageData.includes && <TravelInclude includes={packageData.includes} />}


        {packageData.pricePerAdult && (
          <p><strong>Price Per Adult:</strong> {packageData.pricePerAdult}</p>
        )}

        {packageData.itinerary && <Itinerary itinerary={packageData.itinerary} />}
        {packageData.tableData && <TabbedTable tableData={packageData.tableData} />}
        <InclusionsExclusions inclusions={packageData.inclusions} exclusions={packageData.exclusions} />
        <TermsAndConditions />
      </LeftSection>

      <RightSection>
        <PriceCard
          totalPackagePrice={totalPackagePrice}
          nights={packageData.nights}
          emiPrice={3590}
          emiLink="/emi-options"
          {...(packageData.pricePerAdult && { pricePerAdult: parseFloat(packageData.pricePerAdult.replace(/[^0-9.]/g, "") || "0") })}
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
