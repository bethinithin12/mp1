// ./components/About.js
import React from 'react';
import './About.css'; // Make sure to add a CSS file for About

const About = () => {
  return (
    <div className="about-container">
      <h2>About Intelli Vertex</h2>
      <p>
        Intelli Vertex is revolutionizing the way question papers are generated. Our platform offers a dynamic and efficient solution for educators, enabling them to create customized question papers effortlessly.
      </p>
      <p>
        With a user-friendly interface, Intelli Vertex allows teachers and tutors to:
      </p>
      <ul>
        <li>Choose from a diverse set of question types, including multiple choice, true/false, and open-ended questions.</li>
        <li>Specify difficulty levels and topics to tailor assessments according to student needs.</li>
        <li>Automatically generate papers in minutes, saving valuable time for educators.</li>
        <li>Access a library of pre-existing questions to enhance their assessments.</li>
      </ul>
      <p>
        Our mission is to simplify the assessment process, making it accessible and efficient for everyone involved in education. Join us in transforming the way assessments are conducted!
      </p>
    </div>
  );
};

export default About;
