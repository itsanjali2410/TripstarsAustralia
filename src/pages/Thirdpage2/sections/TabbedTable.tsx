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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background-color: #f9fafc;
  border-radius: 8px;

  th,
  td {
    padding: 12px;

    text-align: left;
    color: #333;
  }

  th {
    background-color: black;
    color: white;
    text-transform: uppercase;
  }
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

interface TabbedTableProps {
  tableData: TableData;
}

const TabbedTable: React.FC<TabbedTableProps> = ({ tableData }) => {
  const [activeTab, setActiveTab] = useState<"tab1" | "tab2" | "tab3">("tab1");

  const renderTable = () => {
    const data = tableData[activeTab];

    return (
      <Table>
        <thead>
          {activeTab === "tab3" ? (
            <tr>
              <th>Name</th>
              <th>Cost Per Adult</th>
            </tr>
          ) : (
            <tr>
              <th>4 Star Hotels</th>
              <th>5 Star Hotels</th>
            </tr>
          )}
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {activeTab === "tab3" ? (
                <>
                  <td>{row.name}</td>
                  <td>{row.costPerAdult}</td>
                </>
              ) : (
                <>
                  <td>{row.star4 || row.cost4}</td>
                  <td>{row.star5 || row.cost5}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
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
      {renderTable()}
    </div>
  );
};

export default TabbedTable;
