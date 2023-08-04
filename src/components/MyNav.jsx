import React from "react";
import { ImCross } from "react-icons/im";
import { Container } from "react-bootstrap";
// import PricingPlan from "./PricingPlan";
import {
  Facebook,
  Instagram,
  LoginBtnIcon,
  Menuicon,
  NavIn,
  Tweeter,
} from "./Icons";
const MyNav = () => {
  const [NavShow, setNavShow] = React.useState(true);
  function clickshow() {
    setNavShow(!NavShow);
  }
  if (!NavShow) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="pt_64 flex-grow-0 pt_12_lg">
        <Container className=" custom_container">
          <div className=" d-flex justify-content-between d-xl-none align-items-center">
            <p className="mb-0 ff_oswald fs_2x5l text-white fw-semibold lh_normal">
              Web Design
            </p>
            <h2
              onClick={clickshow}
              className="pointer position-relative z_10 ps-4 mb-0 text-white"
            >
              {NavShow ? <Menuicon /> : <ImCross />}
            </h2>
          </div>
          {/* nav */}
          <div className={`nav_show ${NavShow ? "" : "ps-0 showw"}`}>
            <div className="h-100 position-relative">
              <div className=" d-flex align-items-xl-center align-items-start flex-xl-row flex-column justify-content-center justify-content-xl-between">
                <p className=" d-xl-block mb-0 d-none ff_oswald fs_2x5l text-white fw-semibold lh_normal">
                  Web Design
                </p>
                {/* option */}
                <button className="text-white d-xl-none fs_2xl fw-bold lh_normal ff_rubik login_btn_open rounded-pill border-0">
                  <span className="me_10">
                    <LoginBtnIcon />
                  </span>
                  Login
                </button>
                <ul className="d-flex align-items-xl-center mb-0 flex-xl-row flex-column ps-0 py_30_xl">
                  <li>
                    <a
                      href="#"
                      className=" ff_rubik fs_1x8l fw-bold text-white me_40"
                      onClick={clickshow}
                    >
                      MINECRAFT HOSTING
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" ff_rubik fs_1x8l fw-bold text-white me_40 my_15_xl"
                      onClick={clickshow}
                    >
                      GAME HOSTING
                    </a>
                  </li>
                </ul>
                <div className=" d-flex align-items-center">
                  <span className="fb_img">
                    <a href="#">
                      <Facebook />
                    </a>
                  </span>
                  <span className="ms_8">
                    <a href="#">
                      <Instagram />
                    </a>
                  </span>
                  <span className="ms_8">
                    <a href="#">
                      <Tweeter />
                    </a>
                  </span>
                  <span className="ms_8">
                    <a href="#">
                      <NavIn />
                    </a>
                  </span>
                  <button className="text-white d-xl-block d-none fs_2xl fw-bold lh_normal ff_rubik login_btn rounded-pill border-0 ms_20">
                    <LoginBtnIcon />
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MyNav;
