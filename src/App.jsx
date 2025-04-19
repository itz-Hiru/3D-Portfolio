import React from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar.component";
import Contact from "./sections/Contact.section";
import Experience from "./sections/Experience.section";
import FeatureCards from "./sections/FeatureCards.section";
import Hero from "./sections/Hero.section";
import LogoSection from "./sections/LogoSection.section";
import Showcase from "./sections/Showcase.section";
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
      <Contact />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
