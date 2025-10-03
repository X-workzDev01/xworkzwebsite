import React, { useState, useEffect } from 'react'
import { Accordion, Button } from 'semantic-ui-react'
import "./InterviewQuestions.css"

const InterviewQuestions = () => {
    const [QuestionTree, setQuestionTree] = useState(null);
    const [Data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedModule, setSelectedModule] = useState(null);
    const [activeIndex, setActiveIndex] = useState(-1);

    // GitHub raw content base URL
    const GITHUB_BASE_URL = "https://raw.githubusercontent.com/x-workzdev/xworkz-courses/develop/interview-questions/";

    useEffect(() => {
        setLoading(true);
        
        // Fetch the question tree from GitHub
        fetch(`${GITHUB_BASE_URL}InterviewQuestionsTree.json`)
            .then(response => response.json())
            .then(data => {
                setQuestionTree(data);
                if (data.Module && data.Module.length > 0) {
                    handleModuleClick(data.Module[0], 0);
                }
                setLoading(false);
            })
            .catch(error => {
                console.log("Failed to fetch from GitHub", error);
                setLoading(false);
            });
    }, []);

    const handleModuleClick = (module, index) => {
        setLoading(true);
        setSelectedModule(module.name);
        
        // Construct the full URL for the module data
        const url = `${GITHUB_BASE_URL}${module.url}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.log(`Failed to load ${module.name} questions`, error);
                setLoading(false);
                setData(null);
            });
    }

    const handleAccordionClick = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;
        setActiveIndex(newIndex);
    }

    // Create accordion panels from data
    const getAccordionPanels = () => {
        if (!Data || !Data.Topic) return [];
        
        return Data.Topic.map((topic, index) => ({
            key: `topic-${index}`,
            title: topic.name,
            content: {
                content: (
                    <div>
                        <ul>
                            {topic.Questions.map((ques, qIndex) => (
                                <li key={qIndex}>{ques.question}</li>
                            ))}
                        </ul>
                    </div>
                ),
            },
        }));
    }

    return (
        <div className='question-page'>
            <div className="subject">
                {QuestionTree && (
                    <div className="button-scroll-container">
                        <Button.Group className="button-scroll-group">
                            {QuestionTree.Module.map((value, index) => (
                                <Button 
                                    key={index} 
                                    onClick={() => handleModuleClick(value, index)}
                                    className={selectedModule === value.name ? 'active' : ''}
                                >
                                    {value.name}
                                </Button>
                            ))}
                        </Button.Group>
                    </div>
                )}
            </div>

            {loading && (
                <div className="loading-message">
                    <p>Loading questions...</p>
                </div>
            )}

            <div className="topics">
                {Data && !loading && (
                    <Accordion 
                        styled 
                        fluid 
                        panels={getAccordionPanels()}
                        activeIndex={activeIndex}
                        onTitleClick={handleAccordionClick}
                    />
                )}
                
                {!Data && !loading && QuestionTree && (
                    <div className="no-data-message">
                        <p>Select a technology to view interview questions</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InterviewQuestions