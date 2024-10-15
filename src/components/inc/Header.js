import React from "react";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a href="/" className="d-flex align-items-center">
                        {/* <h1 style={{fontWeight:'bold', margin:10}}>Humanely</h1> */}
                        <img className="logo" src={logo} alt="logo" style={{height: 25}}  />
                    </a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="/"><span>Product</span></a></li>
                            <li><a href="/"><span>Services</span></a></li>
                            <li><a href="/"><span>About Us</span></a></li>
                            <li><a href="/" className="btn"><span>Log In</span></a></li>
                        </ul>
                    </nav>

                    <div className="position-relative">
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </div>

                </div>

            </header>
        </>
    );
}

export default Header;
