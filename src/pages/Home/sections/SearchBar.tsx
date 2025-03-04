import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import TrendingDestinations from './TrandingDestinations';

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 600px;
  height: 60px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  @media (max-width: 768px) {
    width: 100%;  /* Adjust width for tablets */
    height: 54px;
  }

  @media (max-width: 480px) {
    width: 100%;  /* Adjust for smaller phones */
    height: 50px;
  }
`;


const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  max-width: 25px;  /* Ensures it doesn't scale beyond this */
  max-height: 25px; /* Prevents unintended stretching */

`;

const SearchInput = styled.input`
  flex: 1;
  font-size: 1rem;
  border: none;
  outline: none;
  padding: 0.75rem 1rem;
  padding-left: 60px;
  background: none;

  ::placeholder {
    color: #999;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Reduce font size for smaller screens */
  }
`;


const SearchButton = styled.button`
  background: #EF6614;
  color: #fff;
  width: 140px;
  height: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 100px;
  border: 0;
  outline: none;
  font-size: 18px;
  font-family: "Poppins", sans-serif !important;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #d55812;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 100px; /* Make button smaller for tablets */
    height: 50px;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    display: none; /* Hide button on smaller screens */
  }
`;


const SearchBar = () => {
  const [showTrending, setShowTrending] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // Track user input
  const searchRef = useRef<HTMLDivElement>(null); // Reference for outside click detection

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (!showTrending) {
      setShowTrending(true);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowTrending(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <SearchBarContainer ref={searchRef}>
      <SearchIcon 
        src="https://images.emtcontent.com/holiday-img/home-img/search.svg"
        alt="Search Icon"
      />
      <SearchInput
        placeholder="Enter Your Dream Destination!"
        value={searchTerm}
        onChange={handleInputChange}
        onClick={() => setShowTrending(true)}
      />
      <SearchButton onClick={() => setShowTrending(true)}>Search</SearchButton>


      {/* Pass searchTerm as a prop */}
      {showTrending && <TrendingDestinations searchTerm={searchTerm} />}
    </SearchBarContainer>
  );
};

export default SearchBar;
