import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap/gsap-core";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom -= 100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="main-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img
                src="/images/Projects/Audition-Hive.png"
                alt="Audition-Hive"
                className="object-fill"
              />
            </div>
            <div className="text-content">
              <h2>Audition Hive</h2>
              <p className="text-white-50 md:text-xl">
                An user-friendly blogging website deeveloped using react and
                nodeJS.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/Projects/Plan-Pilot.png" alt="project 02" />
              </div>
              <h2>Task Management System</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img
                  src="/images/Projects/Aurudu-Nakath.png"
                  alt="project 03"
                />
              </div>
              <h2>Aurudu Nakath Seettuwa</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
