import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";
import HeaderTitle from "../components/HeaderTitle.component";
import TechIcon from "../components/Models/SkillLogo/TechIcon.component";
import { techStackIcons } from "../utils/data";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });
  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <HeaderTitle
          title="My Tech Arsenal"
          subTitle="💻 Tools & Technologies I Master"
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.id}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
