import React from "react";
import { Col, Row } from "react-bootstrap";
import { Facebook_logo, Insta_logo, Linkin_logo, Twitter_logo } from "./common/Icons";

const MyFooter = () => {
  return (
    <> 
      <footer className="py-lg-5 py-3">
        <div className="custom_container">
          <Row>
            <Col lg={6}>
              <div className="text-center text-lg-start">
                <a
                  href="#"
                  className="fw-medium ff_overpass text-white fs_2x4l"
                >
                  Logo
                </a>
                <p className="fw-normal ff_overpass fs_1x4l color_gray9a w_457 mb-0 pt-2 mt-1 mx-auto mx-lg-0">
                  We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat...
                  <span className="cursor_pointer color_blue0d6">Read More</span>
                </p>
                <div>
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 pt-4 mt-3">
                    <a
                      href="#"
                      className="app_icon_circel d-flex align-items-center justify-content-center footer_app"
                    >
                      <Facebook_logo />
                    </a>
                    <a
                      href="#"
                      className="app_icon_circel d-flex align-items-center justify-content-center footer_app"
                    >
                      <Insta_logo />
                    </a>
                    <a
                      href="#"
                      className="app_icon_circel d-flex align-items-center justify-content-center footer_app"
                    >
                      <Twitter_logo />
                    </a>
                    <a
                      href="#"
                      className="app_icon_circel d-flex align-items-center justify-content-center footer_app"
                    >
                      <Linkin_logo />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <div className="d-flex justify-content-between">
                <ul className="p-0 m-0">
                  <li className="fw-medium ff_rubik text-white fs_1x8l">Company</li>
                  <li className="mt-3 pt-1"><a href="#" className="fw-normal ff_dmsans fs_1x5l text-white ">About</a></li>
                  <li className="mt-3 pt-1"><a href="#" className="fw-normal ff_dmsans fs_1x5l text-white ">Blog</a></li>
                  <li className="mt-3 pt-1"><a href="#" className="fw-normal ff_dmsans fs_1x5l text-white ">Career</a></li>
                </ul>
                <ul className="p-0 m-0">
                  <li className="fw-medium ff_rubik text-white fs_1x8l">Services</li>
                  <li className="mt-3 pt-1"><a href="#" className="fw-normal ff_dmsans fs_1x5l text-white ">Email Marketing</a></li>
                  <li className="mt-3 pt-1"><a href="#" className="fw-normal ff_dmsans fs_1x5l text-white ">Campaigns</a></li>
                  <li className="mt-3 pt-1"><a href="#" className="fw-normal ff_dmsans fs_1x5l text-white ">Branding</a></li>
                  <li className="mt-3 pt-1"><a href="#" className="fw-normal ff_dmsans fs_1x5l text-white ">Offline</a></li>
                </ul>
                <ul className="p-0 m-0">
                  <li className="fw-medium ff_rubik text-white fs_1x8l">About</li>
                  <li className="mt-3 pt-1"><a href="#" className="fw-normal ff_dmsans fs_1x5l text-white ">Our Story</a></li>
                  <li className="mt-3 pt-1"><a href="#" className="fw-normal ff_dmsans fs_1x5l text-white ">Benefits</a></li>
                  <li className="mt-3 pt-1"><a href="#" className="fw-normal ff_dmsans fs_1x5l text-white ">Team</a></li>
                  <li className="mt-3 pt-1"><a href="#" className="fw-normal ff_dmsans fs_1x5l text-white ">Careers</a></li>
                </ul>
                <ul className="p-0 m-0">
                  <li className="fw-medium ff_rubik text-white fs_1x8l">Help</li>
                  <li className="mt-3 pt-1"><a href="#" className="fw-normal ff_dmsans fs_1x5l text-white ">FAQs</a></li>
                  <li className="mt-3 pt-1"><a href="#" className="fw-normal ff_dmsans fs_1x5l text-white ">Contact Us</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-3">
          <p className="m-0 ff_roboto fw-light text-white fs_1x7l text-center mt-lg-5 mt-3 pt-4">© Copyright 2023</p>
        </div>
      </footer>
    </>
  );
};

export default MyFooter;
