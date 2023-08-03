import React from "react";
import Navbar from '../components/home/Navbar';
import Jumbotron from "../components/home/Jumbotron";
import Sponsorship from "../components/home/Sponsorship";
import AboutUs from "../components/home/AboutUs";
import Feedback from "../components/home/Feedback";
import Footer from "../components/home/Footer";


function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Sponsorship />
      <AboutUs />
      <Feedback />
      <Footer />
    </div>
  );
}

export default Home;
