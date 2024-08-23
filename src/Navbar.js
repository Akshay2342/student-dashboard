// import React, { useState } from 'react';
// import './NavBar.css';
// import Dropdown from './Dropdown';

// const NavBar = () => {
//   const [navToggle, setNavToggle] = useState(false);
//   const [footerToggle, setFooterToggle] = useState(false);

//   return (
//     <div id="nav-bar">
//       <input
//         id="nav-toggle"
//         type="checkbox"
//         checked={navToggle}
//         onChange={() => setNavToggle(!navToggle)}
//       />
//       <div id="nav-header">
//         <a
//           id="nav-title"
//           href="https://codepen.io"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           C<i className="fab fa-codepen" />DEPEN
//         </a>
//         <label htmlFor="nav-toggle">
//           <span id="nav-toggle-burger" />
//         </label>
//         <hr />
//       </div>
//       <div id="nav-content">
//         <div className="nav-button">
//           <i className="fas fa-palette" />
//           <span>Academics</span>
//         </div>
//         <div className="nav-button">
//           <i className="fas fa-images" />
//           <span>Complaint system</span>
//         </div>
//         <div className="nav-button">
//           <i className="fas fa-thumbtack" />
//           <span>Programme and Curriculum</span>
//         </div>
//         <hr />
//         <div className="nav-button">
//           <i className="fas fa-heart" />
//           <span>Placement cell</span>
//         </div>
//         <div className="nav-button">
//           <i className="fas fa-chart-line" />
//           <span>Mess Management</span>
//         </div>
//         <div className="nav-button">
//           <i className="fas fa-fire" />
//           <span>Department Portal</span>
//         </div>
//         <div className="nav-button">
//           <i className="fas fa-magic" />
//           <span>Spark</span>
//         </div>
//         <hr />
//         <div className="nav-button">
//           <i className="fas fa-gem" />
//           <span>Codepen Pro</span>
//         </div>
//       <input
//         id="nav-footer-toggle"
//         type="checkbox"
//         checked={footerToggle}
//         onChange={() => setFooterToggle(!footerToggle)}
//       />
//       <div id="nav-footer">
//         <div id="nav-footer-heading">
//           <div id="nav-footer-avatar">
//             <img
//               src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547"
//               alt="Avatar"
//             />
//           </div>
//           <div id="nav-footer-titlebox">
//             <a
//               id="nav-footer-title"
//               href="https://codepen.io/uahnbu/pens/public"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               uahnbu
//             </a>
//             <span id="nav-footer-subtitle">admin</span>
//           </div>
//           <label htmlFor="nav-footer-toggle">
//             <i className="fas fa-caret-up" />
//           </label>
//         </div>
//         <div id="nav-footer-content">
//         <div class="dropdown">
//           <button class="dropbtn">Dropdown</button>
//           <div class="dropdown-content">
//             <a href="#">Link 1</a>
//             <a href="#">Link 2</a>
//             <a href="#">Link 3</a>
//           </div>
//         </div>
//         </div>
//   );
// };

// export default NavBar;


import React, { useState } from 'react';
import './NavBar.css';
import Image from './image.png'

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [footerToggle, setFooterToggle] = useState(false);
  const imageStyle = {
    width: '150px', // Adjust size as needed
    height: 'auto',
    borderRadius: '8px', // Example of rounded corners
  };
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
          <img src={Image} style={imageStyle}/>
        </a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger" />
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <div className="nav-button">
          <span>Academics</span>
        </div>
        <div className="nav-button">
          <span>Complaint system</span>
        </div>
        <div className="nav-button">
          <span>Programme and Curriculum</span>
        </div>
        <hr />
        <div className="nav-button">
          <span>other academic procedure</span>
        </div>
        <div className="nav-button">
          <span>Mess Management</span>
        </div>
        <div className="nav-button">
          <span>Placement cell</span>
        </div>
        <div className="nav-button">
          <span>Visitors hostel</span>
        </div>
        <div className="nav-button">
          <span>Department Portal</span>
        </div>
        <div className="nav-button">
          <span>Health Care Center</span>
        </div>
        <div className="nav-button">
          <span>Scholorship potal</span>
        </div>
        <div className="nav-button">
          <span></span>
        </div>
        {/* <div className="nav-button">
          <i className="fas fa-magic" />
          <span>Spark</span>
        </div> */}
        <hr />
        {/* <div className="nav-button">
          <i className="fas fa-gem" />
          <span>Codepen Pro</span>
        </div> */}
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
              src=""
              alt="Avatar"
            />
          </div>
          <div id="nav-footer-titlebox">
            <a
              id="nav-footer-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              Akshay 
            </a>
            <span id="nav-footer-subtitle">admin</span>
          </div>
          <label htmlFor="nav-footer-toggle">
            <i className="fas fa-caret-up" />
          </label>
        </div>
        <div id="nav-footer-content">
          <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
