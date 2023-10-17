import React from "react";
import Wrapper from "../Wrapper";
import Button from "../buttons/Button";
import Image from "../image";
import ArrowRight from "../../assets/images/arrowRight.svg";

const data = [
  {
    title: "Step 1",
    subTitle: "Join + Download App",
    content: "Join Top Trail today and download the app to get started:",
    options: [
      "Fill in your profile",
      "Add your equine(s)",
      "Learn how to track rides",
    ],
  },
  {
    title: "Step 2",
    subTitle: "Join + Download App",
    content: "Join Top Trail today and download the app to get started:",
    options: [
      "Fill in your profile",
      "Add your equine(s)",
      "Learn how to track rides",
    ],
  },
  {
    title: "Step 3",
    subTitle: "Join + Download App",
    content: "Join Top Trail today and download the app to get started:",
    options: [
      "Fill in your profile",
      "Add your equine(s)",
      "Learn how to track rides",
    ],
  },
];

const PanelHowItWorks = () => {
  return (
    <section className="section-how-it-work py-[30px] md:py-[100px]">
      <Wrapper>
        <div className="mb-8">
          <h3 className="text-brand-darkgray font-bold text-3xl">
            How It Works
          </h3>
          <p className="text-[#667085]">Get Started in 3 easy steps</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 xl:gap-6 2xl:gap-10">
          {data.map((card, index) => {
            return (
              <>
                {index !== 0 && (
                  <Image
                    className="w-[40px] rotate-90 md:rotate-0"
                    src={ArrowRight}
                    alt="feature"
                  />
                )}
                <div key={index} className="card max-w-[400px]">
                  <div className="bg-white rounded-[15px] p-8 md:p-4 lg:p-8 pb-6 space-y-4">
                    <h3 className="text-3xl font-bold text-brand-red">
                      {card.title}
                    </h3>
                    <h4 className="text-[20px] font-medium text-brand-yellow">
                      {card.subTitle}
                    </h4>
                    <h5 className="text-md font-medium text-brand-darkgray">
                      {card.content}
                    </h5>
                    <ul className="space-y-3">
                      {card.options.map((option, idx) => (
                        <li key={idx} className="relative">
                          <span className="w-[5px] h-[5px] rounded-full bg-brand-yellow absolute left-0 top-2"></span>
                          <span className="pl-4">{option}</span>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <Button className="w-full">Join Now</Button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default PanelHowItWorks;
