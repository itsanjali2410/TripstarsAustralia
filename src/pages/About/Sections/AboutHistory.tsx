import React from "react";

function AboutHistory(){
    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="src\assets\AboutHistory.png" alt="AboutHistory" style={{width:"90%"}} />
                </div>
                <div className="col-6  mt-3">
                    <h1 className='fs-2 mb-3'>About Us</h1>
                    <h2 className='fs-2 mb-3'>Established in 2008: Pioneering India's Online Travel Landscape</h2>
                    <p className='mb-3'>Established in 2008, EaseMyTrip.com is India’s second-largest* online travel platform. Founded by brothers Nishant, Rikant, and Prashant, the company's inception stemmed from their earlier venture, Duke Travel, with a vision to streamline operations and minimize capital requirements.</p><br />
                    <h2 className='fs-2 mb-3'>Navigating Challenges</h2>
                    <p className='mb-3'>Operating initially from a small space, we overcame challenges through determination and familial support, evolving into a resilient entity ensuring financial stability. Transitioning to a customer-facing model in 2011, we adopted a 'no convenience fee' policy, attracting a loyal customer base with transparent pricing and exceptional service.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutHistory;