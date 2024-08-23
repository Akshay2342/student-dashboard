import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import NavigationBar from './NavigationBar';
import Notification from './Notification';
import ProfileCard from './ProfileCard';
import { Module } from './Module';
import  Card  from './Card';
import AcademicImg from './assets/academic.png'
import AmbulanceImg from './assets/ambulance.png'
import ComplaintImg from './assets/comp_sys.png'
import CvImg from './assets/cv.png'
import HostelImg from './assets/hostel.png'
import EduImg from './assets/education.png'
import HiringImg from './assets/hiring.png'

function App() {
  const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook-icon.png' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter-icon.png' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin-icon.png' },
  ];
  return (
    <div className="App">
      <div className="nav-container">
        <NavBar />
      </div>
      <div className="navigation-container">
        <NavigationBar />
      </div>
      <div className="content">
        selected Content Hereee
      </div>
      <div className="Modules">
      <div className="flex-container">
      <Card title="Academics" image={AcademicImg} />
    <Card title="Programme And Curriculum" image={AmbulanceImg} />
    <Card title="Mess Management" image={CvImg} />
    <Card title="Visitor's Hostel" image={HostelImg} />
    <Card title="Healthcare Center" image={EduImg} />
    <Card title="Scholarship Portal" image={HiringImg} />
    <Card title="Complaint System" image={ComplaintImg} />
    <Card title="Placement Cell" image={AcademicImg} /> {/* Replace with correct image if available */}
    <Card title="Department Portal" image={AmbulanceImg} /> {/* Replace with correct image if available */}
    <Card title="Gymkhana" image={CvImg} /> {/* Replace with correct image if available */}
    <Card title="Hostel Management" image={HostelImg} /> {/* Replace with correct image if available */}
    <Card title="Other Academic Procedure" image={EduImg} /> {/* Replace with correct image if available */}
      </div>

    </div>
    </div>
  );
}

export default App;
