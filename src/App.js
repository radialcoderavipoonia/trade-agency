import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage } from "./Pages/HomePage";
import { ProductPage  } from "./Pages/ProductPage";
import { Route, Routes } from "react-router-dom";
import BackToTop from "./components/common/BackToTop";
import Preloader from "./components/common/Preloader";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1200,
    });
  }, []);
  return (
    <>
      <BackToTop />
      <Preloader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
