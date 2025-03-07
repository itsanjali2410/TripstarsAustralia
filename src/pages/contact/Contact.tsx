import React, { useState } from "react";
import styled from "styled-components";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
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
    border-radius: 10px;
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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  text-align: center;

  h2 {
    color:rgb(0, 0, 0);
    margin-bottom: 35px;
  }

  input, textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
  }

  button {
    background:rgb(0, 0, 0);
    color: white;
    padding: 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 18px;
    transition: 0.3s;
  }

  button:hover {
    background:rgb(0, 0, 0);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  max-width: 350px;
  text-align: center;

  h3 {
    color:rgb(0, 0, 0);
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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <ContactContainer>
      <Banner>
        <img src="https://www.eraindia.org/wp-content/uploads/2022/09/contact-banner.jpg" alt="Contact Us" />
      </Banner>
      <ContactSection>
        <ContactForm onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows={4} value={formData.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
        </ContactForm>
        <ContactInfo>
          <h3>Contact Information</h3>
          <div><FaPhone /> +1 234 567 890</div>
          <div><FaEnvelope /> contact@example.com</div>
          <div><FaMapMarkerAlt /> 123 Main Street, City, Country</div>
        </ContactInfo>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contact;
