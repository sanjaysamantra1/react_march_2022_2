import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Careers from "../careers/Careers";
import Notfound from "../notfound/Notfound";
import ContactUs from "../contactus/ContactUs";
import Products, {
  AAA,
  BBB,
  FeaturedProducts,
  NewProducts,
} from "../products/Products";
import ProductDetails from "../productdetails/ProductDetails";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import Demo1 from "../demo/Demo1";
import Demo2 from "../demo/Demo2";
const AboutUs = React.lazy(() => import("../aboutus/AboutUs"));

export default function Main() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route
            exact
            path="/careers"
            element={
              <ProtectedRoute>
                <Careers></Careers>
              </ProtectedRoute>
            }
          />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
            <Route path="aaa" element={<AAA />} />
            <Route path="bbb" element={<BBB />} />
          </Route>
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/demo1" element={<Demo1 />} />
          <Route path="/demo2" element={<Demo2 />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </>
  );
}
