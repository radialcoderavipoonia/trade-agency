import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PricingPlan from './components/PricingPlan';
import GameHosting from "./components/GameHosting";
import { Hero } from "./components/Hero";
import Testimonials from "./components/Testimonials";
import BasicFeatures from "./components/BasicFeatures";
import OurLocations from "./components/OurLocations";
import Newsletter from "./components/Newsletter";
function App() {
  return (
    <>
      {/* <Hero /> */}
      {/* <PricingPlan/> */}
      <GameHosting />
      <Newsletter/>
      {/* <OurLocations /> */}
      {/* <PricingPlan /> */}
      {/* <GameHosting /> */}
      {/* <Testimonials /> */}
      {/* <BasicFeatures /> */}
    </>
  );
}

export default App;
