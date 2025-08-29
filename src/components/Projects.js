import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "AI Therapist (Personal Companion & Stress Reliever)",
      points: [
        "Developed an AI-driven chatbot using Ollama (Phi-4 Mini) for empathetic and supportive conversations.",
        "Implemented sentiment analysis and mood tracking with daily summaries stored in MongoDB.",
        "Designed a memory system to learn user behavior and predict next-day moods, habits, and tasks.",
        "Integrated motivational story generation and personalized activity suggestions.",
      ],
    },
    {
      title: "AGLPS (Advanced Glacier Lake Profiling Software)",
      points: [
        "Designed a PyQt-based desktop application for analyzing and visualizing glacier lake data.",
        "Integrated DEM, bathymetric, and meteorological data for flood risk modeling using Python libraries (NumPy, Pandas, SciPy, Rasterio, Plotly).",
      ],
    },
    {
      title: "OLX-Clone (Classifieds Marketplace)",
      points: [
        "Created a MERN-based platform with authentication, posting/editing ads, and category-based search.",
        "Enabled real-time chat between buyers and sellers using Socket.IO and Redis.",
        "Built an admin panel for content moderation and user management.",
      ],
    },
    {
      title: "Bookyard (E-Commerce Platform)",
      points: [
        "Built a Django-based book sales platform with secure authentication and order management.",
        "Implemented a user-friendly interface for browsing, filtering, and purchasing books.",
      ],
    },
    {
      title: "Workwise (Employee Management System)",
      points: [
        "Developed CRUD operations and RESTful APIs using the Django MVT architecture.",
        "Integrated authentication and role-based access control.",
      ],
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="cards-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <ul>
              {project.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
