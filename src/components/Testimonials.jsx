import React from "react";
import { Col, Row } from "react-bootstrap";
import { Clients } from "./Helper";

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
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Testimonials;
