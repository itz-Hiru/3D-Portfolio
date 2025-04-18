import React from "react";
import HeaderTitle from "../components/HeaderTitle.component";
import { expCards } from "../utils/data";
import GlowCard from "../components/GlowCard.component";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full md:mt-20 mt-10 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <HeaderTitle
          title="Professional Work Experience"
          subTitle="📢 My Career Overview"
        />
        <div className="relative mt-32">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={card.id} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div className="flex flex-row items-center gap-5">
                      {card.imgPath}
                    </div>
                  </GlowCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
