import React from "react";
import more_arrow from '../../assets/images/svg/more_arrow.svg'
import { ImCross } from "react-icons/im";
import { Container } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  LoginBtnIcon,
  Menuicon,
  NavIn,
  Tweeter,
} from "./Icons";
import { Link } from "react-router-dom";
const MyNav = () => {
  const [NavShow, setNavShow] = React.useState(true);
  function clickshow() {
    setNavShow(!NavShow);
  }
  if (!NavShow) {
    document.body.classList.add("body_stop");
  } else {
    document.body.classList.remove("body_stop");
  }
  return (
    <>
      <div className="pt_64 flex-grow-0 pt_12_xl pt_16_xxl">
        <Container className="custom_container">
          <div className="d-flex justify-content-between d-xl-none align-items-center">
            <Link
              to="/"
              className="mb-0 ff_oswald fs_2x5l text-white fw-semibold lh_normal pointer"
            >
              Web Design
            </Link>
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
              <div className="d-flex align-items-xl-center align-items-start flex-xl-row flex-column justify-content-center justify-content-xl-between">
                <Link
                  to="/"
                  className="d-xl-block mb-0 d-none ff_oswald fs_2x5l text-white fw-semibold lh_normal"
                >
                  Web Design
                </Link>
                {/* option */}
                <button className="text-white d-xl-none fs_2xl fw-bold lh_normal ff_rubik login_btn_open rounded-pill border-0">
                  <span className="me_10">
                    <LoginBtnIcon />
                  </span>
                  Login
                </button>
                <ul className="d-flex align-items-xl-center mb-0 flex-xl-row flex-column ps-0 py_30_xl">
                  <li>
                    <Link
                      to="/"
                      className="hover_line position-relative ff_rubik fs_1x8l fw-bold text-white me_40"
                      onClick={clickshow}
                    >
                      MINECRAFT HOSTING
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product"
                      className="hover_line position-relative ff_rubik fs_1x8l fw-bold text-white me_40 my_15_xl"
                      onClick={clickshow}
                    >
                      GAME HOSTING
                    </Link>
                  </li>
                  <li>
                    <Link
                      // to="/product"
                      className="hover_line position-relative ff_rubik fs_1x8l fw-bold text-white my_15_xl"
                      onClick={clickshow}
                    >
                      More
                      <img
                        src={more_arrow}
                        alt="more arrow"
                        className="more_arrow ms-2"
                      />
                    </Link>
                  </li>
                </ul>
                <div className="d-flex align-items-center">
                  <span className="fb_img">
                    <a
                      href="https://www.facebook.com/login/"
                      target="_blank"
                      className="nav_fb"
                    >
                      <Facebook />
                    </a>
                  </span>
                  <span className="ms_8">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="nav_fb"
                    >
                      <Instagram />
                    </a>
                  </span>
                  <span className="ms_8">
                    <a
                      href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                      target="_blank"
                      className="nav_fb"
                    >
                      <Tweeter />
                    </a>
                  </span>
                  <span className="ms_8">
                    <a
                      href="https://in.linkedin.com/"
                      target="_blank"
                      className="nav_fb"
                    >
                      <NavIn />
                    </a>
                  </span>
                  <button className="text-white d-xl-block d-none fs_2xl fw-bold lh_normal ff_rubik login_btn rounded-pill border-0 ms_20">
                    <LoginBtnIcon/>
                    <span className="ps-2">Login</span>
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
