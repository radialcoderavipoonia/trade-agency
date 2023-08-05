import React from "react";
import { ProductNav } from "../components/Product/ProductNav";
import BasicFeatures from "../components/Product/BasicFeatures";
import Modpack from "../components/Product/ModPack";
import GameHosting from "../components/common/GameHosting";
import OurLocations from "../components/common/OurLocations";
import Testimonials from "../components/common/Testimonials";
import MyFooter from "../components/common/MyFooter";
import NewsLetter from "../components/common/NewsLetter";
export const ProductPage = () => {
  return (
    <div className="bg_img_main overflow-hidden">
      <ProductNav />
      <BasicFeatures />
      <Modpack />
      <GameHosting />
      <OurLocations />
      <Testimonials />
      <div className="d-sm-none">
        <NewsLetter />
      </div>
      <MyFooter />
    </div>
  );
};
