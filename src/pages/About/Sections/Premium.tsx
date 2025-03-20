import React from "react";
import img1 from "../../../assets/aboutus/premium/16 years of experience.png";
import img2 from "../../../assets/aboutus/premium/20k+ customers.png";
import img3 from "../../../assets/aboutus/premium/Destination guide.png";
import img4 from "../../../assets/aboutus/premium/customer service (1).png";
import img5 from "../../../assets/aboutus/premium/indian meals.png";
import img6 from "../../../assets/aboutus/premium/managed HNIs & celebrities.png";

function Premium() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center text-center g-3">
        {/* Icon 1 */}
        <div className="col-4">
          <div className="p-3 bg-light rounded shadow-sm">
            <img
              src={img1}
              alt="16 years of experience"
              className="img-fluid mb-2"
              style={{ maxWidth: "60px" }}
            />
            <p className="mb-0">16+ Years Experience</p>
          </div>
        </div>

        {/* Icon 2 */}
        <div className="col-4">
          <div className="p-3 bg-light rounded shadow-sm">
            <img
              src={img2}
              alt="20k+ customers"
              className="img-fluid mb-2"
              style={{ maxWidth: "60px" }}
            />
            <p className="mb-0">20K+ Customers</p>
          </div>
        </div>

        {/* Icon 3 */}
        <div className="col-4">
          <div className="p-3 bg-light rounded shadow-sm">
            <img
              src={img3}
              alt="Destination guide"
              className="img-fluid mb-2"
              style={{ maxWidth: "60px" }}
            />
            <p className="mb-0">Destination Guide</p>
          </div>
        </div>

        {/* Icon 4 */}
        <div className="col-4">
          <div className="p-3 bg-light rounded shadow-sm">
            <img
              src={img4}
              alt="Customer service"
              className="img-fluid mb-2"
              style={{ maxWidth: "60px" }}
            />
            <p className="mb-0">Customer Service</p>
          </div>
        </div>

        {/* Icon 5 */}
        <div className="col-4">
          <div className="p-3 bg-light rounded shadow-sm">
            <img
              src={img5}
              alt="Indian meals"
              className="img-fluid mb-2"
              style={{ maxWidth: "60px" }}
            />
            <p className="mb-0">Indian Meals</p>
          </div>
        </div>

        {/* Icon 6 */}
        <div className="col-4">
          <div className="p-3 bg-light rounded shadow-sm">
            <img
              src={img6}
              alt="Managed HNIs & celebrities"
              className="img-fluid mb-2"
              style={{ maxWidth: "60px" }}
            />
            <p className="mb-0">Managed HNIs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premium;
