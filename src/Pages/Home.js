import React from "react";
import Navbar from '../components/home/Navbar';
import Jumbotron from "../components/home/Jumbotron";
import Sponsorship from "../components/home/Sponsorship";
import AboutUs from "../components/home/AboutUs";


function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Sponsorship />
      <AboutUs />
    </div>
  );
}

export default Home;
