import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
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
    transform: translateY(-2px);
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background-color: #f9fafc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  th, td {
    padding: 12px;
    border: 1px solid #d1d9e0;
    text-align: left;
  }

  th {
    background-color: black;
    color: #ffffff;
  }

  tr:hover {
    background-color: #ffedcc;
  }
`;

// Table Row Interface
interface TableRow {
  name?: string;
  costPerAdult?: string;
  city?: string;
  star4?: string;
  star5?: string;
  label?: string;
  cost4?: string;
  cost5?: string;
}

// Table Data Interface
interface TableData {
  tab1: TableRow[];
  tab2: TableRow[];
  tab3: TableRow[];
}

// Props Interface
interface Props {
  data: TableData;
}

const TabbedTable2: React.FC<Props> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<"tab1" | "tab2" | "tab3">("tab1");

  const renderTable = () => {
    const tableRows = data[activeTab] || [];

    if (activeTab === "tab3") {
      return (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Cost Per Adult</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.costPerAdult}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      );
    }

    return (
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>City / Cost Type</th>
              <th>4 Star Hotels / Cost</th>
              <th>5 Star Hotels / Cost</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index}>
                <td>{row.city || row.label || ""}</td>
                <td>{row.star4?.replace(/\n/g, ", ") || row.cost4 || ""}</td>
                <td>{row.star5?.replace(/\n/g, ", ") || row.cost5 || ""}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
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

export default TabbedTable2;
