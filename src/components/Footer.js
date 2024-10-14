import React from "react";

  export default function Footer() {
    return (
        <>
        <footer id="footer" className="footer mt-4">
            <div className="footer-content">
                <div className="container">

                    <div className="row g-5">
                        <div className="col-6 col-lg-3">
                          <h3 className="footer-heading">About Us</h3>
                          <p>Humanely is an AI-powered human centric software for automating business processes, designed for top-performing organizations 
                            that prioritize efficiency.</p>
                        </div>

                        <div className="col-6 col-lg-3">
                            <h3 className="footer-heading">Quick Links</h3>
                            <ul className="footer-links list-unstyled">
                                <li><a href="/"><i className="bi bi-chevron-right"></i> Request Demo</a></li>
                                <li><a href="/terms"><i className="bi bi-chevron-right"></i> Terms of Service</a></li>
                                <li><a href="/privacy-policy"><i className="bi bi-chevron-right"></i> Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h3 className="footer-heading">Company</h3>
                            <ul className="footer-links list-unstyled">
                                <li><a href="/about-us"><i className="bi bi-chevron-right"></i> About Us</a></li>
                                <li><a href="/resources"><i className="bi bi-chevron-right"></i> Resources</a></li>
                                <li><a href="/faqs"><i className="bi bi-chevron-right"></i> FAQs</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3">
                            <h3 className="footer-heading">Contact Us</h3>
                            <ul className="footer-links list-unstyled">
                                <li><a href="#"><i className="bi bi-location-arrow"></i>  Ikota, Lagos, Nigeria</a></li>
                                <li><a href="tel:2348062265242"><i className="bi bi-phone"></i> 234 806 226 5242</a></li>
                                <li><a href="mailto:hello@humanely.com.ng"><i className="bi bi-envelope"></i> hello@humanely.com.ng</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>

                <div className="footer-legal">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                <div className="copyright">
                                    &copy; 2024 <strong><span>Humanely</span></strong>. All Rights Reserved
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="social-links mb-3 mb-lg-0 text-center text-md-end">
                                    <a href="https://x.com/hub9group" rel="noreferrer" target="_blank" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="https://facebook.com/hub9group" rel="noreferrer" target="_blank" className="facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="https://instagram.com/hub9group" rel="noreferrer" target="_blank" className="instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="https://linkedin.com/hub9group" rel="noreferrer" target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                    <a href="https://youtube.com/hub9group" rel="noreferrer" target="_blank" className="youtube"><i className="bi bi-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </footer> 
        
        <a href="#" rel="noreferrer" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      </>
    );
}
