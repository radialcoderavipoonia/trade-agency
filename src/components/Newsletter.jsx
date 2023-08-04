import React from "react";
import email_input from "../assets/images/svg/Icon.svg";
const Newsletter = () => {
  return (
    <>
      <section>
        <div className="custom_container">
          <div className="text-center">
            <h2 className="ff_rubik fw-medium text-white fs_2x4l mb-0">
              Newsletter
            </h2>
            <p className=" ff_rubik fw-normal fs_1x4l color_gray9a mb-0 pt-3">
              Be the first one to know about discounts, offers and events weekly
              in <span className="d-lg-block"></span> your mailbox. Unsubscribe
              whenever you like with one click.
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <img src={email_input} alt="email_input" />
              <input
                type="text"
                className="ff_inter fw-normal fs_1x6l color_gray9a border-0 bg-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
