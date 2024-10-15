import React from "react";
import team_member_1 from "../assets/team_member_1.png";
import team_member_2 from "../assets/team_member_2.png";
import team_member_3 from "../assets/team_member_3.png";

function OurTeam() {
    return (
        <>
            <section className="story-box">
                <div className="container">
                    <div className="row col-lg-12 mx-auto mb-5">
                        <p>Our team</p>
                        <h4>The leadership team</h4>

                        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus.</p>
                    </div>
                </div>
            </section>

            <section className="team-highlights">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-4 col-sm-12 col-xs-12 col-12">
                            <div className="highlights">
                                <div 
                                    className="highlight-image"
                                    style={{
                                        backgroundImage: `url(${team_member_1})`, 
                                    }}>
                                </div>
                                <h2>Michael Scott</h2>
                                <p>General Manager</p>
                            </div>
                        
                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12 col-12">
                            <div className="highlights">
                                <div 
                                    className="highlight-image"
                                    style={{
                                        backgroundImage: `url(${team_member_2})`, 
                                    }}>
                                </div>
                                <h2>Dwight Schrute</h2>
                                <p>General Manager</p>
                            </div>
                        
                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12 col-12">
                            <div className="highlights">
                                <div 
                                    className="highlight-image"
                                    style={{
                                        backgroundImage: `url(${team_member_3})`, 
                                    }}>
                                </div>
                                <h2>Pam Beetsley</h2>
                                <p>General Manager</p>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OurTeam;