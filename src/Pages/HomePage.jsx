import React from "react";
import { Hero } from "../components/Hero";
import PricingPlan from "../components/PricingPlan";
import GameHosting from "../components/GameHosting";
import OurLocations from "../components/OurLocations";
import Testimonials from "../components/Testimonials";
import MyFooter from "../components/MyFooter";
import ChooseUs from "../components/ChooseUs";
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
      <MyFooter />
    </div>
  );
};
