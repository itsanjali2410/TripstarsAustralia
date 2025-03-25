import React from "react";
import team from "../../../assets/aboutus/Team.webp";

function Awards() {
  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center">
          

          {/* Text Section */}
          <div className="col-md-6 col-12 mt-3 text-center text-md-start">
            <h1 className="fs-2 mb-3">
              Why Choose <span>TripStars Holidays</span>
            </h1>
            <ul className="list-unstyled">
              <li className="mb-2">
                Leading Travel Company in India known for delivering personalized and exceptional travel experiences.
              </li>
              <li className="mb-2">
                Expertly curated domestic and international tour packages with transparent pricing and no hidden costs.
              </li>
              <li className="mb-2">
                Driven by innovation, leveraging cutting-edge technology to enhance customer satisfaction.
              </li>
              <li className="mb-2">
                Renowned for 24/7 customer support and a commitment to quality at every touchpoint.
              </li>
              <li className="mb-2">
                A trusted partner for unforgettable journeys, with a passion for creating lifelong memories.
              </li>
            </ul>
          </div>
          {/* Image Section */}
          <div className="col-md-6 col-12 p-3">
            <img
              src={team}
              alt="Awards"
              className="img-fluid"
              style={{ width: "100%", maxWidth: "500px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
