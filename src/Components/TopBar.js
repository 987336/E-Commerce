import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faShoppingCart,
    faUserCircle,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Topbar() {
    const topBarStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        backgroundColor: "rgb(148, 0, 0)", // Updated background color
    };

    const linkStyle = {
        color: "#f8f9fa", // Light color for contrast
        fontSize: "1rem",
        fontWeight: "500",
    };

    const togglerStyle = {
        border: "none",
        color: "#fff", // White color for the hamburger icon
    };

    return (
        <div className="topbar" style={topBarStyle}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    {/* Brand */}
                    <Link
                        className="navbar-brand d-flex align-items-center"
                        to={"/"}
                        style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#f8f9fa" }}
                    >
                        <FontAwesomeIcon icon={faHome} className="me-2" />
                        Lyra
                    </Link>

                    {/* Toggler for Mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={togglerStyle}
                    >
                        <span className="navbar-toggler-icon" style={{ backgroundColor: "#fff" }}></span>
                    </button>

                    {/* Collapsible Content */}
                    <div className="collapse navbar-collapse" id="navbarContent">
                        {/* Centered Search Bar */}
                        <form
                            className="d-flex flex-grow-1 justify-content-center my-2 my-lg-0"
                        >
                            <div className="input-group" style={{ maxWidth: "600px", width: "100%" }}>
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Search products..."
                                    aria-label="Search"
                                />
                                <button className="btn btn-light" type="submit">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </form>

                        {/* Right Aligned Links */}
                        <ul className="navbar-nav ms-auto d-flex align-items-center">
                            <li className="nav-item">
                                <Link
                                    className="nav-link d-flex align-items-center me-3"
                                    to={"/cart"}
                                    style={linkStyle}
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                                    Cart
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle d-flex align-items-center"
                                    href="#"
                                    id="accountDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={linkStyle}
                                >
                                    <FontAwesomeIcon icon={faUserCircle} className="me-2" />
                                    Account
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="accountDropdown"
                                >
                                    <li>
                                        <Link className="dropdown-item" to={"/profile"}>
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={"/orders"}>
                                            Orders
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={"/logout"}>
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export { Topbar };
