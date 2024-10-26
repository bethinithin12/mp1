// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Updated import
// import './App.css';
// import Login from './components/Login'; // Ensure your Login component is imported
// import '@fortawesome/fontawesome-free/css/all.min.css';


// // LoginButton component for handling login redirection
// const LoginButton = () => {
//   const navigate = useNavigate(); // Use useNavigate hook

//   const handleLoginClick = () => {
//     navigate('/login'); // Redirect to the login page
//   };

//   return (
//     <button className="login-btn" onClick={handleLoginClick}>
//       Login
//     </button>
//   );
// };

// function App() {
//   return (
//     <Router> {/* Wrap your app with Router */}
//       {/* Define routes here */}
//       <Routes>
//         <Route
//           path="/login"
//           element={
//             <div className="App"> {/* Use App layout for the login page */}
//               <Login />
//             </div>
//           }
//         />
//         <Route
//           path="*"
//           element={
//             <div className="App"> {/* Default layout for other routes */}
//               <nav className="navbar">
//                 <ul className="nav-links">
//                   <li><a href="App.js">Home</a></li>
//                   <li><a href="About.js">About us</a></li>
//                   <li><a href="Updates.js">Updates</a></li>
//                   <li><a href="DashBoard.js">DashBoard</a></li>
//                   <li><a href="Contacts.js">Contacts</a></li>
//                 </ul>
//                 <LoginButton /> {/* Use the LoginButton component here */}
//               </nav>

//               {/* Main Section */}
//               <div className="main-content">
//                 <h1>Intelli Vertex <span>Question Paper Generation</span></h1>
//                 <p>ExamCraft helps schools, coaching institutes, teachers, and tutors create question papers and online tests in minutes.</p>
//                 <button className="start-btn">Start Now</button>
//               </div>

//               {/* Mockup Section */}
//               <div className="mockup-section">
//                 <img
//                   src="https://examin8.com/study/img/examin8/home_pic.jpeg" // Replace with actual image source
//                   alt="Device mockup"
//                   className="mockup-image"
//                 />
//               </div>
//             </div>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import About from './components/About';
import Updates from './components/Updates';
import Contacts from './components/Contacts';
import SignUp from './components/SignUp'; // Import SignUp component
import '@fortawesome/fontawesome-free/css/all.min.css';

// LoginButton component for handling login redirection
const LoginButton = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <button className="login-btn" onClick={handleLoginClick}>
      Login
    </button>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/signup" element={<SignUp />} /> {/* Add SignUp route */}
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
    </Router>
  );
}

// Default layout for other routes
const DefaultLayout = () => {
  const navigate = useNavigate(); // Move the navigate hook here

  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/updates">Updates</a></li>
          <li><a href="/dashboard">DashBoard</a></li>
          <li><a href="/contacts">Contacts</a></li>
        </ul>
        <LoginButton />
      </nav>

      {/* Main Section */}
      <div className="main-content">
        <h1>Intelli Vertex <span>Question Paper Generation</span></h1>
        <p>ExamCraft helps schools, coaching institutes, teachers, and tutors create question papers and online tests in minutes.</p>
        <button className="start-btn" onClick={() => navigate('/signup')}>Start Now</button> {/* Use navigate here */}
      </div>

      {/* Mockup Section */}
      <div className="mockup-section">
        <img
          src="https://examin8.com/study/img/examin8/home_pic.jpeg"
          alt="Device mockup"
          className="mockup-image"
        />
      </div>
    </div>
  );
}

export default App;








