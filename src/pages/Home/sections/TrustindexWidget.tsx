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
    // Set the page title
    document.title = "Customer Reviews | Trustindex";

    if (!document.getElementById("trustindex-script")) {
      const script = document.createElement("script");
      script.src =
      "https://cdn.trustindex.io/loader.js?c31e44841710990a8b16dcd4ddb";
      script.async = true;
      script.defer = true;
      script.id = "trustindex-script";

      script.onload = () => {
        console.log("Trustindex script loaded");
        if (window.Trustindex) {
          window.Trustindex.load();
        }
      };

      containerRef.current?.appendChild(script);
    } else {
      if (window.Trustindex) {
        window.Trustindex.load();
      }
    }
  }, []);

  return (
    <Container>
      {/* Page Heading */}
      <h1 style={{ marginBottom: "10px", textAlign: "center" }}>Google Reviews</h1>
      <div ref={containerRef}>
        <div className="trustindex-widget">
          {/* Trustindex widget will render reviews here */}
        </div>
      </div>
    </Container>
  );
};

export default TrustindexWidget;
