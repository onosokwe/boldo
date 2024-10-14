import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import Loader from "../../utils/Loader";
import { substrwords } from "../../utils/strings";
import { getKRApprovedKRJobs } from "../../utils/actions";

export default function HomeJobsHighlight() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getKRApprovedKRJobs()
            .then((res) => {
                if(res.data.success){
                    setJobs(res.data.data);
                }
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err?.response);
            })
    }, []); 
    
    return (
        <section id="search-result" className="">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto mb-5">
                        <header className="heading-line2 text-center">
                            <h4 className="title-section text-uppercase">Jobs Highlight</h4>
                        </header>
                    </div>

                    <div className="col-md-12">
                        {loading ? (
                            <Loader />
                        ) : (
                            <>
                                <div className="row">
                                    {(jobs && jobs.length >= 6) ? <>
                                    <div className="col-md-4 col-sm-12 col-xs-12">
                                        <a href={`jobs/${jobs[0]._id}`} >
                                            <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                <div>
                                                    <h3> {jobs[0].job_title}  {"  "} {jobs[0].location ? <span className="date" 
                                                    style={{textTransform:'uppercase'}}>{jobs[0].location}</span> : null}</h3>
                                                    <div className="post-meta">
                                                        <span style={{marginBottom:5, display:'block'}}><strong>Industry:</strong> 
                                                        {jobs[0].job_industry.toLowerCase().replace(/-/g, " ")} </span>
                                                        <span><strong>Work Type:</strong> {jobs[0].job_type.toLowerCase().replace(/-/g, " ")} </span>
                                                    </div>
                                                    <p>{parse(substrwords(jobs[0].job_summary,100))} </p>
                                                </div>
                                            </div>
                                        </a>

                                        <a href={`jobs/${jobs[1]._id}`} >
                                            <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                <div>
                                                    <h3> {jobs[1].job_title}  {"  "} {jobs[1].location ? <span className="date" 
                                                    style={{textTransform:'uppercase'}}>{jobs[1].location}</span> : null}</h3>
                                                    <div className="post-meta">
                                                        <span style={{marginBottom:5, display:'block'}}><strong>Industry:</strong> 
                                                        {jobs[1].job_industry.toLowerCase().replace(/-/g, " ")} </span>
                                                        <span><strong>Work Type:</strong> {jobs[1].job_type.toLowerCase().replace(/-/g, " ")} </span>
                                                    </div>
                                                    <p>{parse(substrwords(jobs[1].job_summary,100))} </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-md-4 col-sm-12 col-xs-12">
                                        <a href={`jobs/${jobs[2]._id}`} >
                                            <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                <div>
                                                    <h3> {jobs[2].job_title}  {"  "} {jobs[2].location ? <span className="date" 
                                                    style={{textTransform:'uppercase'}}>{jobs[2].location}</span> : null}</h3>
                                                    <div className="post-meta">
                                                        <span style={{marginBottom:5, display:'block'}}><strong>Industry:</strong> 
                                                        {jobs[2].job_industry.toLowerCase().replace(/-/g, " ")} </span>
                                                        <span><strong>Work Type:</strong> {jobs[2].job_type.toLowerCase().replace(/-/g, " ")} </span>
                                                    </div>
                                                    <p>{parse(substrwords(jobs[2].job_summary,100))} </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href={`jobs/${jobs[3]._id}`} >
                                            <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                <div>
                                                    <h3> {jobs[3].job_title}  {"  "} {jobs[3].location ? <span className="date" 
                                                    style={{textTransform:'uppercase'}}>{jobs[3].location}</span> : null}</h3>
                                                    <div className="post-meta">
                                                        <span style={{marginBottom:5, display:'block'}}><strong>Industry:</strong> 
                                                        {jobs[3].job_industry.toLowerCase().replace(/-/g, " ")} </span>
                                                        <span><strong>Work Type:</strong> {jobs[3].job_type.toLowerCase().replace(/-/g, " ")} </span>
                                                    </div>
                                                    <p>{parse(substrwords(jobs[3].job_summary,100))} </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-md-4 col-sm-12 col-xs-12">
                                        <a href={`jobs/${jobs[4]._id}`} >
                                            <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                <div>
                                                    <h3> {jobs[4].job_title}  {"  "} {jobs[4].location ? <span className="date" 
                                                    style={{textTransform:'uppercase'}}>{jobs[4].location}</span> : null}</h3>
                                                    <div className="post-meta">
                                                        <span style={{marginBottom:5, display:'block'}}><strong>Industry:</strong> 
                                                        {jobs[4].job_industry.toLowerCase().replace(/-/g, " ")} </span>
                                                        <span><strong>Work Type:</strong> {jobs[4].job_type.toLowerCase().replace(/-/g, " ")} </span>
                                                    </div>
                                                    <p>{parse(substrwords(jobs[4].job_summary,100))} </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href={`jobs/${jobs[5]._id}`} >
                                            <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                <div>
                                                    <h3> {jobs[5].job_title}  {"  "} {jobs[5].location ? <span className="date" 
                                                    style={{textTransform:'uppercase'}}>{jobs[5].location}</span> : null}</h3>
                                                    <div className="post-meta">
                                                        <span style={{marginBottom:5, display:'block'}}><strong>Industry:</strong> 
                                                        {jobs[5].job_industry.toLowerCase().replace(/-/g, " ")} </span>
                                                        <span><strong>Work Type:</strong> {jobs[5].job_type.toLowerCase().replace(/-/g, " ")} </span>
                                                    </div>
                                                    <p>{parse(substrwords(jobs[5].job_summary,100))} </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    </> : null }

                                    <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                                        <a href="/jobs#top" className="btn" 
                                        style={{backgroundColor:'#f80', padding: 10, width: 160, color:'#fff', fontWeight:'bold'}}>View More</a>
                                    </div>
                                </div>      
                            </>
                        )}
                    </div> 
                </div>        
            </div>
        </section>
    );
}
