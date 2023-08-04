import React from "react";
import MyNav from "./MyNav";
import { Col, Container, Row } from "react-bootstrap";
import { ViewArrow } from "./Icons";
import heroImg from '../assets/images/png/heroImg.png'
export const Hero = () => {
  return (
    <div className="hero_bg min-vh-100 d-flex flex-column justify-content-center">
      <MyNav />
      <Container className=" custom_container flex-grow-1 d-flex">
        <Row className=" align-items-center">
          <Col xs={6}>
            <div className=" d-flex align-items-center">
              <div className="hosting_box_hero bg_voilet00c"></div>
              <p className="text-white mb-0 ps-3 fs_1x5l fw-medium ff_inter lh_normal letter_s4 text-uppercase">
                Hosting
              </p>
            </div>
            <p className="ff_rubik text-white fs_6xl fw-bold lh_70 mb-0 mt_31">
              <span className="d-block">Discord</span> Bot Hosting
            </p>
            <p className=" ff_rubik text-white mt_31 mb-0 fw-normal fs_2x2l lh_33">
              Instantly Deploy Minecraft, Rust, CSGO & More Game Servers in 8
              Locations Globally.
            </p>
            <div className=" d-flex align-items-center">
              <div className="view_hero_circle rounded-circle bg_voilet00c"></div>
              <p className="text-white ff_rubik fs_2xl fw-medium lh_normal mb-0 view_transform">
                View Projects
                <span className=" ms_10">
                  <ViewArrow />
                </span>
              </p>
            </div>
          </Col>
          <Col xs={6}>
            <span>
              <img src={heroImg} alt="heroImg" className="w-100" />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
