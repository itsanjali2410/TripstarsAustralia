import React, { useState } from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #f9fafc;
  border-bottom: 2px solid #d1d9e0;
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

const ContentContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #f9fafc;
  border-radius: 8px;
  color: #333;
  font-size: 16px;
  white-space: pre-line;
`;

interface TableRow {
  name?: string;
  costPerAdult?: string;
  star4?: string;
  star5?: string;
  label?: string;
  cost4?: string;
  cost5?: string;
}

interface TableData {
  tab1: TableRow[];
  tab2: TableRow[];
  tab3: TableRow[];
}

interface TabbedContentProps {
  tableData: TableData;
}

const TabbedContent: React.FC<TabbedContentProps> = ({ tableData }) => {
  const [activeTab, setActiveTab] = useState<"tab1" | "tab2" | "tab3">("tab1");

  const renderContent = () => {
    const data = tableData[activeTab];
    return (
      <ContentContainer>
        {data.map((row, index) => (
          <div key={index}>
            {activeTab === "tab3" ? (
              <p>{row.name} costs {row.costPerAdult} per adult.</p>
            ) : (
              <>
                <p>4-star hotel: {row.star4 || row.cost4}</p>
                <p>5-star hotel: {row.star5 || row.cost5}</p>
              </>
            )}
          </div>
        ))}
      </ContentContainer>
    );
  };

  return (
    <div>
      <TabsContainer>
        <Tab active={activeTab === "tab1"} onClick={() => setActiveTab("tab1")}>
          Land Package Price
        </Tab>
        <Tab active={activeTab === "tab2"} onClick={() => setActiveTab("tab2")}>
          Package with Flight
        </Tab>
        <Tab active={activeTab === "tab3"} onClick={() => setActiveTab("tab3")}>
          Optional Cost
        </Tab>
      </TabsContainer>
      {renderContent()}
    </div>
  );
};

export default TabbedContent;
