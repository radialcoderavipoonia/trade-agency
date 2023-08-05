import React from 'react'
import newslettericon from "../../assets/images/png/newsletter_icon.png"

const NewsLetter = () => {
  return (
    <>
      <div className="mw_750 me-auto ms-auto">
        <h2 className="ff_rubik fs_2x4l fw-medium color_whitefe mb-0 text-center pb-1">
          Newsletter
        </h2>
        <p className="pt-2 ff_rubik fs_1x4l fw-normal mb-0 color_gray9a mw_457 ms-auto me-auto text-center">
          Be the first one to know about discounts, offers and events weekly in
          your mailbox. Unsubscribe whenever you like with one click.
        </p>
        <div className="newletter_box mx-2 mt_32 br_10">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center placeholder">
              <img src={newslettericon} alt="newsletter icon" />
              <input
                type="email"
                placeholder="Enter your email"
                className="pl_12 ff_inter fs_1x6l fw-normal bg-transparent border-0 outline_none increased-width"
              />
            </div>
            <button className="sumbit_button_placeholder border-0 ff_rubik fs_1x4l fw-medium text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;