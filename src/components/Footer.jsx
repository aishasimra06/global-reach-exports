import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer fade-in">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/logo.png" alt="Global Reach Exports Logo" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              Your Trusted Partner in Global Trade. Bridging Global Markets with Quality & Trust.
            </p>
            <div className="footer-contact-info">
              <p><MapPin size={18} style={{ color: 'var(--primary-blue)' }}/> Ilkal, Karnataka, India - 587125</p>
              <p><Phone size={18} style={{ color: 'var(--primary-blue)' }}/> +91 86603 38302</p>
              <p><Phone size={18} style={{ color: 'var(--primary-blue)' }}/> +91 74069 17481</p>
              <p><Phone size={18} style={{ color: 'var(--primary-blue)' }}/> +91 9448342921</p>
              <p><Mail size={18} style={{ color: 'var(--primary-blue)' }}/> director@globalreachexports.com</p>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Our Products</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Compliance</h4>
            <p className="footer-desc" style={{ marginBottom: '15px' }}>
              We operate under strict international trade laws and maintain top-tier certifications.
            </p>
            <div className="gstin-box">
              GSTIN: 29ABCFG5126G1Z1
            </div>
            <div className="gstin-box" style={{ marginTop: '8px' }}>
              IEC: ABCFG5126G
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Global Reach Exports. All Rights Reserved.</p>
          <p>GST Registered | IEC Certified</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
