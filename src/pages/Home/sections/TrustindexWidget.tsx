import React, { useEffect, useRef } from "react";
import { HiH1 } from "react-icons/hi2";

// Declare Trustindex in the global window object
declare global {
  interface Window {
    Trustindex?: {
      load: () => void;
    };
  }
}

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
    <div style={{ padding: "50px 20px" }}>
      {/* Page Heading */}
      <h1 style={{ textAlign: "center", marginBottom: "10px"}}>
        Google Review
      </h1>

      <div ref={containerRef}>
        <div className="trustindex-widget">
          {/* Trustindex widget will render reviews here */}
        </div>
      </div>
    </div>
  );
};

export default TrustindexWidget;
