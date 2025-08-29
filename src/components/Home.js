import React from "react";
import { Link } from "react-router-dom"; // <- Import Link
import "./Home.css";

function Home() {
  return (
    <section className="home-container">
      <div className="home-content">
        <h1>Hello, I'm Manson Saju</h1>
        <h2>Full-Stack Developer & Research Enthusiast</h2>
        <p>
          I’m passionate about web development, data analytics, and exploring Generative AI...
        </p>
        <Link to="/projects" className="cta-btn">
          View My Work
        </Link>
      </div>
    </section>
  );
}

export default Home;
