import React, { useState } from 'react';
import './Dropdown.css'; // Ensure to create this CSS file for styles

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Admin');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selected}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#" onClick={() => handleSelect('Admin')}>Admin</a>
          <a href="#" onClick={() => handleSelect('User')}>User</a>
          <a href="#" onClick={() => handleSelect('Guest')}>Guest</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
