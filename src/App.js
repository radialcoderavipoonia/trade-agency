import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage } from "./Pages/HomePage";
import { ProductPage  } from "./Pages/ProductPage";
import { Route, Routes } from "react-router-dom";
import BackToTop from "./components/common/BackToTop";
import Preloader from "./components/common/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init();
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
