import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/login');
            return;
        }
        setUserData(user);
    }, [navigate]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-left">
                <img src={userData.profileImage || "/images/default-profile.jpg"} alt="Profile" className="profile-image" />
                <div className="profile-info">
                    <h2>{userData.username}</h2>
                    <p>Shop's Name: {userData.shopName}</p>
                    <p>Location: {userData.location}</p>
                    <p>Contact: {userData.contact}</p>
                    <p>Email: {userData.email}</p>
                    <p>Landmarks: {userData.landmarks}</p>
                    <p>Rating: {userData.rating || "No ratings yet"}</p>
                </div>
                <div className="profile-description">
                    <h3>Description</h3>
                    <p>{userData.description}</p>
                </div>
            </div>
            
            <div className="profile-right">
                <div className="profile-section">
                    <h2>Uploaded Photos</h2>
                    <div className="uploaded-photos">
                        {userData.uploadedPhotos && userData.uploadedPhotos.map((photo, index) => (
                            <div key={index} className="uploaded-photo-container">
                                <img src={photo} alt="" className="uploaded-photo" />
                                <button className="remove-photo">Remove</button>
                            </div>
                        ))}
                        <div className="uploaded-photo-container">
                            <img src="/images/placeholder.jpg" alt="" className="uploaded-photo" />
                            <button className="Add-ph">Add</button>
                        </div>
                    </div>
                </div>
                
                <div className="profile-section">
                    <h2>Location on Map</h2>
                    <div className="location-map">
                        <iframe title="Seller Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6069128108!2d84.42848711090319!3d27.69854167608836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb49a5fb5741%3A0x72b0768dd53f3d4f!2sForbes%20College!5e0!3m2!1sen!2snp!4v1731852896264!5m2!1sen!2snp" 
                        width="600"
                        height="450" 
                        style={{ border: 0 }} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                
                <div className="profile-section">
                    <h2>Help</h2>
                    <ul>
                        <li>FAQs</li>
                        <li>Contact Info</li>
                        <li>Corporate Information</li>
                        <li>Feedback</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile; 