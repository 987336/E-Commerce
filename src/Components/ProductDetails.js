import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { data, data2Fashion, data3Storts } from '../App';
import '../Css/category.css'
import { CartContext } from "../Components/Context/CartContext";

// Notification component
const Notification = ({ message }) => {
    return (
        <div className="notification">
            {message}
        </div>
    );
};

function ProductDetails() {
    const { id } = useParams();
    const ElectronicsData = useContext(data);
    const FashionData = useContext(data2Fashion);
    const SportsData = useContext(data3Storts);
    const { addToCart } = useContext(CartContext);

    const [showNotification, setShowNotification] = useState(false); // State to show the notification
    const [notificationMessage, setNotificationMessage] = useState(""); // Message for the notification

    const product = ElectronicsData.find((item) => item.id === parseInt(id, 10)) ||
    FashionData.find((item) => item.id === parseInt(id, 10)) || SportsData.find((item) => item.id === parseInt(id, 10))

    if (!product) {
        return (
            <div className="container text-center" >
                <h2>Product not found</h2>
            </div>
        );
    }

    // Handle add to cart
    const handleAddToCart = (product) => {
        addToCart(product); // Add the product to the cart
        setNotificationMessage(`${product.name} has been added to your cart!`); // Set the notification message
        setShowNotification(true); // Show the notification

        // Hide the notification after 3 seconds
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <div className="container my-5" style={{ marginTop: "130px " }}>
            {/* Show notification */}
            {showNotification && <Notification message={notificationMessage} />}

            <div className="row align-items-center">
                {/* Image Section */}
                <div className="col-lg-6">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid rounded shadow-sm"
                    />
                </div>

                {/* Product Details Section */}
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold">{product.name}</h1>
                    <p className="text-muted">{product.description}</p>
                    <p className="h4 text-success fw-bold">Price: ${product.price}</p>

                    {/* Buttons */}
                    <div className="mt-4">
                        <button onClick={() => handleAddToCart(product)} className="btn btn-primary btn-lg me-3">
                            <i className="bi bi-cart-fill"></i> Add to Cart
                        </button>
                        <button className="btn btn-success btn-lg">
                            <i className="bi bi-bag-fill"></i> Buy Now
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-4">
                        <h5>Why you'll love it:</h5>
                        <ul>
                            <li>High quality and durable design</li>
                            <li>Affordable price</li>
                            <li>Available with fast delivery options</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Additional Features Section */}
            <div className="mt-5">
                <h3 className="mb-4">Product Highlights</h3>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Feature 1</h5>
                                <p className="card-text">Description of feature 1.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Feature 2</h5>
                                <p className="card-text">Description of feature 2.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Feature 3</h5>
                                <p className="card-text">Description of feature 3.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
