import React from "react";
import { Col, Row } from "react-bootstrap";
import { Modpack } from "./Helper";

const ModPack = () => {
  return (
    <>
      <div className="custom_container pt_28">
        <p className="ff_rubik fs_4xl fw-bold color_whitefc lh_normal mb-0 text-center">
          GET A PRE- <span className="color_blue0d6">INSTALLED MODPACK</span>
        </p>
        <p className="pt_24 mb-0 text-center ff_rubik fs_1x8l fw-normal color_whitefc lh_normal ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
          facilisi donec <span className="d-lg-block"></span> egestas egestas
          pellentesque magna.
        </p>
        <Row className="pt_33 justify-content-between align-items-center">
          {Modpack.map((pre) => {
            return (
              <Col lg={4} key={pre.id} className="pt_15">
                <div className="pricing_customer_box p_25">
                  <img src={pre.minicraftimg} alt="minicraft images" />
                  <p className="pt_27 ff_rubik fw-semibold fs_2x5l mb-0 text-white">
                    {pre.headingminicraft}
                  </p>
                  <p className="pt_10 ff_inter fs_1x6l fw-normal color_blue2f7 mb-0">
                    {pre.recommended}
                  </p>
                  <p className="pt-3 ff_inter fs_1x6l fw-normal color_whitefb mb-0">
                    {pre.paraminicraft}
                  </p>
                  <p className="pt_32 ff_inter fs_3x2l fw-bold color_blue2f7 mb-0 lh_normal">
                    {pre.dollar}
                  </p>
                  <div className="d-flex justify-content-between align-items-center pb_30 pt_30">
                    <button className="ff_inter mr_5 py_16_px_32 w-100 bg_popular_button fs_1x6l fw-bold text-white border-0 text-center br_10 ">
                      {pre.popular}
                    </button>
                    <button className="ff_inter ml_5 py_16_px_32 bg-transparent border_official_button w-100 fs_1x6l fw-bold text-white text-center br_10 ">
                      {pre.official}
                    </button>
                  </div>
                  <button className="ff_inter  w-100 fs_1x6l fw-bold bg-transparent border_official_button py_16_px_32 text-white text-center br_10">
                    {pre.getstarted}
                  </button>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      ;
    </>
  );
};

export default ModPack;
