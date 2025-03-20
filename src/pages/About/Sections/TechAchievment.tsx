import React from "react";
import abouthistory from "../../../assets/aboutus/Tripstarsahemdabad.jpg";

function AboutHistory() {
  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 col-12 p-3">
            <img
              src={abouthistory}
              alt="About History"
              className="img-fluid"
              style={{ width: "100%", maxWidth: "500px" }}
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6 col-12 mt-3 text-center text-md-start">
            <h1 className="fs-2 mb-3">
              A Little About <span></span>
            </h1>
            <div className="grytxtht mb-2">
              Welcome to Tripstars! We are a leading travel website dedicated to helping you plan the perfect vacation.
              Our team is passionate about travel and is here to help you every step of the way.
            </div>
            <div className="blutxtht mb-2">
              With a wide variety of destinations to choose from and top-notch customer service, we make it easy for you
              to book your dream trip.
            </div>
            <div className="grytxtht mb-2">
              Whether you’re looking for a beach getaway, a cultural adventure, or a romantic escape,
              we have something that will fit the bill.
            </div>
            <div className="blutxtht mb-2">
              At Tripstars, we are committed to providing the best possible travel experience for our customers.
            </div>
            <div className="grytxtht mb-2">
              From the moment you start planning your trip to the moment you return home, we are here to assist you
              and make sure everything goes smoothly.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHistory;
