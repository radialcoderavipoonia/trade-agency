import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicFeatures from "./components/BasicFeatures";
import ModPack from "./components/ModPack";
import Testimonials from "./components/Testimonials";
import PricingPlan from "./components/PricingPlan";
import Newsletter from "./components/Newsletter";
// import MyNav from "./components/MyNav";
import GameHosting from './components/GameHosting';
import OurLocations from "./components/OurLocations";
import MyFooter from "./components/MyFooter";
// import { Hero } from "./components/Hero";

// function App() {
  // return (
  //   <>
  //     {/* <MyNav /> */}
  //     {/* <PricingPlan /> */}
  //     <GameHosting />
  //     <OurLocations />
  //     {/* <PricingPlan /> */}
  //     {/* <GameHosting /> */}
  //     {/* <Testimonials /> */}
  //     {/* <BasicFeatures />/ */}
  //     {/* <Hero /> */}
  //     {/* <Testimonials/> */}
  //     {/* <BasicFeatures /> */}
  //     {/* <ModPack /> */}
  //     <Newsletter />
  //     <MyFooter/>
import { HomePage } from "./Pages/HomePage";
import { ProductPage } from "./Pages/ProductPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
