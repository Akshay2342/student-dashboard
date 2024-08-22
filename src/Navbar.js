import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [footerToggle, setFooterToggle] = useState(false);

  return (
    <div id="nav-bar">
      <input
        id="nav-toggle"
        type="checkbox"
        checked={navToggle}
        onChange={() => setNavToggle(!navToggle)}
      />
      <div id="nav-header">
        <a
          id="nav-title"
          href="https://codepen.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          C<i className="fab fa-codepen" />DEPEN
        </a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger" />
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <div className="nav-button">
          <i className="fas fa-palette" />
          <span>Your Work</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-images" />
          <span>Assets</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-thumbtack" />
          <span>Pinned Items</span>
        </div>
        <hr />
        <div className="nav-button">
          <i className="fas fa-heart" />
          <span>Following</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-chart-line" />
          <span>Trending</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-fire" />
          <span>Challenges</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-magic" />
          <span>Spark</span>
        </div>
        <hr />
        <div className="nav-button">
          <i className="fas fa-gem" />
          <span>Codepen Pro</span>
        </div>
        <div id="nav-content-highlight" />
      </div>
      <input
        id="nav-footer-toggle"
        type="checkbox"
        checked={footerToggle}
        onChange={() => setFooterToggle(!footerToggle)}
      />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img
              src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547"
              alt="Avatar"
            />
          </div>
          <div id="nav-footer-titlebox">
            <a
              id="nav-footer-title"
              href="https://codepen.io/uahnbu/pens/public"
              target="_blank"
              rel="noopener noreferrer"
            >
              uahnbu
            </a>
            <span id="nav-footer-subtitle">Admin</span>
          </div>
          <label htmlFor="nav-footer-toggle">
            <i className="fas fa-caret-up" />
          </label>
        </div>
        <div id="nav-footer-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
};

export default NavBar;
