import React from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import '../../Css/TopProduct.css';  // Add this CSS file for styling

// Sample product data with real product names and descriptions
const products = [
  { "id": 1, "name": "Apple iPhone 15", "description": "The latest iPhone with A17 chip, 5G support, and enhanced camera system.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$999" },
  { "id": 2, "name": "Samsung Galaxy S23", "description": "Powerful smartphone with Snapdragon 8 Gen 2, AMOLED screen, and pro-grade cameras.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$899" },
  { "id": 3, "name": "Sony PlayStation 5", "description": "Next-gen gaming console with stunning 4K graphics and fast load times.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$499" },
  { "id": 4, "name": "MacBook Pro 14-inch", "description": "Powerful laptop with Apple M2 Pro chip, 16GB RAM, and 512GB SSD.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$1999" },
  { "id": 5, "name": "Dell XPS 13", "description": "Ultra-thin laptop with Intel Core i7 processor and 16GB RAM.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$1299" },
  { "id": 6, "name": "LG OLED TV 55-inch", "description": "Stunning OLED display with 4K resolution, perfect for gaming and movie nights.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$1500" },
  { "id": 7, "name": "Bose QuietComfort 45", "description": "Noise-cancelling headphones with superior sound quality and comfortable fit.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$329" },
  { "id": 8, "name": "GoPro HERO 11", "description": "Action camera with HyperSmooth stabilization, 5.3K video, and 23MP photos.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$399" },
  { "id": 9, "name": "Apple Watch Series 8", "description": "Smartwatch with ECG, blood oxygen monitoring, and fitness tracking features.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$399" },
  { "id": 10, "name": "Samsung Galaxy Tab S8", "description": "Android tablet with high-resolution screen and S Pen support for creative tasks.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$649" },
  { "id": 11, "name": "Canon EOS R6", "description": "Full-frame mirrorless camera with 20fps burst shooting and 4K video.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$2499" },
  { "id": 12, "name": "Nintendo Switch OLED", "description": "Portable gaming system with OLED screen, enhanced audio, and game storage.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$349" },
  { "id": 13, "name": "Fitbit Charge 5", "description": "Fitness tracker with GPS, heart rate monitoring, and sleep tracking.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$129" },
  { "id": 14, "name": "JBL Flip 6", "description": "Portable Bluetooth speaker with deep bass, waterproof design, and up to 12 hours of playtime.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$129" },
  { "id": 15, "name": "Microsoft Surface Laptop 4", "description": "Laptop with Intel Core i5 processor, 8GB RAM, and 256GB SSD, sleek and powerful.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$999" },
  { "id": 16, "name": "HP Spectre x360", "description": "Convertible laptop with Intel Core i7 processor, 16GB RAM, and 512GB SSD.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$1399" },
  { "id": 17, "name": "Sony WH-1000XM5", "description": "Noise-canceling over-ear headphones with superior sound and long battery life.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$399" },
  { "id": 18, "name": "Apple AirPods Pro 2", "description": "True wireless earbuds with active noise cancellation, transparency mode, and spatial audio.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$249" },
  { "id": 19, "name": "Dyson V15 Detect", "description": "Cordless vacuum cleaner with laser illumination and up to 60 minutes of runtime.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$699" },
  { "id": 20, "name": "Philips Sonicare HX9903", "description": "Smart electric toothbrush with pressure sensor and multiple modes for healthier gums.", "imageUrl": "https://via.placeholder.com/400x300", "price": "$299" }
];

const TopProductCarousel = () => {
  // Split products into groups of 3
  const productGroups = [];
  for (let i = 0; i < products.length; i += 3) {
    productGroups.push(products.slice(i, i + 3));
  }

  return (
    <div>
      {/* Heading */}
      <h2 className="text-center my-4">Our Top Products</h2>

      {/* Carousel */}
      <Carousel interval={3000} controls={true} indicators={false} fade>
        {productGroups.map((group, index) => (
          <Carousel.Item key={index}>
            <Row className="d-flex justify-content-center">
              {group.map((product) => (
                <Col xs={12} sm={6} md={4} lg={4} key={product.id} className="mb-4">
                  <Card className="product-card">
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Card.Text><strong>{product.price}</strong></Card.Text>
                      <Button variant="primary">Buy Now</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default TopProductCarousel;
