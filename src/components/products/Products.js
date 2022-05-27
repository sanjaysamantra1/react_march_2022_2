import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchproducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  };
  useEffect(() => {
    fetchproducts();
  });
  return (
    <>
      <h2 className="text-center">Product List</h2>
      <button onClick={fetchproducts}>Fetch products</button>

      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="card" style={{ width: "18rem" }} key={product.id}>
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{product.category}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">price - {product.price}</p>
                <p className="card-text">rating - {product.rating.rate}</p>
                <button>
                  <Link to={`/productdetails/${product.id}`}>
                    View Details
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
