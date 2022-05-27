import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import AboutUs from "../aboutus/AboutUs";
import Careers from "../careers/Careers";
import Notfound from "../notfound/Notfound";
import ContactUs from "../contactus/ContactUs";
import Products from "../products/Products";
import ProductDetails from "../productdetails/ProductDetails";

export default function Main() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}
