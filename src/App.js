import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
