import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <h4 className="contact-title">Get in Touch</h4>

      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>📞 <strong>Phone:</strong> +91 8078007655</p>
          <p>📧 <strong>Email:</strong> mansonsajumes@gmail.com</p>
          <p>💼 <strong>LinkedIn:</strong> 
            <a 
              href="https://linkedin.com/in/manson-saju-576b002a4" 
              target="_blank" 
              rel="noreferrer"
            >
              linkedin.com/in/manson-saju-576b002a4
            </a>
          </p>
        </div>

        {/* Right: Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
