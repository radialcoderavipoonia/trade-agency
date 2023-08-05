import React from "react";
import { Hero } from "../components/Hero";
import PricingPlan from "../components/PricingPlan";
import GameHosting from "../components/GameHosting";
import OurLocations from "../components/OurLocations";
import Testimonials from "../components/Testimonials";
import MyFooter from "../components/MyFooter";
export const HomePage = () => {
  return (
    <div className="bg_img_main overflow-hidden">
      <Hero />
      <PricingPlan />
      <GameHosting />
      <OurLocations />
      <Testimonials />
      <MyFooter />
    </div>
  );
};
