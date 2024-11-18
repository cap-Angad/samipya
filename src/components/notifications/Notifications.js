import React, { useEffect, useState } from 'react';
import './Notifications.css';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/notifications')
            .then(response => response.json())
            .then(data => setNotifications(data))
            .catch(error => console.error('Error fetching notifications:', error));
    }, []);

    return (
        <div className="det-content">
            <div className="notifications-container">
                {notifications.map((notification) => (
                    <div key={notification._id} className="notification-card">
                        <div className="notification-content">
                            <div className="notification-message">
                                {notification.message}
                            </div>
                            <div className="notification-date">
                                {new Date(notification.date).toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications; 