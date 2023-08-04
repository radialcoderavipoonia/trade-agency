import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PricingPlan from "./components/PricingPlan";
// import MyNav from './components/MyNav'
import GameHosting from "./components/GameHosting";
import OurLocations from "./components/OurLocations";
import { Hero } from "./components/Hero";
import PricingPlan from './components/PricingPlan';
import Testimonials from "./components/Testimonials";
// import MyNav from './components/MyNav'
// import GameHosting from './components/GameHosting';
// import OurLocations from './components/OurLocations';
// import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      {/* <MyNav /> */}
      <Hero />
      <PricingPlan />
      <GameHosting />
      <OurLocations />
      <PricingPlan/>
      {/* <GameHosting /> */}
      {/* <OurLocations/> */}
      {/* <Hero /> */}
      <Testimonials/>
    </>
  );
}

export default App;
