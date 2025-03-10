import React from "react";
import styled from "styled-components";
import { FaUniversity, FaQrcode, FaExclamationCircle } from "react-icons/fa";
import upiQr from "../../assets/contact/UPI.png";

// Styled Components
const Container = styled.div`
  width: 90%;
  padding: 0 15rem;
  margin: 20px auto;
  background: linear-gradient(to bottom,rgb(245, 244, 243), #B8860B);
  padding: 20px;
  border-radius: 8px;
  color: black;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(to bottom, #FFD700, #B8860B);
  color: black;
  padding: 10px 15px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const SubSection = styled.div`
  background-color: #f9f9f9;
  padding: 18px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  color: black;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const Th = styled.th`
  background-color: #f4f4f4;
  padding: 14px;
  border: 1px solid #ddd;
  text-align: left;
  color: black;
`;

const Td = styled.td<{ isEven?: boolean }>`
  border: 1px solid #ddd;
  padding: 14px;
  text-align: left;
  color: black;
  background-color: ${({ isEven }) => (isEven ? "#f4f4f4" : "white")};
`;

const Note = styled.div`
  background-color: #d8e3fc;
  padding: 14px;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 10px;
  font-weight: bold;
  color: black;
`;

const PaymentPolicies: React.FC = () => {
  return (
    <Container>
      <SectionTitle>
        <FaUniversity /> Pay Us At
      </SectionTitle>
      <SubSection>
        <SectionTitle>
          <FaUniversity /> Bank Transfer
        </SectionTitle>
        <p><b>A/C No:</b> 036105003255</p>
        <p><b>A/C Name:</b> ICICI Bank</p>
        <p><b>IFSC Code:</b> ICIC0000361</p>
      </SubSection>
      <SubSection>
        <SectionTitle>
          <FaQrcode /> UPI Payment
        </SectionTitle>
        <p><b>UPI ID (Google Pay/BHIM/PhonePe):</b> eazypay.0000055947@icici</p>
        <p><b>Scan & Pay:</b></p>
        <img src={upiQr} alt="UPI QR Code" style={{ width: '150px', height: '150px', maxWidth: '100%', borderRadius: '8px', marginTop: '10px' }} />
      </SubSection>
      <SectionTitle>TERMS & CONDITIONS</SectionTitle>
      <SubSection>
        <p>All payments should be cleared at least 30 days prior to departure.</p>
        <p>In case a client wishes to prepone/postpone travel dates, kindly reach us 15 days prior to the journey date via e-mail or message. Charges may apply as per service provider policies.</p>
        <p>All International quotes are provided in INR based on the USD exchange rate at the time of booking. Any increase in the ROE at the time of payment will be borne by the client.</p>
        <h3>If you Cancel your Holiday</h3>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <Th>Cancellation Period</Th>
                <Th>Cancellation Charges</Th>
              </tr>
            </thead>
            <tbody>
              {[['30 days or more', '25% of total cost'], ['29 - 20 days', '50% of total cost'], ['19 days or less', '100% of total cost']].map((row, index) => (
                <tr key={index}>
                  <Td isEven={index % 2 === 0}>{row[0]}</Td>
                  <Td isEven={index % 2 === 0}>{row[1]}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
        <p>Airfare cancellation policy is subject to the airline and may be non-refundable.</p>
      </SubSection>
    </Container>
  );
};

export default PaymentPolicies;
