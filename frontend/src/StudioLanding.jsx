import React from 'react';
import './StudioLanding.css';

function StudioLanding() {
  return (
    <div className="studio-root">
      {/* Hero Section */}
      <section className="studio-hero">
        <h1 className="studio-title">Welcome to Our Studio</h1>
        <p className="studio-subtitle">
          We build beautiful digital experiences that make a difference.
        </p>
        <button className="studio-button">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="studio-section studio-features">
        <h2 className="studio-section-title">What We Do</h2>
        <div className="studio-card-container">
          {[
            {
              title: 'Web Design',
              desc: 'Stunning, responsive websites that capture your brand\'s essence.',
            },
            {
              title: 'Development',
              desc: 'Robust applications built using cutting-edge technologies.',
            },
            {
              title: 'UI/UX Design',
              desc: 'Intuitive interfaces that delight and engage your users.',
            },
          ].map((feature, index) => (
            <div className="studio-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="studio-section studio-portfolio">
        <h2 className="studio-section-title">Our Work</h2>
        <div className="studio-card-container">
          {[1, 2, 3].map((item) => (
            <div className="studio-card portfolio-card" key={item}>
              <div className="studio-card-image">Project Image</div>
              <div className="studio-card-body">
                <h3>Project {item}</h3>
                <p>A brief description of this amazing project.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="studio-section studio-contact">
        <h2 className="studio-section-title">Let's Work Together</h2>
        <p className="studio-contact-text">
          Have an idea in mind? Let’s turn it into reality.
        </p>
        <button className="studio-button">Contact Us</button>
      </section>

      {/* Footer */}
      <footer className="studio-footer">
        <p>&copy; 2025 Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default StudioLanding;
