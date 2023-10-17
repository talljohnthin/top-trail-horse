import React from "react";
import Wrapper from "../Wrapper";
import Button from "../buttons/Button";

const PanelHero = () => {
  return (
    <section className="section--hero bg-cover bg-center relative">
      <div className="bg-gradient-to-r from-black opacity-70 absolute top-0 left-0 w-full h-screen z-0" />
      <Wrapper className="relative z-10">
        <div className="grid grid-cols-4 md:grid-cols-12 place-content-center h-screen">
          <div className="col-span-4 md:col-span-6 text-white">
            <h1 className="text-4xl md:text-5xl font-medium mb-4">
              Trail Riding{" "}
              <span className="text-brand-red block md:inline">Rewards</span>
            </h1>
            <h3 className="text-xl md:text-3xl font-medium mb-2">
              Get rewarded just for trail riding!
            </h3>
            <p className="text-base">
              Track your rides with Top Trail and win prizes, awards, and
              recognition for doing what you love. Join the largestonline trail
              riding club and participate in fun riding challenges every month
              and all year long.
            </p>
            <div className="mt-6">
              <Button>Join Now</Button>
            </div>
          </div>
          <div className="col-span-4 md:col-span-6"></div>
        </div>
      </Wrapper>
    </section>
  );
};

export default PanelHero;
