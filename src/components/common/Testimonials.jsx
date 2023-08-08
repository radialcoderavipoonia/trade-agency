import React from "react";
import Slider from "react-slick";
import { Clients } from "./Helper";
import friendlyimg from "../../assets/images/webp/testimonialFriendly_img.webp";
import trustimg from "../../assets/images/webp/testimonial_trustpilot_img.webp";
import stars from "../../assets/images/webp/testimonial_stars.webp";
import goodicon from "../../assets/images/webp/testimonial_good_img.webp";
import arrowleftslider from "../../assets/images/webp/arrow-left-slider.webp";
const Testimonials = ({ space_add }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrow: false,
          centerMode: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrow: false,
          centerMode: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };
  const first = React.useRef();
  return (
    <>
      <div className={`custom_container my-sm-5 ${space_add}`}>
        <p className="ff_rubik fs_1x8l fw-normal pt_34 pb-1 text-center mb-0 color_blue00 text-uppercase letter_s3">
          testimonials
        </p>
        <h2 className="text-center mb-0 pt-2 ff_rubik fs_4xl fw-bold text-white">
          What Our Clients Say About Us
        </h2>

        <Slider {...settings} className="pt_45 pt_21_xsm" ref={first}>
          {Clients.map((say) => {
            return (
              <div lg={3} md={4} key={say.id} className="px_5 ">
                <div className="pricing_customer_box px_20_py_12 position-relative hover_card_line overflow-hidden">
                  <img src={say.fivestarts} alt="five stars" />
                  <p className="py_34 pt_21_xsm mb-0 ff_opensans fs_1x5l fw-normal color_gray80">
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
              </div>
            );
          })}
        </Slider>
        <div className="pt_38 pt_21_xsm d-flex d-lg-none justify-content-center align-items-center">
          <div
            onClick={() => first.current.slickPrev()}
            className="arrow_box d-flex justify-content-center align-items-center mx-2"
          >
            <img src={arrowleftslider} alt="left arrow" />
          </div>
          <div
            onClick={() => first.current.slickNext()}
            className="arrow_box d-flex justify-content-center  align-items-center mx-2"
          >
            <img
              src={arrowleftslider}
              alt="left arrow"
              className="trans_rotate_180"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center pt-sm-5 pt_38 mt-sm-1 mw_750 ms-auto me-auto">
          <div className="mw_230 text-center">
            <img
              src={friendlyimg}
              alt="friendly img"
              className="w-100 mw_50_xsm mw_127"
            />
            <p className="pt_20 mb-0 ff_opensans fs_1x6l fw-normal color_whiteea">
              <span className="fw-bold">Friendly</span> customer support team
            </p>
          </div>
          <div className="divider_line w_40 mx-1"></div>
          <div className="mw_230 d-flex flex-column align-items-center text-center">
            <img
              src={trustimg}
              alt="friendly img"
              className="w-100 mw_50_xsm mw_127"
            />
            <img
              src={stars}
              alt="stars image"
              className="py-3 w-100 mw_50_xsm mw_127"
            />
            <p className=" mb-0 ff_opensans fs_1x6l fw-normal color_whiteea">
              <span className="fw-bold">4.6 out of 5 stars</span> from 8.6k
              reviews
            </p>
          </div>
          <div className="divider_line w_40 mx-1"></div>
          <div className="mw_230 text-center">
            <img src={goodicon} alt="good icon img" className="w-100 mw_50" />
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
