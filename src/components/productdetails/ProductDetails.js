import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function ProductDetails() {
  //   const { id } = useParams();
  //   console.log(id);
  //   const [product, setProduct] = useState({});

  //   const fetchproduct = () => {
  //     axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
  //       setProduct(response.data);
  //       console.log(product);
  //     });
  //   };
  //   useEffect(() => {
  //     fetchproduct();
  //   }, [id]);
  //   return (
  //     <div>
  //       <h1>Product Details Page</h1>

  //       <div className="card" style={{ width: "18rem" }}>
  //         <div className="card-body">
  //           <h5 className="card-title">{product?.category}</h5>
  //           <p className="card-text">{product?.description}</p>
  //           <p className="card-text">price - {product?.price}</p>
  //           <p className="card-text">rating - {product?.rating?.rate}</p>
  //           <button>BUY NOW</button>
  //           <button>ADD TO CART</button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  const [searchParams] = useSearchParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams); // get new values onchange
    setData(currentParams);
  }, [searchParams]);

  return (
    <div>
      This is product details page {data.title} - {data.price}
    </div>
  );
}
