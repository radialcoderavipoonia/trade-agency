import React from "react";
import { ProductNav } from "../components/ProductNav";
import BasicFeatures from "../components/BasicFeatures";
import Modpack from "../components/ModPack";
import GameHosting from "../components/GameHosting";
import OurLocations from "../components/OurLocations";
import Testimonials from "../components/Testimonials";
export const ProductPage = () => {
  return (
    <div className="bg_img_main overflow-hidden">
      <ProductNav />
      <BasicFeatures />
      <Modpack />
      <GameHosting />
      <OurLocations />
      <Testimonials />
    </div>
  );
};
