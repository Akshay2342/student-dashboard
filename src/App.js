import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import NavigationBar from './NavigationBar';
import Notification from './Notification';

function App() {
  return (
    <div className="App">
      <div className="nav-container">
        <NavBar />
      </div>
      <div className="navigation-container">
        <NavigationBar />
      </div>
      <div className="content">
        {/* Place the rest of your content here */}
        Random Content Hereee
      </div>
      <div className="Modules">
        {/* Place the rest of your content here */}
        <Notification/>
        Modules content
      </div>
    </div>
  );
}

export default App;
