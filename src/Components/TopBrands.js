import React from 'react';
import '../Css/TopBrands.css'; // Import the CSS file for styling

const brands = [
  { name: 'Nike', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
  { name: 'Samsung', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'Google', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Microsoft', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
];

const TopBrands = () => {
  return (
    <div className="top-brands">
      <h2>Top Brands</h2>
      <div className="brands-row">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`brand-icon-container ${index % 2 === 0 ? 'up' : 'down'}`}
          >
            <img src={brand.icon} alt={brand.name} className="brand-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
