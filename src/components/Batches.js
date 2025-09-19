import React, { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import "./Batches.css"

const Batches = () => {
    const [batchesData, setBatchesData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("Upcoming");

    // GitHub raw content URL for batches data
    const GITHUB_BATCHES_URL = "https://raw.githubusercontent.com/x-workzdev/xworkz-courses/main/batches.json";

    useEffect(() => {
        setLoading(true);
        
        // Fetch the batches data from GitHub
        fetch(GITHUB_BATCHES_URL)
            .then(response => response.json())
            .then(data => {
                setBatchesData(data);
                setLoading(false);
            })
            .catch(error => {
                console.log("Failed to fetch batches from GitHub", error);
                setLoading(false);
            });
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    // Get batches for the selected category
    const getBatchesForCategory = () => {
        if (!batchesData || !batchesData.Batches) return [];
        
        const categoryData = batchesData.Batches.find(batch => batch[selectedCategory]);
        return categoryData ? categoryData[selectedCategory] : [];
    }

    return (
        <div className='batches-page'>
            <div className="batches-header">
                <h1>
                    Course
                    <span> Batches</span>
                </h1>
                <p>Explore our upcoming, ongoing, and completed course batches</p>
            </div>

            <div className="categories">
                <div className="button-scroll-container">
                    <Button.Group className="button-scroll-group">
                        <Button 
                            onClick={() => handleCategoryClick("Upcoming")}
                            className={selectedCategory === "Upcoming" ? 'active' : ''}
                        >
                            Upcoming
                        </Button>
                        <Button 
                            onClick={() => handleCategoryClick("Ongoing")}
                            className={selectedCategory === "Ongoing" ? 'active' : ''}
                        >
                            Ongoing
                        </Button>
                        <Button 
                            onClick={() => handleCategoryClick("Completed")}
                            className={selectedCategory === "Completed" ? 'active' : ''}
                        >
                            Completed
                        </Button>
                    </Button.Group>
                </div>
            </div>

            {loading && (
                <div className="loading-message">
                    <p>Loading batches...</p>
                </div>
            )}

            <div className="batches-content">
                {batchesData && !loading && (
                    <div className="batches-grid">
                        {getBatchesForCategory().map((batch, index) => (
                            <div className="course" key={index}>
                                <div className="course-preview">
                                    <h6>Course</h6>
                                    <h2>{batch.courseName}</h2>
                                </div>
                                <div className="course-info">
                                    <h6>Trainer</h6>
                                    <h2>{batch.facultyName}</h2>
                                    <h5>{batch.type}</h5>
                                    <h6>{selectedCategory === 'Upcoming' ? 'Starts from' : 
                                         selectedCategory === 'Ongoing' ? 'Started on' : 'Completed on'}</h6>
                                    <h6>{batch.startDate}</h6>
                                    {(selectedCategory === 'Upcoming' || selectedCategory === 'Ongoing') && (
                                        <>
                                            <h6>Location: {batch.location}</h6>
                                            <h6>Timing: {batch.time}</h6>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                
                {!batchesData && !loading && (
                    <div className="no-data-message">
                        <p>Unable to load batches data at this time</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Batches