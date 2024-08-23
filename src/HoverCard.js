import React from 'react';
import './HoverCard.css';

function HoverCard() {
  return (
    <div className="hover-card">
      <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="User" className="user-photo" />
      <div className="user-info">
        <h4 className="user-name">John Doe</h4>
        <p className="user-roll">Roll No: 123456</p>
        <p className="user-sem">Semester: 5th</p>
      </div>
    </div>
  );
}

export default HoverCard;
