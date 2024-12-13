import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import '../../Css/TopProduct.css';  // Add this CSS file for styling

// Sample product data with real product names and descriptions
const products = [
  { id: 1, name: "Smartphone", price: 699, description: "Latest 5G smartphone." , image:"https://images.unsplash.com/photo-1603184017968-953f59cd2e37?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Laptop", price: 1099, description: "High-performance laptop.", image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Smartwatch", price: 249, description: "Feature-packed smartwatch.", image:"https://plus.unsplash.com/premium_photo-1728249572934-f56a637a92a4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Casual T-Shirt", price: 29, description: "Comfortable cotton T-shirt.", image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, name: "Leather Jacket", price: 199, description: "Premium leather jacket.", image :"https://plus.unsplash.com/premium_photo-1661313817350-1fa759c43a3b?q=80&w=3017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  {
    id: 6,
    name: "Football",
    price: 25,
    image:"https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Durable and high-quality football for outdoor games.",
},
{
    id: 7,
    name: "Yoga Mat",
    price: 20,
    image:"https://plus.unsplash.com/premium_photo-1675155952889-abb299df1fe7?q=80&w=2829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Non-slip yoga mat with cushioning for a comfortable workout.",
},
{
    id: 8,
    name: "Tennis Racket",
    price: 79,
    image:"https://images.unsplash.com/photo-1599280174407-fdc3e8c47856?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lightweight tennis racket with a sturdy frame and excellent grip.",
},
{
    id: 9,
    name: "Basketball",
    price: 30,
    image:"https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Official size and weight basketball with superior grip.",
},
{
    id: 10,
    name: "Running Shoes",
    price: 89,
    image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Breathable and lightweight running shoes with excellent support.",
},
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
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Card.Text><strong>{product.price}</strong></Card.Text>
                      <Button variant="primary"><Link to={`/product/${product.id}`} className="btn btn-primary">
                                        Buy Now
                                    </Link></Button>
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
