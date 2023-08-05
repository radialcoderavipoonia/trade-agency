import React from "react";
import MyNav from "../common/MyNav";
import host from "../../assets/images/webp/gravelHost.webp";
import { Container } from "react-bootstrap";
export const ProductNav = () => {
  return (
    <div className="product_nav">
      <MyNav />
      <Container className=" custom_container">
        <div className=" d-flex justify-content-start align-items-center">
          <span>
            <img
              src={host}
              alt="host"
              className="w-100 mx_500 product_hero_img"
            />
          </span>
        </div>
      </Container>
    </div>
  );
};