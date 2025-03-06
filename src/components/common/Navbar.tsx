import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo/logo.png";
import { useEffect, useState } from "react";

const NavbarContainer = styled.nav`
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 9999;
  background: #071A29;
  opacity: 0.9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
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
    position: relative; /* Added for dropdown positioning */
  }

  @media (max-width: 768px) {
    position: absolute;
    background-color: #071A29;
    width: 80vw;
    height: 100svh;
    top: 0;
    right: 0;
    display: block;
    transform: translateX(80vw);
    transition: all 0.4s ease-in-out;
    &.active_menu {
      transform: translateX(0px);
    }
    li {
      padding: 1rem 1rem;
      border-bottom: 1px solid #071A29;
      a {
        font-size: 0.9rem;
      }
    }
    .close_icon {
      display: flex;
      justify-content: end;
      svg {
        width: 2rem;
        path {
          fill: #fff;
        }
      }
      display: none;
      @media (max-width: 768px) {
        display: flex;
      }
    }
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #071A29;
  display: none;
  z-index: 1;
  width: 400px; /* Adjust width for both categories */
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 10px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: space-between; /* Aligns the categories side by side */
  }

  li {
    padding: 0.8rem;
    a {
      font-size: 0.9rem;
      color: white;
      text-decoration: none;
    }
  }

  /* Show the dropdown on hover */
  ${NavLinksContainer} li:hover & {
    display: block;
  }

  /* Styles for the categories (Domestic and International) */
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
    width: 100%; /* Take full width on mobile */
    padding: 15px;
    ul {
      flex-direction: column; /* Stack the categories vertically */
      justify-content: flex-start; /* Align items at the top */
    }
    .category {
      width: 100%; /* Full width for each category on mobile */
      margin-bottom: 15px;
    }
    .category strong {
      font-size: 1rem; /* Increase font size for better readability */
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

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const changeNavBg = () => {
    window.scrollY >= 300 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
  }, []);

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
        <li className="dropdown">
          <Link to="/">Destinations</Link>
          <Dropdown>
            <ul>
              <li className="category">
                <strong>Domestic</strong>
                <Link to="https://tripstarsholidays.com/ladakh">Ladakh</Link>
                <Link to="https://tripstarsholidays.com/kerala">Kerala</Link>
                <Link to="https://tripstarsholidays.com/kashmir">Kashmir</Link>
                <Link to="https://tripstarsholidays.com/andaman">Andaman</Link>
                <Link to="https://tripstarsholidays.com/rajasthan">Rajasthan</Link>
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
