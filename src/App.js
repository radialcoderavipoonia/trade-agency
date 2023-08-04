import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import PricingPlan from './components/PricingPlan';
import MyNav from './components/MyNav'
import GameHosting from './components/GameHosting';
import OurLocations from './components/OurLocations';
// import { Hero } from "./components/Hero";

// import BasicFeatures from "./components/BasicFeatures";
// import Testimonials from "./components/Testimonials";
// import PricingPlan from "./components/PricingPlan";
// import MyNav from "./components/MyNav";
// import GameHosting from './components/GameHosting';
// import OurLocations from "./components/OurLocations";
// import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <MyNav />
      {/* <PricingPlan/> */}
      <GameHosting />
      <OurLocations/>
      {/* <Hero /> */}
      {/* <MyNav /> */}
      {/* <PricingPlan /> */}
      {/* <GameHosting /> */}
      {/* <OurLocations /> */}
      {/* <Hero /> */}
      {/* <Testimonials/> */}
      {/* <BasicFeatures/> */}
    </>
  );
}

export default App;
