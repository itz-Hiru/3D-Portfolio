import React from "react";
import HeaderTitle from "../components/HeaderTitle.component";
import { testimonials } from "../utils/data";
import GlowCard from "../components/GlowCard.component";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <HeaderTitle
          title="Voices of Appreciation"
          subTitle="🌟 Hear What Clients Are Saying About Their Experience"
        />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial) => (
            <GlowCard card={testimonial}>
              <div className="flex items-center gap-3">
                <div className="">
                  <img
                    src={testimonial.imgPath}
                    alt="testimonial image"
                    className="rounded-full size-15"
                  />
                </div>
                <div className="">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
