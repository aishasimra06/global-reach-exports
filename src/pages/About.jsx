import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import './About.css';

const teamMembers = [
  {
    id: 1,
    name: 'Mohiuddeen Badasha',
    role: 'Director',
    desc: 'Overseeing business development, partnerships, and trade compliance operations.',
    phone: '+91 9448342921',
    email: null,
    image: '/team_badasha.png'
  },
  {
    id: 2,
    name: 'Mahaboob Saheb',
    role: 'Director',
    desc: 'Leading global strategy, client relations, and agricultural export operations.',
    phone: '+91 86603 38302',
    email: null,
    image: '/team_Mahaboob.png'
  },
  {
    id: 3,
    name: 'Shakeel Ahmed',
    role: 'Managing Director',
    desc: 'Overseeing global operations and strategic direction from Ilkal, Karnataka.',
    phone: '+91 8123714541',
    email: null,
    image: '/team_Shakeel.jpeg'
  },
  {
    id: 4,
    name: 'Athar Al Noman',
    role: 'Associate Director',
    desc: 'Supporting logistics, planning, and client communication.',
    phone: '+91 9108945946',
    email: null,
    image: '/team_Athar.jpeg'
  },
  {
    id: 5,
    name: 'Asif Hussain',
    role: 'Director of Operations',
    desc: 'Managing logistics, compliance, and industrial import sourcing networks.',
    phone: '+91 74069 17481',
    email: null,
    image: '/team_asif.png'
  }
];

const About = () => {
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);

  const handleNext = () => {
    setActiveMemberIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setActiveMemberIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const activeMember = teamMembers[activeMemberIndex];

  return (
    <div className="about-page fade-in">

      {/* ===== HERO BANNER ===== */}
      <section className="about-hero">
        <h1 className="h1">About Global Reach Exports</h1>
        <p>Global Reach Exports is a certified Indian exporter of premium agricultural commodities and industrial materials. IEC-registered and APEDA-certified, we operate with one standard — excellence. We are built on transparency, integrity, and an unwavering commitment to seamless global trade. We respect our partners' time, honour every commitment, and ensure every shipment arrives on time, without exception. At Global Reach Exports, we do not just export goods — we deliver trust.</p>
      </section>

      {/* ===== WHO WE ARE – 3 COLUMN EDITORIAL ===== */}
      <section className="about-editorial">
        <div className="about-editorial-header">
          <h2>Who We Are</h2>
        </div>

        <div className="about-editorial-grid">

          {/* COL 1: About Us */}
          <div className="ae-col">
            <p className="ae-col-label">About Us</p>
            <p className="ae-col-body">
              Global Reach Exports is a government-registered export trading company founded in 2025,
              based in Ilkal, Karnataka, India. Holding an IEC (Importer-Exporter Code) and certified
              by APEDA (Agricultural and Processed Food Products Export Development Authority), we
              operate across active trade corridors in the Gulf region, Southeast Asia, and other
              international markets.
            </p>
            <p className="ae-col-body">
              We own and operate a granite quarry, giving us a rare vertical advantage — direct control
              over quality, competitive quarry-to-port pricing, and uninterrupted supply capacity for
              our granite export clients.
            </p>
            <div className="ae-img-small">
              <img src="/company_warehouse.png" alt="GRE Warehouse" />
            </div>
            <Link to="/contact" className="ae-learn-btn">Enquire Now →</Link>
          </div>

          {/* COL 2: Mission */}
          <div className="ae-col">
            <p className="ae-col-label">Our Mission</p>
            <p className="ae-col-body">
              At Global Reach Exports, our mission is to be the most dependable link between Indian
              producers and international buyers. We source only from verified supply chains, enforce
              rigorous quality grading at origin, and ensure secure, export-compliant packaging for
              every consignment.
            </p>
            <div className="ae-img-mission">
              <img src="/blue_planet.png" alt="Global Trade Network" />
            </div>
            <p className="ae-col-body">
              From negotiating international trade terms to managing end-to-end shipping documentation,
              we optimise timelines and reduce cost inefficiencies — all without compromising on the
              consistency and reliability our clients expect in every shipment.
            </p>
          </div>

          {/* COL 3: Values + Image */}
          <div className="ae-col">
            <p className="ae-col-label">Our Values</p>
            <p className="ae-col-body">
              <strong>Reliability</strong> — Our partners count on us to deliver on time, every time.
              <br /><br />
              <strong>Transparency</strong> — Open pricing, clear documentation, and honest communication at every stage.
              <br /><br />
              <strong>Compliance</strong> — Full adherence to international trade regulations, phytosanitary standards, and export norms.
              <br /><br />
              <strong>Quality Integrity</strong> — Sourced, graded, and packed to meet the standards of the most demanding global markets.
            </p>
            <div className="ae-img-large">
              <img src="/fresh_vegetables.png" alt="GRE Products" />
            </div>
          </div>

        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <div className="cert-block">
        <div className="cert-item">
          <Shield size={28} /> GST Registered &nbsp;<strong>29ABCFG5126G1Z1</strong>
        </div>
        <div className="cert-item">
          <FileCheck size={28} /> IEC Code &nbsp;<strong>ABCFG5126G</strong>
        </div>
      </div>

      {/* ===== LEADERSHIP TEAM ===== */}
      <section className="about-team-section">
        <div className="team-section-inner">
          <p className="team-section-label">Our People</p>
          <h2 className="team-section-title">Leadership Team</h2>
          
          <div className="team-hero-view">
            <button className="nav-btn prev-btn" onClick={handlePrev} aria-label="Previous member">
              <ChevronLeft size={32} />
            </button>
            
            <div className="active-member-info fade-in" key={activeMember.id}>
              <h3>{activeMember.name}</h3>
              <div className="active-member-role">{activeMember.role}</div>
              <p className="active-member-desc">{activeMember.desc}</p>
              
              <div className="active-member-contact">
                {activeMember.phone && (
                  <p><a href={`tel:${activeMember.phone.replace(/[^0-9+]/g, '')}`}>{activeMember.phone}</a></p>
                )}
                {activeMember.email && (
                  <p><a href={`mailto:${activeMember.email}`}>{activeMember.email}</a></p>
                )}
              </div>
            </div>

            <div className="active-member-image fade-in" key={`${activeMember.id}-img`}>
              <img src={activeMember.image} alt={activeMember.name} />
            </div>

            <button className="nav-btn next-btn" onClick={handleNext} aria-label="Next member">
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="team-avatar-list">
            {teamMembers.map((member, idx) => (
              <div 
                key={member.id} 
                className={`team-avatar-item ${idx === activeMemberIndex ? 'active' : ''}`}
                onClick={() => setActiveMemberIndex(idx)}
              >
                <div className="avatar-photo">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="avatar-name">{member.name}</div>
                <div className="avatar-role">{member.role}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
