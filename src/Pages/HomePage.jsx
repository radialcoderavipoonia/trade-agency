import React from "react";
import { Hero } from "../components/Home/Hero";
import PricingPlan from "../components/Home/PricingPlan";
import GameHosting from "../components/common/GameHosting";
import OurLocations from "../components/common/OurLocations";
import Testimonials from "../components/common/Testimonials";
import MyFooter from "../components/common/MyFooter";
import ChooseUs from "../components/Home/ChooseUs";
import NewsLetter from "../components/common/NewsLetter";
import footer_bg from "../assets/images/png/bgfooter.png";
export const HomePage = () => {
  return (
    <div className="bg_img_main overflow-hidden position-relative">
      <div className=" position-absolute bottom-0 w-100">
        <img src={footer_bg} alt="footer bg" className="w-100 mx_1920 h_1100 object-fit-cover" />
      </div>
      <div className=" position-relative z-1">
        <Hero />
        <PricingPlan />
        <div className=" d-sm-none">
          <ChooseUs />
        </div>
        <div className=" d-sm-none">
          <OurLocations />
        </div>
        <GameHosting margin_add="mt-5" />
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
    </div>
  );
};
