import React, { useState } from "react";
import Electronics from "../Components/CategoryComponents/Electronics";
import Fashion from "../Components/CategoryComponents/Fashion";
import HomeAndKitchen from "../Components/CategoryComponents/HomeAndKitchen";
import Sports from "../Components/CategoryComponents/Sports";
import ToysAndGames from "../Components/CategoryComponents/ToysAndGames";
import TopProductsCarousel from "../Components/CategoryComponents/TopProducts";
import "../Css/category.css";
import { FaLaptop, FaTshirt, FaCouch, FaFootballBall, FaGamepad } from "react-icons/fa";

function Category() {
    const categories = [
        { name: "Electronics", icon: <FaLaptop /> },
        { name: "Fashion", icon: <FaTshirt /> },
        { name: "Home and Kitchen", icon: <FaCouch /> },
        { name: "Sports", icon: <FaFootballBall /> },
        { name: "Toys and Games", icon: <FaGamepad /> },
    ];

    const [selectedCategory, setSelectedCategory] = useState(null);

    const renderCategory = () => {
        switch (selectedCategory) {
            case "Electronics":
                return <Electronics />;
            case "Fashion":
                return <Fashion />;
            case "Home and Kitchen":
                return <HomeAndKitchen />;
            case "Sports":
                return <Sports />;
            case "Toys and Games":
                return <ToysAndGames />;
            default:
                return <TopProductsCarousel />;
        }
    };

    return (
        <div className="category-container" style={{ padding: "20px" }}>
            <h1 className="category-heading" style={{ textAlign: "center", fontWeight: "bold" }}>
                Discover by Category
            </h1>
            <div className="category-grid" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`category-card-c ${selectedCategory === category.name ? "active" : ""}`}
                        onClick={() => setSelectedCategory(category.name)}
                        style={{
                            backgroundColor: selectedCategory === category.name ? "rgb(148, 0, 0)" : "#fff", // Updated background color
                            color: selectedCategory === category.name ? "#fff" : "#333", // Text color for active
                            borderRadius: "10px",
                            padding: "20px",
                            textAlign: "center",
                            cursor: "pointer",
                            transition: "transform 0.3s, box-shadow 0.3s",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.05)";
                            e.target.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)";
                            e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        <div className="category-icon" style={{ fontSize: "2rem", marginBottom: "10px" }}>
                            {category.icon}
                        </div>
                        <p className="category-name-c" style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                            {category.name}
                        </p>
                    </div>
                ))}
            </div>
            <div className="category-content" style={{ marginTop: "20px" }}>
                {renderCategory()}
            </div>
        </div>
    );
}

export default Category;
