import React, { useState } from 'react';
import './Contact.css';

const WHATSAPP_NUMBER = '918660338302'; // +91 86603 38302

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const name = (document.getElementById('name')?.value ?? '').trim();
    const email = (document.getElementById('email')?.value ?? '').trim();
    const phone = (document.getElementById('phone')?.value ?? '').trim();
    const company = (document.getElementById('company')?.value ?? '').trim();
    const product = (document.getElementById('product')?.value ?? '').trim();
    const message = (document.getElementById('message')?.value ?? '').trim();

    const productLabels = {
      agri: 'Agriculture Exports',
      industrial: 'Industrial Imports',
      other: 'Other / General Inquiry',
    };
    const productLabel = productLabels[product] ?? (product || 'Not specified');

    const text = [
      'Hi',
      '',
      `Name: ${name || 'Not provided'}`,
      `Email: ${email || 'Not provided'}`,
      `Phone: ${phone || 'Not provided'}`,
      `Company: ${company || 'Not provided'}`,
      `Product Interest: ${productLabel}`,
      '',
      'Message:',
      message || 'Not provided',
    ].join('\n');

    const encoded = encodeURIComponent(text);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;

    window.open(whatsappURL, '_blank');
    setFormStatus('success');
  };

  return (
    <div className="contact-page fade-in">
      <section className="contact-hero-minimal">
        <div className="contact-hero-content-centered">
          <div className="contact-hero-heading-box">
            <div className="accent-bar"></div>
            <h1 className="hero-minimal-title">Get In Touch With <strong>Global Reach Exports</strong></h1>
          </div>
          <p className="hero-minimal-sub">Bridging global trade with a personal touch. Reach out for partnerships or inquiries.</p>
        </div>
      </section>

      <div className="contact-inner container">
        <div className="contact-editorial-grid">
          <div className="contact-form-col">
            <p className="contact-col-label">Send an Inquiry</p>
            <h2 className="contact-col-title">Request a Quote</h2>

            {formStatus === 'success' && (
              <div className="form-success">
                WhatsApp has opened in a new tab with your message pre-filled.<br />
                <strong>Please press SEND inside WhatsApp to complete your inquiry.</strong>
              </div>
            )}

            <form onSubmit={sendToWhatsApp} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="John Smith"
                    onChange={() => setFormStatus('')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="you@company.com"
                    onChange={() => setFormStatus('')}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-control"
                    placeholder="+91 00000 00000"
                    onChange={() => setFormStatus('')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    id="company"
                    type="text"
                    className="form-control"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="product">Product Interest</label>
                <select id="product" className="form-control" defaultValue="">
                  <option value="" disabled>Select a category</option>
                  <option value="agri">Agriculture Exports</option>
                  <option value="industrial">Industrial Imports</option>
                  <option value="other">Other / General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  rows="5"
                  placeholder="Please describe your requirements..."
                  onChange={() => setFormStatus('')}
                />
              </div>

              <button type="submit" className="contact-submit-btn">Send Message →</button>
            </form>
          </div>

          <div className="contact-info-col">
            <div className="contact-info-card-dark">
              <div className="cic-bg"></div>
              <div className="cic-overlay"></div>
              <div className="cic-content">
                <p className="cic-eyebrow">/ Direct Line /</p>
                <h2 className="cic-title">We're Here<br />For You</h2>

                <div className="cic-divider"></div>

                <div className="cic-item">
                  <span className="cic-label">Phone</span>
                  <a href="tel:+918660338302" className="cic-value">+91 86603 38302</a>
                  <a href="tel:+917406917481" className="cic-value">+91 74069 17481</a>
                  <a href="tel:+919448342921" className="cic-value">+91 9448342921</a>
                </div>

                <div className="cic-item">
                  <span className="cic-label">Email</span>
                  <a href="mailto:director@globalreachexports.com" className="cic-value">director@globalreachexports.com</a>
                </div>

                <div className="cic-item">
                  <span className="cic-label">Regd. Office</span>
                  <span className="cic-value">Building No. 1187/A4, KEB Road,<br />Hosapet Galli, Ward No. 4,<br />Ilkal, Dist: Bagalkot,<br />Karnataka - 587125</span>
                </div>

                <div className="cic-divider"></div>

                <div className="cic-cert-row">
                  <span className="cic-cert">GSTIN: 29ABCFG5126G1Z1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
