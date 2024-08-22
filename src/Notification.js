import React, { useState } from 'react';
import NotificationPanel from './NotificationPanel';
import './App.css'; // Import the CSS file for styling

const Notification = () => {
    const [isPanelOpen, setPanelOpen] = useState(false);

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "Healthcare Center",
            description: "New PHC Doctor - by Prakash Kumar",
            time: new Date('2024-04-01T10:00:00'), // 5 months ago
            isRead: false // Unread initially
        },
        {
            id: 2,
            title: "System Update",
            description: "Scheduled Maintenance at 2 AM",
            time: new Date('2024-08-01T10:00:00'), // 3 weeks ago
            isRead: true // Already read
        },
        {
            id: 3,
            title: "Meeting Reminder",
            description: "Project meeting at 10 AM tomorrow",
            time: new Date('2024-08-20T10:00:00'), // 2 days ago
            isRead: false // Unread initially
        },
        {
            id: 4,
            title: "Urgent Notice",
            description: "Server downtime at 5 PM today",
            time: new Date('2024-08-22T08:00:00'), // A few hours ago
            isRead: false // Unread initially
        },
        {
            id: 5,
            title: "Event Reminder",
            description: "Company event at 3 PM tomorrow",
            time: new Date('2024-08-21T09:00:00'), // Yesterday
            isRead: true // Already read
        }
    ]);

    const togglePanel = () => {
        setPanelOpen(!isPanelOpen);
    };

    const handleMarkAsRead = (id) => {
        setNotifications(prevNotifications =>
            prevNotifications.map(notification =>
                notification.id === id
                    ? { ...notification, isRead: true }
                    : notification
            )
        );
    };

    const handleRemoveNotification = (id) => {
        setNotifications(prevNotifications =>
            prevNotifications.filter(notification => notification.id !== id)
        );
    };

    const sortedNotifications = notifications
        .sort((a, b) => a.time - b.time)
        .sort((a, b) => a.isRead - b.isRead);

    return (
        <div className="app-container">
            {/* <div className="top-bar"> */}
                <div className="notification-button" onClick={togglePanel}>
                <li><a><i className="fa fa-bell" onClick={() => console.log('Notifications clicked!')}></i></a></li>
                    <span className="notification-count">
                        {notifications.filter(notification => !notification.isRead).length}
                    </span>
                </div>
            {/* </div> */}

            <NotificationPanel 
                isOpen={isPanelOpen} 
                onClose={togglePanel} 
                notifications={sortedNotifications}
                onMarkAsRead={handleMarkAsRead}
                onRemoveNotification={handleRemoveNotification} 
            />
        </div>
    );
};

export default Notification;