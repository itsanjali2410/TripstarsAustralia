import React from "react";
import image from "../../../assets/aboutus/fullteam.jpg";

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
                            Our Unrivalled <span>Strengths</span>
                        </h1>
                        <div className="grytxtht mb-2">
                            We're one of the leading travel companies in India with a customer-centric approach.
                        </div>
                        <div className="blutxtht mb-2">
                            Pioneered the models of No Convenience Fee* and Zero Hidden Cost.
                        </div>
                        <div className="grytxtht mb-2">
                            Offering "end-to-end" travel solution
                        </div>
                        <div className="blutxtht mb-2">
                            Using robust technologies for identifying customer touchpoints
                        </div>
                        <div className="grytxtht mb-2">
                            Providing high-quality and 24/7 customer support.
                        </div>
                        <div className="blutxtht mb-2">
                            Consistent track record of financial and operational performance.
                        </div>
                        <div className="grytxtht mb-2">
                            Wide distribution network supported by a hybrid platform.
                        </div>
                        <div className="blutxtht mb-2">
                            Experienced management team with an established track record.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Strength;
