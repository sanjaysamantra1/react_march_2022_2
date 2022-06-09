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
