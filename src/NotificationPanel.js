import React from 'react';
import './NotificationPanel.css';
import NotificationCard from './NotificationCard';

const NotificationPanel = ({ isOpen, onClose, notifications, onMarkAsRead, onRemoveNotification }) => {
    return (
        <div className={`notification-panel ${isOpen ? 'open' : ''}`}>
            <div className="panel-header">
                <h2>Notifications</h2>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div className="panel-content">
                {notifications.map((notification) => (
                    <NotificationCard 
                        key={notification.id}
                        id={notification.id}
                        title={notification.title}
                        description={notification.description}
                        time={notification.time}
                        isRead={notification.isRead}
                        onMarkAsRead={onMarkAsRead}
                        onRemoveNotification={onRemoveNotification} // Pass the remove function
                    />
                ))}
            </div>
        </div>
    );
};

export default NotificationPanel;