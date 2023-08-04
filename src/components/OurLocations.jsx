import React from "react";
import Bg_black from "../assets/images/png/our_location_bg_img_black.png";
import { Col, Row } from "react-bootstrap";
import { Location } from "./Helper";
const OurLocations = () => {
  return (
    <>
      <div className="custom_container container mt-5 pt-xl-5">
        <div className="text-center pt-lg-5 our_location_box_shadow">
          <h2 className="fw-bold fs_4xl ff_rubik text-white mb-0 pt-4">
            Our <span className="color_blue0d6"> Locations</span>
          </h2>
          <p className=" ff_inter fs_1x8l text-white fw-normal mb-0 mt-3">
            Sparked offers hosting all around the world
          </p>
          <Row className="mt-5 pt_20">
            {Location.map((our) => {
              return (
                <Col lg={4} key={our.id}>
                  <div className="d-flex align-items-center ps-5">
                    <img src={our.imgcalifornia} alt="" />
                    <div className="ps-3">
                      <p className="mb-0 fw-bold fs_1x8l text-white">
                        {our.paracalifornia}
                      </p>
                      <p className="ff_inter fw-medium fs_1x6l color_whitec6 pt-1 mb-0">
                        {our.textcalifornia}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default OurLocations;
