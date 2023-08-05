import React from "react";
import { Col, Row } from "react-bootstrap";
import { Choose } from "../common/Helper";
import bglayers from "../../assets/images/webp/bg_choose_layers.webp";

const ChooseUs = () => {
  return (
    <>
      <div className="position-relative py-md-5">
        <div className="custom_container pt-sm-5 mt-sm-5 mt_sm_28">
          <p className="ff_rubik fs_4xl fw-bold text-white text-center mb-0 lh_normal">
            Why <span className="color_blueod">Choose Us?</span>
          </p>
          <Row className="pt_28 pt_9_xsm position-relative z-1 align-items-center justify-content-between">
            {Choose.map((us) => {
              return (
                <Col lg={4} sm={6} xs={12} key={us.id} className="pt_17">
                  <div className={`p_40 ${us.background}`}>
                    <p className="ff_inter fs_2x2l fw-semibold text-white mb-0">
                      {us.headingchoosecard}
                    </p>
                    <p className="pt_20 ff_inter fs_1x6l fw_300 text-white mb-0">
                      {us.parachoosecard}
                    </p>
                    <div className="d-flex justify-content-between align-items-center pt_40">
                      <img src={us.messageicon} alt="message icon image" />
                      <div className="d-flex align-items-center">
                        <p className="mb-0 ff_inter fs_1x5l fw-bold text-white pe-1">
                          {us.explore}
                        </p>
                        <span className="ps-3">{us.explorearrow}</span>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="position-absolute top_47 left_-5 right_0 pe-none">
          <img
            src={bglayers}
            alt="bg layers choose section"
            className="w_110"
          />
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
