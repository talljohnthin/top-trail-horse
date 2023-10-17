import { NextPage } from "next";
import PanelHero from "../components/panels/PanelHero";
import PanelPartners from "../components/panels/PanelPartners";
import PanelHowItWorks from "../components/panels/PanelHowItWorks";

const Home: NextPage = () => {
  return (
    <>
      <PanelHero />
      <PanelPartners />
      <PanelHowItWorks />
    </>
  );
};

export default Home;
