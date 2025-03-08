import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // Get the current location from react-router

  useEffect(() => {
    // Scroll to the top of the page when the location (route) changes
    window.scrollTo(0, 0);
  }, [location]); // The effect runs every time the location changes

  return null;
};

export default ScrollToTop;
