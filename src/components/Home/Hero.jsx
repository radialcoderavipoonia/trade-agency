import React from "react";
import MyNav from "../common/MyNav";
import scrool from "../../assets/images/svg/Scroll.svg";
import { Col, Container, Row } from "react-bootstrap";
import { ViewArrow } from "../common/Icons";
import heroImg from "../../assets/images/svg/hero_img.svg";
export const Hero = () => {
  return (
    <div className="hero_bg h_970_lg pb_300_lg pb_200 min-vh-100-custom d-flex flex-column justify-content-center">
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
            <p className="ff_rubik text-white lh_normal_xsm fs_6xl fw-bold lh_70 mb-0 mt_31 mt_10_lg mt_10_xsm text-lg-start text-center">
              <span className="d-lg-block">Discord</span> Bot Hosting
            </p>
            <p className=" ff_rubik text-white mt_10_lg mt_31 mb-0 fw-normal fs_2x2l mt_10_xsm lh_33 text-lg-start text-center">
              Instantly Deploy Minecraft, Rust, CSGO & More Game Servers in 8
              Locations Globally.
            </p>
            <div className=" d-flex align-items-center justify-content-center justify-content-lg-start mt_31 mt_10_lg mt_10_xsm">
              <div className="view_hero_circle rounded-circle bg_voilet00c"></div>
              <p className="ff_rubik fs_2xl fw-medium lh_normal mb-0 view_transform">
                <a href="#" className="text-white">
                  View Projects
                </a>
                <span className=" ms_10">
                  <a href="#">
                    <ViewArrow />
                  </a>
                </span>
              </p>
            </div>
            <div className="d-lg-flex d-none flex-column justify-content-center align-items-center">
              <span>
                <a href="#footer">
                  <img src={scrool} alt="scrool" className="w-100" />
                </a>
              </span>
              <p className="ff_inter fs_2xl fw-medium mb-0 letter_s2 rotate_90 mt_31">
                <a href="#" className="text-white">
                  {" "}
                  Scroll
                </a>
              </p>
            </div>
          </Col>
          <Col
            lg={6}
            xs={12}
            className="d-flex justify-content-lg-start justify-content-center h_300_xsm pt_48_lg"
          >
            <span>
              <img src={heroImg} alt="heroImg" className="w-100 mx_865_lg" />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
