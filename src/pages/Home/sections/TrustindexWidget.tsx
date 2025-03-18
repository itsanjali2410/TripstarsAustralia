import React, { useEffect, useRef } from "react";
import styled from "styled-components";

// Declare Trustindex in the global window object
declare global {
  interface Window {
    Trustindex?: {
      load: () => void;
    };
  }
}

// Styled Container
const Container = styled.div`
   padding: 0 15rem;
   @media (max-width: 1340px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const TrustindexWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Tripstars - Best Travel Experience";
  
    if (!document.getElementById("trustindex-script")) {
      const script = document.createElement("script");
      script.src = "https://cdn.trustindex.io/loader.js?660bbe64210158756b963b23487";
      script.async = true;
      script.defer = true;
      script.id = "trustindex-script";
  
      script.onload = () => {
        console.log("Trustindex script loaded");
        if (window.Trustindex) {
          window.Trustindex.load();
        }
      };
  
      document.head.appendChild(script);
    } else {
      console.log("Trustindex script already exists, reloading widget...");
      window.Trustindex?.load();
    }
  }, []);
  
  return (
    <Container>
      {/* Page Heading */}
      <h3 style={{ marginTop: "6%", marginBottom: "1%", textAlign: "center" }}>Google Reviews</h3>
      <h6 style={{ marginTop: "1%", marginBottom: "4%", textAlign: "center" }}><center>Their love keep us growing</center></h6>

      <div ref={containerRef}>
        <div className="trustindex-widget">
          {/* Trustindex widget will render reviews here */}
        </div>
      </div>
    </Container>
  );
};

export default TrustindexWidget;
