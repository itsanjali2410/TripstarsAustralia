import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo/logo.png";
import { useEffect, useState } from "react";

// Define prop types for the Dropdown component
interface DropdownProps {
  isOpen: boolean;
}

const NavbarContainer = styled.nav`
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 9999;
  background: rgb(0, 0, 0);
  opacity: 0.9;
  &.active {
    background-color: #000;
    padding: 1rem 2rem;
  }
  @media (max-width: 1080px) {
    &.active {
      padding: 1rem 2rem;
    }
  }
  @media (max-width: 768px) {
    height: 71px;
  }
`;

const Logo = styled.div`
  width: 25%;
  @media (max-width: 768px) {
    width: 25%;
    img {
      width: 5rem;
    }
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 50%;
  list-style: none;
  li {
    padding: 0 0.6rem;
    a {
      color: #fff;
      text-decoration: none;
    }
    position: relative;
  }

  @media (max-width: 768px) {
    position: fixed;
    background-color: rgb(0, 0, 0);
    width: 100vw; /* Full screen width */
    height: 100vh; /* Full screen height */
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Center items */
    align-items: flex-start;
    padding-top:5rem;
    transform: translateX(100%); /* Completely hidden */
    transition: transform 0.4s ease-in-out;
    z-index: 1000;
    overflow: auto; /* Allow scrolling when the menu is open */

    &.active_menu {
      transform: translateX(0); /* Show the menu */
    }

    li {
      padding: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);

      a {
        font-size: 1.2rem; /* Better visibility */
      }
    }

    .close_icon {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
      
      svg {
        width: 2rem;
        path {
          fill: #fff;
        }
      }
    }
  }
`;

const Dropdown = styled.div<DropdownProps>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #071A29;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 1;
  width: 400px; /* Adjust width for both categories */
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 10px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    justify-content: space-between;
  }

  li {
    padding: 0.8rem;
    a {
      font-size: 0.9rem;
      color: white;
      text-decoration: none;
    }
  }

  .category {
    display: flex;
    flex-direction: column;
    width: 45%;
  }
  .category strong {
    margin-bottom: 10px;
    font-weight: bold;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 200%; /* Increase width on mobile */
    padding: 30px;
    ul {
      flex-direction: column; /* Stack the categories vertically */
      justify-content: flex-start; /* Align items at the top */
    }
    .category {
      width: 100%;
      margin-bottom: 15px;
    }
    .category strong {
      font-size: 1rem;
    }
  }
`;

const MenuBtn = styled.div`
  svg {
    width: 2rem;
    fill: #fff;
    style: none;
  }
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [navBg, setNavBg] = useState<boolean>(false);
  const [active, setIsActive] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false); // State to check for mobile screens

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const changeNavBg = () => {
    window.scrollY >= 300 ? setNavBg(true) : setNavBg(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Set mobile view based on screen width
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    window.addEventListener("resize", handleResize); // Listen to window resize event
    handleResize(); // Check initial screen size
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle dropdown for mobile
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <NavbarContainer className={navBg ? "active" : ""}>
      <Logo>
        <a href="https://tripstarsholidays.com/" target="_blank" rel="noopener noreferrer">
          <img src={logoImg} alt="TripStars Holidays" />
        </a>
      </Logo>

      <NavLinksContainer className={active ? "active_menu" : ""}>
        <li className="close_icon" onClick={toggleMenu}>
          <svg
            stroke="currentColor"
            fill="none"
            link-style="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
              fill="currentColor"
            ></path>
          </svg>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li
          className="dropdown"
          onClick={isMobile ? toggleDropdown : undefined} // Use click for mobile
          onMouseEnter={isMobile ? undefined : () => setDropdownOpen(true)} // Hover event for desktop
          onMouseLeave={isMobile ? undefined : () => setDropdownOpen(false)} // Hover event for desktop
        >
          <Link to="/">Destinations</Link>
          <Dropdown isOpen={dropdownOpen}>
            <ul>
              <li className="category">
                <strong>Domestic</strong>
                <Link to="https://tripstarsholidays.com/ladakh">Ladakh</Link>
                <Link to="https://tripstarsholidays.com/kerala">Kerala</Link>
                <Link to="https://tripstarsholidays.com/kashmir">Kashmir</Link>
                <Link to="https://tripstarsholidays.com/andaman">Andaman</Link>
                <Link to="https://tripstarsholidays.com/goa">Goa</Link>
              </li>
              <li className="category">
                <strong>International</strong>
                <Link to="https://tripstarsholidays.com/dubai">Dubai</Link>
                <Link to="https://tripstarsholidays.com/thailand">Thailand</Link>
                <Link to="https://tripstarsholidays.com/singapore">Singapore</Link>
                <Link to="https://tripstarsholidays.com/malaysia">Malaysia</Link>
                <Link to="https://tripstarsholidays.com/bali">Bali</Link>
                <Link to="https://tripstarsholidays.com/hong-kong">Hong Kong</Link>
                <Link to="https://tripstarsholidays.com/europe">Europe</Link>
                <Link to="https://tripstarsholidays.com/vietnam">Vietnam</Link>
                <Link to="https://tripstarsholidays.com/maldives">Maldives</Link>
                <Link to="https://tripstarsholidays.com/australia">Australia</Link>
                <Link to="https://tripstarsholidays.com/mauritius">Mauritius</Link>
                <Link to="https://tripstarsholidays.com/japan">Japan</Link>
              </li>
            </ul>
          </Dropdown>
        </li>

        <li>
          <Link to="/">Holidays</Link>
        </li>
        <li>
          <Link to="/">Themes</Link>
        </li>
        <li>
          <Link to="/">Offers</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </NavLinksContainer>

      <MenuBtn onClick={toggleMenu}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
        </svg>
      </MenuBtn>
    </NavbarContainer>
  );
}
