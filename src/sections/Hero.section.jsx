import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import AnimatedCounter from "../components/AnimatedCounter.component";
import Button from "../components/Button.component";
import HeroExp from "../components/Models/Hero/HeroExp.component";
import { words } from "../utils/data";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        <header className="flex fkex-col justify-start md:w-full w-screen md:px-20  px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Transforming
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, id) => (
                      <div key={id}>
                        <span className="flex items-center md:gap-3 gap-1 pb-2">
                          <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-sky-400">
                            {word.icon}
                          </div>
                          <span>{word.text}</span>
                        </span>
                      </div>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real-World Projects</h1>
              <h1>that Drive Meaningful Results</h1>
            </div>
            <p className="text-white-50 text-xl font-medium relative z-10 pointer-events-none">
              Hi, I'm Hirumitha, a developer based in Sri Lanka <br /> with a
              passion for coding.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="My work"
            />
          </div>
        </header>
        <figure>
          <div className="hero-3d-layout">
            <HeroExp />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
