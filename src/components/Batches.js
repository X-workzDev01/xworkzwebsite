import React from "react";
import "./Batches.css";

const Batches = (props) => {
    const batches = props?.value?.Batches;

    // Handle loading or missing data
    if (!batches || batches.length < 3) {
        return (
            <div className="batches-page">
                <div className="batches-loading">
                    <h2>Loading batches...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="batches-page">
            {/* Upcoming Courses */}
            <div className="batches-heading">
                <h1>
                    Upcoming
                    <span> Batches</span>
                </h1>
                <div className="courses-container">
                    {batches[0]?.Upcoming?.map((d, i) => (
                        <div className="course" key={i}>
                            <div className="course-preview">
                                <h6>Course</h6>
                                <h2>{d.courseName}</h2>
                            </div>
                            <div className="course-info">
                                <h6>Trainer</h6>
                                <h2>{d.facultyName}</h2>
                                <h5>{d.type}</h5>
                                <h6>Starts from</h6>
                                <h6>{d.startDate}</h6>
                                <h6>Location: {d.location}</h6>
                                <h6>Timing: {d.time}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ongoing Courses */}
            <div className="batches-heading">
                <h1>
                    Ongoing
                    <span> Batches</span>
                </h1>
                <div className="courses-container">
                    {batches[1]?.Ongoing?.map((d, i) => (
                        <div className="course" key={i}>
                            <div className="course-preview">
                                <h6>Course</h6>
                                <h2>{d.courseName}</h2>
                            </div>
                            <div className="course-info">
                                <h6>Trainer</h6>
                                <h2>{d.facultyName}</h2>
                                <h5>{d.type}</h5>
                                <h6>Started on</h6>
                                <h6>{d.startDate}</h6>
                                <h6>Location: {d.location}</h6>
                                <h6>Timings: {d.time}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Completed Courses */}
            <div className="batches-heading">
                <h1>
                    Completed
                    <span> Batches</span>
                </h1>
                <div className="courses-container">
                    {batches[2]?.Completed?.map((d, i) => (
                        <div className="course" key={i}>
                            <div className="course-preview">
                                <h6>Course</h6>
                                <h2>{d.courseName}</h2>
                            </div>
                            <div className="course-info">
                                <h6>Trainer</h6>
                                <h2>{d.facultyName}</h2>
                                <h5>{d.type}</h5>
                                <h6>Completed on</h6>
                                <h6>{d.startDate}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Batches;