// src/pages/CancelPage.js
import React from "react";

function CancelPage() {
    return (
        <div className="container text-center my-5">
            <h2 className="display-4">Payment Failed</h2>
            <p className="lead">There was an issue with your payment. Please try again later.</p>
            <a href="/" className="btn btn-primary btn-lg mt-3">
                Go to Home
            </a>
        </div>
    );
}

export default CancelPage;
