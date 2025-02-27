import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    font-family: "Poppins", sans-serif;
    color: #000;
    overflow-x: hidden;
  }

  .swiper-container-free-mode > .swiper-wrapper {
    transition-timing-function: linear;
  }

  .ExploreEurope, .ExploreIndia {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
