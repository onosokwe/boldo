import React, { useEffect, useState } from "react";
import { substrwords } from "../../../utils/strings";
import Loader from "../../../utils/Loader";
import { getTopSectionNews } from "../../../utils/actions";
import TrendingCenter from "./TrendingCenter";

export default function HomeTrendingNews() {
    const [loading, setLoading] = useState(false);

    // const [nigerian, setNigerian] = useState([]);
    // // const [international, setInternational] = useState([]);
    // const [business, setBusiness] = useState([]);
    // // const [technology, setTechnology] = useState([]);

    // useEffect(() => {
    //     getTopSectionNews()
    //         .then((res) => {
    //             // setNigerian(res.data.nigerian);
    //             setNigerian(res.data.international);
    //             setBusiness(res.data.business);
    //             // setTechnology(res.data.technology);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             console.log(err.response.data);
    //         });
    // }, []);

    return (
        <section className="home-lists">
            <div className="container">
                <div className="row g-5">

                    {loading ? (
                        <Loader />
                        ) : (
                            <>  
                            <div className="col-md-12 col-sm-12 custom-border">
                                
                            <header id="intro" className="layout1 intro-block bg-color-grad">
                                <div className="pattern-bg" >
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6 col-md-push-6">
                                                <div className="logo">
                                                    <img className="logo-img" src="./images/logo.png" alt="Your Logo" height="80" width="80" />
                                                    <div>
                                                        <span className="brand-name">StepUp</span> <br />
                                                        <span className="logo-name">Free Social Step Challenge App</span>
                                                </div>
                                                </div>
                                                <h1 className="slogan">Track your steps
                                                    <br />Compete with friends
                                                    <br />Be more active together
                                                </h1>
                                                    <a className="download-btn" target="_blank" href="https://itunes.apple.com/app/id979101825"> <img src="images/imgs/AppStoreIcon.svg" height="60" width="200" />
                                                        <br /><div><i data-star="4.8"></i> 4.8 · 17K ratings</div></a>
                                                    <a className="download-btn" target="_blank" href="https://play.google.com/store/apps/details?id=com.thestepupapp.stepup"><img src="images/imgs/GooglePlayIcon.svg" height="60" width="200" />
                                                        <br /><div ><i data-star="4.5"></i> 4.4 · 10K reviews</div></a>
                                            </div>
                                            <div className="col-md-6 col-md-pull-6">
                                                <div className="screen-couple-left">
                                                    <img className="screen above" src="images/imgs/iOS_Leaderboard.png" alt="" width="280" />
                                                    <img className="screen beyond" src="images/imgs/Android_History.png" alt="" width="240" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            </div>

                            

                        </>
                    )}

                </div> 
            </div>
        </section> 
    );
}
