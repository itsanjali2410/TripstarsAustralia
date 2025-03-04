import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo1 from "../../assets/popup/Customers.png";
import logo2 from "../../assets/popup/Awardwinners .png";
import logo3 from "../../assets/popup/Customerservice.png";
import logoImg from "../../assets/images/logo/logo.png";

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const PopupContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 10000;
  animation: ${fadeIn} 0.4s ease-out;
`;

const PopupContent = styled.div`
  background: white;
  border-radius: 15px;
  width: 600px;
  display: flex;
  position: relative;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  background: rgb(11, 11, 11);
  color: white;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  .main-logo img { width: 150px; }
  .logo-container img { width: 100px; margin: 5px; }
  ul {
    list-style: none;
    padding: 0;
    li { display: flex; align-items: center; gap: 8px; }
  }
  @media (max-width: 768px) { display: none; }
`;

const RightPanel = styled.div`
  padding: 20px;
  flex: 1;
  h3 { font-size: 20px; }
  form { display: flex; flex-direction: column; gap: 10px; }
  input, select {
    width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;
  }
  button {
    padding: 12px; background: black; color: white; border-radius: 5px;
    cursor: pointer; font-size: 14px; font-weight: bold;
    &:hover { background: #218838; }
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover { color: #555; }
`;

const PaxCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  button { padding: 5px 10px; background: #ddd; border-radius: 5px; cursor: pointer; }
`;

const Popup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [pax, setPax] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", contact: "", email: "", destination: "", departureCity: "" });

  useEffect(() => { const timer = setTimeout(() => setIsVisible(true), 5000); return () => clearTimeout(timer); }, []);
  const closePopup = () => setIsVisible(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handlePaxChange = (increment: boolean) => setPax((prev) => (increment ? prev + 1 : Math.max(1, prev - 1)));
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate) return alert("Please select a travel date!");
    setIsSubmitting(true);

    const formSubmission = { ...formData, travelDate: startDate.toISOString(), pax };
    try {
      const response = await fetch("http://148.135.138.32:5000/api/popups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formSubmission),
      });
      if (!response.ok) throw new Error("Failed to submit form");
      alert("Form submitted successfully!");
      setIsVisible(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PopupContainer isVisible={isVisible}>
      <PopupContent>
        <LeftPanel>
          <div className="main-logo"><img src={logoImg} alt="Main Logo" /></div>
          <div className="logo-container">
            <img src={logo1} alt="15k Customers" />
            <img src={logo2} alt="Award Winner" />
            <img src={logo3} alt="Customer Service" />
          </div>
          <ul>
            <li><FaCheckCircle /> 100% Customised Trips</li>
            <li><FaCheckCircle /> 95% Visa Success Rate</li>
            <li><FaCheckCircle /> 24x7 Concierge</li>
          </ul>
        </LeftPanel>
        <RightPanel>
          <CloseButton onClick={closePopup}><FaTimes /></CloseButton>
          <h3>Plan Your Dream Vacation</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            <input type="tel" name="contact" value={formData.contact} onChange={handleChange} placeholder="Your Contact Number" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
          </form>
        </RightPanel>
      </PopupContent>
    </PopupContainer>
  );
};
export default Popup;