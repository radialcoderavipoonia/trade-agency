import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import PricingPlan from './components/PricingPlan';
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
import GameHosting from './components/GameHosting';
import OurLocations from './components/OurLocations';
// import { Hero } from "./components/Hero";


function App() {
  return (
    <>
      {/* <MyNav /> */}
      {/* <PricingPlan/> */}
      <GameHosting />
      <OurLocations />
      <PricingPlan/>
      {/* <GameHosting /> */}
      {/* <OurLocations/> */}
      {/* <Hero /> */}
      <Testimonials/>
      <OurLocations/>
      {/* <Hero /> */}
     
    </>
  );
}

export default App;
