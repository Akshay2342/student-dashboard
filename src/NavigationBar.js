// import React from 'react';
// import './NavigationBar.css';  // Assuming you've placed the CSS code in this file

// function NavigationBar() {
//   return (
//     <div className="html-container">
//       <div className="html-section">
//         <div className="html-project">
//           <div className="navigation">
//             <nav>
//               <ul className="nav-type">
//                 <li><a href="https://codepen.io/EneergeticTomy/" target="_blank" rel="noopener noreferrer" className="active">Home</a></li>
//                 <li><a href="https://codepen.io/TomikaBoy/full/LqMpaE" target="_blank" rel="noopener noreferrer" className="active1">About</a></li>
//                 <li><a href="https://codepen.io/" target="_blank" rel="noopener noreferrer" className="active2">Contact</a></li>
//                 <li><a href="https://w3schools.com/" target="_blank" rel="noopener noreferrer" className="active3">Support</a></li>
//                 <div className="line"></div>
//                 <li><a><i className="fa fa-search" onClick={() => console.log('Search clicked!')}></i></a></li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>

//       <noscript>
//         <div className="first-line">
//           <div className="linear">
//             <div className="line-w5"></div>
//           </div>
//         </div>
//       </noscript>

//       <div className="flash-fluid">
//         <div className="flash-time">
//           <div className="flash-GIF"></div>
//         </div>
//       </div>

//       <noscript>
//         <div className="cyrcle-center">
//           <div className="radial-cyrcle"></div>
//         </div>
//       </noscript>

//       {/* <div className="text-class">
//         <div className="text-container">
//           <div className="text-content-fluid" id="chinese-text" data-text-type="chinese">
//             <div className="chinese-text">設</div>
//             <div className="chinese-text2">計</div>
//             <div className="chinese-text3">和</div>
//             <div className="chinese-text4">開</div>
//             <div className="chinese-text5">發</div>
//           </div>
//         </div>
//       </div> */}

//       {/* <div className="dropdown" id="anotherFunction">
//         <div className="drop1">HTML</div>
//         <div className="drop2">CSS</div>
//         <div className="drop3">Javascript</div>
//         <div className="drop4">Sass</div>
//       </div> */}
//     </div>
//   );
// }

// export default NavigationBar;


import React from 'react';
import './NavigationBar.css';  // Assuming you've placed the CSS code in this file
import Notification from './Notification';

function NavigationBar() {
  return (
    <div className="html-container">
      <div className="html-section">
        <div className="html-project">
          <div className="navigation">
            <nav>
              <ul className="nav-type">
                {/* <li><a href="https://codepen.io/EneergeticTomy/" target="_blank" rel="noopener noreferrer" className="active">Home</a></li>
                <li><a href="https://codepen.io/TomikaBoy/full/LqMpaE" target="_blank" rel="noopener noreferrer" className="active1">About</a></li>
                <li><a href="https://codepen.io/" target="_blank" rel="noopener noreferrer" className="active2">Contact</a></li>
                <li><a href="https://w3schools.com/" target="_blank" rel="noopener noreferrer" className="active3">Support</a></li> */}
                <div className="line"></div>
                <Notification/>
                <li><a><i className="fa fa-bullhorn" onClick={() => console.log('Announcements clicked!')}></i></a></li>
                <li><a><i className="fa fa-user" onClick={() => console.log('User clicked!')}></i></a></li>
                <li><a><i className="fa fa-search" onClick={() => console.log('Search clicked!')}></i></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <noscript>
        <div className="first-line">
          <div className="linear">
            <div className="line-w5"></div>
          </div>
        </div>
      </noscript>

      <div className="flash-fluid">
        <div className="flash-time">
          <div className="flash-GIF"></div>
        </div>
      </div>

      <noscript>
        <div className="cyrcle-center">
          <div className="radial-cyrcle"></div>
        </div>
      </noscript>

      {/* <div className="text-class">
        <div className="text-container">
          <div className="text-content-fluid" id="chinese-text" data-text-type="chinese">
            <div className="chinese-text">設</div>
            <div className="chinese-text2">計</div>
            <div className="chinese-text3">和</div>
            <div className="chinese-text4">開</div>
            <div className="chinese-text5">發</div>
          </div>
        </div>
      </div> */}

      {/* <div className="dropdown" id="anotherFunction">
        <div className="drop1">HTML</div>
        <div className="drop2">CSS</div>
        <div className="drop3">Javascript</div>
        <div className="drop4">Sass</div>
      </div> */}
    </div>
  );
}

export default NavigationBar;