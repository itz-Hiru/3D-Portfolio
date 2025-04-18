import React from "react";
import Hero from "./sections/Hero.section";
import Showcase from "./sections/Showcase.section";
import Navbar from "./components/Navbar.component";
import LogoSection from "./sections/LogoSection.section";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Showcase />
      <LogoSection />
    </div>
  );
};

export default App;
