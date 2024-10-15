import React from "react";
import logo from "../../assets/logodark.png";

export default function Footer() {
    return (
        <>
        <footer id="footer" className="footer mt-4">
            <div className="container">
                <div className="footer-cta">
                    <h1>An enterprise template to ramp up your company website</h1>
                    <div className="form">
                        <div className="btn-group">
                            <input className="form-control" placeholder="Your email address" />
                            <button className="btn btn-lg">Start now</button>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
            
            
            <div className="footer-content">
                <div className="container">

                    <div className="row g-5">
                        <div className="col-lg-3 col-sm-12 col-xs-12 col-12">
                          <h3 className="footer-heading">
                            <img src={logo}  style={{height: 25}} alt="logo" />
                          </h3>
                          <p>Social media validation business model canvas graphical user interface launch party 
                            creative facebook iPad twitter.</p>

                        </div>
                        
                        <div className="col-lg-3 col-sm-4 col-xs-4 col-4">
                            <h3 className="footer-heading">Landings</h3>
                            <ul className="footer-links list-unstyled">
                                <li><a href="/"> Home</a></li>
                                <li><a href="/"> Products</a></li>
                                <li><a href="/"> Services </a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-xs-4 col-4">
                            <h3 className="footer-heading">Company</h3>
                            <ul className="footer-links list-unstyled">
                                <li><a href="/"> Home</a></li>
                                <li><a href="/"> Careers <span>Hiring!</span></a></li>
                                <li><a href="/"> Services </a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-xs-4 col-4">
                            <h3 className="footer-heading">Resources</h3>
                            <ul className="footer-links list-unstyled">
                                <li><a href="/"> Blog</a></li>
                                <li><a href="/"> Products</a></li>
                                <li><a href="/"> Services </a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="copyright">
                                All Rights Reserved
                            </div>
                </div>
            </div>
        </footer> 
      </>
    );
}
