import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/header/Header.jsx";
import Footer from "./pages/footer/Footer.jsx";
import Main from "./pages/main/Main.jsx";
import Shop from "./pages/shop/Shop.jsx";
import Restaurant from "./pages/restaurant/Restaurant.jsx";
import Map from "./pages/map/Map.jsx";
import Rent from "./pages/rent/Rent.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/map" element={<Map />} />
          <Route path="/rent" element={<Rent />} />
        
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
