import React, { useState } from "react";
import { Container } from "react-bootstrap";
import BackToTopimg from "../../assets/images/svg/backtotop.svg";
const BackToTop = () => {
  const [first, setfirst] = useState(true);
  const onTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <section>
      <Container>
        <div className="z_10 position-relative">
          <img
            height={60}
            onClick={() => onTop()}
            className={
              first
                ? "d-none backtotop_btn position-fixed bottom-0 end-0 me-4 mb-4"
                : "d-block backtotop_btn position-fixed bottom-0 end-0 me-4 mb-4"
            }
            src={BackToTopimg}
            alt="image"
          />
        </div>
      </Container>
    </section>
  );
};

export default BackToTop;
