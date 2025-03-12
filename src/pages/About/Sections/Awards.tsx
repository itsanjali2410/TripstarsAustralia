import React from "react";

function Awards(){
    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="src\assets\awards.webp" alt="Awards" style={{width:"90%"}} />
                </div>
                <div className="col-6  mt-3">
                    <h1 className='fs-2 mb-3'>Awards and <span>Achievements</span></h1>
                    <p>Some of the recent awards and achievements are:</p>
                    <ul>
                        <li className="mb-2">Best Online Travel Agency – Veta 2024</li>
                        <li className="mb-2">Online Travel Agent of the Year - SATTE Awards 2024</li>
                        <li className="mb-2">Game changer award – India Travel Awards, North, 2023</li>
                        <li className="mb-2">Bootstrapped Entrepreneur of the Year – HURUN India 2022</li>
                        <li className="mb-2">Best Travel Portal of the Year – Entrepreneur India 2022</li>
                    </ul>
                    <p><a href="#"><span>Click Here</span></a> to know about more achievements and awards</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Awards;