import React from "react";
import { Hero } from "../components/Home/Hero";
import PricingPlan from "../components/Home/PricingPlan";
import GameHosting from "../components/common/GameHosting";
import OurLocations from "../components/common/OurLocations";
import Testimonials from "../components/common/Testimonials";
import MyFooter from "../components/common/MyFooter";
import ChooseUs from "../components/Home/ChooseUs";
import NewsLetter from "../components/common/NewsLetter";
export const HomePage = () => {
  return (
    <div className="bg_img_main overflow-hidden">
      <Hero />
      <PricingPlan />
      <div className=" d-sm-none">
        <ChooseUs />
      </div>
      <div className=" d-sm-none">
        <OurLocations />
      </div>
      <GameHosting />
      <div className=" d-sm-block d-none">
        <OurLocations />
      </div>
      <div className=" d-sm-block d-none">
        <ChooseUs />
      </div>
      <Testimonials />
      <NewsLetter />
      <MyFooter />
    </div>
  );
};
