import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    whatsappNumber: '',
    profession: '',
    goal: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Professional Online Makeup Course</h1>
        <p>Certification Programme</p>
        <p>Rated 4.85/5</p>
        <ul>
          <li>India's No.1 Online Makeup Course</li>
          <li>Learn by LIVE Do-it-Together Classes</li>
          <li>Unlimited Practice Sessions to master skills</li>
        </ul>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your name
            <input 
              type="text" 
              name="name" 
              placeholder="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Enter your WhatsApp Number
            <input 
              type="tel" 
              name="whatsappNumber" 
              placeholder="Eg. 0000000000" 
              value={formData.whatsappNumber} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Select your profession
            <select 
              name="profession" 
              value={formData.profession} 
              onChange={handleChange} 
              required
            >
              <option value="">Choose the most relevant option</option>
              <option value="student">Student</option>
              <option value="professional">Professional</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            Select your goal
            <select 
              name="goal" 
              value={formData.goal} 
              onChange={handleChange} 
              required
            >
              <option value="">Choose the most relevant option</option>
              <option value="learn">Learn Makeup</option>
              <option value="improve">Improve Skills</option>
              <option value="career">Career in Makeup</option>
            </select>
          </label>
          <label>
            Select your city
            <input 
              type="text" 
              name="city" 
              placeholder="Your city" 
              value={formData.city} 
              onChange={handleChange} 
              required 
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </header>
      <section className="WhyJoin">
        <h2>Why Should You Join Airblack?</h2>
        <div className="features">
          <div className="feature">
            <i className="fas fa-video"></i>
            <p>Do-it-together, live on zoom</p>
          </div>
          <div className="feature">
            <i className="fas fa-star"></i>
            <p>4.8 / 5 Rated Classes</p>
          </div>
          <div className="feature">
            <i className="fas fa-users"></i>
            <p>35000+ Members</p>
          </div>
        </div>
        <button className="apply-now">Apply Now</button>
      </section>
      <section className="Certification">
        <h2>Get Certified From India's Biggest Beauty Platform</h2>
        <img src="certificate.jpg" alt="Certificate of Achievement" className="certificate-img" />
        <button className="apply-now">Apply Now</button>
      </section>
      <footer className="Footer">
        <h3>Join our growing community of 35,000+ alumni</h3>
        <button className="apply-now">Apply Now</button>
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </footer>
    </div>
  );
}

export default App;
