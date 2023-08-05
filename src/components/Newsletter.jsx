import React from "react";
import email_input from "../assets/images/svg/Icon.svg";
const Newsletter = () => {
  return (
    <>
      <section className="py-5">
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
            {/* <form className=" email_input_parent mx-auto mt-4 d-flex align-items-center justify-content-between">
              <div>
                <label htmlFor="email">
                  <img
                    className="ps-4 ms-2 cursor_pointer"
                    src={email_input}
                    alt="email_input"
                  />
                  <input
                    type="text"
                    className="ff_inter fw-normal fs_1x6l color_gray9a border-0 mb-0 ms-2 ps-1 email_input"
                    placeholder="Enter your email"
                    name="email"
                  />
                </label>
              </div>
              <button className="fw_1x4l ff_rubik fw-medium text-white px-5 py-3 border-0 btn_clr_newsletter me-2">
                Submit
              </button>
            </form> */}
          </div>
          <div className="email_input_parent mx-auto mt-5 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center w-100">
              <span>
                <img
                  className="ps-4 ms-2 cursor_pointer"
                  src={email_input}
                  alt="email_input"
                />
              </span>
              <span>
                <input
                  type="text"
                  className="ff_inter fw-normal fs_1x6l color_gray9a border-0 mb-0 ms-2 ps-1 email_input w-100"
                  placeholder="Enter your email"
                />
              </span>
            </div>
            <div>
              <button className="fw_1x4l ff_rubik fw-medium text-white px-5 py-3 border-0 btn_clr_newsletter me-2 d-inline">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
