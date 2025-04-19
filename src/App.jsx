import React from "react";
import Hero from "./sections/Hero.section";
import Showcase from "./sections/Showcase.section";
import Navbar from "./components/Navbar.component";
import LogoSection from "./sections/LogoSection.section";
import FeatureCards from "./sections/FeatureCards.section";
import Experience from "./sections/Experience.section";
import TechStack from "./sections/TechStack.section";
import Testimonials from "./sections/Testimonials.section";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
    </div>
  );
};

export default App;
