import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">

      {/* FIRST ROW: Experience */}
      <div className="cards-container">
        <div className="card card-stretched">
          <h2>Experience</h2>
          <h3>Computer Science Trainee/Apprentice | Aug 2024 – Aug 2025</h3>
          <p><strong>Centre for Development of Advanced Computing (C-DAC), Thiruvananthapuram, Kerala</strong></p>
          <p>Developed AGLPS (Advanced Glacier Lake Profiling Software), a full-stack desktop application for analyzing glacier lakes using DEM and bathymetric data. Built a PyQt5 GUI integrated with Python backend and MongoDB (GridFS). Implemented 3D visualization, contour profiling, and area/volume analysis using NumPy, Pandas, SciPy, pyproj, Plotly, Folium, Matplotlib, Rasterio. Enhanced front-end responsiveness, optimized backend performance, and packaged the application for deployment. Coordinated weekly meetings, tracked project updates, and supported Agile workflows using OpenProject. Delivered project presentations to senior officials and coordinated a hackathon event. Researched and contributed to a flood inundation model using 2D Shallow Water Equations with PINNs. Explored quantum computing fundamentals, algorithms, and platforms.</p>
        </div>
      </div>

      {/* SECOND ROW: Education + Internship */}
      <div className="cards-container">
        <div className="card">
          <h2>Education</h2>
          <p><strong>B.Tech in Computer Science and Engineering | APJ Abdul Kalam Technological University, Kerala</strong></p>
          <p>Completed in 2023 with a CGPA of 6.86.</p>
          <p><strong>Higher Secondary in Biological Science | TKM HSS, Kollam</strong></p>
          <p>Completed in 2019 with 77%.</p>
        </div>

        <div className="card">
          <h2>Internship</h2>
          <h3>Full-Stack Developer (Python Django & React.js) | Aug 2023 – Feb 2024</h3>
          <p>Contributed to projects under guidance from senior developers and trainers in an Agile environment. Strengthened skills in SDLC, teamwork, self-learning, communication, and presentation.</p>
        </div>
      </div>

      {/* THIRD ROW: Skills */}
      <div className="cards-container">
        <div className="card card-stretched">
          <h2>Skills</h2>
          <div className="skills-container">
            <button className="skill-button">Python</button>
            <button className="skill-button">JavaScript</button>
            <button className="skill-button">Django</button>
            <button className="skill-button">React.js</button>
            <button className="skill-button">Node.js</button>
            <button className="skill-button">MySQL</button>
            <button className="skill-button">MongoDB</button>
            <button className="skill-button">HTML</button>
            <button className="skill-button">CSS</button>
            <button className="skill-button">Bootstrap</button>
            <button className="skill-button">GitHub</button>
            <button className="skill-button">Figma</button>
            <button className="skill-button">OpenProject</button>
            <button className="skill-button">PyQt5</button>
            <button className="skill-button">Redis</button>
            <button className="skill-button">Linux</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;