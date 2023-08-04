import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { features } from './Helper';

const BasicFeatures = () => {
  return (
    <>
      <div className="custom_container">
        <p className="mw_730 text-center mb-0 ff_rubik fs_4xl fw-bold color_whitefc ms-auto me-auto lh_normal">
          YOU SHOULDN'T HAVE TO PAY EXTRA FOR
          <span className="color_blue0d6"> BASIC FEATURES</span>
        </p>
        <p className='pt_24 mw_730 ms-auto me-auto text-center lh_normal mb-0 ff_rubik fs_1x8l fw-normal color_whitefc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus
          facilisi donec egestas egestas pellentesque magna.
              </p>
              <Row className='pt_28'>
                  {features.map((basic) => {
                      return (
                          <Col lg={4} key={basic.id} className='pt_15'>
                              <div className='feature_card_box'>
                                  <div className='d-flex align-items-center justify-content-between'>
                                      <div className='d-flex align-items-center'>
                                        <img src={basic.featurescardimg} alt="features card images" />  
                                      </div>
                                  </div>
                              </div>
                          </Col>
                      );
                  })}
              </Row>
      </div>
    </>
  );
}

export default BasicFeatures;