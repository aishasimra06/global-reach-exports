import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page fade-in">

      {/* ===== SECTION 1: EDITORIAL SPLIT-SCREEN ===== */}
      <div className="editorial-container">

        {/* LEFT COLUMN */}
        <div className="editorial-left">
          <h1 className="editorial-title">
            GLOBAL<br />REACH<br />EXPORTS
          </h1>

          <p className="editorial-desc">
            Global Reach Exports is a certified Indian exporter of premium agricultural commodities and industrial materials — built on reliability, transparency, and a commitment to seamless global trade.
          </p>

          <div className="editorial-thumbnails">
            <Link to="/products" className="thumb-item">
              <div className="thumb-img">
                <img src="/premium_rice.png" alt="Agriculture" />
              </div>
              <div className="thumb-title">Agriculture</div>
              <div className="thumb-desc">Premium exports from top Indian mills</div>
            </Link>

            <Link to="/products" className="thumb-item">
              <div className="thumb-img">
                <img src="/copper_scrap.png" alt="Industrial" />
              </div>
              <div className="thumb-title">Industrial</div>
              <div className="thumb-desc">High-grade raw materials</div>
            </Link>


          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="editorial-right">
          <div className="editorial-main-img">
            <video
              src="/GRE_Material.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Global Reach Exports – material showcase"
            />
          </div>



          <div className="editorial-overlay top-left-overlay">
            <div className="overlay-title">/ Our Commitment /</div>
            <div className="overlay-desc">
              Every shipment is backed by verified supply chains, rigorous quality grading, secure packaging, and full documentation compliance — because trust is non-negotiable.
            </div>
          </div>

          <div className="editorial-overlay bottom-right-overlay">
            <div className="overlay-title">/ Core Commodities /</div>
            <div className="overlay-desc">
              Premium Rice, Yellow Maize, Fresh Vegetables, Onions, Copper Scrap, Aluminium Scrap, Industrial Bitumen, and Granite.
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECTION 2: HONEYCOMB GRID ===== */}
      <div className="hex-section">
        <div className="hex-section-header">
          <p className="hex-hero-sub">WHEN SPEED TO THE MARKET MATTERS, TRUST GRE</p>
          <h2 className="hex-hero-title">GLOBAL <strong>PARTNERSHIP</strong> EXPERTISE</h2>
          <Link to="/about" className="ghost-btn">LEARN MORE</Link>
        </div>

        <div className="honeycomb-wrapper">
          <div className="honeycomb-row">
            <Link to="/products" className="hexagon">
              <img src="/premium_rice.png" className="hex-bg" alt="Agriculture" />
              <div className="hex-overlay"></div>
              <div className="hex-content">
                <h3>AGRICULTURE</h3>
                <span className="ghost-btn-small">LEARN MORE</span>
              </div>
            </Link>

            <Link to="/products" className="hexagon">
              <img src="/company_warehouse.png" className="hex-bg" alt="Services" />
              <div className="hex-overlay"></div>
              <div className="hex-content">
                <h3>SERVICES</h3>
                <span className="ghost-btn-small">LEARN MORE</span>
              </div>
            </Link>

            <Link to="/products" className="hexagon">
              <img src="/copper_scrap.png" className="hex-bg" alt="Markets" />
              <div className="hex-overlay"></div>
              <div className="hex-content">
                <h3>MARKETS</h3>
                <span className="ghost-btn-small">LEARN MORE</span>
              </div>
            </Link>
          </div>

          <div className="honeycomb-row even">
            <Link to="/about" className="hexagon">
              <img src="/fresh_vegetables.png" className="hex-bg" alt="Case Studies" />
              <div className="hex-overlay"></div>
              <div className="hex-content">
                <h3>CASE STUDIES</h3>
                <span className="ghost-btn-small">LEARN MORE</span>
              </div>
            </Link>

            <Link to="/contact" className="hexagon">
              <img src="/blue_planet.png" className="hex-bg" alt="News & Events" />
              <div className="hex-overlay"></div>
              <div className="hex-content">
                <h3>NEWS & EVENTS</h3>
                <span className="ghost-btn-small">LEARN MORE</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="home-desc-block">
          <p>
            Global Reach Exports connects Indian producers with international buyers across the Gulf, Southeast Asia, and beyond — delivering premium agricultural commodities and industrial materials under verified supply chains, international trade terms, and complete documentation compliance. Where quality meets reliability, GRE delivers.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Home;
