import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import { UserProvider } from "./utils/userContext";

export default function App() {
  const user = "sanjay samantra";
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <UserProvider value={user}>
        <Main></Main>
      </UserProvider>
      <Footer></Footer>
    </>
  );
}
