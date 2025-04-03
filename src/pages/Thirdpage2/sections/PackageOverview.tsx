import React from "react";
import styled from "styled-components";

const OverviewWrapper = styled.div`
  padding-top: 20px;
  border-radius: 8px;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  color:black;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust for smaller screens */
  }
`;

interface PackageOverviewInterface {
  title:string,
  content:string
}

export default function PackageOverview({ title, content }: PackageOverviewInterface) {
  return (
    <OverviewWrapper>
      <Title>{title}</Title>
      <Paragraph>{content}</Paragraph>
    </OverviewWrapper>
  );
}
