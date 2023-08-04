import React from "react";
import { Facebook, Insta } from "./Helper";
import Growth_img from "../assets/images/webp/game_hosting_costomer_growth_img.webp";
const GameHosting = () => {
  return (
    <>
      <section className="py-5">
        <div className="custome_container container">
          <div className="text-center pb-4">
            <h2 className="fw-bold fs_4xl text-white ff_rubik mb-0">
              Game Hosting,
              <span className="ff_oswald color_blue0d6 "> simplified</span>
            </h2>
            <p className="ff_inter fw-normal fs_1x8l text-white mb-0 mt-3 mt-lg-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
              facilisi donec <span className="d-lg-block"></span> egestas
              egestas pellentesque magna.
            </p>
          </div>
          <div className="bg_img_game_hosting mt-4 mt-lg-5 pt-4 mx-lg-5">
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center gap-2 m-4">
                  <span className="game_hosting_white_circel"></span>
                  <span className="game_hosting_white_circel"></span>
                  <span className="game_hosting_white_circel"></span>
                </div>
                <input
                  type="text"
                  className="fw-normal ff_dmsans color_darkgrayb2b w-100 game_hosting_input_bg border-0 fs_1x7l me-4"
                  placeholder="www.ComeUp.ai"
                />
            </div>
            <div className="mx-4 py-4">
              <img className="w-100" src={Growth_img} alt="Growth_img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GameHosting;
