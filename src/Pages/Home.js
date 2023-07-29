import React from "react";
import Navbar from '../components/home/Navbar';
import Jumbotron from "../components/home/Jumbotron";
import Sponsorship from "../components/home/Sponsorship";
import AboutUs from "../components/home/AboutUs";
import Feedback from "../components/home/Feedback";


function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Sponsorship />
      <AboutUs />
      <Feedback />
    </div>
  );
}

export default Home;
