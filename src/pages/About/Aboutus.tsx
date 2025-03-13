import React from "react";
// import Navbar from "../../Navbar";
// import Hero from "./Hero";
import AboutHistory from "../About/Sections/AboutHistory";
import TechAchievment from "../About/Sections/TechAchievment";
import Awards from "../About/Sections/Awards";
import Premium from "../About/Sections/Premium";
import Strength from "../About/Sections/Strengths";
import ImpressiveFigure from "../About/Sections/ImpressiveFigure";
import JourneySoFar from "./Sections/JourneySoFar";

function AboutPage() {
    return(
        <>
        {/* <Navbar />
        <Hero /> */}
        <AboutHistory />
        <JourneySoFar/>
        <TechAchievment />
        <Awards />
        <Premium />
        <Strength />
        <ImpressiveFigure />
        </>
    )
}

export default AboutPage;