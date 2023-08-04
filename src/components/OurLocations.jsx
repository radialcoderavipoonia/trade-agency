import React from "react";
import Bg_black from "../assets/images/png/our_location_bg_img_black.png";
import { Col, Row } from "react-bootstrap";
import { Location } from "./Helper";
import Map_Img from "../assets/images/webp/map_img.webp"
const OurLocations = () => {
  return (
    <>
      <div className="custom_container container mt-5 pt-xl-5">
        <div className="text-center py-lg-5 our_location_bg_img_black z_index_1">
          <h2 className="fw-bold fs_4xl ff_rubik text-white mb-0 pt-4">
            Our <span className="color_blue0d6"> Locations</span>
          </h2>
          <p className=" ff_inter fs_1x8l text-white fw-normal mb-0 mt-2 pt-1 pt-sm-0 mt-sm-3">
            Sparked offers hosting all around the world
          </p>
          <Row className="pt_20 pb-lg-5 pb-4">
            {Location.map((our) => {
              return (
                <Col md={6} lg={4} key={our.id}>
                  <div className="d-flex align-items-center ps-3 ps-lg-4 ps-xl-5 pt-lg-5 pt-3">
                    <img src={our.imgflag} alt="" />
                    <div className="ps-3 text-start">
                      <p className="mb-0 fw-bold fs_1x8l text-white">
                        {our.paracountryname}
                      </p>
                      <p className="ff_inter fw-medium fs_1x6l color_whitec6 pt-1 mb-0">
                        {our.textms}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <section className="bg_img_our_location min-vh-100 z_index_minus position-relative">
        <div className="custom_container">
          <div><img className="w-100" src={Map_Img} alt="Map_Img" /></div>
        </div>
      </section>
    </>
  );
};

export default OurLocations;
