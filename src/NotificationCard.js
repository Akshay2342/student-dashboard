import React from 'react';
import './NotificationCard.css';

// Utility function to format the time
const formatTime = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24)); // Difference in days

    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    if (diff < 30) return `${diff} days ago`;
    if (diff < 365) return `${Math.floor(diff / 30)} months ago`;

    return `${Math.floor(diff / 365)} years ago`;
};

const NotificationCard = ({ id, title, description, time, isRead, onMarkAsRead, onRemoveNotification }) => {

    const handleMarkAsRead = () => {
        onMarkAsRead(id);
    };

    const handleRemoveNotification = () => {
        onRemoveNotification(id);
    };

    return (
        <div className={`notification-card ${isRead ? 'read' : 'unread'}`}>
            <div className="notification-header">
                <h3 className="notification-title">{title}</h3>
                <span className="notification-time">{formatTime(time)}</span>
                <button className="remove-btn" onClick={handleRemoveNotification}>X</button>
            </div>
            <p className="notification-description">{description}</p>
            {!isRead && (
                <button className="mark-read-btn" onClick={handleMarkAsRead}>
                    Mark as Read
                </button>
            )}
        </div>
    );
};

export default NotificationCard;