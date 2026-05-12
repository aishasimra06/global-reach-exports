import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import './Products.css';

const Products = () => {
  const [activeTab, setActiveTab] = useState('exports');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteError, setQuoteError] = useState('');
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: ''
  });
  const WHATSAPP_NUMBER = '918660338302';

  const exportsData = [
    {
      title: 'Premium Rice',
      image: '/premium_rice.png',
      desc: 'We supply world-class Indian rice, known for its aroma, length, and taste. Our network sources directly from top-tier mills ensuring consistent quality for every shipment.',
      specs: [
        'Varieties: Basmati (1121, 1509, Sharbati), Non-Basmati (Sona Masoori, IR64)',
        'Broken Ratio: 5%, 10%, 25%, or 100% sortex clean',
        'Packaging: 5kg, 10kg, 25kg, 50kg PP/Jute Bags'
      ]
    },
    {
      title: 'Maize / Corn',
      image: '/maize_corn.png',
      desc: 'High-quality Yellow Maize suitable for human consumption as well as animal feed. Properly dried to optimal moisture levels.',
      specs: [
        'Grade: Premium Yellow Maize',
        'Moisture: Max 14%',
        'Aflatoxin: Below 20 PPB'
      ]
    },
    {
      title: 'Fresh Vegetables',
      image: '/fresh_vegetables.png',
      desc: 'Farm-fresh vegetables exported globally via air and sea freight. We ensure strict temperature-controlled logistics from farm to destination.',
      specs: [
        'Items: Green Chillies, Okra, Bitter Gourd, Lemon, Drumsticks',
        'Quality: Hand-picked, A-Grade export quality',
        'Logistics: Air Freight / Reefer Containers'
      ]
    },
    {
      title: 'Red & Purple Onions',
      image: '/red_onions.png',
      desc: 'Premium Indian onions known for their strong pungency and long shelf life. Sourced directly from major agricultural hubs.',
      specs: [
        'Sizes: 25mm to 60mm+',
        'Quality: Properly cured, dry skin, intact bulbs',
        'Packaging: 5kg, 10kg, 25kg, 50kg Mesh Bags'
      ]
    }
  ];

  const importsData = [
    {
      title: 'Copper Scrap',
      image: '/copper_scrap.png',
      desc: 'High-purity copper scrap sourced globally for local manufacturing and recycling plants. Essential for electrical, plumbing, and industrial applications.',
      specs: [
        'Grades: Millberry (99.9% purity), Berry, Birch, Cliff',
        'Form: Wire scrap, tube scrap, mixed heavy copper',
        'Packaging: Bales or loose in containers'
      ]
    },
    {
      title: 'Aluminium Scrap',
      image: '/aluminium_scrap.png',
      desc: 'Reliable supply of aluminium scrap for secondary smelting and die-casting industries. Sourced from trusted international yards.',
      specs: [
        'Types: Tense, Taint/Tabor, Extrusion (6063), Wheels',
        'Cleanliness: Free from excessive dirt, iron, and non-metallic items',
        'Packaging: Compressed bales'
      ]
    },
    {
      title: 'Bitumen (Industrial)',
      image: '/industrial_bitumen.png',
      desc: 'High-quality industrial bitumen imported for infrastructure development, road construction, and waterproofing applications.',
      specs: [
        'Grades: Penetration grades (60/70, 80/100) & Viscosity grades (VG-30, VG-40)',
        'Applications: Asphalt production, roofing, sealing',
        'Packaging: New steel drums (180kg/200kg) or Jumbo Bags'
      ]
    }
  ];

  const currentData = activeTab === 'exports' ? exportsData : importsData;

  const openQuoteModal = (product) => {
    setSelectedProduct(product);
    setIsQuoteOpen(true);
    setQuoteError('');
  };

  const closeQuoteModal = () => {
    setIsQuoteOpen(false);
    setSelectedProduct(null);
    setQuoteError('');
  };

  const handleQuoteChange = (field, value) => {
    setQuoteForm((prev) => ({ ...prev, [field]: value }));
    setQuoteError('');
  };

  const submitQuoteToWhatsApp = (e) => {
    e.preventDefault();
    if (!selectedProduct) return;

    const name = quoteForm.name.trim();
    const phone = quoteForm.phone.trim();
    const email = quoteForm.email.trim();
    const company = quoteForm.company.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneDigits = phone.replace(/\D/g, '');

    if (!name || !phone || !email) {
      setQuoteError('Please fill Name, Phone Number, and Email.');
      return;
    }
    if (!emailRegex.test(email)) {
      setQuoteError('Please enter a valid email address.');
      return;
    }
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      setQuoteError('Please enter a valid phone number.');
      return;
    }

    const text = [
      'Hi',
      '',
      'I would like to request a quote for this product:',
      `Product: ${selectedProduct.title}`,
      `Description: ${selectedProduct.desc}`,
      'Specifications:',
      ...selectedProduct.specs.map((item) => `- ${item}`),
      '',
      'My details:',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Company: ${company || 'Not provided'}`
    ].join('\n');

    const encoded = encodeURIComponent(text);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;
    window.open(whatsappURL, '_blank');
    closeQuoteModal();
  };

  return (
    <div className="products-page fade-in">

      {/* ===== FULL-WIDTH HERO ===== */}
      <section className="products-hero">
        <div className="products-hero-left">
          <h1 className="products-hero-title">
            Quality Goods.<br />
            <strong>Global Reach.</strong><br />
            Every Shipment.  
          </h1>
          <p className="products-hero-sub">Explore our comprehensive catalog of premium agricultural exports and high-grade industrial imports.</p>
          <button
            className="products-hero-cta"
            onClick={() => document.getElementById('product-catalog').scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Products
          </button>
        </div>

        <div className="products-hero-right">
          <div className="products-hero-card">
            <div className="phc-dot"></div>
            <h3>Agricultural Exports</h3>
            <p>Premium Rice, Maize, Fresh Vegetables &amp; Onions — sourced from top Indian farms and mills.</p>
          </div>
          <div className="products-hero-card">
            <div className="phc-dot"></div>
            <h3>Industrial Imports</h3>
            <p>Copper Scrap, Aluminium Scrap &amp; Bitumen — high-grade materials for growing industries.</p>
          </div>
          <div className="products-hero-card">
            <div className="phc-dot"></div>
            <h3>100% Quality Assured</h3>
            <p>Every shipment undergoes rigorous inspection and certification before international transit.</p>
          </div>
        </div>
      </section>

      <div className="products-inner container" id="product-catalog">
      <div className="product-toggle">
        <button 
          className={`toggle-btn ${activeTab === 'exports' ? 'active' : ''}`}
          onClick={() => setActiveTab('exports')}
        >
          Agriculture Exports
        </button>
        <button 
          className={`toggle-btn ${activeTab === 'imports' ? 'active' : ''}`}
          onClick={() => setActiveTab('imports')}
        >
          Industrial Imports
        </button>
      </div>

      <div className="products-3d-container">
        <img src="/company_warehouse.png" alt="Warehouse Background" className="products-bg-image" />
        
        <div className="product-list fade-in" key={activeTab}>
          {currentData.map((product, idx) => (
            <div className="product-glass-card" key={idx}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <h3 className="h3">{product.title}</h3>
                <p className="product-desc">{product.desc}</p>
                
                <ul className="spec-list">
                  {product.specs.map((spec, sIdx) => (
                    <li key={sIdx}>
                      <CheckCircle className="spec-icon" size={20} />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={() => openQuoteModal(product)}
                >
                  Request Quote <ArrowRight size={18} className="ml-2" style={{ marginLeft: '10px' }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      {isQuoteOpen && selectedProduct && (
        <div className="quote-modal-overlay" onClick={closeQuoteModal}>
          <div className="quote-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="quote-modal-close" onClick={closeQuoteModal}>×</button>
            <h3 className="quote-modal-title">Request Quote</h3>
            <p className="quote-modal-product"><strong>{selectedProduct.title}</strong></p>
            <ul className="quote-modal-specs">
              {selectedProduct.specs.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>

            {quoteError && <div className="quote-modal-error">{quoteError}</div>}

            <form className="quote-modal-form" onSubmit={submitQuoteToWhatsApp}>
              <input
                type="text"
                placeholder="Name *"
                value={quoteForm.name}
                onChange={(e) => handleQuoteChange('name', e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={quoteForm.phone}
                onChange={(e) => handleQuoteChange('phone', e.target.value)}
              />
              <input
                type="email"
                placeholder="Email *"
                value={quoteForm.email}
                onChange={(e) => handleQuoteChange('email', e.target.value)}
              />
              <input
                type="text"
                placeholder="Company Name (Optional)"
                value={quoteForm.company}
                onChange={(e) => handleQuoteChange('company', e.target.value)}
              />
              <button type="submit" className="quote-modal-submit">
                Request Quote <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
