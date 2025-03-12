import React from "react";
import Navbar from "../../Navbar";
import Hero from "./Hero";
import AboutHistory from "./Abouthistory";
import TechAchievment from "./TechAchievment";
import Awards from "./Awards";
import Premium from "./Premium";
import Strength from "./Strengths";
import ImpressiveFigure from "./ImpressiveFigure";


function AboutPage() {
    return(
        <>
        <Navbar />
        <Hero />
        <AboutHistory />
        <TechAchievment />
        <Awards />
        <Premium />
        <Strength />
        <ImpressiveFigure />
        </>
    )
}

export default AboutPage;