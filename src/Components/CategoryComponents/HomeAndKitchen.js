import React from 'react';

function HomeAndKitchen() {
    let HomeAndKitchenData = [
        {
            id: 1,
            name: "Non-Stick Frying Pan",
            price: 39,
            image:"https://plus.unsplash.com/premium_photo-1723478443655-0a609275097d?q=80&w=2916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Durable non-stick frying pan with ergonomic handle.",
        },
        {
            id: 2,
            name: "Ceramic Dinner Set",
            price: 129,
            image:"https://plus.unsplash.com/premium_photo-1664527306801-f815c9a8516f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Elegant 16-piece ceramic dinner set, perfect for family meals.",
        },
        {
            id: 3,
            name: "Blender",
            price: 59,
            image:"https://plus.unsplash.com/premium_photo-1717749801344-8ed38d55aead?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "High-speed blender with multiple settings for smoothies and soups.",
        },
        {
            id: 4,
            name: "Memory Foam Pillow",
            price: 49,
            image:"https://plus.unsplash.com/premium_photo-1723834562784-a56d7b234360?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Comfortable memory foam pillow for a restful night's sleep.",
        },
        {
            id: 5,
            name: "Vacuum Cleaner",
            price: 199,
            image:"https://images.unsplash.com/photo-1647940990395-967898eb0d65?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Lightweight vacuum cleaner with powerful suction and HEPA filter.",
        },
        {
            id: 6,
            name: "Electric Kettle",
            price: 29,
            image:"https://plus.unsplash.com/premium_photo-1715774735265-92a0305302ea?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Quick-boil electric kettle with auto shut-off feature.",
        },
       
    ];

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Home and Kitchen</h1>
            <div className="container my-4">
                <div className="row">
                    {HomeAndKitchenData.map((item) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.id}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={item.image}
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

export default HomeAndKitchen;
