import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import HomeHero from "./HomeHero";
import FiveImages from "./FiveImages";
import OurStory from "./OurStory";
import Handshake from "./Handshake";
import OurTeam from "./OurTeam";

export default function HomeLanding() {
    return (
        <>
            <Header />
            <HomeHero />
            <FiveImages />


            <OurStory />
            <Handshake />
            <OurTeam />


            <Footer />
        </>
    );
}
