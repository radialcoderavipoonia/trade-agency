import React from "react";
import { ImCross } from "react-icons/im";
import { Container } from "react-bootstrap";
import PricingPlan from "./PricingPlan";
import {
  Facebook,
  Instagram,
  LoginBtnIcon,
  Menuicon,
  NavIn,
  Tweeter,
} from "./Icons";
const MyNav = () => {
  const [First, setFirst] = React.useState(true);
  function clickshow() {
    setFirst(!First);
  }
  if (!First) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="pt_64">
        <Container className="">
          {/* btn */}
          <div className=" d-flex justify-content-between d-xl-none align-items-center">
            <p className="mb-0 ff_oswald fs_2x5l text-white fw-semibold lh_normal">
              Web Design
            </p>
            <h2
              onClick={clickshow}
              className="pointer position-relative z_10 ps-4 mb-0 text-white"
            >
              {First ? <Menuicon /> : <ImCross />}
            </h2>
          </div>
          {/* nav */}
          <div className={`nav_show ${First ? "" : "ps-0 showw"}`}>
            <div className="py-4 h-100 position-relative">
              <div className="p_45_30">
                <div className="nav_container">
                  <div className=" d-flex align-items-xl-center align-items-start flex-xl-row flex-column justify-content-center justify-content-xl-between  vh_100_992">
                    <p className=" d-xl-block mb-0 d-none ff_oswald fs_2x5l text-white fw-semibold lh_normal">
                      Web Design
                    </p>
                    {/* option */}
                    <button className="text-white d-xlnone fs_2xl fw-bold lh_normal ff_rubik login_btn_open rounded-pill border-0">
                      <span className="me_10">
                        <LoginBtnIcon />
                      </span>
                      Login
                    </button>
                    <ul className="d-flex align-items-xl-center mb-xl-0 flex-xl-row flex-column ps-0">
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
                          className=" ff_rubik fs_1x8l fw-bold text-white me_40"
                          onClick={clickshow}
                        >
                          GAME HOSTING
                        </a>
                      </li>
                    </ul>
                    <div className=" d-flex align-items-center">
                      <span className="fb_img">
                        <Facebook />
                      </span>
                      <span className="ms_8">
                        <Instagram />
                      </span>
                      <span className="ms_8">
                        <Tweeter />
                      </span>
                      <span className="ms_8">
                        <NavIn />
                      </span>
                      <button className="text-white d-xl-block d-none fs_2xl fw-bold lh_normal ff_rubik login_btn rounded-pill border-0 ms_20">
                        <LoginBtnIcon />
                        Login
                      </button>
                    </div>
                  </div>
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
