import React, { useContext, useState } from "react";
import { CartContext } from "./Context/CartContext"; // Import the CartContext

function Cart() {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext); // Use context to access cart data

    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    const [isLoading, setIsLoading] = useState(false); // State to control loading spinner
    const [paymentStatus, setPaymentStatus] = useState(null); // State for tracking payment status

    // Calculate total price and total quantity
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    // Simulate Checkout Handler
    const handleCheckout = () => {
        setIsModalOpen(true); // Show the modal when the checkout button is clicked
    };

    // Simulate payment confirmation
    const confirmPayment = () => {
        setIsLoading(true);   // Start the loading spinner

        // Simulate a 3-second delay (loading state)
        setTimeout(() => {
            setIsLoading(false); // Hide loading spinner after 3 seconds
            const isPaymentSuccessful = Math.random() > 0.2; // Simulate 80% success rate

            if (isPaymentSuccessful) {
                setPaymentStatus("Payment Successful! Total: $" + totalPrice);
                setIsModalOpen(false); // Close modal on success
            } else {
                setPaymentStatus("Payment Failed. Please try again.");
            }
        }, 3000);
    };

    // Empty Cart Message
    if (cart.length === 0) {
        return (
            <div className="container text-center my-5">
                <h2 className="display-4">Your Cart is Empty</h2>
                <p className="lead">Browse our products and add items to your cart.</p>
                <a href="/" className="btn btn-primary btn-lg mt-3">
                    Continue Shopping
                </a>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <h2 className="mb-4">Shopping Cart</h2>
            <div className="row">
                {/* Cart Items */}
                <div className="col-lg-8">
                    <ul className="list-group">
                        {cart.map((item) => (
                            <li
                                key={item.id}
                                className="list-group-item d-flex align-items-center justify-content-between p-4 shadow-sm"
                            >
                                <div className="d-flex align-items-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="img-thumbnail me-3"
                                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                    />
                                    <div>
                                        <h5>{item.name}</h5>
                                        <p className="text-muted mb-1">Price: ${item.price}</p>
                                        <p className="text-muted mb-0">
                                            Subtotal: ${item.price * item.quantity}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="input-group mb-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, "decrease")}
                                            className="btn btn-outline-secondary"
                                            disabled={item.quantity === 1}
                                        >
                                            -
                                        </button>
                                        <input
                                            type="text"
                                            value={item.quantity}
                                            className="form-control text-center"
                                            style={{ width: "60px" }}
                                            readOnly
                                        />
                                        <button
                                            onClick={() => updateQuantity(item.id, "increase")}
                                            className="btn btn-outline-secondary"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Cart Summary */}
                <div className="col-lg-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Cart Summary</h4>
                            <hr />
                            <p className="card-text d-flex justify-content-between">
                                <span>Total Items:</span>
                                <strong>{totalQuantity}</strong>
                            </p>
                            <p className="card-text d-flex justify-content-between">
                                <span>Total Price:</span>
                                <strong>${totalPrice.toFixed(2)}</strong>
                            </p>
                            <hr />
                            <button
                                onClick={handleCheckout} // Trigger the checkout process
                                className="btn btn-primary btn-lg w-100 mt-3"
                            >
                                Proceed to Checkout
                            </button>
                            <a
                                href="/"
                                className="btn btn-secondary btn-lg w-100 mt-3"
                            >
                                Continue Shopping
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Confirmation Modal */}
            {isModalOpen && (
                <div className="modal fade show" style={{ display: "block" }} onClick={() => setIsModalOpen(false)}>
                    <div
                        className="modal-dialog modal-dialog-centered"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-content shadow-lg p-4 rounded-3">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Payment</h5>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={() => setIsModalOpen(false)}
                                    style={{
                                        fontSize: "1.5rem",
                                        color: "#aaa",
                                        cursor: "pointer",
                                        border: "none",
                                        background: "transparent",
                                    }}
                                >
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">
                                {/* Show loading spinner while processing */}
                                {isLoading ? (
                                    <>
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <p className="mt-3">Processing your payment...</p>
                                    </>
                                ) : (
                                    <>
                                        <p>Do you want to proceed with the payment of ${totalPrice}?</p>
                                    </>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => {
                                        setPaymentStatus("Payment Canceled");
                                        setIsModalOpen(false);
                                    }}
                                >
                                    Cancel
                                </button>
                                {!isLoading && (
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={confirmPayment}
                                    >
                                        Confirm Payment
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Payment Status Message */}
            {paymentStatus && (
                <div
                    className={`alert alert-${paymentStatus.includes("Successful") ? "success" : "danger"} mt-4`}
                    role="alert"
                >
                    <h5>{paymentStatus.includes("Successful") ? "Success!" : "Error!"}</h5>
                    <p>{paymentStatus}</p>
                </div>
            )}
        </div>
    );
}

export default Cart;
