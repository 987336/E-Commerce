import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { CartContext } from "./Context/CartContext";

function Cart() {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const handleCheckout = () => {
        setIsModalOpen(true);
    };

    const confirmPayment = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            const isPaymentSuccessful = Math.random() > 0.2; // Simulate 80% success rate

            if (isPaymentSuccessful) {
                toast.success(`Payment Successful! Total: $${totalPrice}`, {
                    position: "top-right",
                    autoClose: 3000,
                });
                setIsModalOpen(false);
            } else {
                toast.error("Payment Failed. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        }, 3000);
    };

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
                                onClick={handleCheckout}
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
                                    onClick={() => setIsModalOpen(false)}
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

            {/* Toast Notification */}
            <ToastContainer />
        </div>
    );
}

export default Cart;
