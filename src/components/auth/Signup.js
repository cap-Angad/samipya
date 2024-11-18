import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        shopName: '',
        location: '',
        landmarks: '',
        contact: '',
        description: '',
        profileImage: '',
    });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            
            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(data));
                navigate('/');
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Failed to sign up. Please try again.');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card signup-card">
                <h2>Sign Up for Samipya</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-group full-width">
                        <label>Username</label>
                        <input
                            type="text"
                            value={formData.username}
                            onChange={(e) => setFormData({...formData, username: e.target.value})}
                            required
                        />
                    </div>

                    <div className="form-group full-width">
                        <label>Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                        />
                    </div>

                    <div className="form-group full-width">
                        <label>Set Password</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            required
                        />
                    </div>

                    <div className="form-group full-width">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                            required
                        />
                    </div>

                    <div className="form-group full-width">
                        <label>Location</label>
                        <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => setFormData({...formData, location: e.target.value})}
                            required
                        />
                    </div>

                    <div className="form-group full-width">
                        <label>Landmarks</label>
                        <input
                            type="text"
                            value={formData.landmarks}
                            onChange={(e) => setFormData({...formData, landmarks: e.target.value})}
                            required
                        />
                    </div>

                    <div className="form-group full-width">
                        <label>Shop Name</label>
                        <input
                            type="text"
                            value={formData.shopName}
                            onChange={(e) => setFormData({...formData, shopName: e.target.value})}
                            required
                        />
                    </div>

                    <div className="form-group full-width">
                        <label>Contact</label>
                        <input
                            type="text"
                            value={formData.contact}
                            onChange={(e) => setFormData({...formData, contact: e.target.value})}
                            required
                        />
                    </div>

                    <div className="form-group description">
                        <label>Description</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button">Sign Up</button>
                </form>
                <p className="auth-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup; 