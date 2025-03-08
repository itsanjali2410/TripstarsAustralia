import React from 'react';
import styled from 'styled-components';

// Styled component for the WhatsApp button
const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;

  
background-color: transparent;  
  border-radius: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #25D366;
  }

  // Adjustments for smaller screens
  @media (max-width: 600px) {
    bottom: 15px;
    right: 15px;
  }
`;

const WhatsAppIcon = styled.img`
  width: 3rem;
  height: 3rem;
  display: block;

  @media (max-width: 600px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const FloatingWhatsAppButton = () => {
  return (
    <WhatsAppButton href="https://wa.me/7710827169" target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon src="https://img.icons8.com/color/96/whatsapp.png" alt="WhatsApp" />
    </WhatsAppButton>
  );
};

export default FloatingWhatsAppButton;
