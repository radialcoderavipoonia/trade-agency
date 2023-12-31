import React from "react";
import Growth_img from "../../assets/images/webp/game_hosting_costomer_growth_img.webp";
import Simplification from "../../assets/images/png/full_img.png"
const GameHosting = ({ backShadow, margin_add }) => {
  return (
    <>
      <section className={`pt-xl-5 pt-sm-2 mt_-10_xsm position-relative ${margin_add}`}>
        <div className={`position-absolute ${backShadow}`}></div>
        <div className="custom_container mt-md-5 container position-relative z-1">
          <div className="text-center pb-4 mb-sm-3" data-aos="fade-up">
            <h2 className="fw-bold fs_4xl text-white ff_rubik mb-0">
              Game Hosting,
              <span className="color_blue0d6 "> simplified</span>
            </h2>
            <p className="ff_inter fw-normal fs_1x8l mb-1 text-white mb-0 mt-3 mt-lg-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
              facilisi donec <span className="d-lg-block"></span> egestas
              egestas pellentesque magna.
            </p>
          </div>
          <div className="bg_img_game_hosting mt-sm-4 mt-lg-5 pt-sm-4 pt-2 mx-lg-5">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center gap-1 gap-sm-2 m-sm-4 m-2" data-aos="fade-right">
                <span className="game_hosting_white_circel"></span>
                <span className="game_hosting_white_circel"></span>
                <span className="game_hosting_white_circel"></span>
              </div>
              <input  data-aos="fade-left"
                type="text"
                className="fw-normal ff_dmsans color_darkgrayb2b w-100 game_hosting_input_bg border-0 fs_17 me-sm-4 me-2"
                placeholder="www.ComeUp.ai"
              />
            </div>
            <div className="mx-sm-4 mx-2 py-sm-4 py-2" data-aos="flip-down">
              <img className="w-100" src={Growth_img} alt="Growth_img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GameHosting;
