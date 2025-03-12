import React from "react";

function ImpressiveFigure(){
    return(
        <>
        <div className="container">
        <h1 className="text-center">Impressive <span>Figures</span></h1>
        <div className="row impFigure">
            <div className="col-3 border-end">
                <p className="Figures">99%</p>
                <p className="text-center">Booking Success Rate</p>
            </div>
            <div className="col-3 border-end">
            <p className="Figures">3.44%</p>
            <p className="text-center">Look-To-Book Ratio</p>
            </div>
            <div className="col-3 border-end">
            <p className="Figures">25 Million +</p>
            <p className="text-center">Registered Users</p>
            </div>
            <div className="col-3">
            <p className="Figures">5 M+</p>
            <p className="text-center">Android App Downloads</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default ImpressiveFigure;