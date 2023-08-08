import React from 'react'
import newslettericon from "../../assets/images/webp/newsletter_icon.webp"

const NewsLetter = () => {
  return (
    <>
      <div className="mw_750 my-sm-5 my-4 pt_32 me-auto ms-auto">
        <h2 className="ff_rubik fs_2x4l fw-medium mt-lg-5 color_whitefe mb-0 text-center pb-1">
          Newsletter
        </h2>
        <p className="pt-2 ff_rubik fs_1x4l fw-normal mb-0 color_gray9a mw_457 ms-auto me-auto text-center">
          Be the first one to know about discounts, offers and events weekly in
          your mailbox. Unsubscribe whenever you like with one click.
        </p>
        <div className="newletter_box mx-2 mt_32 br_10">
          <div className="d-flex justify-content-between align-items-center">
            <form className="d-flex align-items-center placeholder">
              <div>
                <img src={newslettericon} alt="newsletter icon" />
                <input
                  type="Email"
                  placeholder="Enter your email"
                  required
                  className="pl_12 ff_inter fs_1x6l fw-normal bg-transparent border-0 outline_none increased-width"
                />
              </div>
              <button
                type="sumbit"
                className="sumbit_button_placeholder ff_rubik fs_1x4l fw-medium text-white bg_popular_button border_1_transparent"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;