import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const cardData = [
  { image: "https://cdn.mos.cms.futurecdn.net/xbELjBNkaox36YPsoBakF.jpg", route: "/europe" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2o7CCVhX3L4ZltcrLl6MvFB3ZGAgcz9qFg&s", route: "/europe" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2RlPP8F-UbM40JFcbK4Ugff8gQx0EUoZuwN0xbYiIgf1UWk4w0yI2FZ_R-LZ-2gh4BwU&usqp=CAU", route: "/europe" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohk3fKrjiaKShBWyVKpq0NccCP4svY5fy7g&s", route: "/europe" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9zuT-4R7fcXNgE0-kq5HMuKjwJlh3ySb3Q&s", route: "/europe" },
];

const ImageCards: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-3" style={{ maxWidth: "100%" }}>
      {/* ✅ Responsive Padding Rules */}
      <style>
        {`
          @media (min-width: 1400px) {
            .container { padding: 0 15rem; }
          }
          @media (max-width: 1399px) {
            .container { padding: 0 10rem; }
          }
          @media (max-width: 1370px) {
            .container { padding: 0 8rem; }
          }
          @media (max-width: 1200px) {
            .container { padding: 0 5rem; }
          }
          @media (max-width: 992px) {
            .container { padding: 0 2rem; }
          }
          @media (max-width: 768px) {
            .container { padding: 0 1rem; }
          }
          @media (max-width: 375px) {
            .container { padding: 0 0.5rem; }
          }
        `}
      </style>

      {/* ✅ Title with Uppercase & Smaller Font */}
      <h2 className="text-left mb-4" style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#000"
      }}>
        Explore Europe
      </h2>

      {/* ✅ Mobile View: Horizontal Scroll */}
      <div
        className="d-flex d-md-none overflow-auto gap-2 p-2 mb-4"
        style={{
          whiteSpace: "nowrap",
          scrollSnapType: "x mandatory",
          overflowX: "auto",
          paddingBottom: "10px",
        }}
      >
        {cardData.map((item, index) => (
          <div key={index} className="flex-shrink-0" style={{ scrollSnapAlign: "center" }}>
            <div
              className="card shadow-sm text-center"
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                minWidth: "120px",
                transition: "transform 0.2s ease-in-out",
                padding: "0",
                overflow: "hidden",
              }}
              onClick={() => navigate(item.route)}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.08)") }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>
              <img
                src={item.image}
                className="img-fluid"
                style={{
                  borderRadius: "8px",
                  height: "80px",
                  objectFit: "cover",
                  width: "100%",
                  display: "block",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Medium & Large Screens: Grid Layout */}
      <div
        className="d-none d-md-grid mb-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "15px",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {cardData.map((item, index) => (
          <div key={index} className="p-1">
            <div
              className="card shadow-sm text-center"
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                padding: "0",
                overflow: "hidden",
              }}
              onClick={() => navigate(item.route)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={item.image}
                className="img"
                style={{
                  borderRadius: "8px",
                  height: "100px",
                  objectFit: "cover",
                  width: "100%",
                  display: "block",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCards;
