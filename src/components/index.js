import React from "react";
import Header from "./inc/Header";
import Footer from "./inc/Footer";

import HomeHero from "./HomeHero";
import FiveImages from "./FiveImages";
import OurStory from "./OurStory";
import OurNumbers from "./OurNumbers";
import OurTeam from "./OurTeam";
import OurValues from "./OurValues";

export default function HomeLanding() {
    return (
        <>
            <Header />
            <HomeHero />
            <FiveImages />


            <OurStory />
            <OurNumbers />
            <OurTeam />
            <OurValues />


            <Footer />
        </>
    );
}
