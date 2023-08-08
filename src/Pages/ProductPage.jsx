import React from "react";
import { ProductNav } from "../components/Product/ProductNav";
import BasicFeatures from "../components/Product/BasicFeatures";
import Modpack from "../components/Product/ModPack";
import GameHosting from "../components/common/GameHosting";
import OurLocations from "../components/common/OurLocations";
import Testimonials from "../components/common/Testimonials";
import MyFooter from "../components/common/MyFooter";
import NewsLetter from "../components/common/NewsLetter";
import footer_bg from '../assets/images/webp/bgfooter.webp'
export const ProductPage = () => {
  return (
    <div className="bg_img_main overflow-hidden position-relative">
      <div className="position-absolute bottom-0 w-100">
        <img
          src={footer_bg}
          alt="footer bg"
          className="w-100 mx_1920 h_1100 object-fit-cover"
        />
      </div>
      <div className="position-relative z-1">
        <ProductNav />
        <BasicFeatures />
        <Modpack />
        <GameHosting backShadow="background_gameProduct" />
        <OurLocations remove_img="opacity-0 pe-none" />
        <Testimonials space_add="mt-sm-5 pt-4" />
        <div className="d-sm-none">
          <NewsLetter />
        </div>
        <MyFooter />
      </div>
    </div>
  );
};
