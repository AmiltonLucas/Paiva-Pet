import React from "react";
import { NavLink } from "react-router-dom"; // Importa o NavLink para navegação
import Header from "../../../Components/Client/Header";
import Banner from "../../../Components/Client/Banner";
import Tabs from "../../../Components/Client/Tabs";
import Navbar from "../../../Components/Client/Navbar";
import Footer from "../../../Components/Client/Footer";
import Products from "../../../Components/Client/Products";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Banner />
      <Tabs />
      <Products />
      <Footer />
      <Navbar />
    </div>
  );
}