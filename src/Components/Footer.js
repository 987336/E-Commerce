import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="bg-light text-dark py-5">
            <Container>
                {/* Footer Links Section */}
                <Row>
                    <Col md={6} lg={4} className="mb-4">
                        <h5 className="text-uppercase mb-3" style={{ color: "#333" }}>About Us</h5>
                        <p style={{ color: "#555" }}>
                            Welcome to our store! We offer high-quality products with excellent customer service. Follow us for updates, exclusive offers, and more.
                        </p>
                        <div className="d-flex">
                            <a href="https://facebook.com" className="text-dark me-3">
                                <FontAwesomeIcon icon={faFacebookF} size="lg" />
                            </a>
                            <a href="https://twitter.com" className="text-dark me-3">
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                            <a href="https://instagram.com" className="text-dark me-3">
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                            <a href="https://linkedin.com" className="text-dark">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                        </div>
                    </Col>

                    <Col md={6} lg={4} className="mb-4">
                        <h5 className="text-uppercase mb-3" style={{ color: "#333" }}>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-dark text-decoration-none mb-2 d-block">Home</a></li>
                            <li><a href="#about" className="text-dark text-decoration-none mb-2 d-block">About</a></li>
                            <li><a href="#services" className="text-dark text-decoration-none mb-2 d-block">Services</a></li>
                            <li><a href="#contact" className="text-dark text-decoration-none d-block">Contact</a></li>
                        </ul>
                    </Col>

                    {/* Newsletter Section */}
                    <Col md={12} lg={4} className="mb-4">
                        <h5 className="text-uppercase mb-3" style={{ color: "#333" }}>Subscribe</h5>
                        <p style={{ color: "#555" }}>Get the latest updates and offers delivered to your inbox.</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    className="mb-2 rounded-pill"
                                    style={{ borderColor: "#ccc" }}
                                />
                            </Form.Group>
                            <Button variant="danger" type="submit" className="rounded-pill px-4">
                                Subscribe
                            </Button>
                        </Form>
                    </Col>
                </Row>

                {/* Footer Bottom Section */}
                <Row className="mt-4">
                    <Col className="text-center">
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
                        </p>
                        <p className="text-muted small">Made with ❤️ by Lyra</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
