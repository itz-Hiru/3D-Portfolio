import React from "react";
import Hero from "./sections/Hero.section";
import Showcase from "./sections/Showcase.section";
import Navbar from "./components/Navbar.component";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Showcase />
    </div>
  );
};

export default App;
