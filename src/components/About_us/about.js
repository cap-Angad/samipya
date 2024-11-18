import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-hero">
                <h1>About Samipya</h1>
                <p className="tagline">A Bond Forged in Strength, Wisdom, and Mystical Energy</p>
            </div>
            
            <div className="about-sections">
                <div className="about-section">
                    <h2>Our Story</h2>
                    <p>Samipya isn't just a name; it's an aura, a force, a story whispered across dimensions. Together, we are cool as the midnight breeze, strong as ancient oaks, and mystical as stardust woven into the fabric of existence.</p>
                </div>

                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>Each of us brings a unique spark, but when we unite, we become an unbreakable constellation of talent, resilience, and unshakable purpose. Like the guardians of a hidden realm, we don't just walk through life—we stride with confidence.</p>
                </div>

                <div className="about-gallery">
                    <div className="gallery-grid">
                        <img src="/images/446935890_1596440774260723_2807957032915483812_n.jpg" alt="About Us" className="gallery-image" />
                        <img src="/images/ad5c7df5-4e7b-42c8-bb17-aac8b0c4ee8b.jpeg" alt="About Us" className="gallery-image" />
                        <img src="/images/268250712_390836866163294_3682577997671495562_n.jpg" alt="About Us" className="gallery-image" />
                    </div>
                </div>

                <div className="about-video">
                    <h2>Our Journey</h2>
                    <div className="video-wrapper">
                        <iframe 
                            width="100%" 
                            height="500" 
                            src="https://www.youtube.com/embed/ZRJY0Xp_BuA?si=F6ki9TZ0t3XeLHKf" 
                            title="About Samipya" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;