import React, { useContext } from 'react';
import { data3Storts } from '../../App';
import { Link } from 'react-router-dom';

function Sports() {
   const SportsData = useContext(data3Storts)

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Sports</h1>
            <div className="container my-4">
                <div className="row">
                    {SportsData.map((item) => (
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
                                <Link to={`/product/${item.id}`} className="btn btn-primary">
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sports;
