import React from "react";
import NavBar from "../components/NavBar";
import Container from "../components/Container";
import CardsHome from "../components/CardsHome";
import HomeSlider from "../components/HomeSlider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="font-lora">
      <NavBar />
      <Container />
      <CardsHome />
      <HomeSlider />
      <Footer />
    </div>
  );
};

export default Home;
