import React from 'react';
import './Career.css';

const Career = () => {
    const positions = [
        {
            id: 1,
            title: "Senior Sales Manager",
            location: "Delhi, India",
            type: "Full-time",
            experience: "5+ years",
            description: "Looking for an experienced sales manager to lead our team..."
        },
        {
            id: 2,
            title: "Customer Support Executive",
            location: "Remote",
            type: "Full-time",
            experience: "2+ years",
            description: "Join our customer support team to help sellers grow their business..."
        }
    ];

    return (
        <div className="career-container">
            <div className="career-header">
                <h1>Join Our Team</h1>
                <p>Build the future of local commerce with us</p>
            </div>
            
            <div className="positions-grid">
                {positions.map((position) => (
                    <div key={position.id} className="position-card">
                        <h3>{position.title}</h3>
                        <div className="position-details">
                            <span>{position.location}</span>
                            <span>{position.type}</span>
                            <span>{position.experience}</span>
                        </div>
                        <p>{position.description}</p>
                        <button className="apply-button">Apply Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Career; 