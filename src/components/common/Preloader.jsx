import React from "react";
import preloadergif from "../../assets/images/gif/1f4555564e5c44214b475148585dc537.gif";

const Preloader = () => {
  setTimeout(() => {
    document.querySelector(".none").style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }, 2500);
  return (
    <>
      <div className="none">
        <div className="bg_img_main text-center d-flex flex-column align-items-center justify-content-center start-0 top-0  w-100 z_111111 min-vh-100 position-fixed ">
          <div className="animation_preloader d-flex justify-content-center">
            <div id="loop" class="center"></div>
            <div id="bike-wrapper" class="center">
              <div id="bike" class="centerBike"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
