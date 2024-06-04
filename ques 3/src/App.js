import React from "react";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import AllProductPage from "./Pages/AllProductPage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProductPage />} />
        <Route path="/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
