import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactbanner from "../../assets/contact/contactbanner.png";
import ThankYou from "../../components/common/thankyou";
import axios from "axios";
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(135deg, #f5f7fa, rgb(255, 255, 255));
  min-height: 100vh;
`;

const Banner = styled.div`
  width: 100%;
  text-align: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
    display: block;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
`;

const formBoxShadow = "0px 6px 15px rgba(0, 0, 0, 0.15)";
const inputStyles = `
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: ${formBoxShadow};
  text-align: center;

  h2 {
    color: rgb(0, 0, 0);
    margin-bottom: 35px;
  }

  input, textarea {
    ${inputStyles}
  }

  button {
    background: rgb(0, 0, 0);
    color: white;
    padding: 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 18px;
    transition: 0.3s;
  }

  button:hover {
    background: rgb(0, 0, 0);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: ${formBoxShadow};
  max-width: 350px;
  text-align: center;

  h3 {
    color: rgb(0, 0, 0);
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    padding: 10px;
    background: #f5f7fa;
    border-radius: 6px;
  }
`;

const contactDetails = [
  { icon: <FaPhone />, label: "8655351948" },
  { icon: <FaEnvelope />, label: "Info@tripstars.in" },
  { icon: <FaMapMarkerAlt />, label: "1817/1818-B, Navratna Corporate Park, Iscon-Ambli Road, Ahmedabad - 380058" },
  { icon: <FaMapMarkerAlt />, label: "105 & 315, Sai Arcade, Mulund W, Mumbai 400080" }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const navigate = useNavigate();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  }, []);

  const API_URL = "https://backend.tripstarsholidays.com"; // ✅ Ensure the correct backend URL

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the form data
    const formDataToSend = {
        name: formData.name,
        
        email: formData.email,
        
    };

    try {
        // ✅ Send form data to backend API
        const response = await axios.post(`${API_URL}/submit-form`, formDataToSend);

        if (response.status === 200) {

            navigate("/thankyou");
        } else {
            alert("❌ Failed to save data to the database.");
        }

    } catch (error) {
        console.error("❌ API Error:", error);
        alert("❌ Failed to submit the form. Please try again.");
    }
};

  return (
    <ContactContainer>
      <Banner>
        <img src={contactbanner} alt="Contact Us" />
      </Banner>
      <ContactSection>
        <ContactForm onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </ContactForm>
        <ContactInfo>
          <h3>Contact Information</h3>
          {contactDetails.map((detail, index) => (
            <div key={index}>
              {detail.icon} {detail.label}
            </div>
          ))}
        </ContactInfo>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contact;
