import React from 'react';
import './Notifications.css';

const Notifications = () => {
    const notifications = [
        { id: 1, message: "Demo Notification...........................", date: "XX-XX-XX" },
        { id: 2, message: "Demo Notification...........................", date: "XX-XX-XX" },
        { id: 3, message: "Demo Notification...........................", date: "XX-XX-XX" },
        { id: 4, message: "Demo Notification...........................", date: "XX-XX-XX" },
        { id: 5, message: "Demo Notification...........................", date: "XX-XX-XX" },
        { id: 6, message: "Demo Notification...........................", date: "XX-XX-XX" },
        { id: 7, message: "Demo Notification...........................", date: "XX-XX-XX" },
        { id: 8, message: "Demo Notification...........................", date: "XX-XX-XX" },
        { id: 9, message: "Demo Notification...........................", date: "XX-XX-XX" },
        { id: 10, message: "Demo Notification...........................", date: "XX-XX-XX" },
        { id: 11, message: "Demo Notification...........................", date: "XX-XX-XX" },
        { id: 12, message: "Demo Notification...........................", date: "XX-XX-XX" },
    ];

    return (
        <div className="det-content">
            <div className="notifications-container">
                {notifications.map((notification) => (
                    <div key={notification.id} className="notification-card">
                        <div className="notification-content">
                            <div className="notification-message">
                                {notification.message}
                            </div>
                            <div className="notification-date">
                                {notification.date}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications; 