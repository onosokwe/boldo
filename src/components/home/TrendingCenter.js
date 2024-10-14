import React from "react";
import { Carousel } from "react-bootstrap";
import krahome from "../../../assets/img/krahome3.png";
import krahome2 from "../../../assets/img/krahome2.png";

// import slide2 from "../../../assets/img/slide2.6f00078c.png";
import slide3 from "../../../assets/img/slide3.c2be0fc8.png";
import slide4 from "../../../assets/img/slide4.cc6de269.png";
// import filmhouse from "../../../assets/img/filmhouse.jpeg";
import Belgrade from "../../../assets/img/Belgrade.jpg";
import pensacola_us from "../../../assets/img/pensacola_us.jpg";

function TrendingCenter() {
    return (
        <section className="home-center" style={{marginTop: 45}}>
            <div
                className="slider-home-banner carousel slide"
                data-ride="carousel"
            >
                <Carousel
                    interval={3000}
                    indicators={false}
                    nextLabel={""}
                    prevLabel={""}
                    touch={true}
                    fade
                >
                    <Carousel.Item>
                        <a href="https://www.instagram.com/p/C6gxnmcipUu/?img_index=1" target="_blank" rel="noreferrer">
                            <div 
                                className="home-center-image"
                                style={{
                                    borderRadius: 0, 
                                    height: 350, 
                                    backgroundImage: `url(${krahome})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    margin: '0'
                                }}>
                            </div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://www.instagram.com/p/C6gxnmcipUu/?img_index=1" target="_blank" rel="noreferrer">
                            <div 
                                className="home-center-image"
                                style={{
                                    borderRadius: 0, 
                                    height: 350, 
                                    backgroundImage: `url(${krahome2})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    margin: '0'
                                }}>
                            </div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://www.skyscanner.com/tips-and-inspiration/wheres-hot-in-may" target="_blank" rel="noreferrer">
                            <div 
                                className="home-center-image"
                                style={{
                                    borderRadius: 0, 
                                    height: 350, 
                                    backgroundImage: `url(${Belgrade})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    margin: '0'
                                }}>
                            </div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="/news">
                            <div 
                                className="home-center-image"
                                style={{
                                    borderRadius: 0, 
                                    height: 350, 
                                    backgroundImage: `url(${pensacola_us})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    margin: '0'
                                }}>
                            </div>
                        </a>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="/lifestyle">
                            <div 
                                className="home-center-image"
                                style={{
                                    borderRadius: 0, 
                                    height: 350, 
                                    backgroundImage: `url(${slide3})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    margin: '0'
                                }}>
                            </div>
                        </a>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="/hotels-restaurants">
                            <div 
                                className="home-center-image"
                                style={{
                                    borderRadius: 0, 
                                    height: 350, 
                                    backgroundImage: `url(${slide4})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    margin: '0'
                                }}>
                            </div>
                        </a>
                    </Carousel.Item>
                </Carousel>
            </div>

        </section>
    );
}

export default TrendingCenter;