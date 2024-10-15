import React from "react";
import image_1 from "../assets/image_1.jpeg";
import image_2 from "../assets/image_2.png";
import image_3 from "../assets/image_3.jpeg";
import image_4 from "../assets/image_4.png";
import image_5 from "../assets/image_5.jpeg";


export default function FiveImages() {
    
    return (
        <section className="five-highlights">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-4 col-sm-12 col-xs-12 col-12">
                        <div className="highlights">
                            <div 
                                className="highlight-image"
                                style={{
                                    backgroundImage: `url(${image_1})`, 
                                }}>
                            </div>
                        </div>

                        <div className="highlights">
                            <div 
                                className="highlight-image"
                                style={{
                                    backgroundImage: `url(${image_2})`, 
                                }}>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-md-4 col-sm-12 col-xs-12 col-12">
                        <div className="highlights">
                            <div 
                                className="highlight-image highlight-center-image"
                                style={{
                                    backgroundImage: `url(${image_3})`, 
                                }}>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-md-4 col-sm-12 col-xs-12 col-12">
                        <div className="highlights">
                            <div 
                                className="highlight-image"
                                style={{
                                    backgroundImage: `url(${image_4})`, 
                                }}>
                            </div>
                        </div>

                        <div className="highlights">
                            <div 
                                className="highlight-image"
                                style={{
                                    backgroundImage: `url(${image_5})`, 
                                }}>
                            </div>
                        </div>
                        
                    </div>

                </div> 
            </div>
        </section> 
    );
}
