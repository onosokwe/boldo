import React from "react";
import value_1 from "../assets/value_1.png";
import value_2 from "../assets/value_2.png";
import value_3 from "../assets/value_3.png";

export default function OurValues() {
    
    return (
        <section className="our-values">
            <div className="container">
                <div className="value-box">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h3>Our values</h3>
                            <h1>Things in we believe</h1>
                            <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
                        </div>
                    </div>

                    <div className="row values">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="highlights">
                                <div 
                                    className="highlight-image"
                                    style={{
                                        backgroundImage: `url(${value_1})`, 
                                    }}>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <h5>We are committed.</h5>
                            <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                        </div>
                    </div>

                    <div className="row values">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="highlights">
                                <div 
                                    className="highlight-image"
                                    style={{
                                        backgroundImage: `url(${value_2})`, 
                                    }}>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <h5>We are responsible.</h5>
                            <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                        </div>
                        
                    </div>

                    <div className="row values">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="highlights">
                                <div 
                                    className="highlight-image"
                                    style={{
                                        backgroundImage: `url(${value_3})`, 
                                    }}>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <h5>We aim for progress.</h5>
                            <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section> 
    );
}
