// src/pages/SuccessPage.js
import React from "react";

function SuccessPage() {
    return (
        <div className="container text-center my-5">
            <h2 className="display-4">Payment Successful!</h2>
            <p className="lead">Thank you for your purchase. Your order has been processed.</p>
            <a href="/" className="btn btn-primary btn-lg mt-3">
                Go to Home
            </a>
        </div>
    );
}

export default SuccessPage;
