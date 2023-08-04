import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PricingPlan from './components/PricingPlan';
import GameHosting from "./components/GameHosting";
import { Hero } from "./components/Hero";
import Testimonials from "./components/Testimonials";
import BasicFeatures from "./components/BasicFeatures";
import ModPack from "./components/ModPack";
import Testimonials from "./components/Testimonials";
import PricingPlan from "./components/PricingPlan";
// import MyNav from "./components/MyNav";
// import GameHosting from './components/GameHosting';
// import OurLocations from "./components/OurLocations";
// import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      {/* <MyNav /> */}
      <PricingPlan />
      {/* <GameHosting /> */}
      {/* <OurLocations /> */}
      {/* <Hero /> */}
      <Testimonials/>
      <BasicFeatures />
      <ModPack/>
    </>
  );
}

export default App;
