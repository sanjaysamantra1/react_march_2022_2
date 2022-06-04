import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  createSearchParams,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  const navigateHandler = (title, price) => {
    navigate({
      pathname: "/productdetails",
      search: `?${createSearchParams({
        title: title,
        price: price,
      })}`,
    });
  };

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
      <button onClick={fetchproducts} className="btn btn-primary">
        Fetch products
      </button>
      <div className="courses-nav">
        <Link to="/products/featured">featured</Link>
        <Link to="/products/new">New</Link>
      </div>
      <div className="courses-nav">
        <Link to="/products/aaa">aaa</Link>
        <Link to="/products/bbb">bbb</Link>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-8">
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
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      navigateHandler(product.category, product.price);
                    }}
                  >
                    query param
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-sm-2">
            <Outlet></Outlet>
          </div>
          <div className="col-sm-2">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}

export const NewProducts = () => {
  return <div>New Products</div>;
};

export const FeaturedProducts = () => {
  return <div>Featured Products</div>;
};
export const AAA = () => {
  return <div>AAA Products</div>;
};
export const BBB = () => {
  return <div>BBB Products</div>;
};
