import React, { useState } from "react";
import styled from "styled-components";

// Styled Floating Button
const FloatingButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #1eb954;
  }

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
    bottom: 15px;
    right: 15px;
  }
`;

// Styled WhatsApp Icon
const WhatsAppIcon = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

// Floating Menu
const Menu = styled.div`
  position: fixed;
  bottom: 90px;
  right: 20px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  z-index: 1001;

  @media (max-width: 600px) {
    right: 15px;
    bottom: 75px;
  }
`;

// Menu Buttons
const MenuButton = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: black;
  font-size: 16px;
  border-radius: 5px;
  transition: background 0.3s;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const FloatingContactButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <FloatingButton onClick={() => setMenuOpen(!menuOpen)}>
        <WhatsAppIcon src="https://img.icons8.com/ios-filled/50/ffffff/chat.png" alt="Plan your trip" />
      </FloatingButton>

      {/* Dropdown Menu */}
      {menuOpen && (
        <Menu>
          {/* WhatsApp Option */}
          <MenuButton href="https://wa.me/7710827169" target="_blank">
            <MenuIcon src="https://img.icons8.com/color/48/whatsapp.png" alt="WhatsApp" />
            Chat on WhatsApp
          </MenuButton>

          {/* Call Option */}
          <MenuButton href="tel:+919875097159">
            <MenuIcon src="https://img.icons8.com/color/48/phone.png" alt="Call" />
            Call Now
          </MenuButton>
        </Menu>
      )}
    </>
  );
};

export default FloatingContactButton;
