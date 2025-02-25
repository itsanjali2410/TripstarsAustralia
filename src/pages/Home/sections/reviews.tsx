import React, { useEffect, useRef } from "react";

const Reviews: React.FC = () => {
  const trustmaryRef = useRef<HTMLDivElement | null>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!scriptLoaded.current && trustmaryRef.current) {
      const script = document.createElement("script");
      script.src = "https://widget.trustmary.com/DM5wb2hpx";
      script.async = true;
      trustmaryRef.current.appendChild(script);
      scriptLoaded.current = true;
    }
  }, []);

  return (
    <div>
      <div style={{ margin: "20px 0", border: "1px solid #ddd", padding: "10px" }}>
        <div ref={trustmaryRef}></div>
      </div>
    </div>
  );
};

export default Reviews;
