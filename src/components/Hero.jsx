import React from "react";
import MyNav from "./MyNav";
import scrool from "../assets/images/svg/Scroll.svg";
import { Col, Container, Row } from "react-bootstrap";
import { ViewArrow } from "./Icons";
import heroImg from "../assets/images/svg/hero_img.svg";
export const Hero = () => {
  return (
    <div className="hero_bg h_1200_lg pb_300_lg pb_200 min-vh-100-custom d-flex flex-column justify-content-center">
      <MyNav />
      <Container className="custom_container flex-grow-1 d-flex">
        <Row className="align-items-lg-center align-items-start pt_28_lg">
          <Col
            lg={6}
            xs={12}
            className=" d-flex flex-column justify-content-lg-start justify-content-center"
          >
            <div className=" d-flex align-items-center justify-content-center justify-content-lg-start">
              <div className="hosting_box_hero bg_voilet00c"></div>
              <p className="text-white mb-0 ps-3 fs_1x5l fw-medium ff_inter lh_normal letter_s4 text-uppercase">
                Hosting
              </p>
            </div>
            <p className="ff_rubik text-white fs_6xl fw-bold lh_70 mb-0 mt_31 mt_10_lg text-lg-start text-center">
              <span className="d-lg-block">Discord</span> Bot Hosting
            </p>
            <p className=" ff_rubik text-white mt_10_lg mt_31 mb-0 fw-normal fs_2x2l lh_33 text-lg-start text-center">
              Instantly Deploy Minecraft, Rust, CSGO & More Game Servers in 8
              Locations Globally.
            </p>
            <div className=" d-flex align-items-center justify-content-center justify-content-lg-start mt_31 mt_10_lg">
              <div className="view_hero_circle rounded-circle bg_voilet00c"></div>
              <p className="text-white ff_rubik fs_2xl fw-medium lh_normal mb-0 view_transform">
                View Projects
                <span className=" ms_10">
                  <ViewArrow />
                </span>
              </p>
            </div>
            <div className="d-lg-flex d-none flex-column justify-content-center align-items-center">
              <span>
                <img src={scrool} alt="scrool" className="w-100" />
              </span>
              <p className=" text-white ff_inter fs_2xl fw-medium mb-0 letter_s2 rotate_90 mt_31">
                Scroll
              </p>
            </div>
          </Col>
          <Col
            lg={6}
            xs={12}
            className=" d-flex justify-content-start h_300_xsm pt_48_lg"
          >
            <span>
              <img src={heroImg} alt="heroImg" className="w-100" />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
