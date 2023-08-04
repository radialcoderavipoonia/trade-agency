import React from "react";
import { Col, Row } from "react-bootstrap";
import { Clients } from "./Helper";
import friendlyimg from "../assets/images/png/testimonialFriendly_img.png";
import trustimg from "../assets/images/png/testimonial_trustpilot_img.png";
import stars from "../assets/images/png/testimonial_stars.png";
import goodicon from "../assets/images/png/testimonial_good_img.png";

const Testimonials = () => {
  return (
    <>
      <div className="custom_container my-5">
        <p className="ff_rubik fs_1x8l fw-normal pb-1 text-center mb-0 color_blue0062">
          testimonials
        </p>
        <h2 className="text-center mb-0 pt-2 ff_rubik fs_4xl fw-bold text-white">
          What Our Clients Say About Us
        </h2>
        <Row className="pt_45">
          {Clients.map((say) => {
            return (
              <Col lg={3} key={say.id}>
                <div className="pricing_customer_box px_20_py_12">
                  <img src={say.fivestarts} alt="five stars" />
                  <p className="py_34 mb-0 ff_opensans fs_1x5l fw-normal color_gray80">
                    {say.customerpara}
                  </p>
                  <div className="d-flex align-items-center">
                    <img src={say.customersimg} alt="custoemrs images" />
                    <div className="pl_12">
                      <p className="ff_opensans fs_1x6l fw-semibold color_lightgreena4 mb-0 ">
                        {say.customername}
                      </p>
                      <div className="d-flex pt-1 align-items-center">
                        <span>{say.verified}</span>
                        <p className="mb-0 ps-2 ff_opensans fs_1x4l fw-normal color_lightgreen8b">
                          {say.verifiedcustomer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="d-flex justify-content-between align-items-center pt-5 mt-1 mw_750 ms-auto me-auto">
          <div className="mw_230 text-center">
            <img src={friendlyimg} alt="friendly img" />
            <p className="pt_20 mb-0 ff_opensans fs_1x6l fw-normal color_whiteea">
              <span className="fw-bold">Friendly</span> customer support team
            </p>
          </div>
          <div className="divider_line w_40"></div>
          <div className="mw_230 text-center">
            <img src={trustimg} alt="friendly img" />
            <img src={stars} alt="stars image" className="py-3" />
            <p className=" mb-0 ff_opensans fs_1x6l fw-normal color_whiteea">
              <span className="fw-bold">4.6 out of 5 stars</span> from 8.6k
              reviews
            </p>
          </div>
          <div className="divider_line w_40"></div>
          <div className="mw_230 text-center">
            <img src={goodicon} alt="good icon img" />
            <p className="pt_20 mb-0 ff_opensans fs_1x6l fw-normal color_whiteea">
              We’re making<span className="fw-bold"> insurance as simple </span>
              as can be
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
