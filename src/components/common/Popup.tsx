import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import logo1 from "../../assets/popup/Customers.png";
import logo2 from "../../assets/popup/Awardwinners .png";
import logo3 from "../../assets/popup/Customerservice.png";
import logoImg from "../../assets/images/logo/logo.png";
// Animation for popup fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
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
    max-height: 90vh;
  }
`;

const LeftPanel = styled.div`
  background: rgb(11, 11, 11);
  color: white;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main-logo {
    margin-bottom: 20px;
    
    img {
      width: 150px;
      height: auto;
    }
  }

  .logo-container {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    
    img {
      width: 100px;
      height: auto;
    }
  }

  ul {
    list-style: none;
    margin: 15px 0 0 0;
    padding: 0;

    li {
      font-size: 14px;
      display: flex;
      align-items: center;
      margin: 10px 0;
      gap: 8px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightPanel = styled.div`
  padding: 20px;
  flex: 1;
  position: relative;

  @media (max-width: 768px) {
    flex: none;
    padding-left: 33px;
    padding-top: 14%;
    height: 80vh;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .row {
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  label {
    font-size: 12px;
    color: #555;
  }

  input,
  select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: #0a0a52;
    }
    
    @media (max-width: 768px) {
      padding: 11px;
    }
  }

  .custom-datepicker {
    width: 100%;
    border: 1px solid #ddd;
    padding: 12px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;

    &:hover {
      border-color: #0a0a52;
    }
    
    @media (max-width: 768px) {
      padding: 11px;
    }
  }

  button {
    padding: 12px;
    background: rgb(9, 9, 9);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: background 0.3s;

    &:hover {
      background: #218838;
    }
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: black;

  &:hover {
    color: #555;
  }
`;

const PaxCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    padding: 5px 10px;
    background: #ddd;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background: #bbb;
    }
  }

  span {
    font-size: 14px;
  }
`;



const Popup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [pax, setPax] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    destination: "",
    departureCity: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setIsVisible(false);

  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "popup-container") {
      closePopup();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaxChange = (increment: boolean) => {
    setPax((prev) => (increment ? prev + 1 : prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formSubmission = {
        ...formData,
        travelDate: startDate,
        pax,
    };
    
    try {
        const response = await fetch("http://your-vps-ip:5000/api/popups", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formSubmission),
        });
    
        if (!response.ok) {
         throw new Error("Failed to submit form");
        }
    
        const data = await response.json();
        alert("Form submitted successfully!");
        setIsVisible(false);
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to submit form");
    }
    };
    
  return (
    <PopupContainer id="popup-container" isVisible={isVisible} onClick={handleOutsideClick}>
      <PopupContent>
      <LeftPanel>
          {/* New main logo */}
          <div className="main-logo">
            <img src="http://localhost:5173/src/assets/images/logo/logo.png" alt="Main Logo" />
          </div>

          {/* Additional logos */}
          <div className="logo-container">
            <img src={logo1} alt="15k Customers" style={{ width: "100px", height: "auto" }} />
            <img src={logo2} alt="Award" style={{ width: "100px", height: "auto" }}/>
            <img src={logo3} alt="Customer Service" style={{ width: "100px", height: "auto" }}/>
          </div>

          <ul>
            <li>
              <FaCheckCircle size={14} /> 100% Customised Trips
            </li>
            <li>
              <FaCheckCircle size={14} /> 95% Visa Success Rate
            </li>
            <li>
              <FaCheckCircle size={14} /> 24x7 Concierge
            </li>
          </ul>
        </LeftPanel>

        <RightPanel>
          <CloseButton onClick={closePopup}>
            <FaTimes />
          </CloseButton>
          <h3>Plan Your Dream Vacation</h3>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <label>Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Your Contact Number"
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <div className="row">
              <div>
                <label>Destination</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Destination</option>
                  <option value="maldives">Maldives</option>
                  <option value="bali">Bali</option>
                  <option value="dubai">Dubai</option>
                  <option value="thailand">Thailand</option>
                </select>
              </div>
              <div>
                <label>Departure City</label>
                <input
                  type="text"
                  name="departureCity"
                  value={formData.departureCity}
                  onChange={handleChange}
                  placeholder="Departure City"
                  required
                />
              </div>
            </div>
            <label>Travel Date</label>
            <DatePicker
              selected={startDate}

              dateFormat="dd-MM-yyyy"
              placeholderText="Pick your travel date"
              isClearable
              className="custom-datepicker"
            />
            <label>Number of Pax</label>
            <PaxCounter>
              <button type="button" onClick={() => handlePaxChange(false)} disabled={pax <= 1}>
                -
              </button>
              <span>{pax}</span>
              <button type="button" onClick={() => handlePaxChange(true)}>
                +
              </button>
            </PaxCounter>
            <button type="submit">Submit</button>
          </form>
        </RightPanel>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;

