import React from 'react';

const PageTemplate = ({ title, description }) => (
  <div className="fade-in" style={{ padding: '120px 20px', textAlign: 'center', minHeight: '60vh' }}>
    <h1 className="h1 text-dark">{title}</h1>
    <p className="text-light" style={{ maxWidth: '600px', margin: '0 auto' }}>{description}</p>
  </div>
);

export default PageTemplate;
