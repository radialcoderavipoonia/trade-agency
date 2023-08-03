import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GameHosting from './components/GameHosting';
import OurLocations from './components/OurLocations';
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <GameHosting />
      <OurLocations/>
      <Hero />
    </>
  );
}

export default App;
