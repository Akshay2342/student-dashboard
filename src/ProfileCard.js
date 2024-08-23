// ProfileCard.js
import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, title, bio, email, picture, socialLinks }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={picture} alt={`${name}'s Profile`} className="profile-picture" />
      </div>
      <div className="profile-body">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-title">{title}</p>
        <p className="profile-bio">{bio}</p>
        <a href={`mailto:${email}`} className="profile-email">{email}</a>
      </div>
      <div className="profile-footer">
        <div className="profile-socials">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} className="social-icon">
              <img src={link.icon} alt={link.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
