import React from "react";

const Preloader = () => {
  setTimeout(() => {
    document.querySelector(".none").style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }, 2500);
  return (
    <>
      <section className="bg_img_main">
        <div className="none">
          <div className="bg_img_main text-center d-flex flex-column align-items-center justify-content-center start-0 top-0  w-100 z_111111 min-vh-100 position-fixed ">
            <div className="animation_preloader d-flex justify-content-center">
              <p className="ff_rubik fs_4xl fw-bold text-white mb-0">
                Web Design
              </p>
            </div>
            <div className="w-50 border_preloader rounded-pill overflow-hidden mt-4">
              <div className="w_60 h_30 bg_gradient animation_preloader_2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preloader;
