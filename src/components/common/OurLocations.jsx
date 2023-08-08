import React from "react";
import { Col, Row } from "react-bootstrap";
import { Location } from "./Helper";
import Map_Img from "../../assets/images/webp/map_img.webp";
import Our_location_bottom from "../../assets/images/webp/our_location_bottom_img.webp";
const OurLocations = ({ remove_img }) => {
  return (
    <>
      <div className="custom_container container d-sm-block d-none mt_-50 mt_-100_md">
        <div className="text-center position-relative hover_card_line overflow-hidden pt-lg-5 pb-lg-4 our_location_bg_img_black z_index_1 transform_top_location">
          <h2 className="fw-bold fs_4xl ff_rubik text-white mb-0 pt-4 mt-2">
            Our <span className="color_blue0d6"> Locations</span>
          </h2>
          <p className="ff_inter fs_1x8l text-white fw-normal mb-0 mt-2 pt-1 pt-sm-0 mt-sm-3">
            Sparked offers hosting all around the world
          </p>
          <Row className="pt_20 mb-2 pb-lg-5 pb-4">
            {Location.map((our) => {
              return (
                <Col md={6} lg={4} key={our.id}>
                  <div className="d-flex align-items-center ps-3 ps-lg-4 ps-xl-5 pt-lg-5 pt-3">
                    <img src={our.imgflag} alt="img" />
                    <div className="ps-3 text-start">
                      <p className="mb-0 fw-bold fs_1x8l text-white">
                        {our.paracountryname}
                      </p>
                      <p className="ff_inter fw-medium fs_1x6l color_whitec6 pt-1 mb-0">
                        {our.textms}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <section className="bg_img_our_location mt_17_xsm py-sm-5 py-4 position-relative">
        {/* box */}
        <div className="custom_container container d-sm-none">
          <div className="text-center py-lg-5 our_location_bg_img_black z_index_1 transform_top_location">
            <h2 className="fw-bold fs_4xl ff_rubik text-white mb-0 pt-4">
              Our <span className="color_blue0d6"> Locations</span>
            </h2>
            <p className="ff_inter fs_1x8l text-white fw-normal mb-0 mt-2 pt-1 pt-sm-0 mt-sm-3">
              Sparked offers hosting all around the world
            </p>
            <Row className="pt_20 pb-lg-5 pb-4 ">
              {Location.map((our) => {
                return (
                  <Col md={6} lg={4} key={our.id}>
                    <div className="d-flex align-items-center ps-3 ps-lg-4 ps-xl-5 pt-lg-5 pt-3">
                      <img src={our.imgflag} alt="img" />
                      <div className="ps-3 text-start">
                        <p className="mb-0 fw-bold fs_1x8l text-white">
                          {our.paracountryname}
                        </p>
                        <p className="ff_inter fw-medium fs_1x6l color_whitec6 pt-1 mb-0">
                          {our.textms}
                        </p>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <img
          className={`position-absolute location_img_bottom d-none d-md-block ${remove_img}`}
          src={Our_location_bottom}
          alt="Our_location_bottom"
        />
        <div className="custom_container pt-sm-5">
          <div className="mt-sm-5 py-sm-5"></div>
          <div>
            <img
              className="w-100 py-5 mt-sm-5 map"
              src={Map_Img}
              alt="Map_Img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurLocations;
