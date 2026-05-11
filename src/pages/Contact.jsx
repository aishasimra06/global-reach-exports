import React, { useState } from 'react';
import './Contact.css';

// ─────────────────────────────────────────────────────────────────────────────
// WhatsApp number in strict international format: country code + number
// NO "+", NO spaces, NO special characters.
// IMPORTANT: This number must be actively registered on WhatsApp.
//            If the number is not on WhatsApp, the redirect will still open
//            WhatsApp but show "number not on WhatsApp" — this is a WhatsApp
//            limitation and cannot be fixed in code.
// ─────────────────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '917406917481'; // +91 74069 17481 (Asif Hussain)

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    // ── 1. Capture & trim all field values ───────────────────────────────────
    const name = (document.getElementById('name')?.value ?? '').trim();
    const email = (document.getElementById('email')?.value ?? '').trim();
    const phone = (document.getElementById('phone')?.value ?? '').trim();
    const company = (document.getElementById('company')?.value ?? '').trim();
    const product = (document.getElementById('product')?.value ?? '').trim();
    const message = (document.getElementById('message')?.value ?? '').trim();

    // ── 2. Validation helpers ─────────────────────────────────────────────────
    // Email: must match standard format (user@domain.tld)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone: optional leading +, then 7–15 digits (spaces/dashes allowed between)
    const phoneRegex = /^[\d\s\-\+]{7,20}$/;
    // Digits-only count for phone (must have at least 7 actual digits)
    const phoneDigits = phone.replace(/\D/g, '');

    // ── 3. Run all validations — stop at first failure ───────────────────────
    if (!name) {
      setFormStatus('error-name');
      document.getElementById('name').focus();
      return;
    }
    if (!email) {
      setFormStatus('error-email-empty');
      document.getElementById('email').focus();
      return;
    }
    if (!emailRegex.test(email)) {
      setFormStatus('error-email-invalid');
      document.getElementById('email').focus();
      return;
    }
    if (phone && (phoneDigits.length < 7 || phoneDigits.length > 15 || /[a-zA-Z]/.test(phone))) {
      setFormStatus('error-phone-invalid');
      document.getElementById('phone').focus();
      return;
    }
    if (!message) {
      setFormStatus('error-message');
      document.getElementById('message').focus();
      return;
    }

    // ── 3. Resolve product dropdown label ────────────────────────────────────
    const productLabels = {
      agri: 'Agriculture Exports',
      industrial: 'Industrial Imports',
      other: 'Other / General Inquiry',
    };
    // If dropdown is still on default ("" or "Select a category"), show "Not specified"
    const productLabel = productLabels[product] ?? (product || 'Not specified');

    // ── 4. Build formatted message ───────────────────────────────────────────
    const text = [
      'Hello Asif,',
      '',
      'I would like to request a quote.',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Company: ${company || 'Not provided'}`,
      `Product Interest: ${productLabel}`,
      '',
      'Message:',
      message,
    ].join('\n');

    // ── 5. Encode message ────────────────────────────────────────────────────
    const encoded = encodeURIComponent(text);

    // ── 6. Build URL & open WhatsApp in new tab ──────────────────────────────
    const whatsappURL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;

    console.log('[WhatsApp Redirect] Number:', WHATSAPP_NUMBER);
    console.log('[WhatsApp Redirect] URL:', whatsappURL);

    // Open WhatsApp in a NEW TAB — keeps the form page open
    // NOTE: WhatsApp pre-fills the message. The visitor must press SEND in WhatsApp.
    window.open(whatsappURL, '_blank');

    // Show instruction banner on the form page
    setFormStatus('success');
  };

  return (
    <div className="contact-page fade-in">

      {/* ===== MINIMALIST HERO (Zaash Style) ===== */}
      <section className="contact-hero-minimal">
        <div className="contact-hero-content-centered">
          <div className="contact-hero-heading-box">
            <div className="accent-bar"></div>
            <h1 className="hero-minimal-title">Get In Touch With <strong>Global Reach Exports</strong></h1>
          </div>
          <p className="hero-minimal-sub">Bridging global trade with a personal touch. Reach out for partnerships or inquiries.</p>
        </div>
      </section>

      {/* ===== CONTACT FORM + INFO ===== */}
      <div className="contact-inner container">
        <div className="contact-editorial-grid">

          {/* LEFT: Form */}
          <div className="contact-form-col">
            <p className="contact-col-label">Send an Inquiry</p>
            <h2 className="contact-col-title">Request a Quote</h2>

            {/* Validation error banners */}
            {formStatus === 'success' && (
              <div className="form-success">
                ✅ WhatsApp has opened in a new tab with your message pre-filled.<br />
                <strong>Please press SEND inside WhatsApp to complete your inquiry.</strong>
              </div>
            )}
            {formStatus === 'error-name' && (
              <div className="form-error">⚠ Please enter your name.</div>
            )}
            {formStatus === 'error-email-empty' && (
              <div className="form-error">⚠ Please enter your email address.</div>
            )}
            {formStatus === 'error-email-invalid' && (
              <div className="form-error">⚠ Invalid email address. Please use the format: you@example.com</div>
            )}
            {formStatus === 'error-phone-invalid' && (
              <div className="form-error">⚠ Invalid phone number. Use digits only (e.g. +91 86603 38302).</div>
            )}
            {formStatus === 'error-message' && (
              <div className="form-error">⚠ Please enter your message.</div>
            )}

            <form onSubmit={sendToWhatsApp} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    className={`form-control${formStatus === 'error-name' ? ' input-error' : ''}`}
                    placeholder="John Smith"
                    onChange={() => setFormStatus('')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    className={`form-control${(formStatus === 'error-email-empty' || formStatus === 'error-email-invalid') ? ' input-error' : ''}`}
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
                    className={`form-control${formStatus === 'error-phone-invalid' ? ' input-error' : ''}`}
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
                  className={`form-control${formStatus === 'error-message' ? ' input-error' : ''}`}
                  rows="5"
                  placeholder="Please describe your requirements..."
                  onChange={() => setFormStatus('')}
                />
              </div>
              <button type="submit" className="contact-submit-btn">Send Message →</button>
            </form>
          </div>

          {/* RIGHT: Info */}
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
                  <span className="cic-value">Building No. 1187/A4, KEB Road,<br />Hosapet Galli, Ward No. 4,<br />Ilkal, Dist: Bagalkot,<br />Karnataka – 587125</span>
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
