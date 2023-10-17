import React from "react";
import Wrapper from "../Wrapper";
import Image from "../image";

import FeatureImage1 from "../../assets/images/feature-1.png";
import FeatureImage2 from "../../assets/images/feature-2.png";
import FeatureImage3 from "../../assets/images/feature-3.png";
import FeatureImage4 from "../../assets/images/feature-4.png";
import FeatureImage5 from "../../assets/images/feature-5.png";

const images = [
  FeatureImage1,
  FeatureImage2,
  FeatureImage3,
  FeatureImage4,
  FeatureImage5,
];

const PanelPartners = () => {
  return (
    <section className=" bg-brand-gray py-[30px]">
      <Wrapper>
        <div className="flex flex-wrap justify-center md:justify-between gap-8">
          {images.map((feature, index) => (
            <Image
              key={index}
              className="w-[83px] md:w-[120px] xl:w-[180px]"
              src={feature}
              alt="feature"
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default PanelPartners;
