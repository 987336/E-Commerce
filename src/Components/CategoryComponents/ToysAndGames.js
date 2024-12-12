import React from 'react';

function ToysAndGames() {
    let ToysAndGamesData = [
        {
            id: 1,
            name: "Building Blocks",
            price: 29,
            description: "Colorful building blocks set to enhance creativity and motor skills.",
        },
        {
            id: 2,
            name: "Remote Control Car",
            price: 49,
            description: "Fast and durable remote control car with long battery life.",
        },
        {
            id: 3,
            name: "Board Game",
            price: 35,
            description: "Classic family board game for hours of fun and strategic thinking.",
        },
        {
            id: 4,
            name: "Action Figure",
            price: 19,
            description: "Highly detailed action figure with multiple points of articulation.",
        },
        {
            id: 5,
            name: "Puzzle Set",
            price: 25,
            description: "1000-piece puzzle set to challenge and entertain kids and adults.",
        },
        {
            id: 6,
            name: "Plush Toy",
            price: 15,
            description: "Soft and cuddly plush toy made from high-quality materials.",
        },
        {
            id: 7,
            name: "Educational Tablet",
            price: 99,
            description: "Interactive educational tablet with games and learning tools for kids.",
        },
    ];

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Toys and Games</h1>
            <div className="container my-4">
                <div className="row">
                    {ToysAndGamesData.map((item) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.id}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={`https://via.placeholder.com/300x200?text=${item.name}`}
                                    className="card-img-top img-fluid"
                                    alt={item.name}
                                    style={{
                                        objectFit: "cover",
                                        height: "200px",
                                        width: "100%",
                                    }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text fw-bold">Price: ${item.price}</p>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ToysAndGames;
