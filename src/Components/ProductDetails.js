import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { data, data2Fashion, data3Storts } from "../App";
import "../Css/category.css";
import { CartContext } from "../Components/Context/CartContext";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";

function ProductDetails() {
    const { id } = useParams();
    const ElectronicsData = useContext(data);
    const FashionData = useContext(data2Fashion);
    const SportsData = useContext(data3Storts);
    const { addToCart } = useContext(CartContext);

    const [toasts, setToasts] = useState([]);

    const product =
        ElectronicsData.find((item) => item.id === parseInt(id, 10)) ||
        FashionData.find((item) => item.id === parseInt(id, 10)) ||
        SportsData.find((item) => item.id === parseInt(id, 10));

    if (!product) {
        return (
            <div className="container text-center">
                <h2>Product not found</h2>
            </div>
        );
    }

    const handleAddToCart = (product) => {
        addToCart(product);
        const newToast = {
            id: Date.now(),
            message: `${product.name} has been added to your cart!`,
        };
        setToasts([...toasts, newToast]);

        // Automatically remove the toast after 3 seconds
        setTimeout(() => {
            setToasts((currentToasts) =>
                currentToasts.filter((toast) => toast.id !== newToast.id)
            );
        }, 3000);
    };

    return (
        <div className="container my-5" style={{ marginTop: "130px" }}>
            {/* Dynamic Toast Notifications with Sliding Animation */}
            <ToastContainer
                position="top-end"
                className="p-3"
                style={{ zIndex: 1050 }} // Ensure the toast is above other content
            >
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        bg="success"
                        onClose={() =>
                            setToasts((currentToasts) =>
                                currentToasts.filter((t) => t.id !== toast.id)
                            )
                        }
                        className="toast-slide-in" // Apply custom animation class
                    >
                        <Toast.Header>
                            <strong className="me-auto">Notification</strong>
                        </Toast.Header>
                        <Toast.Body className="text-white">{toast.message}</Toast.Body>
                    </Toast>
                ))}
            </ToastContainer>

            <div className="row g-5 align-items-start">
                {/* Image Section */}
                <div className="col-lg-6 text-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: "400px", objectFit: "contain" }}
                    />
                </div>

                {/* Product Details */}
                <div className="col-lg-6">
                    <h1 className="fw-bold mb-3" style={{ color: "rgb(148, 0, 0)" }}>{product.name}</h1>
                    <p className="text-muted">{product.description}</p>
                    <p className="h4 text-success fw-bold mb-4">Price: ${product.price}</p>

                    {/* Action Buttons */}
                    <div className="d-flex gap-3">
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="btn btn-primary btn-lg flex-grow-1"
                            style={{ backgroundColor: "rgb(148, 0, 0)", borderColor: "rgb(148, 0, 0)" }}
                        >
                            <i className="bi bi-cart-fill me-2"></i> Add to Cart
                        </button>
                        <button
                            className="btn btn-success btn-lg flex-grow-1"
                            style={{ backgroundColor: "#006400", borderColor: "#006400" }}
                        >
                            <i className="bi bi-bag-fill me-2"></i> Buy Now
                        </button>
                    </div>

                    {/* Additional Features */}
                    <div className="mt-4">
                        <h5>Key Features:</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <i className="bi bi-check-circle-fill text-success me-2"></i> Durable and
                                long-lasting
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-check-circle-fill text-success me-2"></i> Stylish and
                                modern design
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-check-circle-fill text-success me-2"></i> Affordable
                                price
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill text-success me-2"></i> Fast delivery
                                available
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
