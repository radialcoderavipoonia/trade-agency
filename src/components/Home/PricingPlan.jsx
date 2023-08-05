import React from "react";
import { Col, Row } from "react-bootstrap";
import { Pricing } from "../common/Helper";
import sideimgpricingplan from "../../assets/images/png/group_side_img_priceing_plan.png"
import ImgArrowRight from "../../assets/images/png/arrow-right.png"
import { ArrowImg } from "../common/Icons";
import { ImArrowRight } from "react-icons/im";

const PricingPlan = () => {
  return (
    <>
      <section className="position-relative">
        <div className="custom_container container">
          <h2 className="ff_rubik fw-bold fs_4xl pt_43 mb-0 text-center color_whitefc">
            Awesome <span className="color_blueod">Pricing Plan</span>
          </h2>
          <p className="ff_rubik fw-normal fs_1x8l color_whitefc text-center mb-0 pb_43 mw_647 me-auto ms-auto pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
            facilisi donec egestas egestas pellentesque magna.
          </p>
          <Row className="py_25 justify-content-center align-items-center position-relative z-1 top_bottom_zigzag_img">
            {Pricing.map((plan) => {
              return (
                <Col lg={4} md={6} key={plan.id} className="py_15">
                  <div className="pricing_customer_box hover_box_pricing p_32">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src={plan.imgicon}
                        alt="starter image"
                        className="d-block hover_none"
                      />
                      <img
                        src={plan.imgiconsecond}
                        alt="image icon second"
                        className="d-none hover_block"
                      />
                      <button className="pp_button br_45 border-0 fw-bold ff_inter fs_1x2l color_blue0d6 d-none">
                        {plan.button}
                      </button>
                    </div>
                    <div className="py-5">
                      <p className="mb-0 fw-semibold ff_rubik fs_2x5l text-white">
                        {plan.heading}
                      </p>
                      <p className="pt-3 ff_inter fw-normal fs_1x6l color_whitefb mb-0">
                        Lorem ipsum dolor sit amet, consect{" "}
                        <span className="d-lg-block"></span> etur adipiscing
                        elit.
                      </p>
                      <div className="py_32">
                        <p className="ff_inter fw-bold fs_1x6l color_grayf9 mb-0">
                          {plan.include}
                        </p>
                        <div className="pt_14 d-flex align-items-center">
                          <img src={plan.rightimgicon} alt="right icon" />
                          <p className="mb-0 ps-2 ff_inter fs_1x6l fw-medium color_grayf9">
                            {plan.allbasic}
                          </p>
                        </div>
                        <div className="pt_14 d-flex align-items-center">
                          <img src={plan.rightimgicon} alt="right icon" />
                          <p className="mb-0 ps-2 ff_inter fs_1x6l fw-medium color_grayf9">
                            {plan.contacts}
                          </p>
                        </div>
                        <div className="pt_14 d-flex align-items-center">
                          <img src={plan.rightimgicongray} alt="right icon" />
                          <p className="mb-0 ps-2 ff_inter hover_white fs_1x6l fw-medium pricing_box_secondary_color">
                            {plan.normalsupport}
                          </p>
                        </div>
                        <div className="pt_14 d-flex align-items-center">
                          <img src={plan.rightimgicongray} alt="right icon" />
                          <p className="mb-0 ps-2 ff_inter hover_white fs_1x6l fw-medium pricing_box_secondary_color">
                            {plan.mobileapp}
                          </p>
                        </div>
                      </div>
                      <p className="mb-0 ff_inter fs_3x2l fw-bold color_blue2f7">
                        {plan.dollar}
                        <span className="fs_1x6l fw-normal color_whitefb">
                          {plan.spanmonth}
                        </span>
                      </p>
                    </div>
                    <button className="border_started_button px_32 py-3 ff_inter fs_1x6l text-white bg-transparent fw-bold w-100 br_10">
                      {plan.getstartedbutton} <span></span>
                    </button>
                    <p className="pt_20 mb-0 text-center ff_dmsans fw-normal fs_1x6l color_whitefb">
                      {plan.nocreditcard}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
          <div className="d-sm-flex justify-content-center pt_43 d-none">
            <button className="quote_button border-0 ff_inter fs_1x8l text-white fw-semibold">
              Get a Quote <span className="pl_10"><img src={ImgArrowRight} alt="arrow right " /></span>
            </button>
          </div>
        </div>
        <div className="position-absolute right_-16 bottom_-26 d-xl-block d-none">
          <img src={sideimgpricingplan} alt="pricing plan side img" />
        </div>
      </section>
    </>
  );
};
export default PricingPlan;
