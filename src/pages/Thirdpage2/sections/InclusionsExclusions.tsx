import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle, FaTimesCircle, FaCheck, FaTimes } from "react-icons/fa";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  align-items: center;
`;

const OverviewWrapper = styled.div`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Box = styled.div<{ borderColor: string; bgColor: string; $hiddenOnMobile?: boolean }>`
  background-color: ${(props) => props.bgColor};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-left: 5px solid ${(props) => props.borderColor};
  width: 100%;

  @media (min-width: 768px) {
    flex: 1;
    display: block !important;
  }

  @media (max-width: 767px) {
    display: ${(props) => (props.$hiddenOnMobile ? "none" : "block")};
  }
`;

const Title = styled.h3`
  margin: 0 0 15px;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #333;
`;

const Icon = styled.span`
  margin-right: 10px;

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: hidden;
`;

const ListItem = styled.li<{ iconColor: string }>`
  margin-bottom: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #555;

  svg {
    color: ${(props) => props.iconColor};
    margin-right: 8px;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 5px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Tab = styled.div<{ active: boolean }>`
  padding: 10px 5px;
  margin: 5px 2px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #d1d9e0;
  background-color: ${(props) => (props.active ? "#ffffff" : "#f9fafc")};
  color: ${(props) => (props.active ? "#f39c12" : "#333")};
  font-weight: ${(props) => (props.active ? "bold" : "500")};
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffedcc;
  }
`;

// Props Interface
interface InclusionsExclusionsProps {
  inclusions: string[];
  exclusions: string[];
}

// Main Component
const InclusionsExclusions: React.FC<InclusionsExclusionsProps> = ({ inclusions, exclusions }) => {
  const [activeTab, setActiveTab] = useState<"inclusions" | "exclusions">("inclusions");

  return (
    <OverviewWrapper>
      <Container>
        <Tabs>
          <Tab active={activeTab === "inclusions"} onClick={() => setActiveTab("inclusions")}>
            Inclusions
          </Tab>
          <Tab active={activeTab === "exclusions"} onClick={() => setActiveTab("exclusions")}>
            Exclusions
          </Tab>
        </Tabs>
        <Wrapper>
          {[{ title: "Inclusions", items: inclusions, borderColor: "#28a745", bgColor: "#f0f9f0", icon: <FaCheckCircle />, iconColor: "#28a745", $hiddenOnMobile: activeTab !== "inclusions" },
            { title: "Exclusions", items: exclusions, borderColor: "#dc3545", bgColor: "#fdf0f0", icon: <FaTimesCircle />, iconColor: "#dc3545", $hiddenOnMobile: activeTab !== "exclusions" }
          ].map(({ title, items, borderColor, bgColor, icon, iconColor, $hiddenOnMobile }, index) => (
            <Box key={index} borderColor={borderColor} bgColor={bgColor} $hiddenOnMobile={$hiddenOnMobile}>
              <Title>
                <Icon>{icon}</Icon>
                {title}
              </Title>
              <List>
                {items.map((item, i) => (
                  <ListItem key={i} iconColor={iconColor}>
                    {title === "Inclusions" ? <FaCheck /> : <FaTimes />} {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Wrapper>
      </Container>
    </OverviewWrapper>
  );
};

export default InclusionsExclusions;
