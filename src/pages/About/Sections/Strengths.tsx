import React from "react";
import image from "../../../assets/aboutus/fullteam.webp";

function Strength() {
    return (
        <>
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6 col-12 p-3">
                        <img
                            src={image}
                            alt="Strength"
                            className="img-fluid"
                            style={{ width: "100%", maxWidth: "500px" }}
                        />
                    </div>
                    <div className="col-md-6 col-12 mt-3 text-center text-md-start">
                        <h1 className="fs-2 mb-3">
                            About <span>TripStars Holidays LLP</span>
                        </h1>
                        <div className="grytxtht mb-2">
                            TripStars Holidays LLP is a leading travel company in India, known for delivering exceptional travel experiences.
                        </div>
                        <div className="blutxtht mb-2">
                            Offering customized tour packages with a focus on quality and customer satisfaction.
                        </div>
                        <div className="grytxtht mb-2">
                            Expertly curated travel plans for both domestic and international destinations.
                        </div>
                        <div className="blutxtht mb-2">
                            Committed to transparent pricing with no hidden costs and excellent customer support.
                        </div>
                        <div className="grytxtht mb-2">
                            Driven by innovation and guided by a passion for travel.
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Strength;
