import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
