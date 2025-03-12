import React from "react";

function Premium() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
         
          <div className="col-6  mt-3">
            <h1 className="fs-2 mb-3">
              Explore Our Premier
              <span>Products & Services</span>
            </h1>
            <p className="mb-3">
              At EaseMyTrip, we feature a comprehensive mosaic of exceptional
              travel products and services that are specially designed to offer
              personalise customer experience at its best.
            </p>
            <div className="container">
              {/* First Row */}
              <div className="row">
                <div className="col-2 premiumImg">
                  <img src="src/assets/PremiumImgs/flticn.svg" alt="flight" />
                </div>
                <div className="col-2 premiumImg">
                  <img src="src/assets/PremiumImgs/htlicn.svg" alt="hotel" />
                </div>
                <div className="col-2 premiumImg">
                  <img src="src/assets/PremiumImgs/busicn.svg" alt="bus" />
                </div>
                <div className="col-2 premiumImg">
                  <img src="src/assets/PremiumImgs/trnicn.svg" alt="train" />
                </div>
                <div className="col-2 premiumImg">
                  <img src="src/assets/PremiumImgs/cabicn.svg" alt="cab" />
                </div>
              </div>

              {/* Second Row */}
              <div className="row mt-3">
                <div className="col-2 premiumImg">
                  <img src="src/assets/PremiumImgs/crusicn.svg" alt="cruise" />
                </div>
                <div className="col-2 premiumImg">
                  <img
                    src="src/assets/PremiumImgs/actvicn.svg"
                    alt="activity"
                  />
                </div>
                <div className="col-2 premiumImg">
                  <img
                    src="src/assets/PremiumImgs/holidyicn.svg"
                    alt="holiday"
                  />
                </div>
                <div className="col-2 premiumImg">
                  <img
                    src="src/assets/PremiumImgs/chrtricn.svg"
                    alt="charter"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 p-5">
            <img
              src="src\assets\premimflmg.png"
              alt="premium"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Premium;
